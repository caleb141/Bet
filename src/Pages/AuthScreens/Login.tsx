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
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../utils/theme';
import {isEmpty} from 'lodash';

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(2, 'Password is too short!')
    .max(16, 'password is too Long!')
    .required('Password is required'),
});
// @ts-nocheck
const Login = () => {
  const [email, setEmail] = useState('');
  const {height, width} = useWindowDimensions();
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;

  const {navigate} = useNavigation<MainScreenNavigationProp>();

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
    <Box px={'l'} flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />
      <Box mt="l">{darkMode ? <LogoLight /> : <LogoDark />}</Box>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginBottom: 45,
        }}>
        <Box flex={1} justifyContent={'center'}>
          <Formik
            initialValues={{username: '', password: ''}}
            validationSchema={LoginSchema}
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
                  Login
                </Text>
                <Box>
                  <FlaotingTextInput
                    label="Username"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    hasError={!isEmpty(errors.username) && touched.username}
                    placeholder="Email or phone number"
                  />
                  {errors.username && touched.username ? (
                    <Text color="danger" variant={'body_sm'} my={'s'}>
                      {errors.username}
                    </Text>
                  ) : null}
                </Box>
                <Box my={'s'}>
                  <FlaotingTextInput
                    secure={secure}
                    type="password"
                    label="Password"
                    value={values.password}
                    hasError={!isEmpty(errors.password) && touched.password}
                    togglePassword={() => setSecure(!secure)}
                    placeholder="password"
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && touched.password ? (
                    <Text color="danger" variant={'body_sm'} my={'s'}>
                      {errors.password}
                    </Text>
                  ) : null}
                </Box>
                <Box alignItems={'flex-end'}>
                  <Button
                    ml="s"
                    variant="link"
                    onPress={() =>
                      navigate('AuthStack', {
                        screen: 'ResetPassword',
                      })
                    }
                    bg={'transparent'}
                    color={'primary'}
                    label="Reset password"
                  />
                </Box>

                <Button
                  accessibilityLabel="button"
                  bg="primary"
                  onPress={handleSubmit}
                  borderRadius={7}
                  mt="l"
                  py={'m'}
                  justifyContent={'center'}
                  alignSelf={'center'}
                  width={'100%'}
                  label="Login"
                />
              </Box>
            )}
          </Formik>

          <Box
            flexDirection="row"
            justifyContent="flex-end"
            py={'m'}
            alignItems="center">
            <Text color="textColor" variant={'body_sm'} fontSize={RFValue(12)}>
              Don't have an account?
            </Text>
            <Button
              ml="s"
              variant="link"
              onPress={() =>
                navigate('AuthStack', {
                  screen: 'Register',
                })
              }
              bg={'transparent'}
              color={'primary'}
              label="Register"
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

export default Login;
