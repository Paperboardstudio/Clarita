import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

import styles from '../../styles'

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