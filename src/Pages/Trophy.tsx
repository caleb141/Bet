import React from 'react';
import Box from '../components/Box';
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {SettingsComp} from '../components/SettingsComp';
import {useNavigation} from '@react-navigation/native';
import {
  MainScreenNavigationProp,
  MainStackParamList,
} from '../utils/rootParams';
import {usePreference} from '../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import LiveLogo from '../assets/svgs/liveLogo.svg';
import Avatar from '../assets/svgs/user.svg';
import TrophyIcon from '../assets/svgs/trophy.svg';
import GoldTrophy from "../assets/svgs/GoldTrophy.svg"
import  RedTrophy from "../assets/svgs/RedTrophy.svg"
import { TableHeader } from '../components/TableHeader';
import { Table } from '../components/Table';
import { Silver } from '../components/Silver';
import { Bronze } from '../components/Bronze';
import { Positive } from '../components/Position';
import { GameWeek } from './GameWeek';
import { store } from '../state/store';
const Trophy = () => {
  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const {overlayBg, mainBg, sliderColor} = colors;
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box backgroundColor="mainBg" flex={1}>
      {/* <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      /> */}
      <ScrollView>
        <Text
          variant={'h5'}
          py={'m'}
          fontWeight={'700'}
          color={'textColor'}
          textAlign={'center'}>
          MY TROPHIES
        </Text>
        <Box
          mx={'m'}
          bg={'primary'}
          borderRadius={8}
          justifyContent={'center'}
          height={100}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Avatar />
            <Box px={'xs'}>
              <Text variant={'body_md'} fontWeight={'700'} color={'white'}>
                Player1234
              </Text>
              <Text variant={'body_md'} color={'white'}>
                John Doe
              </Text>
            </Box>
          </Box>
          <Box
            pt={'s'}
            mx={'xl'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Box alignItems={'center'} justifyContent={'center'}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <GoldTrophy />
                <Text
                  variant={'h3'}
                  ml={'xxs'}
                  fontWeight={'700'}
                  color={'white'}>
                  12
                </Text>
              </Box>
              <Text color={'white'}>Gold</Text>
            </Box>

            <Box alignItems={'center'} justifyContent={'center'}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <TrophyIcon />
                <Text
                  variant={'h3'}
                  ml={'xxs'}
                  fontWeight={'700'}
                  color={'white'}>
                  2
                </Text>
              </Box>
              <Text color={'white'}>Silver</Text>
            </Box>
            <Box alignItems={'center'} justifyContent={'center'}>
              <Box
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'center'}>
                <RedTrophy />
                <Text
                  variant={'h3'}
                  ml={'xxs'}
                  fontWeight={'700'}
                  color={'white'}>
                  3
                </Text>
              </Box>
              <Text color={'white'}>Bronze</Text>
            </Box>
          </Box>

          <Box position={'absolute'} right={0}>
            <LiveLogo />
          </Box>
          <Box></Box>
        </Box>
        <TableHeader />
        <TouchableOpacity onPress={() => navigate('GameWeek')}>
          <Table />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('GameWeek')}>
          <Silver />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('GameWeek')}>
          <Bronze />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('GameWeek')}>
          <Positive />
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};

export default Trophy;
