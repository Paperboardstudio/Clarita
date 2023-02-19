import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styles from "../../styles";

export default function OrderItem({ item }) {
	const { name, price } = item
	return (
		<View style={styles.orderItemContainer}>
			<Text style={styles.orderItemName}>{name}</Text>
			<Text style={styles.orderItemPrice}>{price}</Text>
		</View>
	)
}
