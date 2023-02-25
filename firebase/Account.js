import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { handleAuthStateChange, logout } from './auth';

/**
 *
 * @brief React Native functional component for displaying account information and handling user authentication.
 * This component uses Firebase authentication to handle user sign-in/sign-out and displays the user's email address once signed in.
 * @param {object} navigation - Navigation object used to navigate between screens in the app.
 * @return {JSX.Element} Returns the JSX markup for the Account component.
 */
function Account({ navigation }) {
    const [isInitializing, setIsInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handles changes in the user authentication state
    useEffect(() => {
        const subscriber = handleAuthStateChange(currentUser => {
            setUser(currentUser);
            if (isInitializing) {
                setIsInitializing(false);
            }
        });
        return subscriber; // unsubscribe on unmount
    }, []);

    if (isInitializing) {
        return null;
    }

    return (
        <View>
            <Text>Welcome to Social Network {user ? user.email : 'Loading...'}</Text>
            <TouchableOpacity
                accessible
                accessibilityLabel="Logout Button"
                onPress={() => {
                    logout();
                    navigation.navigate('Home');
                }}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}

Account.propTypes = {
    navigation: PropTypes.object
};

export default Account;
