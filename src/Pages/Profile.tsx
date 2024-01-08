import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import Box from '../components/Box';
import Text from '../components/Text';
import {ProfileComp} from '../components/ProfileComp';
import { TouchableOpacity } from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import { usePreference } from '../state/hooks/preference.hook';
import { StatusBar } from 'react-native';
const Profile = () => {
   const {colors} = useTheme<Theme>();
   const {darkMode} = usePreference();
   const {mainBg,textColor, textColorInv} = colors;
  return (
    <Box backgroundColor="mainBg" flex={1}>
      {/* <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      /> */}
      <ScrollView>
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'row'}
          position={'relative'}
          pt="xl">
          {/* <Box position={'absolute'} left={0}>
            <TouchableOpacity>
              <FontAwesome6Icon
                size={20}
                name="arrow-left-long"
                color={textColor}
              />
            </TouchableOpacity>
          </Box> */}
          <Text
            variant={'h4'}

            color={'textColor'}
            textAlign={'center'}
            >
            MY PROFILE
          </Text>
        </Box>
        <ProfileComp />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {},
  scrollView: {
    // marginBottom: 20,
  },
});

export default Profile;
