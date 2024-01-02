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
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';
export const CreateGame = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, primary, overlayBg} = colors;
    const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box px={'m'} backgroundColor="mainBg" pt={'l'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'row'}
          position={'relative'}>
          <Box position={'absolute'} left={0}>
            <TouchableOpacity>
              <FontAwesome6Icon
                size={20}
                name="arrow-left-long"
                color={textColor}
              />
            </TouchableOpacity>
          </Box>
          <Text
            variant={'h5'}
            fontWeight={'700'}
            color={'textColor'}
            textAlign={'center'}>
            CREATE NEW GAME
          </Text>
        </Box>
        <GameHeader />
        <Box
          mt="xs"
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
                ₦0
              </Text>
              <Text color={'white'}>Total pot staked</Text>
            </Box>
            <Box>
              <Box alignItems={'center'} pt={'xs'}>
                <Text variant="subtitle" color="white">
                  0
                </Text>
                <Text variant="body_sm" color="white">
                  No. of players
                </Text>
              </Box>
              <Box alignItems={'center'} pt="m">
                <Text variant="subtitle" color="white">
                  ₦0
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
          <Box></Box>
        </Box>
        <GameWeekHeader title="Predictions" />
        <InputFixtures />
        <InputFixtures />
        <InputFixtures />
        <InputFixtures />
        <Text color={'primary'} textAlign={'center'} py={'l'}>
          You must predict scores for every fixture and place your bet before
          deadline
        </Text>
        <TouchableOpacity onPress={() => {navigate("StakeGame")}}>
          <Box
            bg={'gray'}
            py={'m'}
            mb={"l"}
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
