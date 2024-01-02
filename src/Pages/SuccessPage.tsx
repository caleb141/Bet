import React from 'react'
import Box from '../components/Box'
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';
import Text from '../components/Text';
import Feather from "react-native-vector-icons/Feather"
import { useTheme } from '@shopify/restyle';
import { Theme } from '../utils/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { SuccessComp } from '../components/SuccessComp';

export const SuccessPage = () => {
     const {navigate} = useNavigation<MainScreenNavigationProp>();
  const {colors} = useTheme<Theme>();
  const {textColor, success, successBg} = colors;
     return (
       <Box
         px={'m'}
         backgroundColor="mainBg"
         alignItems={'center'}
         pt={'xxl'}
         flex={1}>
         <Box flex={1} alignItems={"center"} >
           <Box
             width={100}
             height={100}
             alignItems={'center'}
             justifyContent={'center'}
             bg="successBg"
             borderRadius={50}>
             <Feather color={success} size={60} name="check" />
           </Box>
           <SuccessComp title={'Success 🎉 '} text={'Congratulations, your withdrawal request has been submitted and will be processed as soon as possible 🍀   '} />

         </Box>

         <TouchableOpacity onPress={() => navigate('SuccessPage')}>
           <Box
             width={widthPercentageToDP('85%')}
             bg={'primary'}
             py={'m'}
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
}
