import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup} from '../screens';

const Stack = createStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
                />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}