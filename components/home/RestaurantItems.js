import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
    {
        name: "Clarita",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Spicy", "Delicious", "Latin"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
];

export default function RestaurantItems({ navigation, ...props }) {

    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={{ marginBottom: 10 }}
                    onPress={() => navigation.navigate("RestaurantDetails",
                        {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            categories: restaurant.categories,
                            price: restaurant.price,
                            reviews: restaurant.reviews,
                            rating: restaurant.rating,
                        }
                    )}>
                    <View
                        style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo
                            name={restaurant.name}
                            rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

const RestaurantImage = (props) => (
    <>
        <Image source={{
            uri: props.image
        }}
            style={{ width: "100%", height: 180 }}
        />
        <TouchableOpacity style={{ position: 'absolute', right: 20, top: 20 }}>
            <MaterialCommunityIcons name='heart-outline' size={25} color="#fffff" />
        </TouchableOpacity>
    </>
)

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10
    }}>
        <View>
            <Text style={{
                fontSize: 15,
                fontWeight: "bold"
            }}>{props.name}</Text>
            <Text style={{
                fontSize: 13,
                color: "gray"
            }}>30-45 - mins</Text>
        </View>
        <View style={{
            backgroundColor: "#eee",
            height: 30, width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
)
