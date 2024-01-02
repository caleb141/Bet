import React from 'react'
import Box from './Box'
import Text from './Text'
import { TouchableOpacity } from 'react-native'
import LeftArrowLight from "../assets/svgs/leftArrow.svg"
import { usePreference } from '../state/hooks/preference.hook'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../utils/theme'
import AntDesign from "react-native-vector-icons/AntDesign"
import LeftArrowDark from "../assets/svgs/leftArrowDark.svg"

type SettingsProp = {
    text: string,
    action?: any;

}

export const SettingsComp = ({text,action}:SettingsProp) => {

     const {colors} = useTheme<Theme>();
     const {textColor} = colors;
  return (
    <TouchableOpacity onPress={action}>
      <Box
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        mx={"m"} my={"m"}>
        <Text variant={'body'} color={'textColor'}>
          {text}
        </Text>
        <Box>
            <AntDesign size={18} name="right" color={textColor}/>
        </Box>
      </Box>
    </TouchableOpacity>
  );
}
