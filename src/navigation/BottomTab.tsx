import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabBar} from './BottomTabBar';
import Dashboard from '../Pages/Dashboard';
import Setting from '../Pages/Setting';
import Trophy from '../Pages/Trophy';
import { BottomTabParamList } from '../utils/rootParams';
import Profile from '../Pages/Profile';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
      }}
      tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Trophy" component={Trophy} />
      {/* <Tab.Screen name="SharedStory" component={SharedStory} /> */}
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
