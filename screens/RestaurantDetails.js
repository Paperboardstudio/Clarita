import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'
import auth from '@react-native-firebase/auth';

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
export default function RestaurantDetails({ route, navigation }) {
	auth().onAuthStateChanged((user) => {
		if (user) {
			console.log('User email: ', user.email);
		}
	});
	return (
		<View style={{ flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={foods} />
			<ViewCart navigation={navigation} />
		</View>
	)
}