import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../../../styles';

/**
 * @brief Renders a single order item with its name and price.
 * @param item The item object containing the name and price.
 * @return The rendered OrderItem component.
 */
export function OrderItem({ item }) {
    const { name, price } = item;
    return (
        <View style={styles.orderItemContainer}>
            <Text style={styles.orderItemName}>{name}</Text>
            <Text style={styles.orderItemPrice}>{price}</Text>
        </View>
    );
}
