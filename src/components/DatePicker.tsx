import React, {FC, useState} from 'react';

import AntDesign from 'react-native-vector-icons/Entypo';
import Box from './Box';
import {Theme} from '../utils/theme';
import {useTheme} from '@shopify/restyle';
import {TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Text from './Text';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import moment from 'moment';

type Props = {
  value: string;
  updateValue: any;
};
const DatePicker: FC<Props> = ({value, updateValue}) => {
  const {colors} = useTheme<Theme>();
  const [isVisible, setIsVisible] = useState(false);
  const {mainBg, textColorInv,muted,gray} = colors;
  const handleConfirm = (date: any) => {
    updateValue(moment(date).format('yyyy-mm-D'))
    hideDatePicker();
  };
  const hideDatePicker = () => {
    setIsVisible(false);
  };
  return (
    <TouchableOpacity style={{flex: 1,height:heightPercentageToDP('6%')}} onPress={() => setIsVisible(true)}>
      <Box
        flex={1}
        bg="pickerBg"
        flexDirection={'row'}
        borderWidth={1}
        borderRadius={5}
        alignItems={'center'}
        px="s"
        height={140}
        justifyContent={'space-between'}
        borderColor={'pickerBorder'}>
        <Text color={'gray'} >{value ? value : 'Date'}</Text>
        <Box>
          <AntDesign name="chevron-down" size={18} color={gray} />
        </Box>
      </Box>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </TouchableOpacity>
  );
};

export default DatePicker;
