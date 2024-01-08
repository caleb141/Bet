import React from 'react';
import Box from '../components/Box';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../utils/rootParams';
import Text from '../components/Text';
import Feather from 'react-native-vector-icons/Feather';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../utils/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SuccessComp} from '../components/SuccessComp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Share from 'react-native-share';
export const StakeConfirmed = () => {
  const {navigate, goBack} = useNavigation<MainScreenNavigationProp>();
  const {colors} = useTheme<Theme>();
  const {textColor, gray, success, successBg} = colors;
  const options={
    title:"Betting link",
    url:"abc.ng",
    message:"Hello buddy click on thr link to join a betting spree"
  }
  const share = () => {
     Share.open(options)
       .then(res => {
         console.log(res, 'working...');
       })
       .catch(err => {
         err && console.log(err);
       });
  }
  return (
    <Box
      px={'m'}
      backgroundColor="mainBg"
      alignItems={'center'}
      pt={'xxl'}
      flex={1}>
      <Box flex={1} alignItems={'center'}>
        <Box
          width={100}
          height={100}
          alignItems={'center'}
          justifyContent={'center'}
          bg="successBg"
          borderRadius={50}>
          <Feather color={success} size={60} name="check" />
        </Box>
        <Box mx={'mm'}>
          <SuccessComp
            title={'Stake Confirmed! 🎉 '}
            text={'Your predictions has been placed and '}
          />
          <Text
            color={'textColor'}
            textAlign={'center'}
            variant={'body'}
            >
            ₦1,000 staked successfully.
          </Text>
          <Text
            color={'textColor'}
            textAlign={'center'}
            variant={'body'}
            >
            Good luck! 🍀
          </Text>
        </Box>
        <TouchableOpacity onPress={share}>
          <Box
            bg={'white'}
            borderWidth={1}
            borderColor={'textColor'}
            px={'s'}
            marginTop={"l"}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            borderRadius={6}>
            <Text mr={'xs'} variant={'body'} color={'black'}>
              Invite players
            </Text>
            <Ionicons size={30} color={gray} name="share-social" />
          </Box>
        </TouchableOpacity>
      </Box>

      <TouchableOpacity onPress={goBack}>
        <Box
          width={widthPercentageToDP('85%')}
          bg={'primary'}
          py={'mm'}
          my="xl"
          alignItems={'center'}
          borderRadius={6}>
          <Text variant={'body'} color={'muted'}>
            Great, OK
          </Text>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};
