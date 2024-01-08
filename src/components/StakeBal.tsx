import React, { useState } from 'react'
import Box from './Box';
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { color, useTheme } from '@shopify/restyle';
import Text from './Text';
import { Theme } from '../utils/theme';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Clipboard from '@react-native-clipboard/clipboard';
export const StakeBal = () => {
     const {colors} = useTheme<Theme>();
     const {textColor,gray} = colors;

     const accountDetails={
      Name:"Account number",
      AccountNumber:"0212330298",
      BankName:"Wema Bank",
     }
     const [copiedText, setCopiedText] = useState(accountDetails)
     const copyToClipboard =(data:any)=>{
           const jsonString = JSON.stringify(data);
      Clipboard.setString(jsonString)
      console.log(jsonString, "Successfully copied")
      // Clipboard.setStrings("hello world")
     }
  return (
    <Box mb="l">
      <Box mt="l" width={'90%'} justifyContent={'center'} flexDirection={'row'}>
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

        <Box mt={'xs'} >
          <Text variant={'body_sm'} fontWeight={"700"} color={'textColor'}>
          {accountDetails.Name}
          </Text>

          <Box flexDirection={'row'} alignItems={'center'}>
            <Text color={'textColor'} mr={'xs'} variant={'body_sm'}>
            {accountDetails.AccountNumber}
            </Text>
            <TouchableOpacity onPress={()=>copyToClipboard(accountDetails)}>
              <MaterialCommunityIcons
                size={14}
                name="content-copy"
                color={textColor}
              />
            </TouchableOpacity>
          </Box>
          <Text variant={'body_sm'} color="textColor">
           {accountDetails.BankName}
          </Text>
        </Box>
      </Box>

    </Box>
  );
}
