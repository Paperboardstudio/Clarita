import React from 'react';
import { View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import styles from '../../styles';

export default function SearchBar() {
  return (
    <View style={styles.searchBarContainer}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={searchStyles}
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

//this has not been added to styles.js
const searchStyles = StyleSheet.create({
  textInput: {
    backgroundColor: "#eee",
    borderRadius: 20,
    fontWeight: "700",
    marginTop: 7,
  },
  textInputContainer: {
    backgroundColor: "#eee",
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
});
