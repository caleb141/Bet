import React from 'react';
import Box from './Box';
import ProfileAvatar from '../assets/svgs/profileUser.svg';
import {profileImg} from '../assets';
import Text from './Text';
import Button from './Button';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { TouchableOpacity } from 'react-native';
import { MainScreenNavigationProp } from '../utils/rootParams';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import FastImage from 'react-native-fast-image';
export const ProfileComp = () => {
  const {navigate} = useNavigation<MainScreenNavigationProp>();
       const {colors} = useTheme<Theme>();
       const {textColor} = colors;
  return (
    <Box alignItems={'center'} justifyContent={'center'}>
      <Box mt="xl" borderRadius={60}>
        <FastImage
          style={{width: 80, height: 80, borderRadius: 100}}
          // source={{
          //   uri: '/src/assets/images/logo1.png',
          //   priority: FastImage.priority.normal,
          // }}
          //   source={{uri: selectImage}}
          source={profileImg}
       
          resizeMode={FastImage.resizeMode.cover}
        />
      </Box>
      <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
        Player1234
      </Text>
      <Box
        position={'relative'}
        width={'100%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text variant={'body'} fontSize={16} color={'textColor'}>
          John Doe
        </Text>
        <Box position={'absolute'} right={0} mr="m" bottom={1}>
          <TouchableOpacity onPress={() => navigate('EditProfile')}>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              mt="s"
              justifyContent={'flex-end'}>
              <Text variant={'body_sm'} color={'textColor'} mr={'s'}>
                Edit profile
              </Text>
              <MaterialCommunityIcons name="pencil-outline" color={textColor} />
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <Box my={'xl'}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Date Of Birth
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          21 June, 2000
        </Text>
      </Box>
      <Box mb={'xl'}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Phone number
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          07030089111
        </Text>
      </Box>
      <Box mb={'xl'} alignItems={'center'}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Email
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          johndoe@example.com
        </Text>
      </Box>
    </Box>
  );
};
