import React from 'react';
import Box from './Box';
import TrophyIcon from '../assets/svgs/trophy.svg';
import Text from './Text';
import {stars} from '../assets';
import FastImage from 'react-native-fast-image';

export const Silver = () => {
  return (
    <Box
      position={'relative'}
      py={'m'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      mx="xl">
      <Box position={'absolute'} opacity={10} bg={'danger'} top={0} left={4}>
        <FastImage
          style={{width: '10%', height: 80}}
          // source={{
          //   uri: '/src/assets/images/logo1.png',
          //   priority: FastImage.priority.normal,
          // }}
          source={stars}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <TrophyIcon />
        <Text
          color={'textColor'}
          ml={'xl'}
          variant={'body_md'}
          fontWeight={'700'}>
          2nd
        </Text>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text color={'textColor'} variant={'body_md'}>
          17
        </Text>
        <Text color={'textColor'} pl={'s'} ml={'xxl'} variant={'body_md'}>
          180
        </Text>
      </Box>
    </Box>
  );
};
