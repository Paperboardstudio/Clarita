import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'


const foods = [
	{
		title: "Tandoori Chicken",
		description:
			"Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
		price: "$19.20",
		image: "https://www.foodandwine.com/thmb/3Ng4S6sH9MQEj5Ho1cBkGw2alJ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-tandoori-chicken-FT-RECIPE1021-a61b1a767cb74c3c976c85799a378968.jpg",
	},
	{
		title: "Chilaquiles",
		description:
			"Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
		price: "$14.50",
		image:
			"https://i.ytimg.com/vi/Q6fPc31xsjs/maxresdefault.jpg",
	},
	{
		title: "Chicken Caesar Salad",
		description:
			"One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
		price: "$21.50",
		image:
			"https://live.staticflickr.com/65535/49989397386_eb00d1c314_b.jpg",
	},
	{
		title: "Lasagna",
		description: "With butter lettuce, tomato and sauce bechamel",
		price: "$13.50",
		image:
			"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
	},
]

/**
 * View error need to fix
 * Screen is bigger than it shows
 * ViewCart button broken
 * @param {*} restaurantName 
 * @returns 
 */
export default function MenuItems(restaurantName) {

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

	const cartItems = useSelector(state => state.cartReducer.selectedItems.items)

	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title == food.title))

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemStyle}>
						<BouncyCheckbox
							iconStyle={{
								marginLeft: -15,
								borderColor: "lightgray",
								//borderRadius: 0 
							}}
							fillColor="green"
							isChecked={isFoodInCart(food, cartItems)}
							onPress={(checkboxValue) => selectItem(food, checkboxValue)}
						/>
						<FoodInfo food={food} />
						<FoodImage food={food} />
					</View>
					<Divider
						width={0.5}
						orientation="vertical"
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
			<View style={{
				padding: 150
			 }}></View>
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
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
)

const FoodImage = (props) => (
	<View>
		<Image source={{ uri: props.food.image }}
			style={{
				width: 100,
				height: 100,
				borderRadius: 8
			}}
		/>
	</View>
)