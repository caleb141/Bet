import React, { useState } from 'react';
import Box from './Box';
import Text from './Text';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {TouchableOpacity} from 'react-native';
import Button from './Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import Clipboard from '@react-native-clipboard/clipboard';

export const WalletCard = () => {
  const {colors} = useTheme<Theme>();
  const {textColor} = colors;
  const accountDetails = {
    Name: 'Account number',
    AccountNumber: '0212330298',
    BankName: 'Wema Bank',
  };
  const [closeBal, setCloseBal]= useState(false)
  const [copiedText, setCopiedText] = useState(accountDetails);
  const copyToClipboard = (data: any) => {
    const jsonString = JSON.stringify(data);
    Clipboard.setString(jsonString);
    console.log(jsonString, 'Successfully copied');
    // Clipboard.setStrings("hello world")
  };
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box mx={'m'}>
      <Box flexDirection={'row'} justifyContent={'space-between'}>
        <Box>
          <Box flexDirection={'row'} alignItems={'center'}>
            <Text color={'textColor'} mr={'xs'} variant={'body_sm'}>
              Your Balance
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons
                size={18}
                name="refresh"
                color={textColor}
              />
            </TouchableOpacity>
          </Box>
          <Box>
            <Text mb={'s'} variant={'h3'} color={'textColor'}>
              ₦5,000
            </Text>
            <Button
              onPress={() => navigate('Withdrawal')}
              width={'75%'}
              fontSize={14}
              py={'xs'}
              borderRadius={5}
              alignItems={'center'}
              justifyContent={'center'}
              label="Withdraw"
            />
          </Box>
        </Box>
        <Box alignItems={'flex-end'}>
          {closeBal ? (
            <TouchableOpacity onPress={() => setCloseBal(false)}>
              <Ionicons size={24} name="eye-outline" color={textColor} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setCloseBal(true)}>
              <Ionicons size={24} name="eye-off-outline" color={textColor} />
            </TouchableOpacity>
          )}
          <Box mt={'l'}>
            <Text variant={'body_sm'} color={'textColor'}>
              {accountDetails.Name}
            </Text>

            <Box flexDirection={'row'} alignItems={'center'}>
              <Text color={'textColor'} mr={'xs'} variant={'body_sm'}>
                {accountDetails.AccountNumber}
              </Text>
              <TouchableOpacity onPress={() => copyToClipboard(accountDetails)}>
                <MaterialCommunityIcons
                  size={14}
                  name="content-copy"
                  color={textColor}
                />
              </TouchableOpacity>
            </Box>
            <Text variant={'body_sm'} color="textColor">
              {accountDetails.BankName}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box my="l" width={'90%'} flexDirection={'row'}>
        <Feather name="info" color={textColor} />
        <Text variant={'body_md'} pl={'s'} color={'textColor'}>
          To fund your wallet, transfer funds to your PeerBet account number
          above.
        </Text>
      </Box>
    </Box>
  );
};
