import React from 'react'
import Box from './Box';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { color, useTheme } from '@shopify/restyle';
import Text from './Text';
import { Theme } from '../utils/theme';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export const StakeBal = () => {
     const {colors} = useTheme<Theme>();
     const {textColor,gray} = colors;
  return (
    <Box>
      <Box my="l" width={'90%'} justifyContent={'center'} flexDirection={'row'}>
        <MaterialIcons name="refresh" size={24} color={gray} />
        <Text
          variant={'subtitle'}
          fontWeight={'700'}
          pl={'s'}
          color={'textColor'}>
          Your wallet balance: ₦50
        </Text>
      </Box>
      <Box
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}>
        <Text variant="body" mx="m" color={'primary'}>
          Fund wallet
        </Text>

        <Box mt={'l'}>
          <Text variant={'body_sm'} fontWeight={"700"} color={'textColor'}>
            Account number
          </Text>

          <Box flexDirection={'row'} alignItems={'center'}>
            <Text color={'textColor'} mr={'xs'} variant={'body_sm'}>
              0212330298
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                size={14}
                name="content-copy"
                color={textColor}
              />
            </TouchableOpacity>
          </Box>
          <Text variant={'body_sm'} color="textColor">
            Wema Bank
          </Text>
        </Box>
      </Box>
      
    </Box>
  );
}
