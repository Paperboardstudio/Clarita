import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

export default function MenuItems({ restaurantName, foods, hideCheckbox, marginLeft }) {

	const dispatch = useDispatch()

	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: "ADD_TO_CART",
			payload: {
				...item,
				restaurantName: restaurantName,
				checkboxValue: checkboxValue
			}
		})

	const cartItems = useSelector(
		state => state.cartReducer.selectedItems.items)

	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.name == food.name))

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map(([key, value], index) =>(
					<View key={index}>
						<View style={styles.menuItemStyle}>
							{hideCheckbox ? (
								<></>
							) : (
								<BouncyCheckbox
									iconStyle={{
										marginLeft: -15,
										borderColor: "lightgray",
										//borderRadius: 0 
									}}
									fillColor="green"
									isChecked={isFoodInCart(value, cartItems)}
									onPress={(checkboxValue) => selectItem(value, checkboxValue)}
								/>
							)}
							<FoodInfo food={value} />
							<FoodImage food={value} marginLeft={marginLeft ? marginLeft : 0} />
						</View>
						<Divider
							width={0.5}
							orientation="vertical"
							style={{ marginHorizontal: 20 }}
						/>
					</View>
				)
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},

})

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{props.food.name}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
)

const FoodImage = ({ marginLeft, ...props }) => (
	<View>
		<Image source={{ uri: props.food.image }}
			style={{
				width: 100,
				height: 100,
				borderRadius: 8,
				marginLeft: marginLeft,
			}}
		/>
	</View>
)