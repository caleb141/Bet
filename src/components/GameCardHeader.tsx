import React from 'react'
import Box from './Box'
import Text from './Text';

export const GameCardHeader = () => {
  return (
    <Box alignItems={"center"} flexDirection={"row"} mt={"m"} justifyContent={"space-between"}>
      <Text color={"textColor"} variant={'body_x'} fontWeight={'700'}>
        GAME CAPTAIN & CURRENT POT
      </Text>
      <Text color={"textColor"} variant={'body_x'} fontWeight={'700'}>
        PLAYER STAKE
      </Text>
    </Box>
  );
}
