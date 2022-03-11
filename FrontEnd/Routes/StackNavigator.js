import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Clients from '../Pages/Clients';
import Accounts from '../Pages/Accounts';

const Stacknavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen name="Client" component={Clients} />
        <Stack.Screen name="Account" component={Accounts} />
      </Stack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default Stacknavigator;
