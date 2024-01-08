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
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Select from '../components/Select';
import SimpleInput from '../components/SimpleInput';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';

type Props = {
  isVisible: boolean;
  close: any;
};
type ModalProps = {
  isVisible: boolean;
  close: any;
};


export const AddModal = ({isVisible, close}:ModalProps) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleNewModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <Box style={{flex: 1}}>
      <Button label="Show modal" onPress={toggleNewModal} />

      <Modal isVisible={isModalVisible}>
        <Box style={{flex: 1}}>
          <Text>Hello!</Text>

          <Button label="Hide modal" onPress={toggleNewModal} />
        </Box>
      </Modal>
    </Box>
  );
}

const AddStack: FC<Props> = ({isVisible, close}) => {
  const {colors} = useTheme<Theme>();
  const [banks, setBanks] = useState([]);
  const [bank, setBank] = useState('');
  const {overlayBg, black} = colors;
  const addBeneficiary = () => {};



  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();
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
        height={heightPercentageToDP('65%')}
        borderTopLeftRadius={20}
        p="m"
        mt={'m'}
        borderTopRightRadius={20}>
        <Text
          textAlign={'center'}
          color={'textColor'}
          variant={'body_md'}
          pt={"m"}>
          Hi Captain, Noticed your

        </Text>
        <Text

          textAlign={'center'}
          color={'textColor'}
          py={"xs"}
          variant={'body_md'}>
          handle (Display name) is still default:
        </Text>
        <Text
          fontWeight={'700'}
          textAlign={'center'}
          color={'textColor'}
          variant={'subtitle'}>
          (Player123)
        </Text>

        {/* <Box my="l" mx="m">
          <Select
            data={banks}
            value={bank}
            handleBlur={() => {}}
            hasError={false}
            onChangeText={(value: string) => console.log(value)}
            label="Select bank account"
          />
        </Box> */}
        <Text color={'textColor'} textAlign={'center'} variant={'body'} mt={"l"}>
          Do you want to change to your desired name?
        </Text>
        <Box
          flexDirection={'row'}
          mx={'l'}
          mt="xl"
          justifyContent={'space-between'}>
          <TouchableOpacity>
            <Box
              width={widthPercentageToDP('37%')}
              borderWidth={1}
              py={'xs'}
              px={'s'}
              borderRadius={4}
              borderColor={'textColor'}
              bg={'white'}>
              <Text textAlign={'center'} variant={'body'} color={'black'}>
                No, Continue with default
              </Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity>
            <Box
              width={widthPercentageToDP('37%')}
              borderWidth={1}
              borderColor={'primary'}
              py={'xs'}
              px={'m'}
              borderRadius={4}
              alignItems={'center'}
              justifyContent={'center'}
              bg={'primary'}>
              <Text textAlign={'center'} variant={'body'} color={'white'}>
                Yes, change display name
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>

        <Box flexDirection={'row'} pl={'m'} mt={'l'}>
          <Box flex={1} mr="m">
            <SimpleInput
              label="Username"
              value={''}
              onChangeText={() => {}}
              hasError={false}
              placeholder="Handle (display name)"
            />
          </Box>
        </Box>

        <Button
          accessibilityLabel="button"
          bg="primary"
          onPress={()=>navigate("StakeConfirmed")}
          borderRadius={7}
          mt="m"
          mx="m"
          py={'mm'}
          justifyContent={'center'}
          alignSelf={'flex-end'}
          width={'90%'}
          label="Submit"
        />
        <Text
          color={'danger'}
          variant={'body_md'}
          mx={'xl'}
          py={'m'}
          fontWeight={'700'}>
          Note: your handle (display name) can only be changed once.
        </Text>
      </Box>
    </Modal>
  );
};





export const StakeGame = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, inputBorder, inputBg, gray, primary, overlayBg} = colors;
  const [isModalVisible, setModalVisible] = useState(false);

  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();
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
          <TouchableOpacity onPress={goBack}>
            <FontAwesome6Icon
              size={20}
              name="arrow-left-long"
              color={textColor}
            />
          </TouchableOpacity>
        </Box>

        <Text
          variant={'h4'}

          color={'textColor'}
          textAlign={'center'}
          py="m">
          Select Stake
        </Text>

        <Text color={'textColor'} mx={'xl'} pt="m" textAlign={'center'}>
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
