import React, { FC } from 'react';
import Box from './Box';
import Text from './Text';
import moment from 'moment';
import RegeustMoney from '../assets/svgs/requestMoney.svg';
import MoneyBag from '../assets/svgs/moneyBag.svg';

import Coins from '../assets/svgs/coins.svg';

export interface Transaction {
  type: String;
}

type Props = {
  item: Transaction;
};
export const TransactionItem: FC<Props> = ({item}) => {
  const {type} = item;
  return (
    <Box flexDirection={'row'} mt={'m'} justifyContent={'space-between'}>
      <Box flexDirection={'row'}>
        <Box
          width={40}
          height={40}
          alignItems={'center'}
          justifyContent={'center'}
          bg={type === 'withdraw' ? 'dangerBg': type === 'deposit'? 'fundBg': 'successBg'}
          borderRadius={50}>
          {type === 'withdraw' ? (
            <RegeustMoney />
          ) : (
            <>{type === 'deposit' ? <Coins /> : <MoneyBag />}</>
          )}
        </Box>
        <Box px={'xs'} ml="s">
          <Text variant={'body'} fontWeight={'700'} color={'textColor'}>
            John Doe
          </Text>
          <Text variant={'body_sm'} color={'transactionColor'}>
            Withdrawal
          </Text>
          <Text
            variant={'body_xs'}
            fontSize={10}
            fontWeight={'400'}
            color={'transactionColor'}>
            {' '}
            wd-123674811223
          </Text>
        </Box>
      </Box>
      <Box alignItems={'flex-end'}>
        <Text variant={'body_md'} fontWeight={'700'} color={'textColor'}>
          ₦2,000
        </Text>
        <Text variant={'body_sm'} color={'transactionColor'}>
          {moment().format('Do MMM, yyyy')}
        </Text>
      </Box>
    </Box>
  );
};
