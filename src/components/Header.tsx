import { useTheme } from '@shopify/restyle';
import LogoDark from '../assets/svgs/logo-dark.svg';
import LogoLight from '../assets/svgs/logo-light.svg';
import { usePreference } from '../state/hooks/preference.hook';
import Box from './Box';
import React from 'react';
import { Theme } from '../utils/theme';
import Notification from "../assets/svgs/Doorbell.svg"
import Text from './Text';

export const Header = () => {
     const {darkMode} = usePreference();
     const {colors} = useTheme<Theme>();
     const {textColor} = colors;

  return (
    <Box
      mt={'s'}
      mx={"s"}
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}>
      <Box>{darkMode ? <LogoDark /> : <LogoDark />}</Box>
      <Box position={"relative"}>
        <Notification />
        <Box position={"absolute"} right={-2} top={-2} width={14} borderRadius={10} alignItems={"center"} justifyContent={"center"} height={14} bg={"primary"}>
            <Text variant={"body_xs"} color={"white"} >50</Text>
        </Box>
      </Box>
    </Box>
  );
};
