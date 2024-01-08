import React from 'react'
import Box from '../components/Box'
import Text from '../components/Text';
import LiveLogo from '../assets/svgs/liveLogo.svg';
import { StatusBar, TouchableOpacity } from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import { GameHeader } from '../components/GameHeader';
import { MainScreenNavigationProp } from '../utils/rootParams';
import { usePreference } from '../state/hooks/preference.hook';
import TopTab from '../navigation/TopTab';
import { heightPercentageToDP } from 'react-native-responsive-screen';
export const MyActiveGame = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, beneficiaryBg, sliderColor, mainBg, primary, overlayBg} =
    colors;

  // const {darkMode} = usePreference();

   const {navigate,goBack} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box px={'m'} bg={'mainBg'} pt={'l'} flex={1}>
      {/* <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      /> */}

      <Box
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        position={'relative'}>
        <Box position={'absolute'} left={0}>
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
          textTransform={'uppercase'}>
          MY ACTIVE GAMES
        </Text>
      </Box>

      <Box
        mt="m"
        bg={'primary'}
        borderRadius={8}
        justifyContent={'space-between'}
        height={100}>
        <Box
          px={'l'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Box justifyContent={'center'} alignItems={'center'} pt={'l'}>
            <Text variant={'h3'} color={'white'} fontWeight={'700'}>
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

        <Box position={'absolute'} right={0}>
          <LiveLogo />
        </Box>
        {/* <Text>Hello</Text> */}
      </Box>
      <Box
        alignItems={'center'}
        flexDirection={'row'}
        mt={'xs'}
        justifyContent={'space-between'}>
        <Text pl={'xs'} color={'textColor'} variant={'body_sm'}>
          Game Captain: Team lele
        </Text>
      </Box>

      <Box
        mt={'m'}
        width={'100%'}
        height={heightPercentageToDP('100%')}
        flex={1}
        bg="mainBg">
        <TopTab />
      </Box>
    </Box>
  );
}
