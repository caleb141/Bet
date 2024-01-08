import React from 'react';
import {ScrollView, StatusBar, Text} from 'react-native';
import Box from '../components/Box';
import Fixtures from '../components/Fixtures';
import {Invitation} from '../components/Invitation';
import {Header} from '../components/Header';
import {Game} from '../components/Game';
import {StyleSheet} from 'react-native';
import {GameCard} from '../components/GameCard';
import {GameHeader} from '../components/GameHeader';
import {GameWeekHeader} from '../components/GameWeekHeader';
import {InvitationHeader} from '../components/InvitationHeader';
import {ActiveGame} from '../components/ActiveGame';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {usePreference} from '../state/hooks/preference.hook';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import {GameCardHeader} from '../components/GameCardHeader';
import {GameInvitation} from '../components/GameInvitation';

const Dashboard = () => {
  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const {mainBg, textColorInv} = colors;
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  console.log(darkMode);

  return (
    <>
      <Box backgroundColor="mainBg" flex={1}>
        <Box px="xs">
          <Header />
        </Box>

        <Box >
          <GameHeader />
        </Box>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Game />
          <Box px={'m'}>
            <InvitationHeader
              headerText="invitations"
              buttonText="Public game lobby"
              onButtonPressed={() => navigate('GameLobby')}
              icon={<AntDesign name="right" size={8} color={textColorInv} />}
            />
            <GameCardHeader />
            <Invitation />
            <Invitation />
            <Box mt={'m'}>
              <InvitationHeader
                headerText="My Active Games"
                buttonText="Create new game"
                onButtonPressed={() => navigate('CreateGame')}
                icon={
                  <AntDesign
                    name="pluscircleo"
                    size={10}
                    color={textColorInv}
                  />
                }
              />
            </Box>

            <GameCardHeader />
            <GameInvitation />
            <GameCard />
            <Box pb="s">
              <GameWeekHeader title={'GAME WEEK 16 FIXTURES'} />
            </Box>
            <Box pb="m">
              <Fixtures />
              <Fixtures />
              <Fixtures />
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    marginBottom: 20,
  },
});

export default Dashboard;
