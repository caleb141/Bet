import React from 'react'
import Box from '../components/Box';
import { ScrollView, StatusBar } from 'react-native';
import Text from '../components/Text';
import { SettingsComp } from '../components/SettingsComp';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp, MainStackParamList } from '../utils/rootParams';
import { usePreference } from '../state/hooks/preference.hook';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import { ToggleLightMode } from '../components/ToggleLightMode';


const Setting = () => {

  const {colors} = useTheme<Theme>();
  const {darkMode} = usePreference();
  const {overlayBg, mainBg,sliderColor} = colors;
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box backgroundColor="mainBg" flex={1}>
      {/* <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      /> */}
      <ScrollView>
        <Text
          variant={'h4'}
          py={'l'}

          color={'textColor'}
          textAlign={'center'}>
          SETTINGS
        </Text>
        <SettingsComp text={'My Wallet'} action={() => navigate('Wallet')} />
        <SettingsComp text={'Game Rules'} />
        <SettingsComp text={'FAQs'} />
        <SettingsComp text={'Support'} />
        <SettingsComp text={'Terms and Conditions'} />
        <SettingsComp text={'Privacy Policy'} />
        <ToggleLightMode text={'Light Mode'} />
        <Text color={'textColor'} mx={'m'} mt="l" mb={'m'} variant={'body_md'}>
          PeerBet will retain a 10% commission of the Total pot by way of game
          fee.
        </Text>
        <Text color={'textColor'} mx={'m'} fontSize={14} variant={'body_md'}>
          This is a real money gambling app. Please gamble responsibly and only
          bet what you can afford. For gambling addiction help and support,
          please contact BeGambleAware at 0808 8020 133 or visit
          https://www.begambleaware.org
        </Text>
        <Text
          color={'textColor'}
          mx={'m'}
          my="m"
          fontSize={14}
          variant={'body_md'}>
          PeerBet is operated by PeerBet Limited, a company registered in
          Nigeria with registration number 12345 and having a registered address
          at: address things
        </Text>
        <Text color={'textColor'} mx={'m'} fontSize={14} variant={'body_md'}>
          PeerBet Limited is licensed and regulated through the Nigerian
          Gambling Commission. License number: 057417-R-333051002
        </Text>
      </ScrollView>
    </Box>
  );
}

export default Setting