import React, {useState} from 'react';
import Box from './Box';
import Text from './Text';
import TrophyIcon from '../assets/svgs/trophy.svg';
import GoldTrophy from '../assets/svgs/GoldTrophy.svg';
import Avatar from '../assets/svgs/user.svg';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {StatusBar} from 'react-native';
import {usePreference} from '../state/hooks/preference.hook';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import ModalInput from './ModalInput';
import Modal from 'react-native-modal';
import Button from './Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ongoing from './Ongoing';
import NotStarted from './NotStarted';
import FullTime from './FullTime';
import Lose from './Lose';
import { TouchableWithoutFeedback } from 'react-native';
export const LeaderBoardComp = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, beneficiaryBg, sliderColor, mainBg, primary, overlayBg} =
    colors;

  const {darkMode} = usePreference();

  const [deposit, setDeposit] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filterType, setFilterType] = useState('trans');
  const [refNum, setRefNum] = useState<string>('');
  const {navigate} = useNavigation<MainScreenNavigationProp>();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <Box>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <TouchableOpacity onPress={toggleModal}>
        <Box ml="s" flexDirection={'row'}>
          <Box flexDirection={'row'} alignItems={'center'}>
            <Text mr="l" color={'textColor'}>
              1
            </Text>
            <Box flexDirection={'row'} alignItems={'center'}>
              <Avatar />
              <Box px={'xs'}>
                <Text
                  variant={'body_md'}
                  fontWeight={'700'}
                  color={'textColor'}>
                  Player1234
                </Text>
                <Text variant={'body_md'} color={'textColor'}>
                  John Doe
                </Text>
              </Box>
            </Box>
          </Box>
          <Box ml={'xl'} flexDirection={'row'} alignItems={'center'}>
            <GoldTrophy />
            <Text variant={'body_md'} pl="xxl" color={'textColor'}>
              260
            </Text>
          </Box>
        </Box>
      </TouchableOpacity>

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
            height={heightPercentageToDP('65%')}
            borderTopLeftRadius={20}
            borderTopRightRadius={20}>
            <Box mx="m" pt="l">
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Box
                  pr="s"
                  py="s"
                  alignItems={'flex-end'}
                  justifyContent={'flex-end'}>
                  <AntDesign
                    name="close"
                    color={textColor}
                    size={20}></AntDesign>
                </Box>
              </TouchableOpacity>

              <Box flexDirection={'row'} alignItems={'center'}>
                <Avatar />
                <Box px={'xs'}>
                  <Text
                    variant={'body_md'}
                    fontWeight={'700'}
                    color={'textColor'}>
                    Player1234
                  </Text>
                  <Text variant={'body_md'} color={'textColor'}>
                    John Doe
                  </Text>
                </Box>
              </Box>

              <ScrollView>
                <TouchableWithoutFeedback>
                  <Box pb="s">
                    <NotStarted />
                    <Ongoing />
                    <FullTime />
                    <Lose />
                  </Box>
                </TouchableWithoutFeedback>
              </ScrollView>
            </Box>
          </Box>
        </Modal>
      </View>
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
