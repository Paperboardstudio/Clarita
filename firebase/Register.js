import { View, Text } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';

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
export default function Register({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [userPhoneNumer, setUserPhoneNumber] = React.useState('');

    const registerAccount = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                }
                console.error(error);
            })
    }

    return (
        <View>
            <TextInput
                style={styles.registerInput}
                onChangeText={setEmail}
                value={email}
                placeholder="example@email.com"
                keyboardType='email-address'
            />
            <TextInput
                style={styles.registerInput}
                onChangeText={setPassword}
                value={password}
                placeholder="password"
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => {
                    registerAccount()
                    navigation.navigate("Account")
                }}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}