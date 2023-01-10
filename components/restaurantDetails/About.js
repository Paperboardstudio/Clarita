import { View, Text, Image } from 'react-native'
import React from 'react'

const image =
  "https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe.jpg"

const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai - Comfort - Food - 🎫 - 4 ⭐ (291+)"

export default function About() {
  return (
    <View>
      {<RestaurantImage image={image} />}
      {<RestaurantTitle title={title} />}
      {<RestaurantDescription description={description} />}
    </View>
  )
}

const RestaurantImage = (props) => (
  <Image
    source={{
      uri: props.image
    }}
    style={{
      width: "100%",
      height: 180
    }}
  />
)

const RestaurantTitle = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.title}
  </Text>
)

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5
    }}
  >
    {props.description}
  </Text>
)