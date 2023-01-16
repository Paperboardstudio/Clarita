import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from '@rneui/themed'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function RestaurantDetails({route, navigation}) {
  return (
    <View>
      <About route ={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restautantName = {route.params.name}/>
      <ViewCart navigation = {navigation} restautantName = {route.params.name}/>
    </View>
  )
}