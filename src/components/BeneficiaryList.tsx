import React from 'react'
import Box from './Box';
import Text from './Text';
import moment from 'moment';
import  Coins from "../assets/svgs/coins.svg"
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BouncyCheckbox from 'react-native-bouncy-checkbox';


type BeneficiaryProp ={
    bg:any,

}

export const BeneficiaryList = () => {
    const {colors} = useTheme<Theme>();
    const {textColor,inputBorder,inputBg,gray, beneficiaryBg,primary} = colors;

  return (
    <Box flexDirection={'row'} mt={'m'} alignItems={"center"} justifyContent={'space-between'}>
      <Box flexDirection={'row'}>
        <Box
          width={40}
          height={40}
          alignItems={'center'}
          justifyContent={'center'}
          bg="beneficiaryBg"
          borderRadius={50}>
          <FontAwesome name="bank" size={16} color={primary} />
        </Box>
        <Box px={'xs'} ml="s">
          <Text variant={'body'} fontWeight={'700'} color={'transactionColor'}>
            John Doe Smith
          </Text>
          <Text variant={'body_md'} color={'transactionColor'}>
            First City Monument Bank
          </Text>
          <Text
            variant={'body_md'}
            fontWeight={'400'}
            color={'transactionColor'}>
            {' '}
            1410242020
          </Text>
        </Box>
      </Box>
      <Box>
        <BouncyCheckbox
          size={22}
          fillColor={primary}
          unfillColor={inputBg}
          style={{
            borderRadius: 6,
          }}
          iconStyle={{borderColor: gray, borderRadius: 5}}
          innerIconStyle={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: inputBorder,
          }}
          textStyle={{fontFamily: 'JosefinSans-Regular'}}
          onPress={(isChecked: boolean) => {}}
        />
      </Box>
    </Box>
  );
}
