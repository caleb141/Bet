// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  MainScreenNavigationProp,
  ResetPasswordRouteProps,
} from '../../utils/rootParams';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Back from '../../assets/svgs/back_icon.svg';
import Text from '../../components/Text';
import FlaotingTextInput from '../../components/Input';
import {RFValue} from 'react-native-responsive-fontsize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {usePreference} from '../../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../utils/theme';
import {isEmpty, size} from 'lodash';
import {useHeaderHeight} from '@react-navigation/elements';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required(
      'Password is required and Password must be at least 8 characters long',
    )
    .matches(/^(?=.*[A-Z])/, 'One Uppercase')
    .matches(/^(?=.*[a-z])/, 'One Lowercase')
    .matches(/^(?=.*[0-9])/, 'One Number')
    .matches(/^(?=.*[!@#$%^&*])/, 'At least 1 Symbol')
    .matches(/^(?=.{8,})/, 'Must Contain 8 Characters'),
});
// @ts-nocheck
const CreatePassword = () => {
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {textColor, danger, success} = colors;
  const [secure, setSecure] = useState(true);
  const [Ierrors, setErrors] = useState<Array<string>>([]);
  const [pErrors] = useState<Array<string>>([
    'Must Contain 8 Characters',
    'One Uppercase',
    'One Lowercase',
    'One Number',
    'At least 1 Symbol',
  ]);

  const {params} = useRoute<ResetPasswordRouteProps>();
  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();

  const onSubmit = (values: any) => {
    navigate('AuthStack', {
      screen: 'Success',
    });
  };

  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const formatPasswordError = async (password: string) => {
    ResetPasswordSchema.validate(
      {
        password,
      },
      {abortEarly: true},
    )
      .then(() => setErrors([]))
      .catch(e => {
        setErrors(e.errors);
      });
  };

  return (
    <Box py="l" px={'l'} flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />
      <TouchableWithoutFeedback onPress={goBack}>
        <Box mr={'m'}>
          <Back />
        </Box>
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        keyboardVerticalOffset={insets.top + headerHeight}
        {...(Platform.OS === 'ios' && {behavior: 'padding'})}
        // behavior="padding"
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          // marginBottom: 45,
        }}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <Box mt="xl" flex={1} justifyContent={'flex-start'}>
            <Formik
              initialValues={{password: ''}}
              validationSchema={ResetPasswordSchema}
              onSubmit={values => onSubmit(values)}>
              {({setFieldValue, handleSubmit, values, errors, touched}) => (
                <Box>
                  <Text
                    mt={'xl'}
                    mb="l"
                    color={'primary'}
                    textAlign={'center'}
                    variant={'h4'}>
                    Create new password
                  </Text>
                  <Box my={'s'}>
                    <FlaotingTextInput
                      secure={secure}
                      type="password"
                      label="Password"
                      value={values.password}
                      hasError={!isEmpty(errors.password) && touched.password}
                      togglePassword={() => setSecure(!secure)}
                      placeholder="password"
                      onChangeText={value => {
                        formatPasswordError(value);
                        setFieldValue('password', value);
                      }}
                    />
                    {errors.password && touched.password ? (
                      <Text color="danger" variant={'body_sm'} my={'s'}>
                        {errors.password}
                      </Text>
                    ) : null}
                  </Box>

                  <Box ml={'s'} display={'flex'} flexDir={'column'}>
                    {size(Ierrors) > 1 ? (
                      pErrors.map((item, index) => (
                        <Box
                          key={index}
                          display={'flex'}
                          flexDirection="row"
                          justifyContent={'flex-start'}
                          alignItems="center">
                          {Ierrors.includes(item) ? (
                            <Close name="close" size={15} color={`${danger}`} />
                          ) : (
                            <Check name="check" size={15} color={success} />
                          )}
                          <Text
                            ml="s"
                            color={
                              Ierrors.includes(item)
                                ? darkMode
                                  ? 'faint'
                                  : 'gray'
                                : 'textColor'
                            }>
                            {item}
                          </Text>
                        </Box>
                      ))
                    ) : (
                      <Box />
                    )}
                  </Box>

                  <Button
                    accessibilityLabel="button"
                    bg="primary"
                    onPress={handleSubmit}
                    borderRadius={7}
                    mt="m"
                    py={'mm'}
                    justifyContent={'center'}
                    alignSelf={'center'}
                    width={'100%'}
                    label="Reset password"
                  />
                </Box>
              )}
            </Formik>
          </Box>
          <Box
            width={'95%'}
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            flexDirection={'row'}>
            <Box  mr={'s'}>
              <MaterialIcon name="error-outline" size={18} color={textColor} />
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
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default CreatePassword;
