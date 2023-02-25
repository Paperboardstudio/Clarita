import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from '../styles';

/**
 *
 * @brief Login component that allows user to sign in with email and password.
 * @param {Object} navigation - The navigation prop passed by React Navigation.
 * @return {JSX.Element} A Login component with input fields for email and password and a Login button.
 */
const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const handleLoginPress = async () => {
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        let errorMessage = '';

        if (!emailRegex.test(email)) {
            errorMessage = 'Please enter a valid email address';
        } else if (!passwordRegex.test(password)) {
            errorMessage =
                'Password must be at least 8 characters and contain a mixture of upper and lowercase letters and numbers';
        }

        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log('User signed in!');
            navigation.navigate('Account');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                errorMessage = 'That email address is already in use!';
            } else if (error.code === 'auth/invalid-email') {
                errorMessage = 'That email address is invalid!';
            } else {
                errorMessage = 'Login failed. Please try again.';
            }
            setError(errorMessage);
        }
    };

    const handleTogglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <View style={styles.pageContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.inputField}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Password"
                    secureTextEntry={!passwordVisible}
                    textContentType="password"
                />
                <TouchableOpacity
                    onPress={handleTogglePasswordVisibility}
                    style={styles.toggleButton}>
                    <Text style={styles.toggleButtonText}>{passwordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

Login.defaultProps = {
    navigation: {}
};

export default Login;
