import React from 'react';
import Login  from '../Pages/AuthScreens/Login';
import { RootStackParamList } from '../utils/rootParams';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoard from '../Pages/Onboard';
import Register from '../Pages/AuthScreens/Register';
import VerifyEmail from '../Pages/AuthScreens/VerifyEmail';
import VerifyMobile from '../Pages/AuthScreens/VerifyMobile';
import ResetPassword from '../Pages/AuthScreens/ResetPassword';
import Success from '../Pages/AuthScreens/Success';
import Error from '../Pages/AuthScreens/Error';
import VerifyPasswordReset from '../Pages/AuthScreens/VerifyPasswordReset';
import CreatePassword from '../Pages/AuthScreens/CreatePassword';

const Stack = createStackNavigator<RootStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'OnBoarding'}>
      <Stack.Screen name="OnBoarding" component={OnBoard} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      <Stack.Screen name="VerifyMobile" component={VerifyMobile} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerifyPasswordReset" component={VerifyPasswordReset} />
      <Stack.Screen name='CreatePassword' component={CreatePassword}/>
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Error" component={Error} />
    </Stack.Navigator>
  );
};

export default AuthStack;
