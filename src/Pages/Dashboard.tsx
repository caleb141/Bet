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
import AntDesign from 'react-native-vector-icons/AntDesign'

const Dashboard = () => {
  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const {mainBg, textColorInv} = colors;
  return (
    <ScrollView>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <Box pb="m" backgroundColor="mainBg" flex={1}>
        <Header />
        <GameHeader />
        <Game />
        <Box px={'m'}>
          <InvitationHeader
            headerText="invitations"
            buttonText="Public game lobby"
            icon={<AntDesign name="right" size={10} color={textColorInv} />}
          />
          <Invitation />
          <Invitation />
          <InvitationHeader
            headerText="My Active Games"
            buttonText="Create new game"
            icon={
              <AntDesign name="pluscircleo" size={10} color={textColorInv} />
            }
          />
          <GameCard />
          <GameWeekHeader title={'GAME WEEK 16 FIXTURES'} />
          <Fixtures />
          <Fixtures />
          <Fixtures />
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    marginBottom: 20,
  },
});

export default Dashboard;
