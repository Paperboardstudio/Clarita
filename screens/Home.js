import { SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from '@rneui/themed'
import BottomTabs from '../components/home/BottomTabs'

export default function Home({ navigation }) {
	const [restaurantData, setRestaurantData] = useState(localRestaurants)

	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<RestaurantItems
					restaurantData={restaurantData}
					navigation={navigation} />
			</ScrollView>
			<Divider width={1} />
			<BottomTabs navigation={navigation} />
		</SafeAreaView>
	)
}