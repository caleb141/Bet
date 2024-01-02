import React, {FC, useState} from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RequestMoney from '../assets/svgs/requestMoney.svg';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Modal from 'react-native-modal';

type Props = {
  isVisible: boolean;
  close: any;
};
const AddBeneficiary: FC<Props> = ({isVisible, close}) => {
  const {colors} = useTheme<Theme>();
  const [banks, setBanks] = useState([]);
  const [bank, setBank] = useState('');
  const {overlayBg} = colors;
  const addBeneficiary = () => {};
  return (
    <Modal
      style={[styles.bottomModalView, {backgroundColor: overlayBg}]}
      isVisible={isVisible}
      backdropOpacity={0}
      hasBackdrop={true}
      backdropColor={overlayBg}
      onBackdropPress={close}>
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
          Add beneficiary
        </Text>

        <Box my="l" mx="m">
          <Select
            data={banks}
            value={bank}
            handleBlur={() => {}}
            hasError={false}
            onChangeText={(value: string) => console.log(value)}
            label="Select bank account"
          />
        </Box>

        <Box flexDirection={'row'} pl={'m'}>
          <Box flex={1} mr="m">
            <SimpleInput
              label="Username"
              value={''}
              onChangeText={() => {}}
              hasError={false}
              placeholder="Account number"
            />
          </Box>
        </Box>

        <Button
          accessibilityLabel="button"
          bg="primary"
          onPress={addBeneficiary}
          borderRadius={7}
          mt="l"
          mx="m"
          py={'m'}
          justifyContent={'center'}
          alignSelf={'flex-end'}
          width={'90%'}
          label="Add Beneficiary"
        />
      </Box>
    </Modal>
  );
};

import {BottomInput} from '../components/BottomInput';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Button from '../components/Button';
import {add} from 'lodash';
import SimpleInput from '../components/SimpleInput';
import Select from '../components/Select';
import {BeneficiaryList} from '../components/BeneficiaryList';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';
export const Withdrawal = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, primary, beneficiaryBtnText} = colors;
  const [amount, setAmount] = useState<number>(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const {navigate} = useNavigation<MainScreenNavigationProp>();

  return (
    <Box backgroundColor="mainBg" py={'l'} px={'m'} flex={1}>
      <AddBeneficiary
        isVisible={isModalVisible}
        close={() => setModalVisible(false)}
      />
      <Box flex={1}>
        <Box
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'row'}
          position={'relative'}>
          <Box position={'absolute'} left={0}>
            <TouchableOpacity>
              <FontAwesome6
                size={20}
                name="arrow-left-long"
                color={textColor}
              />
            </TouchableOpacity>
          </Box>
          <Text
            variant={'h5'}
            fontWeight={'700'}
            color={'textColor'}
            textAlign={'center'}>
            WITHDRAWAL
          </Text>
        </Box>
        <Text
          variant={'body_md'}
          textAlign={'center'}
          pt={'xxl'}
          pb={'l'}
          color={'transactionColor'}>
          Amount
        </Text>
        <Box
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'flex-end'}>
          <Text
            variant={'h3'}
            fontWeight={'700'}
            textAlign={'center'}
            color={'textColor'}>
            ₦
          </Text>
          <BottomInput
            value={amount}
            onChangeText={(e: any) => setAmount(e.target.value)}
          />
        </Box>
        <Text
          variant={'subtitle'}
          pt="xxl"
          textAlign={'center'}
          color={'textColor'}>
          ₦5,000
        </Text>
        <Text
          variant={'body_md'}
          textAlign={'center'}
          color={'transactionColor'}>
          Available Balance
        </Text>
        <Box
          py={'xxl'}
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Box flexDirection={'row'} alignItems={'center'}>
            <RequestMoney />
            <Text
              variant={'body_md'}
              pl={'s'}
              fontWeight={'700'}
              color={'textColor'}>
              Withdraw to beneficiary
            </Text>
          </Box>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Box
              bg="beneficiaryBtn"
              alignItems={'center'}
              flexDirection={'row'}
              p="xs"
              borderRadius={5}>
              <Entypo name="plus" size={12} color={beneficiaryBtnText} />
              <Text
                color={'beneficiaryBtnText'}
                variant={'body_md'}
                fontWeight={'700'}>
                Add Beneficiary
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box my="l" mx={'l'} width={'90%'} flexDirection={'row'}>
          <Feather name="info" size={16} color={primary} />
          <Box my="m" mx={'l'} width={'90%'} flexDirection={'row'}>
            <Feather name="info" size={16} color={textColor} />
            <Text variant={'body_md'} pl={'s'} color={'textColor'}>
              You do not have any beneficiary to process withdrawal. Add
              beneficiary and confirm withdrawal.
            </Text>
          </Box>
          <BeneficiaryList />
        </Box>

        <TouchableOpacity onPress={() => navigate('SuccessPage')}>
          <Box
            bg={'gray'}
            py={'m'}
            my="xl"
            borderRadius={6}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text variant={'body'} color={'muted'}>
              Confirm Withdrawal
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

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
