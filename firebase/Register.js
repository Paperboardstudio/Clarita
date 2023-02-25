import { Text, TextInput, View, Button, KeyboardAvoidingView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import auth from '@react-native-firebase/auth';
import styles from '../styles';

function showErrorAlert(message) {
    Alert.alert('Error', message);
}

function showSuccessAlert(message) {
    Alert.alert('Success', message);
}
/**
 *
 * @brief React component for registering a user account.
 * @param {Object} navigation - Object containing navigation functions.
 * @return {JSX.Element} Register component.
 * @details This component renders a form for the user to enter their email address and password,
 * and allows them to register an account using the Firebase auth library. Upon successful registration,
 * the user is redirected to the Account page. If an error occurs during registration, the appropriate error
 * message is logged to the console.
 */
const Register = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterPress = useCallback(() => {
        if (!email) {
            showErrorAlert('Please enter an email');
            return;
        }

        if (!password) {
            showErrorAlert('Please enter a password');
            return;
        }

        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                showSuccessAlert('User account created and signed in!');
                navigation.navigate('Account');
            })
            .catch(error => {
                let errorMessage = 'An error occurred. Please try again.';

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorMessage = 'That email address is already in use.';
                        break;
                    case 'auth/invalid-email':
                        errorMessage = 'That email address is invalid.';
                        break;
                    case 'auth/weak-password':
                        errorMessage = 'The password is too weak.';
                        break;
                    default:
                        break;
                }

                showErrorAlert(errorMessage);
            });
    }, [email, password, navigation]);

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <TextInput
                style={styles.registerInput}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
            />
            <TextInput
                style={styles.registerInput}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCompleteType="password"
                textContentType="newPassword"
                returnKeyType="done"
            />
            <Button title="Register" onPress={handleRegisterPress} />
        </KeyboardAvoidingView>
    );
};

Register.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    }).isRequired
};

export default Register;
