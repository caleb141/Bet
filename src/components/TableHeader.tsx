import React from 'react'
import Box from './Box';
import Text from './Text';

export const TableHeader = () => {
  return (
    <Box
      mx={'m'}
      px={'m'}
      mt={'m'}
      py={'md'}
      borderTopLeftRadius={10}
      borderTopRightRadius={10}
      bg={'fixtureBg'}
      justifyContent={'flex-end'}
      alignItems={'flex-end'}
      flexDirection={'row'}>
      <Text color={'textColor'} mx={'m'} variant={'body_x'} fontWeight={'700'}>
        POSITION
      </Text>
      <Text color={'textColor'} mx="xl" variant={'body_x'} fontWeight={'700'}>
        GAME WEEK
      </Text>
      <Text color={'textColor'} ml={'s'} variant={'body_x'} fontWeight={'700'}>
        POINTS
      </Text>
    </Box>
  );
}
