import React, { useState } from 'react'
import Box from './Box'
import Text from './Text';
import { BottomInput } from './BottomInput';

export const StakeAmount = () => {
 const [stakeAmount, setStakAmount]= useState<string>("")
  return (
    <Box>
      <Box
        mt={'xxl'}
        mb={'xl'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        mx={'xl'}>
        <Box
          bg={'fundBg'}
          py={'s'}
          px={'l'}
          borderRadius={30}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text
            variant={'h5'}
            color={'textColor'}
            fontSize={26}
            fontWeight={'500'}>
            ₦500
          </Text>
        </Box>
        <Box
          bg={'fundBg'}
          py={'s'}
          borderRadius={25}
          justifyContent={'center'}
          alignItems={'center'}
          px="l">
          <Text
            variant={'h5'}
            color={'textColor'}
            fontSize={26}
            fontWeight={'500'}>
            ₦1000
          </Text>
        </Box>
      </Box>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        mx={'xs'}>
        <Box
          bg={'fundBg'}
          py={'s'}
          px={'l'}
          borderRadius={30}
          justifyContent={'center'}
          alignItems={'center'}>
          <Text
            variant={'h5'}
            color={'textColor'}
            fontSize={26}
            fontWeight={'500'}>
            ₦2,000
          </Text>
        </Box>
        <Box
          bg={'fundBg'}
          py={'s'}
          borderRadius={25}
          justifyContent={'center'}
          alignItems={'center'}
          px="l">
          <Text
            variant={'h5'}
            color={'textColor'}
            fontSize={26}
            fontWeight={'500'}>
            ₦5,000
          </Text>
        </Box>
      </Box>
      <Box
        bg={'fundBg'}

        borderRadius={25}
        flexDirection={"row"}
        justifyContent={'center'}
        alignItems={'flex-end'}
        pb={"m"}
        px="l"
        my={"xl"}
        mx={"xxl"}>

        <Text
          variant={'h5'}
          color={'textColor'}
          fontSize={26}
          fontWeight={'500'}>
          ₦
        </Text>
        <BottomInput value={stakeAmount} onChangeText={(e:any)=>setStakAmount(e.target.value)} />
      </Box>
    </Box>
  );
}
