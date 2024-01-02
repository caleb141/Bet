import React from 'react'
import Box from './Box';
import Text from './Text';
import moment from 'moment';
import MoneyBag from "../assets/svgs/moneyBag.svg"
export const TransactionSuccess = () => {
  return (
    <Box flexDirection={'row'} mt={'m'} justifyContent={'space-between'}>
      <Box flexDirection={'row'}>
        <Box
          width={40}
          height={40}
          alignItems={'center'}
          justifyContent={'center'}
          bg="successBg"
          borderRadius={50}>
          <MoneyBag />
        </Box>
        <Box px={'xs'} ml="s">
          <Text variant={'body'} fontWeight={'700'} color={'textColor'}>
            PeerBet
          </Text>
          <Text variant={'body_sm'} color={'transactionColor'}>
            pot winning deposit
          </Text>
          <Text
            variant={'body_xs'}
            fontSize={10}
            fontWeight={'400'}
            color={'transactionColor'}>
            {' '}
            pwd-123674811223
          </Text>
        </Box>
      </Box>
      <Box alignItems={'flex-end'}>
        <Text variant={'body_md'} fontWeight={'700'} color={'textColor'}>
          ₦3,000
        </Text>
        <Text variant={'body_sm'} color={'transactionColor'}>
          {moment().format('Do MMM, yyyy')}
        </Text>
      </Box>
    </Box>
  );
}
