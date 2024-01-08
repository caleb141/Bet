import { GameWeek } from "./../Pages/GameWeek";
import { EditPredictions } from "./../Pages/EditPredictions";
import { JoinGame } from "./../Pages/JoinGame";
import { StakeConfirmed } from "./../Pages/StakeConfirmed";
import { StakeGame } from "./../Pages/StakeGame";
import { SuccessPage } from "./../Pages/SuccessPage";
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type AuthParams = {
  email: String;
  phoneNumber: String;
  dateOfBirth: String;
  fullName: String;
  password: String;
};
type ResetPasswordParams = {
  email: String;
};

export type RootStackParamList = {
  Register: undefined;
  OnBoarding: undefined;
  Login: undefined;
  VerifyEmail: AuthParams;
  VerifyMobile: AuthParams;
  ResetPassword: undefined;
  VerifyPasswordReset: ResetPasswordParams,
  CreatePassword: ResetPasswordParams,
  Success: undefined,
  Error: undefined,
};

export type BottomTabParamList = {
    Dashboard: undefined;
    Trophy: undefined;
    Setting: undefined;
    Profile: undefined;
  };
export type VerifyEmailRouteParams = {
  VerifyEmail: AuthParams;
};
export type ResetPasswordRouteParams = {
    VerifyPasswordReset: ResetPasswordParams;
    CreatePassword: ResetPasswordParams;
};

export type MainStackParamList = {
  AuthStack: NavigatorScreenParams<RootStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
  Wallet: undefined;
  Withdrawal: undefined;
  SuccessPage: undefined;
  CreateGame: undefined;
  StakeGame: undefined;
  StakeConfirmed: undefined;
  JoinGame: undefined;
  GameLobby: undefined;
  MyActiveGame: undefined;
  EditPredictions: undefined;
  EditProfile: undefined;
  GameWeek: undefined;
  PredictionSuccess: undefined;
};

export type MainScreenNavigationProp = StackNavigationProp<MainStackParamList>;
export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
export type BottomNavigationParams = DrawerNavigationProp<BottomTabParamList>;
export type AuthSuccessRouteProps = RouteProp<VerifyEmailRouteParams>;
export type ResetPasswordRouteProps = RouteProp<ResetPasswordRouteParams>;
