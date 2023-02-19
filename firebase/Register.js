import { View, Text } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

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