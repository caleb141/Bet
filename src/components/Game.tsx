import {useTheme} from '@shopify/restyle';
import LogoDark from '../assets/svgs/logo-dark.svg';
import LogoLight from '../assets/svgs/logo-light.svg';
import {usePreference} from '../state/hooks/preference.hook';
import Box from './Box';
import React from 'react';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import {game} from '../assets';
import {liveLogo} from '../assets';
import LiveLogo from '../assets/svgs/liveLogo.svg';

export const Game = () => {
  return (
    <Box mx="s">
      <FastImage
        style={{width: '100%', height: 140}}
        // source={{
        //   uri: '/src/assets/images/logo1.png',
        //   priority: FastImage.priority.normal,
        // }}
        source={game}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Box bg={'primary'} justifyContent={'space-between'} height={100}>
        <Box px={'s'}>
          <Text color={'liveColor'}>Live blog</Text>
          <Text color={'white'} variant={'h5'} fontWeight={'700'}>
            LIVE: Howe provides update on Gordon, Ream ruled out
          </Text>
        </Box>

        <Box position={'absolute'} right={0}>
          <LiveLogo />
        </Box>
        <Box></Box>
      </Box>
      <Box>

      </Box>
    </Box>
  );
};
