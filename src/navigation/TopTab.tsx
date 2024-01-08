// React Native Tab
// https://aboutreact.com/react-native-tab/

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FirstPage from '../Pages/FirstPage';
import SecondPage from '../Pages/SecondPage';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import TopTabBar from './TopTabBar';

// const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TopTab() {
  const {colors} = useTheme<Theme>();
  const {textColor, primary, overlayBg,mainBg} = colors;
  return (
    <Tab.Navigator tabBar={props => <TopTabBar {...props} />}>
      <Tab.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          tabBarLabel: 'My Prediction ',
        }}
      />
      <Tab.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          tabBarLabel: 'Leaderboard',
        }}
      />
    </Tab.Navigator>
  );
}

// function TopTab() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           headerStyle: {backgroundColor: '#633689'},
//           headerTintColor: 'white',
//           headerTitleStyle: {fontWeight: 'bold'},
//         }}>
//         <Stack.Screen
//           name="TabStack"
//           component={TabStack}
//           options={{title: 'Top Tab Example'}}
//         />
//       </.Navigator>
//     </NavigationContainer>
//   );
// }

export default TopTab;
