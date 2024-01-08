import {backgroundColor, useTheme} from '@shopify/restyle';
import React, {useState, useRef, FC} from 'react';
import {Animated, Easing, TextInput, StyleSheet} from 'react-native';
import {Theme} from '../utils/theme';
import {isEmpty} from 'lodash';
import Button from './Button';
import {usePreference} from '../state/hooks/preference.hook';
import Box from './Box';
import { widthPercentageToDP } from 'react-native-responsive-screen';

type Props = {
  value: string;
  onChangeText: any;
  label: string;
  hasError: boolean;
  placeholder: string;
  secure?: boolean;
  type?: string;
};
const ModalInput: FC<Props> = ({
  label = 'Username',
  value,
  onChangeText,
  placeholder = 'hello',
  hasError = false,
  secure = false,
  type = 'text',
}) => {
  // const [text, onChangeText] = React.useState('');

  const [isActive, setIsActive] = useState(false);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {
    primary,
    danger,
    gray,
    muted,
    faint,
    inputBg,
    textColor,
    inputFilledBg,
    inputBorder,
  } = colors;

  const borderStyle = {
    borderColor: isActive ? primary : hasError ? danger : inputBorder,
  };
  const backgroundStyle = {
    backgroundColor: isEmpty(value) ? inputBg : inputFilledBg,
  };

  const onFocus = () => {
    setIsActive(true);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  return (
    <Box style={[styles.subContainer]}>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[
          styles.textStyle,
          {...borderStyle, ...backgroundStyle, color: textColor },
        ]}
        onBlur={onBlur}
        secureTextEntry={secure}
        placeholder={!isActive && isEmpty(value) ? placeholder : ''}
        onFocus={onFocus}
        placeholderTextColor={gray}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    marginBottom: 10,
  },
  textStyle: {
    borderWidth: 0.5,
    paddingBottom: 5,
    paddingTop: 5,
    fontSize: 16,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: widthPercentageToDP("30%"),
  },
});

export default ModalInput;
