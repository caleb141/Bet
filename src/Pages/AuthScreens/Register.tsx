// @ts-nocheck

import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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
import Close from 'react-native-vector-icons/AntDesign';
import Check from 'react-native-vector-icons/Feather';
import _ from 'lodash';
import Select from '../../components/Select';
import moment from 'moment';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  email: Yup.string().email().required('Email is required'),
  year: Yup.number().required('year is required'),
  month: Yup.number().required('month is required'),
  day: Yup.number().required('day is required'),
  password: Yup.string()
    .required(
      'Password is required and Password must be at least 8 characters long',
    )
    .matches(/^(?=.*[A-Z])/, 'One Uppercase')
    .matches(/^(?=.*[a-z])/, 'One Lowercase')
    .matches(/^(?=.*[0-9])/, 'One Number')
    .matches(/^(?=.*[!@#$%^&*])/, 'At least 1 Symbol')
    .matches(/^(?=.{8,})/, 'Must Contain 8 Characters'),
  acceptTerms: Yup.boolean(),
});
const countries = [
  'Egypt',
  'Canada',
  'Australia',
  'Ireland',
  'Brazil',
  'England',
  'Dubai',
  'France',
  'Germany',
  'Saudi Arabia',
  'Argentina',
  'India',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// @ts-nocheck
const Register = () => {
  const [email, setEmail] = useState('');
  const {height, width} = useWindowDimensions();
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [years, setYears] = useState([]);
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);
  const [secure, setSecure] = useState(true);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {primary, success, danger, gray, inputBg, inputBorder} = colors;
  const [Ierrors, setErrors] = useState<Array<string>>([]);
  const [pErrors] = useState<Array<string>>([
    'Must Contain 8 Characters',
    'One Uppercase',
    'One Lowercase',
    'One Number',
    'At least 1 Symbol',
  ]);

  const {navigate} = useNavigation<MainScreenNavigationProp>();

  const onSubmit = (values: any) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      navigate('AuthStack',{
        screen: 'VerifyEmail',
        params: values
      });
    }, 5000);
  };
  const formatPasswordError = async (password: string) => {
    RegisterSchema.validate(
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
  useEffect(() => {
    getYear();
  }, []);

  useEffect(() => {
    if (year > 0 && month > 0) {
      console.log(typeof year, typeof month);
      const days = getDaysInMonth(month, year);
      console.log(days);
    }
  }, [year, month]);

  function getDaysInMonth(month: any, year: any) {
    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
      days.push(Number(moment(new Date(date)).format('D')));
      date.setDate(date.getDate() + 1);
    }
    setDays(days);
  }
  const getYear = () => {
    const currentDate = moment();
    const minData = Number(currentDate.subtract(18, 'years').format('yyyy'));
    const maxData = Number(currentDate.subtract(70, 'years').format('yyyy'));
    let years = [];
    for (let i = maxData; i <= minData; i++) {
      years.push(i);
    }
    setYears(years);
  };
  return (
    <Box px={'l'} flex={1} bg={'mainBg'} position="relative">
      <StatusBar backgroundColor="#2A52BE" barStyle={'light-content'} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          //   backgroundColor: 'red',
          flex: 1,
          marginTop: 20,
          marginBottom: 45,
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box mt="l">{darkMode ? <LogoLight /> : <LogoDark />}</Box>
          <Box flex={1} justifyContent={'center'}>
            <Formik
              initialValues={{
                phoneNumber: '',
                password: '',
                email: '',
                fullName: '',
                acceptTerms: false,
                year: '',
                month: '',
                day: '',
              }}
              validationSchema={RegisterSchema}
              onSubmit={values => onSubmit(values)}>
              {({
                handleChange,
                handleBlur,
                setFieldValue,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <Box mt="xl">
                  <Text
                    mb={'m'}
                    color={'primary'}
                    textAlign={'center'}
                    variant={'h4'}>
                    Register
                  </Text>
                  <Box>
                    <FlaotingTextInput
                      label="Full name"
                      value={values.fullName}
                      onChangeText={handleChange('fullName')}
                      hasError={!isEmpty(errors.fullName)}
                      placeholder="Full name (Firstname Lastname)"
                    />
                    {errors.fullName && touched.fullName ? (
                      <Text color="danger" variant={'body_sm'} pt={'xxs'}>
                        {errors.fullName}
                      </Text>
                    ) : null}
                  </Box>
                  <Box>
                    <Text py="s" variant={'body_md'} color="textColor">
                      Date of birth
                    </Text>
                    <Box mb="m" flexDirection={'row'} mr="xl" gap={'s'}>
                      <Box flex={1}>
                        <Select
                          data={days}
                          value={values.day}
                          handleBlur={handleBlur('day')}
                          hasError={!isEmpty(errors.day) && touched.day}
                          onChangeText={value => {
                            setFieldValue('day', value);
                            handleChange('day');
                          }}
                          label="Day"
                        />
                        {errors.day && touched.day ? (
                          <Text color="danger" variant={'body_sm'} my={'s'}>
                            {errors.day}
                          </Text>
                        ) : null}
                      </Box>
                      <Box flex={1}>
                        <Select
                          data={months}
                          value={values.month}
                          handleBlur={handleBlur('month')}
                          hasError={!isEmpty(errors.month) && touched.month}
                          onChangeText={value => {
                            setMonth(value);
                            setFieldValue('month', value);
                            handleChange('month');
                          }}
                          label="Month"
                        />
                        {errors.month && touched.month ? (
                          <Text color="danger" variant={'body_sm'} my={'s'}>
                            {errors.month}
                          </Text>
                        ) : null}
                      </Box>
                      <Box flex={1}>
                        <Select
                          data={years}
                          value={values.year}
                          handleBlur={handleBlur('year')}
                          hasError={!isEmpty(errors.year) && touched.year}
                          onChangeText={value => {
                            setYear(value);
                            setFieldValue('year', value);
                            handleChange('year');
                          }}
                          label="Year"
                        />
                        {errors.year && touched.year ? (
                          <Text color="danger" variant={'body_sm'} my={'s'}>
                            {errors.year}
                          </Text>
                        ) : null}
                      </Box>
                    </Box>
                  </Box>

                  <Box mb="m">
                    <FlaotingTextInput
                      label="Phone number"
                      value={values.phoneNumber}
                      onChangeText={handleChange('phoneNumber')}
                      hasError={
                        !isEmpty(errors.phoneNumber) && touched.phoneNumber
                      }
                      placeholder="Phone number"
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <Text color="danger" variant={'body_sm'} my={'s'}>
                        {errors.phoneNumber}
                      </Text>
                    ) : null}
                  </Box>
                  <Box mb="m">
                    <FlaotingTextInput
                      label="Email"
                      value={values.email}
                      onChangeText={handleChange('email')}
                      hasError={!isEmpty(errors.email) && touched.email}
                      placeholder="Email"
                    />
                    {errors.email && touched.email ? (
                      <Text color="danger" variant={'body_sm'} my={'s'}>
                        {errors.email}
                      </Text>
                    ) : null}
                  </Box>
                  <Box mb={'s'}>
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
                    {_.size(Ierrors) > 1 ? (
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
                  {/* <Box alignItems={'flex-end'}>
                    <Text pl="s" variant={'body_md'} color="textColor">
                      Reset Password?
                    </Text>
                  </Box> */}

                  <Box flexDirection={'row'} mt="l" >
                    <BouncyCheckbox
                      size={20}
                      fillColor={primary}
                      unfillColor={inputBg}
                      style={{
                        borderRadius: 5,
                      }}
                      iconStyle={{borderColor: gray, borderRadius: 5}}
                      innerIconStyle={{
                        borderWidth: 1,
                        borderRadius: 5,
                        borderColor: inputBorder,
                      }}
                      textStyle={{fontFamily: 'JosefinSans-Regular'}}
                      onPress={(isChecked: boolean) => {}}
                    />
                    <Box
                      flexDirection="row"
                      justifyContent="center"
                      py={'m'}
                      alignItems="center">
                      <Text
                        color="textColor"
                        variant={'body_sm'}
                        fontSize={RFValue(12)}>
                        I have read and I agree with the
                      </Text>
                      <Button
                        ml="s"
                        variant="link"
                        fontSize={RFValue(12)}
                        bg={'transparent'}
                        color={'primary'}
                        label="terms and conditions"
                      />
                    </Box>
                  </Box>

                  <Button
                    accessibilityLabel="button"
                    bg="primary"
                    isLoading={loading}
                    onPress={handleSubmit}
                    borderRadius={7}
                    mt="m"
                    py={'m'}
                    justifyContent={'center'}
                    alignSelf={'center'}
                    width={'100%'}
                    label="Register"
                  />
                </Box>
              )}
            </Formik>

            <Box
              flexDirection="row"
              justifyContent="center"
              py={'l'}
              alignItems="center">
              <Text
                color="textColor"
                variant={'body_sm'}
                fontSize={RFValue(12)}>
                Already have an account?
              </Text>
              <Button
                ml="xs"
                variant="link"
                bg={'transparent'}
                color={'primary'}
                onPress={() =>
                  navigate('AuthStack', {
                    screen: 'Login',
                  })
                }
                label="Login"
              />
            </Box>
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default Register;
