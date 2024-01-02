import React, {FC, useState} from 'react';
import Box from '../components/Box';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import Text from '../components/Text';
import {StakeAmount} from '../components/StakeAmount';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StakeBal} from '../components/StakeBal';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Select from '../components/Select';
import SimpleInput from '../components/SimpleInput';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../components/Button';

type Props = {
  isVisible: boolean;
  close: any;
};
const AddStack: FC<Props> = ({isVisible, close}) => {
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
          Hi Captain, Noticed your handle (Display name) is still default:
        </Text>
        <Text
          fontWeight={'700'}
          textAlign={'center'}
          color={'textColor'}
          variant={'body_md'}>
          (Player123)
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
          label="Set the Stack"
        />
      </Box>
    </Modal>
  );
};
export const StakeGame = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, inputBorder, inputBg, gray, primary, overlayBg} = colors;
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Box px={'m'} backgroundColor="mainBg" pt={'l'} flex={1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AddStack
          isVisible={isModalVisible}
          close={() => setModalVisible(false)}
        />
        <Box>
          <TouchableOpacity>
            <FontAwesome6Icon
              size={20}
              name="arrow-left-long"
              color={textColor}
            />
          </TouchableOpacity>
        </Box>

        <Text
          variant={'h4'}
          fontWeight={'700'}
          color={'textColor'}
          textAlign={'center'}
          py="l">
          Select Stake
        </Text>

        <Text color={'textColor'} mx={'xxl'} textAlign={'center'}>
          Captain, you decide the stake each player must put into the pot
        </Text>
        <StakeAmount />
        <Box my="s" width={'90%'} flexDirection={'row'} alignItems={'center'}>
          <Feather name="info" size={16} color={textColor} />
          <Text variant={'body_md'} pl={'s'} color={'textColor'}>
            Ensure your wallet is funded for this transaction.
          </Text>
        </Box>
        <StakeBal />
        <Box my="xl" width={'90%'} flexDirection={'row'} alignItems={'center'}>
          <Box>
            <BouncyCheckbox
              size={20}
              fillColor={primary}
              unfillColor={inputBg}
              style={{
                borderRadius: 6,
              }}
              iconStyle={{borderColor: gray, borderRadius: 5}}
              innerIconStyle={{
                borderWidth: 1,
                borderRadius: 6,
                borderColor: inputBorder,
              }}
              textStyle={{fontFamily: 'JosefinSans-Regular'}}
              onPress={(isChecked: boolean) => {}}
            />
          </Box>
          <Text variant={'body_sm'} color={'textColor'}>
            Make this game private. Only those with the link can Join
          </Text>
        </Box>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Box
            bg={'primary'}
            py={'m'}
            mb={'l'}
            borderRadius={6}
            justifyContent={'center'}
            alignItems={'center'}>
            <Text variant={'body'} color={'white'}>
              Set the Stake
            </Text>
          </Box>
        </TouchableOpacity>
      </ScrollView>
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
