import {backgroundColor, useTheme} from '@shopify/restyle';
import React, {useState, useRef, FC} from 'react';
import {Animated, Easing, TextInput, StyleSheet} from 'react-native';
import {Theme} from '../utils/theme';
import {isEmpty} from 'lodash';
import Button from './Button';
import {usePreference} from '../state/hooks/preference.hook';

type Props = {
  value: string;
  onChangeText: any;
  label: string;
  hasError: boolean;
  placeholder: string;
  secure: boolean;
  type: string;
  togglePassword: any;
  titleActiveSize?: number;
  titleInActiveSize?: number;
  titleActiveColor?: string;
  titleInactiveColor?: string;
};
const FlaotingTextInput: FC<Props> = ({
  label = 'Username',
  value,
  onChangeText,
  placeholder = 'hello',
  hasError = false,
  secure = false,
  togglePassword,
  type = 'text',
  titleActiveSize = 12,
  titleInActiveSize = 14,
  titleActiveColor = '#444444',
  titleInactiveColor = '#c2c2c2',
}) => {
  // const [text, onChangeText] = React.useState('');
  const animatedValue = useRef(new Animated.Value(0));
  const [isActive, setIsActive] = useState(false);
  const {darkMode} = usePreference();
  const {colors} = useTheme<Theme>();
  const {primary, danger, gray, muted, faint, inputBg, textColor,inputFilledBg,inputBorder} = colors;

  const borderStyle = {
    borderColor: isActive
      ? primary
      : hasError
      ? danger
      : inputBorder,
  };
  const backgroundStyle = {
    backgroundColor: isEmpty(value)? inputBg: inputFilledBg
  };
  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [10, -8],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
  };

  const viewStyles = {
    borderBottomColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
  };
  const onFocus = () => {
    setIsActive(true);
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    setIsActive(false);
    if (!value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles]}>
      {isActive && (
        <Animated.Text
          style={[
            returnAnimatedTitleStyles,
            {
              zIndex: 10,
              position: 'absolute',
              minWidth: '10%',
              maxWidth: '20%',
              marginLeft: 8,
              paddingHorizontal: 8,
              color: gray,
              ...backgroundStyle,
            },
          ]}>
          {label}
        </Animated.Text>
      )}
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[
          styles.textStyle,
          {...borderStyle, ...backgroundStyle, color: textColor},
        ]}
        onBlur={onBlur}
        secureTextEntry={secure}
        placeholder={!isActive && isEmpty(value) ? placeholder : ''}
        onFocus={onFocus}
        placeholderTextColor={gray}
      />
      {type === 'password' && (
        <Button
          position={'absolute'}
          right={10}
          onPress={() => togglePassword()}
          top="30%"
          ml="s"
          bg={'transparent'}
          color={'inputToggle'}
          label={secure ? 'Show' : 'Hide'}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    // marginBottom: 10,
  },
  textStyle: {
    borderWidth: 0.5,
    paddingBottom: 10,
    fontSize: 16,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
});

export default FlaotingTextInput;
