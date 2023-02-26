import React, { useState, useCallback, Alert } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import AnimatedLottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';

import styles from '../../../styles';
import { OrderItem } from '../../utils/paths';

const CURRENCY = 'USD';
const CHECKOUT_DELAY = 2500;

/**
 * @function ViewCart
 * @description Component that displays the user's cart, allows them to view it, and checkout.
 * @param {object} navigation - Object used for navigation between screens.
 * @returns {JSX.Element} - Returns JSX code that renders a ViewCart component.
 */
export function ViewCart({ navigation }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { items, restaurantName } = useSelector(({ cartReducer }) => cartReducer.selectedItems);

    const { total, currency } = items.reduce(
        ({ total, currency }, { price }) => {
            const itemCurrency = price.slice(0, 1);
            const itemTotal = Number(price.replace(itemCurrency, ''));
            return { total: total + itemTotal, currency: itemCurrency };
        },
        { total: 0, currency: null }
    );

    const totalUSD = total.toLocaleString('en', { style: 'currency', currency: CURRENCY });

    const handleCheckout = useCallback(async () => {
        setIsLoading(true);
        try {
            await firestore().collection('orders').add({
                items,
                restaurantName,
                currency,
                createdAt: firestore.FieldValue.serverTimestamp()
            });
            setIsModalVisible(false);
            navigation.navigate('OrderCompleted');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [items, restaurantName, currency, navigation]);

    const renderCheckoutModal = () => (
        <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.modalRestaurantName}>{restaurantName}</Text>
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
                            handleCheckout();
                            setIsModalVisible(false);
                        }}>
                        <Text style={styles.checkoutText}>Checkout</Text>
                        <Text style={styles.checkoutPrice}>{total ? totalUSD : ''}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <>
            <Modal
                animationType="slide"
                visible={isModalVisible}
                transparent={true}
                onRequestClose={() => setIsModalVisible(false)}>
                {renderCheckoutModal()}
            </Modal>
            {total ? (
                <View style={styles.modalViewCartContainer}>
                    <View style={styles.modalViewCartView}>
                        <TouchableOpacity
                            style={styles.modalViewCartButton}
                            onPress={() => setIsModalVisible(true)}>
                            <Text style={styles.modalViewCartText}>View Cart</Text>
                            <Text style={styles.modalViewCartPriceText}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
            {isLoading ? (
                <View style={styles.modalLoadingContainer}>
                    <AnimatedLottieView
                        style={styles.modalAnimation}
                        source={require('../../assets/animations/scanner.json')}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : null}
        </>
    );
}
