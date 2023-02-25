import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Divider } from '@rneui/themed';

import BottomTabs from '../components/Home/BottomTabs';
import RestaurantItems from '../components/Home/RestaurantItems';
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
 * @brief Home component for displaying restaurant items and bottom tabs navigation
 * @param {Object} navigation - Navigation object for React Navigation
 * @return {JSX.Element} Home screen view
 */
const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}>
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs navigation={navigation} />
        </SafeAreaView>
    );
};

Home.propTypes = {
    navigation: PropTypes.object
};

export default Home;
