import React, {useEffect, useState} from 'react';
import Box from './Box';
import Text from './Text';
import {TouchableOpacity} from 'react-native';
import LeftArrowLight from '../assets/svgs/leftArrow.svg';
import {usePreference} from '../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LeftArrowDark from '../assets/svgs/leftArrowDark.svg';
import ToggleSwitch from 'toggle-switch-react-native';
import {useDispatch} from 'react-redux';
import {toggleMode} from '../state/reducers/preference.reducer';

type ToggleLightModeProp = {
  text: string;
  action?: any;
};

export const ToggleLightMode = ({text, action}: ToggleLightModeProp) => {
  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const {textColor, pillsBg, primary} = colors;
  const switchMode = () => {
    dispatch(toggleMode({}));
  };
  useEffect(() => {
    // console.log(darkMode)
  }, [darkMode])

  return (
    <Box
      flexDirection={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      mx={'m'}
      my={'m'}>
      <Text variant={'body'} color={'textColor'}>
        {text}
      </Text>

      <Box>
        <TouchableOpacity onPress={action}>
          <ToggleSwitch
            isOn={darkMode}
            onColor={pillsBg}
            offColor={primary}
            label=""
            labelStyle={{color: 'black', fontWeight: '900'}}
            size="small"
            onToggle={isOn => switchMode()}
          />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};
