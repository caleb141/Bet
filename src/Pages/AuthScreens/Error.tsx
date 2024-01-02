// @ts-nocheck

import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  MainScreenNavigationProp,
  VerifyEmailRouteParams,
} from '../../utils/rootParams';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Close from '../../assets/svgs/close.svg';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {usePreference} from '../../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../utils/theme';
import OTPTextView from 'react-native-otp-textinput';

const Error = () => {
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;

  const {navigate} = useNavigation<MainScreenNavigationProp>();

  const onSubmit = () => {
    navigate('AuthStack', {
      screen: 'Login',
    });
  };
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Box px={'l'} py="xl" flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginTop: 20,
          marginBottom: 45,
        }}>
        <Box
          flex={1}
          mt="m"
          alignItems={'center'}
          justifyContent={'flex-start'}>
          <Box my="m">
            <Close />
          </Box>
          <Box alignItems={'center'}>
            <Text variant={'h4'} color={'textColor'}>
              Error!
            </Text>
          </Box>
          <Box
           width={{
            phone: '95%',
            longPhone: '100%',
          }}
            flexDirection="row"
            justifyContent="center"
            my={'m'}
            alignItems="center">
            <Text textAlign={'center'} color="textColor" variant={'body'} fontSize={RFValue(16)}>
              Oops! your password reset was unsuccessful. Try again.
            </Text>
          </Box>
        </Box>
        <Button
          accessibilityLabel="button"
          bg="primary"
          onPress={onSubmit}
          borderRadius={7}
          mb="xl"
          py={'m'}
          justifyContent={'center'}
          alignSelf={'center'}
          width={'100%'}
          label="Retry"
        />
        <Box
          width={'95%'}
          mt="xl"
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          flexDirection={'row'}>
          <Box mr={'s'}>
            <MaterialIcon name="error-outline" size={20} color={textColor} />
          </Box>
          <Box>
            <Text
              lineHeight={{
                phone: 24,
                longPhone: 26,
              }}
              color={'textColor'}
              fontSize={12}
              variant={'body_sm'}>
              Welcome to{' '}
              <Text variant={'logo'} color={'textColor'}>
                Peer
              </Text>
              <Text variant={'logo'} color={'primary'}>
                Bet
              </Text>
              <Text variant={'body_sm'}>!</Text> Please note, this app is
              intended for users aged 18 and above. By continuing, you confirm
              that you meet the age requirement. Enjoy your experience!
            </Text>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default Error;
