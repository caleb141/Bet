// @ts-nocheck

import React from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import {ScrollView} from 'react-native';
import {WalletCard} from '../components/WalletCard';
import {WalletTransaction} from '../components/WalletTransaction';
import {TransactionList} from '../components/BeneficiaryList';

const Wallet = () => {
  return (
    <Box backgroundColor="mainBg" flex={1}>
      <Text
        variant={'h5'}
        py={'l'}
        fontWeight={'700'}
        color={'textColor'}
        textAlign={'center'}>
        MY WALLET
      </Text>
      <WalletCard />
      <WalletTransaction />
    </Box>
  );
};

export default Wallet;
