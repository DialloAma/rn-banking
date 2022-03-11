import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Clients from '../Pages/Clients';
import Accounts from '../Pages/Accounts';

const Menu = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Clients} />
        <Tab.Screen name="Settings" component={Accounts} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Menu;
