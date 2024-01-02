// @ts-nocheck

import React, {useEffect, useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView,
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
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const VerifyMobile = () => {
  const [email, setEmail] = useState('');
  const {height, width} = useWindowDimensions();
  const [loading, setLoading] = useState(false);

  const otpInputRef = useRef(null);

  const [secure, setSecure] = useState(true);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor, inputBorder, inputBg, primary} = colors;

  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();

  const onSubmit = (values: any) => {
    console.log(values);
    // setLoading(true);
    // setTimeout(() => {
    //   navigate('Wallet');
    // }, 5000);
  };
  useEffect(() => {
    console.log(darkMode);
  }, [darkMode]);

  return (
    <Box px={'l'} py="xl" flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={goBack} mr={'s'}>
        <Back />
      </TouchableWithoutFeedback>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginTop: 20,
          marginBottom: 45,
        }}>
        <Text mb={'xl'} color={'primary'} fontSize={28} textAlign={'center'} variant={'h4'}>
          Verify phone number
        </Text>

        <Box
          width={{
            phone: '95%',
            longPhone: '100%',
          }}
          alignSelf={'center'}>
          <Text
            lineHeight={{
              phone: 24,
              longPhone: 26,
            }}
            color={'textColor'}
            fontSize={16}
            textAlign={'center'}
            variant={'body'}>
            A 4 digit code has been sent to your phone number. Enter the code
            below.
          </Text>
        </Box>

        <Box
          width={'80%'}
          my="xl"
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          flexDirection={'row'}>
          <Box mr={'s'}></Box>
          <Box>
            <Text
              lineHeight={{
                phone: 24,
                longPhone: 26,
              }}
              color={'textColor'}
              fontSize={12}
              variant={'body_sm'}></Text>
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
              I did not receive the otp.{' '}
            </Text>
            <Button
              variant="link"
              onPress={() =>
                navigate('AuthStack', {
                  screen: 'Register',
                })
              }
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
          // onPress={handleSubmit}
          borderRadius={7}
          mt="l"
          py={'m'}
          justifyContent={'center'}
          alignSelf={'center'}
          width={'100%'}
          label="Verify phone number"
        />
      </KeyboardAvoidingView>
    </Box>
  );
};

export default VerifyMobile;

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
