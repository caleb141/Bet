import React from 'react';

import Box from './Box';
import moment from 'moment';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import Avatar from '../assets/svgs/user.svg';
import {logo2} from '../assets';
import {TouchableOpacity} from 'react-native';
import Button from './Button';

export const Invitation = () => {
  return (
    <Box
      flexDirection={'row'}
      mt={'m'}
      justifyContent={'space-between'}
      width={'98%'}>
      <Box flexDirection={'row'}>
        <Avatar />
        <Box px={'xs'}>
          <Text variant={'body_md'} fontWeight={"700"} color={'textColor'}>
            Player1234
          </Text>
          <Text variant={'body_md'} color={'textColor'}>
            John Doe
          </Text>
          <Text
            variant={'body_md'}
            fontWeight={'700'}
            color={'textColor'}
            py={'s'}>
            {' '}
            Current Pot: ₦100,000{' '}
          </Text>
        </Box>
      </Box>
      <Box>
        <Text variant={'body_md'} color={'textColor'}>
          ₦10,000
        </Text>
        <Button
          label="Join"
          fontSize={12}
          bg={'primary'}
          mt='l'
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
