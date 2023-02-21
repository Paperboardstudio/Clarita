import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import auth from '@react-native-firebase/auth';

/**
* 
* @brief React Native functional component for displaying account information and handling user authentication.
* This component uses Firebase authentication to handle user sign-in/sign-out and displays the user's email address once signed in.
* @param {object} navigation - Navigation object used to navigate between screens in the app.
* @return {JSX.Element} Returns the JSX markup for the Account component.
*/
export default function Account({ navigation }) {

    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const logoutAccount = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));
    }
    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <View>
            <Text>Welcome Social Network {user ? user.email : "Loading..."}</Text>
            <TouchableOpacity
                onPress={() => {
                    logoutAccount()
                    navigation.navigate("Home")
                }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}
