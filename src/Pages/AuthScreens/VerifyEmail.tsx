// @ts-nocheck

import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  MainScreenNavigationProp,
  VerifyEmailRouteParams,
} from '../../utils/rootParams';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Back from '../../assets/svgs/back_icon.svg';
import FlaotingTextInput from '../../components/Input';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {usePreference} from '../../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../utils/theme';
import {isEmpty} from 'lodash';
import {OtpInput} from 'react-native-otp-entry';
import OTPTextView from 'react-native-otp-textinput';

const VerifyEmail = () => {
  const [email, setEmail] = useState('');
  const {height, width} = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const otpInputRef = useRef(null);
  const {params} = useRoute<VerifyEmailRouteParams>();

  const [secure, setSecure] = useState(true);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor, inputBorder, inputBg, primary} = colors;

  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();

  const onSubmit = () => {
    navigate('AuthStack', {
      screen: 'VerifyMobile',
      params: params,
    });
  };
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Box px={'m'} py="xl" flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={goBack}>
        <Box mr={'m'}>
          <Back />
        </Box>
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginTop: 20,
          marginBottom: 45,
        }}>
        <Text
          mb={'xl'}
          color={'primary'}
          letterSpacing={4}
          fontSize={28}
          textAlign={'center'}
          variant={'h4'}>
          Verify your email
        </Text>

        <Box
          width={{
            phone: '85%',
            longPhone: '100%',
          }}
          alignSelf={'center'}>
          <Text
            lineHeight={{
              phone: 24,
              longPhone: 26,
            }}
            color={'textColor'}
            fontSize={18}
            textAlign={'center'}
            variant={'body'}>
            A 4 digit code has been sent to your email. Enter the code below.
          </Text>
        </Box>
        <Box
           width={{
            phone: '80%',
            longPhone: '85%',
          }}
          my="xl"
          alignItems={'center'}
          ml='m'
          // alignSelf={'center'}
          justifyContent={'flex-start'}
          flexDirection={'row'}>
          <Box mr={'s'}>
            <MaterialIcon name="error-outline" size={20} color={textColor} />
          </Box>
          <Box>
            <Text color={'textColor'} fontSize={12} variant={'body_sm'}>
              Also remember to check your spam if you don’t find the mail in
              your inbox
            </Text>
          </Box>
        </Box>
        <Box flex={1} mt="m" justifyContent={'flex-start'}>
          <Box mb={'xl'} alignItems={'center'}>
            {/* <OtpInput
              onTextChange={(code: string) => console.log(code)}
              onFilled={text => console.log(`OTP is ${text}`)}
              numberOfDigits={4}
              focusColor={inputBorder}
              theme={{
                // inputsContainerStyle: {
                //   ...styles.inputContainer,
                //   borderColor: inputBorder,
                // },
                containerStyle: {
                  ...styles.inputContainer,
                },
                pinCodeTextStyle: {
                  color: textColor,
                  fontSize: 12,
                },
                pinCodeContainerStyle: {
                  ...styles.pinCodeContainer,
                  borderColor: inputBorder,
                  backgroundColor: inputBg,
                },
              }}
            /> */}
            <OTPTextView
              ref={otpInputRef}
              containerStyle={[styles.inputContainer]}
              textInputStyle={[
                styles.roundedTextInput,
                {backgroundColor: inputBg, color: textColor},
              ]}
              handleTextChange={text => console.log(text)}
              inputCount={4}
              tintColor={inputBorder}
              offTintColor={inputBorder}
              // textInputStyle={{color:'white'}}
              keyboardType="numeric"
            />
          </Box>
          <Box
            flexDirection="row"
            justifyContent="center"
            my={'xl'}
            alignItems="center">
            <Text color="textColor" variant={'body_sm'} fontSize={RFValue(12)}>
              I did not receive the mail.{' '}
            </Text>
            <Button
              variant="link"
              onPress={() => {}}
              bg={'transparent'}
              color={'primary'}
              borderBottomColor={'primary'}
              fontSize={13}
              borderBottomWidth={1}
              label="Resend"
            />
          </Box>
        </Box>
        <Button
          accessibilityLabel="button"
          bg="primary"
          onPress={onSubmit}
          borderRadius={7}
          mt="l"
          py={'m'}
          justifyContent={'center'}
          alignSelf={'center'}
          width={'100%'}
          label="Verify email"
        />
      </KeyboardAvoidingView>
    </Box>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  pinCodeContainer: {
    height: 20,
    // width: '20%',
    borderRadius: 5,
    padding: 3,
    backgroundColor: 'white',
  },
  inputContainer: {
    height: '10%',
    width: '70%',
    // backgroundColor: 'red',
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    color: 'white',
  },
});
