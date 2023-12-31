import React, { FC } from 'react'
import Box from './Box'
import Text from './Text';
import Button from './Button';
import { TouchableOpacity } from 'react-native';

type Props = {
  headerText: String;
  buttonText: String;
  icon: any;
  onButtonPressed:any;
}
export const InvitationHeader: FC<Props> = ({headerText,buttonText, icon, onButtonPressed}) => {
  return (
    <Box mt={'l'} flexDirection={"row"} alignItems={'flex-end'} justifyContent={"space-between"}>
      <Box  borderStyle={"solid"} borderBottomWidth={2} borderBottomColor={"primary"}>
        <Text  color="textColor"  textTransform='uppercase' variant={'body_md'} pb={"xs"} fontWeight={'700'}>
          {headerText}
        </Text>
      </Box>
      <TouchableOpacity onPress={onButtonPressed}>
        <Box alignItems={'center'} justifyContent={"center"} px={"s"}  py='xs' borderRadius={5} bg='mainBgInv' flexDirection={'row'}>
          <Text pl='s'  color='textColorInv'>{buttonText}</Text>
          <Box pt='xxs'  pl='s'>
            {icon}
          </Box>
        </Box>
      </TouchableOpacity>
    </Box>
  );
}
