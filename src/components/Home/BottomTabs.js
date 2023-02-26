import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import styles from '../../../styles';

const ICONS = [
    { name: 'home', text: 'Home' },
    { name: 'search', text: 'Account' },
    { name: 'shopping-bag', text: 'Register' },
    { name: 'receipt', text: 'Login' },
    { name: 'user', text: 'Account' }
];

/**
@brief The BottomTabs component represents the bottom navigation bar of the application.
@param {Object} navigation - A navigation prop that is used to navigate between different pages of the application.
@return {JSX.Element} A JSX element that represents the BottomTabs component.
*/
export function BottomTabs() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.bottomTabsIconContainer}
            onPress={() => navigation.navigate(item.text)}>
            <View style={styles.bottomTabsIconWrapper}>
                <FontAwesome5 name={item.name} size={25} style={styles.bottomTabsIcon} />
                <Text style={styles.bottomTabsText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.bottomTabsView}>
            <FlatList
                data={ICONS}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
