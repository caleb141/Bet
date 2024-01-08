import React from 'react'
import Box from './Box'
import Text from './Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';


type SuccessProp ={
    title:any,
    text:any,

}
export const SuccessComp = ({title, text}:SuccessProp) => {
      const {colors} = useTheme<Theme>();
      const {textColor} = colors;
  return (
    <Box alignItems={'center'} mx={"m"} mt={"l"} justifyContent={'center'}>
      <Text color={"textColor"} textAlign={"center"} variant={"h4"} fontWeight={"600"}>{title}</Text>
      <Text color={"textColor"} textAlign={"center"} variant={"body"} pt={"l"}>{text}</Text>
    </Box>
  );
}
