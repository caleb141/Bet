import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useReducer, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {MainStackParamList} from '../utils/rootParams';
import AuthStack from './AuthNav';
import DrawerTab from './Drawer';

import {BottomTab} from './BottomTab';
import Wallet from '../Pages/Wallet';
import { Withdrawal } from '../Pages/Withdrawal';
import { SuccessPage } from '../Pages/SuccessPage';
import { CreateGame } from '../Pages/CreateGame';
import { StakeGame } from '../Pages/StakeGame';



const Stack = createStackNavigator<MainStackParamList>();
export const StackNav = () => {
  // const {token} = useAuth();
  const [token, setToken] = useState(true);
  // const [state, dispatch] = useReducer(loginReducer, {});

  React.useEffect(() => {
    setTimeout(() => SplashScreen.hide(), 3000);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'AuthStack'}>
      {!token ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Withdrawal" component={Withdrawal} />
          <Stack.Screen name="SuccessPage" component={SuccessPage} />
          <Stack.Screen name="CreateGame" component={CreateGame} />
          <Stack.Screen name="StakeGame" component={StakeGame} />
        </>
      )}
    </Stack.Navigator>
  );
};
