import React, {useEffect, useState} from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {TouchableOpacity, useWindowDimensions} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {usePreference} from '../state/hooks/preference.hook';
import {StatusBar} from 'react-native';
import {profileImg} from '../assets';
import SimpleInput from '../components/SimpleInput';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {isEmpty} from 'lodash';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import Select from '../components/Select';
import {
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export const EditProfile = () => {
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
  const {
    primary,
    textColor,
    mainBg,
    success,
    danger,
    gray,
    inputBg,
    inputBorder,
  } = colors;
  const [Ierrors, setErrors] = useState<Array<string>>([]);
  const [pErrors] = useState<Array<string>>([
    'Must Contain 8 Characters',
    'One Uppercase',
    'One Lowercase',
    'One Number',
    'At least 1 Symbol',
  ]);

  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();
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
  const onSubmit = (values: any) => {
    console.log(values);
    setLoading(true);
    setTimeout(() => {
      navigate('AuthStack', {
        screen: 'VerifyEmail',
        params: values,
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
  // useEffect(() => {
  //   getYear();
  // }, []);

  // useEffect(() => {
  //   if (year > 0 && month > 0) {
  //     console.log(typeof year, typeof month);
  //     const days = getDaysInMonth(month, year);
  //     console.log(days);
  //   }
  // }, [year, month]);

  // function getDaysInMonth(month: any, year: any) {
  //   var date = new Date(year, month, 1);
  //   var days = [];
  //   while (date.getMonth() === month) {
  //     days.push(Number(moment(new Date(date)).format('D')));
  //     date.setDate(date.getDate() + 1);
  //   }
  //   setDays(days);
  // }
  // const getYear = () => {
  //   const currentDate = moment();
  //   const minData = Number(currentDate.subtract(18, 'years').format('yyyy'));
  //   const maxData = Number(currentDate.subtract(70, 'years').format('yyyy'));
  //   let years = [];
  //   for (let i = maxData; i <= minData; i++) {
  //     years.push(i);
  //   }
  //   setYears(years);
  // };
  const [selectImage, setSelectImage] = useState('');
  let options: ImageLibraryOptions = {
    mediaType: 'photo',
  };
  const imagePicker = () => {
    console.log('show picker');
    launchImageLibrary(options, (response: any) => {
      setSelectImage(response.assets[0].uri);
      // console.log(response.assets[0].uri);
    });
  };
  useEffect(() => {
    console.log(selectImage);
  }, [selectImage]);

  return (
    <Box backgroundColor="mainBg" flex={1}>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />

      <Box
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        position={'relative'}
        pt="l">
        <Box position={'absolute'} left={10}>
          <TouchableOpacity onPress={goBack}>
            <FontAwesome6Icon
              size={20}
              name="arrow-left-long"
              color={textColor}
            />
          </TouchableOpacity>
        </Box>
        <Text
          variant={'h4'}

          color={'textColor'}
          textAlign={'center'}
          mb="l">
          MY PROFILE
        </Text>
      </Box>
      <Box alignItems={'center'} borderRadius={50} justifyContent={'center'}>
        {/* <ProfileAvatar /> */}
        <FastImage
          style={{width:80, height: 80, borderRadius: 100}}
          // source={{
          //   uri: '/src/assets/images/logo1.png',
          //   priority: FastImage.priority.normal,
          // }}
          //   source={{uri: selectImage}}
          source={isEmpty(selectImage) ? profileImg : {uri: selectImage}}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Box position={'relative'}>
          <Box position={'absolute'} bottom={4} right={-40}>
            <TouchableOpacity
              onPress={() => {
                imagePicker();
              }}>
              <FontAwesome5 size={20} name="camera" color={textColor} />
            </TouchableOpacity>
          </Box>
        </Box>
      </Box>
      <Box my={'xl'} mx={'m'} justifyContent={'center'}>
        <SimpleInput
          label="Username"
          value=""
          hasError={false}
          onChangeText={() => {}}
          placeholder="Player1234"
        />
        <SimpleInput
          label="Full Name"
          value=""
          hasError={false}
          onChangeText={() => {}}
          placeholder="John Doe"
        />
        <Box>
          <Text color="textColor" my="xs">
            Date of birth
          </Text>
          <Box mb="m" flexDirection={'row'} mr="xl" gap={'s'}>
            <Box flex={1}>
              <Select
                data={years}
                value={''}
                handleBlur={() => {}}
                hasError={false}
                onChangeText={() => {}}
                label="Day"
              />
            </Box>
            <Box flex={1}>
              <Select
                data={years}
                value={''}
                handleBlur={() => {}}
                hasError={false}
                onChangeText={() => {}}
                label="Month"
              />
            </Box>
            <Box flex={1}>
              <Select
                data={years}
                value={''}
                handleBlur={() => {}}
                hasError={false}
                onChangeText={() => {}}
                label="Year"
              />
            </Box>
          </Box>
        </Box>

        <SimpleInput
          label="Phone Number"
          value=""
          hasError={false}
          onChangeText={() => {}}
          placeholder="07030089111"
        />
        <SimpleInput
          label="Email Address"
          value=""
          hasError={false}
          onChangeText={() => {}}
          placeholder="johndoe@gmail.com"
        />
      </Box>
      <TouchableOpacity onPress={() => {}}>
        <Box
          bg={'primary'}
          py={'mm'}
          mb={'l'}
          mx={'m'}
          borderRadius={6}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text variant={'body'} color={'muted'}>
            Update Profile
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};
