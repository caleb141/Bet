import React from 'react'
import Box from './Box'
import { StyleSheet, TextInput } from 'react-native'
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';





type TextInputProp = {
  value: any;
  onChangeText: any;
  placeholder: any;
};
export const BoxInput = ({value, onChangeText, placeholder}:TextInputProp) => {
  const {colors} = useTheme<Theme>();
  const {textColor, gray,inputBg,inputBorder,transactionColor} = colors;
  const styles = StyleSheet.create({
    input: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'inputBorder',
      width: widthPercentageToDP('12%'),
      height: heightPercentageToDP('5%'),
      lineHeight: 0,
      fontSize: 20,
      padding: 4,
      borderRadius: 6,

      textAlign: "center",


    },
  });

  return (
    <Box>
      <TextInput placeholder='-' placeholderTextColor={textColor}
        style={[styles.input, {borderColor: inputBorder, color: textColor, backgroundColor:inputBg}]}
      />
    </Box>
  );
}
