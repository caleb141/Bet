import React, {useState} from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {GameHeader} from '../components/GameHeader';
import {GameWeekHeader} from '../components/GameWeekHeader';
import LiveLogo from '../assets/svgs/liveLogo.svg';
import Fixtures from '../components/Fixtures';
import InputFixtures from '../components/InputFixture';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import {GameCardHeader} from '../components/GameCardHeader';
import {Invitation} from '../components/Invitation';
import SimpleInput from '../components/SimpleInput';
import SmallInput from '../components/SmallInput';
import {TouchableHighlight} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {View} from 'react-native';
import {StatusBar} from 'react-native';
import {usePreference} from '../state/hooks/preference.hook';
import Button from '../components/Button';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';
import ModalInput from '../components/ModalInput';
export const GameLobby = () => {
  const {colors} = useTheme<Theme>();
  const {textColor, beneficiaryBg,sliderColor,mainBg, primary, overlayBg} = colors;

  const {darkMode} = usePreference();

  const [deposit, setDeposit] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [filterType, setFilterType] = useState('trans');
  const [refNum, setRefNum] = useState<string>('');
  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const applyFilter = () => {};
  return (
    <Box px={'m'} backgroundColor="mainBg" pt={'l'} flex={1}>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />

      <Box
        justifyContent={'center'}
        alignItems={'center'}
        flexDirection={'row'}
        position={'relative'}>
        <Box position={'absolute'} left={0}>
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
          textTransform={'uppercase'}>
          Public game lobby
        </Text>
      </Box>
      <Box flexDirection={'row'} mt={'l'} justifyContent={'center'}>
        <Box flex={1} mr="s">
          <SmallInput
            label="Username"
            value={''}
            onChangeText={() => {}}
            hasError={false}
            placeholder="Captain handle"
          />
        </Box>
        <TouchableOpacity>
          <TouchableHighlight onPress={toggleModal}>
            <FontAwesome6 size={26} name="sliders" color={sliderColor} />
          </TouchableHighlight>
        </TouchableOpacity>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          px={'m'}
          mt={'s'}
          py={'md'}
          borderTopLeftRadius={10}
          borderTopRightRadius={10}
          bg={'fixtureBg'}
          justifyContent={'space-between'}
          alignItems={'center'}
          flexDirection={'row'}>
          <Text color={'textColor'} variant={'body_x'} fontWeight={'700'}>
            GAME CAPTAIN & CURRENT POT
          </Text>
          <Text color={'textColor'} variant={'body_x'} fontWeight={'700'}>
            PLAYER STAKE
          </Text>
        </Box>
        <Invitation />
        <Invitation />
        <Invitation />
        <Invitation />
        <Invitation />
      </ScrollView>

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
            borderTopRightRadius={20}>
            <Box mx="s" pt="l">
              <Text
                fontWeight={'700'}
                textAlign={'center'}
                color={'textColor'}
                variant={'body_md'}
                pb={'m'}>
                Filter
              </Text>

              <Box flexDirection={'row'} pl={'m'}>
                <TouchableOpacity onPress={() => setFilterType('trans')}>
                  <Box
                    height={16}
                    borderStyle={'solid'}
                    borderWidth={2}
                    mr="m"
                    borderColor={'beneficiaryBg'}
                    bg={filterType === 'trans' ? 'primary' : 'white'}
                    width={16}
                    borderRadius={100}
                  />
                </TouchableOpacity>
                <Box flex={1} mr="m">
                  <Text mb="xs" color={'textColor'} variant={'body_md'}>
                    Player Stake
                  </Text>
                  <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Box
                      flex={1}
                      flexDirection={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}>
                      <ModalInput
                        label="Username"
                        value={''}
                        onChangeText={() => {}}
                        hasError={false}
                        placeholder="min. amount"
                      />
                      <Text pb={'s'} color={'textColor'} mx="s">
                        and
                      </Text>
                      <ModalInput
                        label="Username"
                        value={''}
                        onChangeText={() => {}}
                        hasError={false}
                        placeholder="max. amount"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box flexDirection={'row'} pt={'s'} pl={'m'}>
                <TouchableOpacity onPress={() => setFilterType('data')}>
                  <Box
                    height={16}
                    borderStyle={'solid'}
                    borderWidth={2}
                    bg={filterType === 'data' ? 'primary' : 'white'}
                    mr="m"
                    borderColor={'beneficiaryBg'}
                    width={16}
                    borderRadius={100}
                  />
                </TouchableOpacity>
                <Box flex={1} mr="m">
                  <Text mb="xs" color={'textColor'} variant={'body_md'}>
                    Total Pot
                  </Text>
                  <Box
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    <Box
                      flex={1}
                      flexDirection={'row'}
                      justifyContent={'space-between'}
                      alignItems={'center'}>
                      <ModalInput
                        label="Username"
                        value={''}
                        onChangeText={() => {}}
                        hasError={false}
                        placeholder="min. amount"
                      />
                      <Text pb={'s'} color={'textColor'} mx="s">
                        and
                      </Text>
                      <ModalInput
                        label="Username"
                        value={''}
                        onChangeText={() => {}}
                        hasError={false}
                        placeholder="max. amount"
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
                mt="m"
                mx="m"
                py={'md'}
                justifyContent={'center'}
                alignSelf={'flex-end'}
                width={widthPercentageToDP('78%')}
                label="Apply"
              />
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
