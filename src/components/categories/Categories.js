import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import { styles } from './styles';

/**
 * CURRENTLY UNUSED (POSSIBLY WILL BE DELETED)
 * Displays icons at the top
 * @param {*}
 * @returns Clickable icons when imported with different icons
 */

export function Categories() {
    return (
        <View style={styles.categoriesView}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image source={item.image} style={styles.categoriesImage} />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const items = [
    {
        image: require('../../assets/images/shopping-bag.png'),
        text: 'Pick-up'
    },
    {
        image: require('../../assets/images/soft-drink.png'),
        text: 'Soft Drinks'
    },
    {
        image: require('../../assets/images/bread.png'),
        text: 'Bakery Items'
    },
    {
        image: require('../../assets/images/fast-food.png'),
        text: 'Fast Foods'
    },
    {
        image: require('../../assets/images/deals.png'),
        text: 'Deals'
    },
    {
        image: require('../../assets/images/coffee.png'),
        text: 'Coffee & Tea'
    },
    {
        image: require('../../assets/images/desserts.png'),
        text: 'Desserts'
    }
];
