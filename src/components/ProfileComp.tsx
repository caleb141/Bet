import React from 'react';
import Box from './Box';
import ProfileAvatar from '../assets/svgs/profileUser.svg';
import {profileImg} from '../assets';
import Text from './Text';
import Button from './Button';
export const ProfileComp = () => {
  return (
    <Box alignItems={'center'} justifyContent={"center"}>
      <Box mt="xl" borderRadius={60}>
        <ProfileAvatar />
      </Box>
      <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
        Player1234
      </Text>
      <Box
        position={'relative'}
        width={'100%'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text variant={'body'} fontSize={16} color={'textColor'}>
          John Doe
        </Text>
        <Box position={'absolute'} right={0}>
          <Button label="Edit Profile" fontSize={12} color={'textColor'} />
        </Box>
      </Box>
      <Box my={'xl'}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Date Of Birth
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          21 June, 2000
        </Text>
      </Box>
      <Box mb={'xl'}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Phone number
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          07030089111
        </Text>
      </Box>
      <Box mb={'xl'} alignItems={"center"}>
        <Text py={'s'} color={'textColor'} variant={'title'} fontWeight={'600'}>
          Email
        </Text>
        <Text variant={'body'} textAlign={'center'} color={'textColor'}>
          johndoe@example.com
        </Text>
      </Box>
    </Box>
  );
};
