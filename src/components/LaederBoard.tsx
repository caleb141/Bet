import React from 'react';
import Box from './Box';
import Text from './Text';
import TrophyIcon from '../assets/svgs/trophy.svg';
import GoldTrophy from '../assets/svgs/GoldTrophy.svg';
import Avatar from '../assets/svgs/user.svg';
export const LeaderBoard = () => {
  return (
    <Box ml="s" my={"l"} flexDirection={'row'} justifyContent={"space-between"}>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Text mr="l" color={'textColor'}>
          2
        </Text>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Avatar />
          <Box px={'xs'}>
            <Text variant={'body_md'} fontWeight={'700'} color={'textColor'}>
              Player1234
            </Text>
            <Text variant={'body_md'} color={'textColor'}>
              John Doe
            </Text>
          </Box>
        </Box>
      </Box>
      <Box pr="xl" flexDirection={'row'} justifyContent={"space-between"}>

        <Text variant={'body_md'}  color={'textColor'}>
          260
        </Text>
      </Box>
    </Box>
  );
};
