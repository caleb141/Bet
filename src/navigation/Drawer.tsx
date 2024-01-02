import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Wallet from '../Pages/Wallet';
import Withdrawal from '../Pages/Trophy';
import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';
import Setting from '../Pages/Setting';



const Drawer = createDrawerNavigator();

export default function DrawerTab() {
    return (

        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="View Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Setting} />
        </Drawer.Navigator>

    );
}