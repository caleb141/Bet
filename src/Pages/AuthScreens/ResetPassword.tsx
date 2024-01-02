// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../../utils/rootParams';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import LogoDark from '../../assets/svgs/logo-dark.svg';
import LogoLight from '../../assets/svgs/logo-light.svg';
import FlaotingTextInput from '../../components/Input';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {usePreference} from '../../state/hooks/preference.hook';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../utils/theme';
import { isEmpty } from 'lodash';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
});
// @ts-nocheck
const ResetPassword = () => {
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;

  const {navigate} = useNavigation<MainScreenNavigationProp>();
  
  const onSubmit = (values: any) => {
    console.log(values);
    // setLoading(true);
    navigate('VerifyPasswordReset');
    // setTimeout(() => {
    // }, 5000);
  };
  useEffect(() => {
    console.log(darkMode)
  }, [darkMode])
  
  return (
    <Box px={'l'} flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />
      <Box mb='xl' mt="l">{darkMode ? <LogoLight /> : <LogoDark />}</Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginBottom: 45,
        }}>
        <Box flex={1} mt='xl' justifyContent={'flex-start'}>
          <Formik
            initialValues={{email: ''}}
            validationSchema={ResetPasswordSchema}
            onSubmit={values => onSubmit(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <Box>
                <Text
                  mb={'xl'}
                  color={'primary'}
                  textAlign={'center'}
                  variant={'h4'}>
                  Reset your password
                </Text>
                <Box>
                  <FlaotingTextInput
                    label="Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    hasError={!isEmpty(errors.email) && touched.email}
                    placeholder="Enter your email address"
                  />
                  {errors.email && touched.email ? (
                    <Text color="danger" variant={'body_sm'} my={'s'}>
                      {errors.email}
                    </Text>
                  ) : null}
                </Box>
               
                

                <Button
                  accessibilityLabel="button"
                  bg="primary"
                  onPress={handleSubmit}
                  borderRadius={7}
                  mt="m"
                  py={'m'}
                  justifyContent={'center'}
                  alignSelf={'center'}
                  width={'100%'}
                  label="Send Otp"
                />
              </Box>
            )}
          </Formik>

          <Box
            flexDirection="row"
            justifyContent="flex-end"
            py={'m'}
            alignItems="center">
            <Text color='textColor' variant={'body_sm'} fontSize={RFValue(12)}>
              Can remember my password?
            </Text>
            <Button
              ml="s"
              variant="link"
              onPress={()=> navigate('AuthStack',{
                screen: 'Login'
              })}
              bg={'transparent'}
              color={'primary'}
              label="Login"
            />
          </Box>
        </Box>
        <Box
          width={'95%'}
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

export default ResetPassword;
