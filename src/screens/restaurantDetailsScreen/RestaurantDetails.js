import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import firestore from '@react-native-firebase/firestore';
import { Divider } from '@rneui/themed';

import { About } from '../../utils/paths';
import { MenuItems } from '../../utils/paths';
import { ViewCart } from '../../utils/paths';

/**
 * @brief RestaurantDetails component that displays restaurant details, menu items, and a view cart button.
 * @param {object} route - The route object passed from the previous screen, containing details about the restaurant.
 * @param {object} navigation - The navigation object used for navigating between screens.
 * @return {JSX.Element} A view containing the About, MenuItems, and ViewCart components.
 */
export function RestaurantDetails({ route, navigation }) {
    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        async function fetchMenuData() {
            try {
                const documentSnapshot = await firestore()
                    .collection('menus')
                    .doc('clarita-menu')
                    .get();
                if (documentSnapshot.exists) {
                    setMenuData(Object.entries(documentSnapshot.data()));
                } else {
                    console.warn('Document does not exist!');
                }
            } catch (error) {
                console.error('Error getting document:', error);
            }
        }
        fetchMenuData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <About route={route} />
            <Divider style={{ marginVertical: 20 }} width={1.8} />
            <MenuItems foods={menuData} restaurantName={route.params.name} />
            <ViewCart navigation={navigation} />
        </View>
    );
}

RestaurantDetails.propTypes = {
    route: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string
        })
    }),
    navigation: PropTypes.object
};
