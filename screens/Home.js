import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import { Divider } from '@rneui/themed'
import BottomTabs from '../components/home/BottomTabs'

const YELP_API_KEY = "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx"

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants)

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  // This is used for the Google Places Search API
  // We are not using it and is to be deleted
  /*useEffect(()=> {
    getRestaurantsFromYelp();
  }, []);*/

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1}/>
        <BottomTabs />
    </SafeAreaView>
  )
}