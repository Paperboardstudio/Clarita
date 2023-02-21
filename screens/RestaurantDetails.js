import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Divider } from '@rneui/themed'

import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'
import firestore from '@react-native-firebase/firestore';

/**
* 
* @brief RestaurantDetails component that displays restaurant details, menu items, and a view cart button.
* @param {object} route - The route object passed from the previous screen.
* @param {object} navigation - The navigation object used for navigating between screens.
* @return {JSX.Element} A view containing the About, MenuItems, and ViewCart components.
*/
export default function RestaurantDetails({ route, navigation }) {
	const [menuData, setMenuData] = useState([]);

	useEffect(() => {
		firestore()
			.collection('menus')
			.doc('clarita-menu')
			.get()
			.then(documentSnapshot => {
				if (documentSnapshot.exists) {
					setMenuData(Object.entries(documentSnapshot.data()));
				}
			});
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={menuData} />
			<ViewCart navigation={navigation} />
		</View>
	);
}