import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

/** 
* 
* @brief UserSelect component to handle user authentication and navigation
* This component handles the user authentication and navigation based on the user's status.
* If the user is logged in, it navigates to the Account page. Otherwise, it displays the Register and Login buttons.
* @return {JSX.Element} UserSelect component JSX code
*/
export default function UserSelect({ navigation }) {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    
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

    if (user) {
        navigation.navigate("Account")
    }

    return (
        <View>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Register")
                    }}>
                    <Text>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Login")
                    }}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Home")
                    }}>
                    <Text>Menu</Text>
                </TouchableOpacity>
            </View>
    );
}