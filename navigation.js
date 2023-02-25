import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './src/redux/store';

import Home from './src/screens/Home';
import orderCompleted from './src/screens/OrderCompleted';
import Login from './src/firebase/Login';
import Register from './src/firebase/Register';
import UserSelect from './src/firebase/UserSelect';
import Account from './src/firebase/Account';
import RestaurantDetails from './src/screens/RestaurantDetails';

/**
 *
 * @function RootNavigation
 * @desc The RootNavigation component is responsible for defining the different screens and their corresponding components.
 * It also includes the configuration for the Redux store and the navigation container.
 * @returns {JSX.Element} The RootNavigation component
 */
const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    };

    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
                    <Stack.Screen name="OrderCompleted" component={orderCompleted} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="UserSelect" component={UserSelect} />
                    <Stack.Screen name="Account" component={Account} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}
