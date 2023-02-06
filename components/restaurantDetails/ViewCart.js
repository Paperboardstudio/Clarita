import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'
import firestore from '@react-native-firebase/firestore';
import AnimatedLottieView from 'lottie-react-native'
import auth from '@react-native-firebase/auth';

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

    auth().onAuthStateChanged((user) => {
        if (user) {
            console.log('User email: ', user.email);
        }
    });

    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize: 15,
            marginBottom: 10,
        },
        orderButton: {
            marginTop: 20,
            backgroundColor: "black",
            alignItems: "center",
            padding: 13,
            borderRadius: 30,
            width: 300,
            position: "relative",
        },
        orderButtonText: {
            position: "absolute",
            right: 20,
            color: "white",
            fontSize: 15,
            top: 17,
        },
        orderButtonView: {
            flexDirection: "row",
            justifyContent: "center"
        },

        checkoutButton: {
            color: "white",
            fontSize: 20
        },
        viewcartButtonView:{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            bottom: 40,
            zIndex: 999,
        },
        viewcartButton:{
            marginTop: 20,
            backgroundColor: 'black',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: "flex-end",
            padding: 8,
            borderRadius: 30,
            height: 40,
            width: 250,
            position: 'relative',
        }
        
    })

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName.restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View style={styles.orderButtonView}>
                            <TouchableOpacity
                                style={styles.orderButton}
                                onPress={() => {
                                    addOrderToFireBase()
                                    setModalVisible(false)
                                }}
                            >
                                <Text style={styles.checkoutButton}>Checkout</Text>
                                <Text
                                    style={styles.orderButtonText}
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
                <View
                    style={styles.viewcartButtonView}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}
                    >
                        <TouchableOpacity
                            style={styles.viewcartButton}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 18, marginRight: 30 }}>
                                View Cart</Text>
                            <Text style={{ color: "white", fontSize: 18 }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <AnimatedLottieView
                        style={{ height: 200 }}
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