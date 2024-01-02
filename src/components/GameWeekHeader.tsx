import React from 'react';
import Box from './Box';
import Text from './Text';

type GameWeekHeaderProp  ={
    title : string;
}

export const GameWeekHeader = ({title}:GameWeekHeaderProp) => {

  return (
    <Box alignItems={'center'} my={"s"} >
      <Text color={'textColor'} variant={'subtitle'} >
        {title}

      </Text>
    </Box>
  );
};
