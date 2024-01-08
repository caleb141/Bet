import React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {GameHeader} from '../components/GameHeader';
import {GameWeekHeader} from '../components/GameWeekHeader';
import LiveLogo from '../assets/svgs/liveLogo.svg';
import Fixtures from '../components/Fixtures';
import InputFixtures from '../components/InputFixture';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { StatusBar } from 'react-native';
import { usePreference } from '../state/hooks/preference.hook';
export const JoinGame = () => {
  const {colors} = useTheme<Theme>();
   const {darkMode} = usePreference();
  const {textColor, mainBg ,primary, overlayBg} = colors;
  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box px={'md'} backgroundColor="mainBg" pt={'l'} flex={1}>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <Box
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        position={'relative'}
        pt="xxs">
        <Box position={'absolute'} top={4} left={2}>
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
          JOIN GAME
        </Text>
      </Box>
      <GameHeader />
      <Box

        bg={'primary'}
        borderRadius={8}
        justifyContent={'space-between'}
        height={100} mb={"s"}>
        <Box
          px={'m'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Box justifyContent={'center'} alignItems={'center'} pt={'l'}>
            <Text variant={'h3'} color={'white'} >
              ₦100,000
            </Text>
            <Text color={'white'}>Total pot staked</Text>
          </Box>
          <Box>
            <Box alignItems={'center'} pt={'xs'}>
              <Text variant="subtitle" color="white">
                5
              </Text>
              <Text variant="body_sm" color="white">
                No. of players
              </Text>
            </Box>
            <Box alignItems={'center'} pt="m">
              <Text variant="subtitle" color="white">
                ₦20,000
              </Text>
              <Text variant="body_sm" color="white">
                each player stake
              </Text>
            </Box>
          </Box>
        </Box>

        <Box position={'absolute'} top={-22} right={1} borderRadius={6}>
          <LiveLogo height={heightPercentageToDP('20%')} />
        </Box>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <GameWeekHeader title="Make your predictions" />
        <Box px={'s'}>
          <InputFixtures />
          <InputFixtures />
          <InputFixtures />
          <InputFixtures />
        </Box>

        <Text color={'primary'} textAlign={'center'} px={'s'} py={'l'}>
          You must predict scores for every fixture and place your bet before
          deadline
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate('StakeConfirmed');
          }}>
          <Box
            bg={'gray'}
            py={'m'}
            mb={'l'}
            borderRadius={6}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text variant={'body'} color={'muted'}>
              Submit Predictions
            </Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
    </Box>
  );
};
