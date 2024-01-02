import React from 'react'
import Box from './Box'
import Text from './Text'

export const GameHeader = () => {
  return (
    <Box alignItems={"center"} my={"m"}>
      <Text color={'textColor'} variant={'body'} fontWeight={'700'}>
        {' '}
        Game week 16
      </Text>
      <Text variant={"body_md"} color="textColor">Prediction deadline is in : 3 Days, 2 hrs, 15 mins</Text>
    </Box>
  );
}
