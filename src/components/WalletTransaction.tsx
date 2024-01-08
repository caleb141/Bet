import React, {useState} from 'react';
import Box from './Box';
import Text from './Text';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {FlatList, StatusBar, TouchableOpacity} from 'react-native';
import {backgroundColor, useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {Transaction, TransactionItem} from './TransactionDanger';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import FlaotingTextInput from './Input';
import SimpleInput from './SimpleInput';
import Select from './Select';
import DatePicker from './DatePicker';
import {usePreference} from '../state/hooks/preference.hook';
import Button from './Button';

import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';

export default function WalletModal() {
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;
  const {overlayBg} = colors;
  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'textColor',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomModalView: {
    justifyContent: 'flex-end',
    margin: 0,
    // backgroundColor?',
  },

  buttonText: {
    fontWeight: 'bold',
  },
  modal: {
    width: '100%',
    height: '40%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'white',
  },
  modalText: {
    fontSize: 20,
  },
});

const transactions: Transaction[] = [
  {
    type: 'deposit',
  },
  {
    type: 'withdraw',
  },
  {
    type: 'win',
  },
];

export const WalletTransaction = () => {
  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const {overlayBg, mainBg, sliderColor} = colors;
  const [deposit, setDeposit] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filterType, setFilterType] = useState('trans');
  const [refNum, setRefNum] = useState<string>("");
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const applyFilter = () => {

  }

  return (
    <Box bg={'fixtureBg'} borderRadius={6} mx={'m'} px={'m'} py={'s'}>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        pb={'s'}>
        <Text fontWeight={'700'} variant={'subtitle'} color={'textColor'}>
          Transactions
        </Text>
        <TouchableOpacity>
          <TouchableHighlight onPress={toggleModal}>
            <FontAwesome6 size={20} name="sliders" color={sliderColor} />
          </TouchableHighlight>
        </TouchableOpacity>
      </Box>
      <FlatList
        data={transactions}
        renderItem={({item, index}) => (
          <TransactionItem item={item} key={index} />
        )}
      />
      <View style={styles.container}>
        <Modal
          style={[styles.bottomModalView, {backgroundColor: overlayBg}]}
          isVisible={isModalVisible}
          backdropOpacity={0}
          hasBackdrop={true}
          backdropColor={overlayBg}
          onBackdropPress={toggleModal}>
          <Box
            bg="mainBg"
            height={heightPercentageToDP('40%')}
            borderTopLeftRadius={20}
            p="m"
            borderTopRightRadius={20}>
            <Text
              fontWeight={'700'}
              textAlign={'center'}
              color={'textColor'}
              variant={'body_md'}>
              Filter
            </Text>

            <Box flexDirection={'row'} pl={'m'}>
              <TouchableOpacity onPress={() => setFilterType('trans')}>
                <Box
                  height={14}
                  borderStyle={'solid'}
                  borderWidth={2}
                  mr="m"
                  borderColor={'gray'}
                  bg={filterType === 'trans' ? 'primary' : 'white'}
                  width={14}
                  borderRadius={100}
                />
              </TouchableOpacity>
              <Box flex={1} mr="m">
                <Text mb="s" color={'textColor'} variant={'body_md'}>
                  Transaction Reference number
                </Text>
                <SimpleInput
                  label="Username"
                  value={''}
                  onChangeText={() => {}}
                  hasError={false}
                  placeholder="Transaction ref. no."
                />
              </Box>
            </Box>

            <Box  flexDirection={'row'} pl={'m'} >
              <TouchableOpacity onPress={() => setFilterType('data')}>
                <Box
                  height={14}
                  borderStyle={'solid'}
                  borderWidth={2}
                  bg={filterType === 'data' ? 'primary' : 'white'}
                  mr="m"
                  borderColor={'gray'}
                  width={14}
                  borderRadius={100}
                />
              </TouchableOpacity>
              <Box flex={1} mr="m">
                <Text mb="s" color={'textColor'} variant={'body_md'}>
                  Date Range
                </Text>
                <Box flexDirection={'row'}>
                  <Box flex={1} flexDirection={'row'} alignItems={'center'}>
                    <DatePicker
                      value={from}
                      updateValue={(value: string) => setFrom(value)}
                    />
                    <Text color={"textColor"} mx="m">and</Text>
                    <DatePicker
                      value={to}
                      updateValue={(value: string) => setTo(value)}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            <Button
              accessibilityLabel="button"
              bg="primary"
              onPress={applyFilter}
              borderRadius={7}
              mt="l"
              mx='m'
              py={'mm'}
              justifyContent={'center'}
              alignSelf={'flex-end'}
              width={'83%'}
              label="Apply"
            />
          </Box>
        </Modal>
      </View>
    </Box>
  );
};
