import {
    ColorProps,
    createBox,
    useResponsiveProp,
    useTheme,
  } from '@shopify/restyle';
  import React from 'react';
  import {
    ActivityIndicator,
    TouchableOpacity,
    TouchableOpacityProps,
  } from 'react-native';

  import Text from './Text';
import { Theme } from '../utils/theme';

  const BaseButton = createBox<Theme, TouchableOpacityProps>(TouchableOpacity);

  type Props = React.ComponentProps<typeof BaseButton> &
    ColorProps<Theme> & {
      label: string;
      isLoading?: boolean;
      fontSize?: number;
      leftIcon?: any;
    };

  const IconButton = ({
    label,
    isLoading,
    color= 'white',
    fontSize,
    leftIcon,
    ...props
  }: Props) => {
    const theme = useTheme<Theme>();

    // Will be 'purple' on phone and 'blue' on tablet
    const textColorProp = useResponsiveProp(color);

    // Can safely perform logic with the extracted value
    const bgColor ='primary';

    return (
      <BaseButton
        flexDirection="row"
        columnGap="s"
        backgroundColor={bgColor}
        {...props}
      >
        <Text fontSize={fontSize} variant="body" color={color}>
          {label}
        </Text>

        {isLoading ? (
          <ActivityIndicator color={theme.colors[textColorProp]} />
        ) : null}
        {leftIcon ? (
         {leftIcon()}
        ): null}
      </BaseButton>
    );
  };

  export default IconButton