import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, SafeAreaView, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import AnimatedLottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';

import MenuItems from '../components/restaurantDetails/MenuItems';
import styles from '../styles';

/**
 * @brief Component for displaying order completion confirmation and details.
 * @returns {JSX.Element} OrderCompleted screen view.
 */
const OrderCompleted = () => {
    // Extract selected items and restaurant name from the cart reducer state
    const {
        selectedItems: { items, restaurantName }
    } = useSelector(state => state.cartReducer);

    // Set initial state for last order details
    const [lastOrder, setLastOrder] = useState({ items: [] });
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Calculate the total price of the order
    const total = items
        .map(item => Number(item.price.replace('$', '')))
        .reduce((prev, curr) => prev + curr, 0);

    // Format the total price as USD currency
    const totalUSD = total.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    // Fetch the details of the last order from Firestore database
    useEffect(() => {
        const fetchLastOrder = async () => {
            try {
                const snapshot = await firestore()
                    .collection('orders')
                    .orderBy('createdAt', 'desc')
                    .limit(1)
                    .get();

                if (snapshot.empty) {
                    throw new Error('No orders found');
                }

                const data = snapshot.docs[0].data();

                if (!data || !data.items) {
                    throw new Error('No order details found');
                }

                const items = Object.entries(data.items);

                if (items.length === 0) {
                    throw new Error('No items found in the last order');
                }

                setLastOrder({ items });
            } catch (errors) {
                setError(errors.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLastOrder();
    }, []);

    // Render the order completion confirmation and details
    return (
        <SafeAreaView style={styles.orderCompletedContainer}>
            <View style={styles.orderCompletedContent}>
                <AnimatedLottieView
                    style={styles.orderCompletedCheckMark}
                    source={require('../assets/animations/check-mark.json')}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                {error ? (
                    <Text style={styles.orderCompletedError}>{error}</Text>
                ) : (
                    <Text style={styles.orderCompletedConfirmation}>
                        {`Your order at ${restaurantName} has been placed for ${totalUSD}`}
                    </Text>
                )}
                {isLoading ? (
                    <Text>Loading...</Text>
                ) : lastOrder.items.length === 0 ? (
                    <Text style={styles.orderCompletedError}>No items found in the last order</Text>
                ) : (
                    <ScrollView>
                        <MenuItems foods={lastOrder.items} hideCheckbox marginLeft={10} />
                        <AnimatedLottieView
                            style={styles.orderCompletedCooking}
                            source={require('../assets/animations/cooking.json')}
                            autoPlay
                            speed={0.5}
                        />
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

OrderCompleted.propTypes = {
    // No props are being passed to this component
};

export default OrderCompleted;
