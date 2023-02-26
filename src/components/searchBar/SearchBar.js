import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { styles } from './styles';

/**
 * CURRENTLY UNUSED (POSSIBLY WILL BE DELETED)
 * Displays a search bar
 * @returns a search bar that uses GooglePlaces to find restaurants in a area
 */
export function SearchBar() {
    return (
        <View style={styles.searchBarContainer}>
            <GooglePlacesAutocomplete
                placeholder="Search"
                styles={styles.searchStyles}
                renderLeftButton={() => (
                    <View style={styles.searchBarLeftButtonContainer}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.searchBarRightButtonContainer}>
                        <AntDesign name="clockcircle" size={11} style={styles.searchBarClockIcon} />
                        <Text style={styles.searchBarRightButtonText}>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}
