import { View, Text, Image } from 'react-native'
import React from 'react'

import styles from '../../styles'

export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params

    const formattedCategories = categories.map((categories) => categories).join(" • ")

    const description = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantTitle name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={styles.aboutRestaurantImage}
    />
)

const RestaurantTitle = (props) => (
    <Text style={styles.aboutRestaurantTitle}>
        {props.name}
    </Text>
)

const RestaurantDescription = (props) => (
    <Text style={styles.aboutRestaurantDescription}>
        {props.description}
    </Text>
)
