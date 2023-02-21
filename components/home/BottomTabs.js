import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import styles from '../../styles'

/**

@brief The BottomTabs component represents the bottom navigation bar of the application.
@param {Object} navigation - A navigation prop that is used to navigate between different pages of the application.
@return {JSX.Element} A JSX element that represents the BottomTabs component.
*/
export default function BottomTabs({ navigation }) {
    return (
        <View
            style={styles.bottonTabsView}
        >
            {<Icon icon="home" text="Home" />}
            {<Icon icon="search" text="Browse" />}
            {<Icon icon="shopping-bag" text="Grocery" />}
            {<Icon icon="receipt" text="Orders" />}
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("UserSelect")
                }}>
                {<Icon icon="user" text="Account" />}
            </TouchableOpacity>
        </View>
    )
}

const Icon = (props) => (
    <View>
        <FontAwesome5 name={props.icon} size={25}
            style={styles.bottomTabsIcons}
        />
        <Text>{props.text}</Text>
    </View>
)