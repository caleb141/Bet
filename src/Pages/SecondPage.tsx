// React Native Tab
// https://aboutreact.com/react-native-tab/
import { useTheme } from '@shopify/restyle';
import * as React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  TouchableOpacity,
  StyleSheet,
  View,

  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Theme } from '../utils/theme';
import Box from '../components/Box';
import Text from '../components/Text';
import { LeaderBoardComp } from '../components/LeaderBoardComp';
import { LeaderBoard } from '../components/LaederBoard';
import { MainScreenNavigationProp } from '../utils/rootParams';
import { useNavigation } from '@react-navigation/native';

const SecondPage = ({navigation}:any) => {
    const {colors} = useTheme<Theme>();
    const {textColor, primary, overlayBg} = colors;
    const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Box bg="mainBg" flex={1}>
        <TouchableOpacity onPress={() => navigate('EditPredictions')}>
          <Box
            flexDirection={'row'}
            alignItems={'center'}
            alignSelf={'flex-end'}
            mt="s"
            justifyContent={'flex-end'}>
            <Text variant={'body_sm'} color={'textColor'} mr={'s'}>
              Edit predictions
            </Text>
            <MaterialCommunityIcons name="pencil-outline" color={textColor} />
          </Box>
        </TouchableOpacity>

        <Box
          py={'md'}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          bg={'fixtureBg'}
          flexDirection={'row'}
          alignItems={'center'}
          my="s"
          justifyContent={'space-between'}>
          <Text pl={'xl'} variant={'body_x'} color={'textColor'} mr={'s'}>
            Player
          </Text>
          <Text variant={'body_x'} color={'textColor'} mr={'s'}>
            GW 16 POINTS
          </Text>
        </Box>
        <ScrollView>
          <Box>
            <LeaderBoardComp />
            <LeaderBoard />
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
export default SecondPage;
