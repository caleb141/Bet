import React from 'react';
import {ScrollView} from 'react-native';
import {StyleSheet} from 'react-native';
import Box from '../components/Box';
import Text from '../components/Text';
import {ProfileComp} from '../components/ProfileComp';

const Profile = () => {
  return (
    <Box backgroundColor="mainBg" flex={1}>
      <ScrollView>
        <Text
          variant={'h5'}
          py={'xl'}
          fontWeight={'700'}
          color={'textColor'}
          textAlign={'center'}>
          MY PROFILE
        </Text>
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
