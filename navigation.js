import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from './redux/store';

import Home from './screens/Home';
import orderCompleted from './screens/OrderCompleted';
import Login from './firebase/Login';
import Register from './firebase/Register';
import UserSelect from './firebase/UserSelect';
import Account from './firebase/Account';
import RestaurantDetails from './screens/RestaurantDetails';

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
