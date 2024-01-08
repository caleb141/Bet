import React, {FC} from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';
import Box from '../components/Box';
import {Theme} from '../utils/theme';
import {useTheme} from '@shopify/restyle';
import Text from '../components/Text';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
  position: any;
};
const TopTabBar: FC<Props> = ({state, descriptors, navigation, position}) => {
  const {colors} = useTheme<Theme>();
  const {textColor, primary, overlayBg, mainBg} = colors;
  return (
    <Box style={{flexDirection: 'row'}} my="s">
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_: any, i: number) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i: any) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Box
              borderStyle={'solid'}
              borderBottomWidth={isFocused ? 1 : 0}
              alignSelf={'flex-start'}
              borderBottomColor={'primary'}
              mx="m">
              <Text
                variant={'subtitle'}
                pb="s"
                style={{
                  color: textColor,
                  textAlign: 'left',
                  width: '80%',
                  // borderBottomWidth: isFocused ? 1 : 0,
                  // borderColor:primary,
                  // backgroundColor:'red'
                }}>
                {label}
              </Text>
            </Box>
          </TouchableOpacity>
        );
      })}
    </Box>
  );
};

export default TopTabBar;
