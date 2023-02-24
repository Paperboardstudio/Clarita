import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

import styles from '../styles';

/**
* 
* @brief Login component that allows user to sign in with email and password.
* @param {Object} navigation - The navigation prop passed by React Navigation.
* @return {JSX.Element} A Login component with input fields for email and password and a Login button.
*/
export default function Login({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const loginAccount = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
                console.error(error);
            })
    }

    return (
        <View>
            <TextInput
                style={styles.loginInput}
                onChangeText={setEmail}
                value={email}
                placeholder="example@email.com"
                keyboardType='email-address'
                textContentType='emailAddress'
            />
            <TextInput
                style={styles.loginInput}
                onChangeText={setPassword}
                value={password}
                placeholder="password"
                secureTextEntry={true}
            />
            <TouchableOpacity
                onPress={() => {
                    loginAccount()
                    navigation.navigate("Account")
                }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}