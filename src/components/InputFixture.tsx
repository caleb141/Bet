import React, { useState } from 'react';
import Box from './Box';
import moment from 'moment';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import {logo1} from '../assets';
import {logo2} from '../assets';
import { BoxInput } from './BoxInput';

type Props = {
  name: string;
  logo: string;
};
// const Club: FC<Props> = ({name,logo}) => {
//   <Box alignItems="center" flex={2} justifyContent="center">
//     <FastImage
//       style={{width: 26, height: 30}}
//       // source={{
//       //   uri: '/src/assets/images/logo1.png',

//       //   priority: FastImage.priority.normal,
//       // }}
//       source={logo1}
//       resizeMode={FastImage.resizeMode.contain}
//     />
//     <Text variant={'body'} py={'xs'} color={'textColor'} fontWeight={'300'}>
//       WBA
//     </Text>
//   </Box>;
// };
const InputFixtures = () => {
  const [input, setInputValue]= useState<string>("")
  return (
    <Box mt="s">
      <Box
        bg="fixtureBg"
        height={105}
        alignItems="center"
        borderRadius={10}
        py={'xs'}>
        <Box bg={'pillsBg'} px={'l'} borderRadius={14} py={'xs'}>
          <Text variant={'body_sm'} color={'textColor'}>
            {moment().format('Do MMM, yyyy')}
          </Text>
        </Box>

        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'95%'}
          mt={'s'}>
          <Box alignItems="center" flex={2} justifyContent="center">
            <FastImage
              style={{width: 30, height: 30}}
              // source={{
              //   uri: '/src/assets/images/logo1.png',

              //   priority: FastImage.priority.normal,
              // }}
              source={logo1}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              variant={'body'}
              py={'xs'}
              color={'textColor'}
              fontWeight={'300'}>
              WBA
            </Text>
          </Box>
          <Box alignItems={'center'} width={60}  justifyContent={"space-between"} flex={3}>
            <Box
              flexDirection={'row'}
              width={'70%'}
              py={'xs'}
              alignItems={'center'}
              justifyContent={'space-between'}>

              <BoxInput
                placeholder="-"
                value={input}
                onChangeText={(e: any) => setInputValue(e.target.value)}
              />

              <Text mx={"s"} variant={'title'}  color={'textColor'} py={'xs'}>

                :
              </Text>

              <BoxInput
                placeholder="-"
                value={input}
                onChangeText={(e: any) => setInputValue(e.target.value)}
              />
            </Box>
            <Box px={'s'} bg={"pillsBg"} borderRadius={14} py={'xxs'}>
              <Text variant={'body_sm'} color={'textColor'}>
                {moment().format('h:mma')}
              </Text>
            </Box>
          </Box>
          <Box alignItems="center" flex={2} justifyContent="center">
            <FastImage
              style={{width: 30, height: 30}}
              // source={{
              //   uri: '/src/assets/images/logo1.png',

              //   priority: FastImage.priority.normal,
              // }}
              source={logo2}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Box>
              <Text
                variant={'body'}
                py={'xs'}
                color={'textColor'}
                fontWeight={'300'}>
                MNU
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InputFixtures;
