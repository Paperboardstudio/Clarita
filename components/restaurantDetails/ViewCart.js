import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import firestore from '@react-native-firebase/firestore';
import AnimatedLottieView from 'lottie-react-native'

import styles from '../../styles'

import OrderItem from './OrderItem'

export default function ViewCart({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0)

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    })

    const addOrderToFireBase = () => {
        setLoading(true)
        firestore().collection("orders")
            .add({
                items: items,
                restaurantName: restaurantName,
                createdAt: firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                setTimeout(() => {
                    setLoading(false)
                    navigation.navigate("OrderCompleted");
                }, 2500);
            });
    };

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.modalRestaurantName}>{restaurantName.restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.modalSubtotalContainer}>
                            <Text style={styles.modalSubtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={styles.checkoutButtonView}>
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                onPress={() => {
                                    addOrderToFireBase()
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={styles.checkoutText}>Checkout</Text>
                                <Text
                                    style={styles.checkoutPrice}
                                >
                                    {total ? totalUSD : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={styles.modalViewCartContainer}>
                    <View
                        style={styles.modalViewCartView}
                    >
                        <TouchableOpacity
                            style={styles.modalViewCartButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={styles.modalViewCartText}>View Cart</Text>
                            <Text style={styles.modalViewCartPriceText}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ? (
                <View
                    style={styles.modalLoadingContainer}
                >
                    <AnimatedLottieView
                        style={styles.modalAnimation}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    )
}