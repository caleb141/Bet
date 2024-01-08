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
import { StakeConfirmed } from '../Pages/StakeConfirmed';
import { JoinGame } from '../Pages/JoinGame';
import { GameLobby } from '../Pages/GameLobby';
import { MyActiveGame } from '../Pages/MyActiveGame';
import {EditPredictions} from '../Pages/EditPredictions';
import { EditProfile } from '../Pages/EditProfile';
import { GameWeek } from '../Pages/GameWeek';
import { PredictionSuccess } from '../Pages/PredictionSuccess';
import { useAuth } from '../state/hooks/user.hook';




const Stack = createStackNavigator<MainStackParamList>();
export const StackNav = () => {
  // const {token} = useAuth();
  const [token, setToken] = useState(false);
  const {tempAuth} = useAuth()
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
      {!tempAuth ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="Withdrawal" component={Withdrawal} />
          <Stack.Screen name="SuccessPage" component={SuccessPage} />
          <Stack.Screen name="CreateGame" component={CreateGame} />
          <Stack.Screen name="StakeGame" component={StakeGame} />
          <Stack.Screen name="StakeConfirmed" component={StakeConfirmed} />
          <Stack.Screen name="JoinGame" component={JoinGame} />
          <Stack.Screen name="GameLobby" component={GameLobby} />
          <Stack.Screen name="MyActiveGame" component={MyActiveGame} />
          <Stack.Screen name="EditPredictions" component={EditPredictions} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="GameWeek" component={GameWeek} />
          <Stack.Screen name="PredictionSuccess" component={PredictionSuccess} />
        </>
      )}
    </Stack.Navigator>
  );
};
