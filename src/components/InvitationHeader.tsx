import React, { FC } from 'react'
import Box from './Box'
import Text from './Text';
import Button from './Button';
import { TouchableOpacity } from 'react-native';

type Props = {
  headerText: String;
  buttonText: String;
  icon: any
}
export const InvitationHeader: FC<Props> = ({headerText,buttonText, icon}) => {
  return (
    <Box mt={'l'} flexDirection={"row"} alignItems={'flex-end'} justifyContent={"space-between"}>
      <Box  borderStyle={"solid"} borderBottomWidth={2} borderBottomColor={"primary"}>
        <Text  color="textColor"  textTransform='uppercase' variant={'body_md'} pb={"xs"} fontWeight={'700'}>
          {headerText}
        </Text>
      </Box>
      <TouchableOpacity>
        <Box alignItems={'center'} py='s' borderRadius={5} bg='mainBgInv' flexDirection={'row'}>
          <Text pl='m'  color='textColorInv'>{buttonText}</Text>
          <Box pr='s' pl='m'>

          {icon}
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
