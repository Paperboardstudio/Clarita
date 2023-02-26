import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';

import { configureStore } from '../redux/store';

import {
    Home,
    OrderCompleted,
    Login,
    Register,
    UserSelect,
    Account,
    RestaurantDetails
} from '../utils/paths';

const store = configureStore();

const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
};

export function RootNavigation() {
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                    <Stack.Screen name="UserSelect" component={UserSelect} />
                    <Stack.Screen name="Account" component={Account} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    );
}
