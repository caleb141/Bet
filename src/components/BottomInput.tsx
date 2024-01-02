import React from 'react'
import { TextInput } from 'react-native'
import Box from './Box'
import { StyleSheet } from 'react-native'
import { useTheme } from '@shopify/restyle'
import { Theme } from '../utils/theme'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'



type TextInputProp ={
  value:any,
  onChangeText:any,



}


export const BottomInput = ({value, onChangeText}:TextInputProp) => {
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;
  const styles = StyleSheet.create({
  input: {

    borderStyle: "solid",
    borderBottomWidth: 2,
    borderColor:"textColor",
    width: widthPercentageToDP('25%'),
    lineHeight:0,
    fontSize:20,
    padding:4,



  }
})

  return (
   <Box>
    <TextInput style={[styles.input, {borderColor:textColor, color:textColor }]}/>
   </Box>
  )


}

