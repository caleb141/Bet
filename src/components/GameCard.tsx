import React from 'react';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import {game} from '../assets';
import {gameImg} from '../assets';
import Box from './Box';
import { ScrollView } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';


export const GameCard = () => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Box width={'98%'} my={'xl'} gap={'s'} flexDirection={'row'}>
        <Box width={widthPercentageToDP('24%')}>
          <FastImage
            style={{width: '100%', height: 80}}
            // source={{
            //   uri: '/src/assets/images/logo1.png',
            //   priority: FastImage.priority.normal,
            // }}
            source={gameImg}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text mx={'s'} variant={'body_sm'} mt={'xs'} color={'textColor'}>
            Salah and Son has done it again
          </Text>
        </Box>

        <Box width={widthPercentageToDP('24%')}>
          <Box flexDirection={'row'}>
            <FastImage
              style={{width: '50%', height: 80}}
              // source={{
              //   uri: '/src/assets/images/logo1.png',
              //   priority: FastImage.priority.normal,
              // }}
              source={gameImg}
              resizeMode={FastImage.resizeMode.cover}
            />
            <FastImage
              style={{width: '50%', height: 80}}
              // source={{
              //   uri: '/src/assets/images/logo1.png',
              //   priority: FastImage.priority.normal,
              // }}
              source={gameImg}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Box>

          <Text mx={'xs'} variant={'body_sm'} mt={'xs'} color={'textColor'}>
            Salah and Son has done it again
          </Text>
        </Box>
        <Box width={widthPercentageToDP('24%')}>
          <FastImage
            style={{width: '100%', height: 80}}
            // source={{
            //   uri: '/src/assets/images/logo1.png',
            //   priority: FastImage.priority.normal,
            // }}
            source={gameImg}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text mx={'xs'} variant={'body_sm'} mt={'xs'} color={'textColor'}>
            Salah and Son has done it again
          </Text>
        </Box>
        <Box width={widthPercentageToDP('24%')}>
          <FastImage
            style={{width: '100%', height: 80}}
            // source={{
            //   uri: '/src/assets/images/logo1.png',
            //   priority: FastImage.priority.normal,
            // }}
            source={gameImg}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Text
            numberOfLines={3}
            mx={'xs'}
            variant={'body_sm'}
            mt={'xs'}
            color={'textColor'}>
            Salah and Son has done it again
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};
