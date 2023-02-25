import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../../styles';

export const localRestaurants = [
    {
        name: 'Clarita',
        image_url:
            'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
        categories: ['Spicy', 'Delicious', 'Latin'],
        price: '$$',
        reviews: 1244,
        rating: 4.5
    }
];
/**

Renders a list of restaurants
@function
@param {Object} navigation - Navigation prop object
@param {Array.<Object>} props.restaurantData - An array of restaurant data objects
@returns {JSX.Element} - Restaurant list component
*/
function RestaurantItems({ navigation, ...props }) {
    return (
        <>
            {props.restaurantData.map((restaurant, index) => (
                <TouchableOpacity
                    key={index}
                    activeOpacity={1}
                    style={styles.restaurantItemsContainer}
                    onPress={() =>
                        navigation.navigate('RestaurantDetails', {
                            name: restaurant.name,
                            image: restaurant.image_url,
                            categories: restaurant.categories,
                            price: restaurant.price,
                            reviews: restaurant.reviews,
                            rating: restaurant.rating
                        })
                    }>
                    <View style={styles.restaurantItemsInfoContainer}>
                        <RestaurantImage image={restaurant.image_url} />
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
                    </View>
                </TouchableOpacity>
            ))}
        </>
    );
}

const RestaurantImage = props => (
    <>
        <Image source={{ uri: props.image }} style={styles.restaurantItemsImage} />
        <TouchableOpacity style={styles.restaurantItemsFavoriteButton}>
            <MaterialCommunityIcons name="heart-outline" size={25} color="#fffff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = props => (
    <View style={styles.restaurantItemsInfo}>
        <View>
            <Text style={styles.restaurantItemsName}>{props.name}</Text>
            <Text style={styles.restaurantItemsDeliveryTime}>30-45 - mins</Text>
        </View>
        <View style={styles.restaurantItemsRating}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);

export default RestaurantItems;
