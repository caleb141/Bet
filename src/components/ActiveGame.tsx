import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

export const ActiveGame = () => {
  return (
    <Box mt={'l'} flexDirection={'row'} justifyContent={'space-between'}>
      <Box
        width={'35%'}
        borderStyle={'solid'}
        borderBottomWidth={2}
        borderBottomColor={'primary'}>
        <Text
          color="textColor"
          variant={'body_md'}
          pb={'xs'}
          fontWeight={'700'}>
          {' '}
          MY ACTIVE GAMES
        </Text>
      </Box>
      <Button
        px={'s'}
        borderRadius={6}
        color={'textColor'}
        alignItems={'center'}
        fontSize={12}
        label="Public game lobby"
      />
    </Box>
  );
};
