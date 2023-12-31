import React from 'react';
import Box from './Box';
import moment from 'moment';
import Text from './Text';
import FastImage from 'react-native-fast-image';
import {logo1} from '../assets';
import {logo2} from '../assets';

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
const FullTime = () => {
  return (
    <Box mt="s">
      <Box bg="fixtureBg" alignItems="center" borderRadius={10} py={'xs'}>
        <Box px={'l'} borderRadius={14} py={'xs'}>
          <Text variant={'body_sm'} color={'textColor'}>
            Full Time
          </Text>
        </Box>

        <Box
          flexDirection={'row'}
          justifyContent={'space-between'}
          width={'95%'}>
          <Box alignItems="center" flex={2} justifyContent="center">
            <FastImage
              style={{width: 26, height: 30}}
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
          <Box alignItems={'center'} flex={3}>
            <Box
              flexDirection={'row'}
              width={'70%'}
              py={'xs'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <Text variant={'subtitle'} color={'textColor'} py={'xs'}>
                {' '}
                2{' '}
              </Text>
              <Text variant={'title'} color={'textColor'} py={'xs'}>
                {' '}
                :{' '}
              </Text>
              <Text variant={'subtitle'} color={'textColor'} py={'xs'}>
                {' '}
                2{' '}
              </Text>
            </Box>
            <Box bg={'success'} px={'s'} borderRadius={14} py={'xxs'} mb={'xs'}>
              <Text
                variant={'body_md'}
                textAlign={'center'}
                color={'textColor'}
                fontWeight={'700'}>
                6 points
              </Text>
            </Box>
          </Box>
          <Box alignItems="center" flex={2} justifyContent="center">
            <FastImage
              style={{width: 26, height: 30}}
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

export default FullTime;
