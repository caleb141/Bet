import React from 'react';

import Box from './Box';
import moment from 'moment';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import Avatar from '../assets/svgs/user.svg';
import {logo2} from '../assets';
import {TouchableOpacity} from 'react-native';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';

export const GameInvitation = () => {
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box
      flexDirection={'row'}
      mt={'m'}
      justifyContent={'space-between'}
      width={'98%'}>
      <Box flexDirection={'row'}>
        <Avatar />
        <Box px={'xs'}>
          <Text variant={'body_md'} fontWeight={'700'} color={'textColor'}>
            Team lele
          </Text>
          <Text variant={'body_md'} color={'textColor'}>
            Samsung
          </Text>
          <Box my={"s"} borderWidth={1} py={"xxs"}  borderColor={"textColor"} borderRadius={20} px={"s"}  bg="white">
            <Text
              variant={'body_sm'}

              color={'black'}
             >
              {' '}
              Total Staked: ₦100,000
            </Text>
          </Box>
        </Box>
      </Box>
      <Box>
        <Text variant={'body_md'} color={'textColor'}>
          ₦5,000
        </Text>
        <Button
          onPress={() => navigate('MyActiveGame')}
          label="Open"
          fontSize={12}
          bg={'primary'}
          mt="l"
          py={'xxs'}
          justifyContent={'center'}
          alignItems={'center'}
          px={'s'}
          borderRadius={4}
        />
      </Box>
    </Box>
  );
};
