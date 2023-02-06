import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';

export default function Login({ navigation }) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const styles = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        },
    })

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
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="example@email.com"
                keyboardType='email-address'
                textContentType='emailAddress'
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
                    loginAccount()
                    navigation.navigate("Account")
                }}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    )
}