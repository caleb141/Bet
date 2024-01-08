import React from 'react';
import Box from './Box';
import GoldTrophy from '../assets/svgs/GoldTrophy.svg';
import Text from './Text';
import {stars} from '../assets';
import FastImage from 'react-native-fast-image';

export const Positive = () => {
  return (
    <Box
      position={'relative'}
      py={'m'}
      flexDirection={'row'}
      justifyContent={'space-between'}
      mx="xl">


      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text color={"textColor"} ml={"m"}>-</Text>
        <Text
          color={'textColor'}
          mx={'xl'}
          pl={"s"}
          variant={'body_md'}
          fontWeight={'700'}>
          20th
        </Text>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text color={'textColor'} variant={'body_md'}>
          16
        </Text>
        <Text color={'textColor'} pl={'s'} ml={'xxl'} variant={'body_md'}>
          260
        </Text>
      </Box>
    </Box>
  );
};
