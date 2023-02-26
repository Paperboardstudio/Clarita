import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';

import { styles } from './styles';

/**
 * @brief UserSelect component to handle user authentication and navigation
 * This component handles the user authentication and navigation based on the user's status.
 * If the user is logged in, it navigates to the Account page. Otherwise, it displays the Register and Login buttons.
 * @return {JSX.Element} UserSelect component JSX code
 */
export function UserSelect({ navigation }) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    // Handle user state changes
    function onAuthStateChanged(newUser) {
        setUser(newUser);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return () => subscriber(); // unsubscribe on unmount
    }, []);

    if (initializing) {
        return null;
    }

    if (user) {
        navigation.navigate('Account');
    }

    return (
        <View>
            <TouchableOpacity key="registerButton" onPress={() => navigation.navigate('Register')}>
                <Text>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity key="loginButton" onPress={() => navigation.navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity key="homeButton" onPress={() => navigation.navigate('Home')}>
                <Text>Menu</Text>
            </TouchableOpacity>
        </View>
    );
}

UserSelect.propTypes = {
    navigation: PropTypes.object.isRequired
};
