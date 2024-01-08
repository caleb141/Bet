import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,

  SafeAreaView,
  ScrollView,
} from 'react-native';
import Box from '../components/Box';
import Fixtures from '../components/Fixtures';
import NotStarted from '../components/NotStarted';
import Ongoing from '../components/Ongoing';
import FullTime from '../components/FullTime';
import Lose from '../components/Lose';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import Text from '../components/Text';
import Mode from "..//assets/svgs/mode.svg"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MainScreenNavigationProp } from '../utils/rootParams';
import { useNavigation } from '@react-navigation/native';
const FirstPage = ({navigation}:any) => {
    const {colors} = useTheme<Theme>();
    const {textColor, primary, overlayBg} = colors;
 const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            Home{'\n'}(You are on FirstPage)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SecondPage')}>
            <Text>Go to settng Tab</Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          React Native Tab Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.aboutreact.com
        </Text>
      </View> */}

      <Box bg={'mainBg'} flex={1}>
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
        <ScrollView>
          <NotStarted />
          <Ongoing />
          <FullTime />
          <Lose />
          <NotStarted />
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
export default FirstPage;
