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

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    })

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

    /*const user = auth().currentUser;


    const updateUserProfile = async () => {
        try {
            if (!user) throw new Error('User is not signed in');

            await user.updateProfile({
                displayName: "userName",
                phoneNumber: "userPhoneNumer",
            });
        } catch (error) {
            console.error(error);
        }
    };*/

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="example@email.com"
                keyboardType='email-address'
            />
            <TextInput
                style={styles.input}
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