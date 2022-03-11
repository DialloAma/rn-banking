import React from 'react';
import {View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Stacknavigator from './StackNavigator';
import Accounts from '../Pages/Accounts';

const Menu = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
            header:()=>null
        }}
         name="Stack" component={Stacknavigator} />
        
      </Tab.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default Menu;
