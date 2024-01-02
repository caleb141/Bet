/* eslint-disable no-undef */
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
const {width} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import Box from './Box';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {usePreference} from '../state/hooks/preference.hook';
import {isEmpty} from 'lodash';

type Props = {
  data: any;
  value: string;
  onChangeText: any;
  label: string;
  hasError: boolean;
  placeholder?: string;
  handleBlur: any;
};
const Select: FC<Props> = ({
  data = [],
  label = 'Username',
  value,
  onChangeText,
  handleBlur,
  placeholder = '',
  hasError = false,
}) => {
  const [isActive, setIsActive] = useState(false);

  const {colors, textVariants} = useTheme<Theme>();
  const {primary, danger, faint, gray, muted, inputBg, textColor, inputBorder} =
    colors;
  const [color, setColor] = useState(gray);
  const {body} = textVariants;
  const {darkMode} = usePreference();
  const backgroundStyle = {
    backgroundColor: !darkMode
      ? inputBg
      : !isEmpty(value) && !darkMode
      ? muted
      : inputBg,
  };
  const borderStyle = {
    borderColor: hasError ? danger : inputBorder,
  };
  const textStyle = {
    color: isEmpty(value) ? textColor : gray,
  };
  const renderHeader = () => {
    return (
      <View style={[styles.header, styles.shadow]}>
        <Text style={styles.headerTitle}>{'Demo 1'}</Text>
      </View>
    );
  };
  useEffect(() => {
    if (!isEmpty(value)) {
      setColor(textColor);
    }
    console.log(value);
  }, [value]);
  useEffect(() => {}, [color]);
  return (
    <Box>
      <SelectDropdown
        data={data}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        onSelect={(selectedItem, index) => {
          if (label === 'Month') {
            onChangeText(index);
          } else {
            onChangeText(selectedItem);
          }
        }}
        onFocus={() => setIsActive(!isActive)}
        defaultButtonText={label}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={[
          styles.dropdown1BtnStyle,
          {...borderStyle, ...backgroundStyle},
        ]}
        buttonTextStyle={[
          styles.dropdown1BtnTxtStyle,
          {
            color: color,
            fontFamily: body.fontFamily,
            fontSize: 14,
          },
        ]}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={gray}
              size={12}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={[styles.dropdown1DropdownStyle, {borderColor: gray}]}
        rowStyle={[
          styles.dropdown1RowStyle,
          {borderBottomColor: gray, ...backgroundStyle},
        ]}
        rowTextStyle={[
          styles.dropdown1RowTxtStyle,
          {
            color: textColor,
            fontFamily: body.fontFamily,
            fontSize: body.fontSize,
          },
        ]}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: 'row',
    width,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F6F6F6',
  },
  headerTitle: {color: '#000', fontWeight: 'bold', fontSize: 16},
  saveAreaViewContainer: {flex: 1, backgroundColor: '#FFF'},
  viewContainer: {flex: 1, width, backgroundColor: '#FFF'},
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: '10%',
    paddingBottom: '20%',
  },

  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: 'red'},
  dropdown1RowStyle: {backgroundColor: 'red', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default Select;
