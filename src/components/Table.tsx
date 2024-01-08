import React from 'react';
import Box from './Box';
import GoldTrophy from '../assets/svgs/GoldTrophy.svg';
import Text from './Text';
import { stars } from '../assets';
import FastImage from 'react-native-fast-image';

export const Table = () => {
  return (
    <Box position={'relative'} py={"m"} flexDirection={"row"} justifyContent={"space-between"} mx="xl">
      <Box position={'absolute'} opacity={10} bg={"danger"} top={0} left={4}>
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
        <GoldTrophy />
        <Text color={'textColor'} ml={"xl"} variant={'body_md'} fontWeight={'700'}>
          1st
        </Text>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Text color={'textColor'} variant={'body_md'} >
          16
        </Text>
        <Text color={'textColor'} pl={"s"} ml={"xxl"} variant={'body_md'} >
          260
        </Text>
      </Box>
    </Box>
  );
};
