//@ts-ignore
import React, { useState } from 'react';
import {
  StyleSheet,
  Animated,
  useWindowDimensions,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import PagerView, {
  PagerViewOnPageScrollEventData,
} from 'react-native-pager-view';

import { ExpandingDot } from 'react-native-animated-pagination-dots';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';
import { RootStackParamList } from '../utils/rootParams';
import { onboard1, onboard2 } from '../assets';
import Box from '../components/Box';
import { Phone } from 'lucide-react-native';
import Text from '../components/Text';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import { color, useTheme } from '@shopify/restyle';
import theme, { Theme } from '../utils/theme';

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

const INTRO_DATA = [
  {
    key: '1',
    title: 'Express yourself without restrictions',
    pics: onboard1,
    description:
      'Share and listen to personal stories, experiences, and thoughts anonymously.',
  },
  {
    key: '2',
    title: 'Change how you sound',
    pics: onboard2,
    description:
      'Choose from a variety voice effects to make your voice sound different.',
  },
];

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'OnBoarding'>;
}
export default function OnBoarding() {
  const ref = React.useRef<PagerView>(null);
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, INTRO_DATA.length];
  const [page, setPage] = useState<number>(0);
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const {colors} = useTheme<Theme>()
  const {primary,gray} = colors;
  const { height, width } = useWindowDimensions();
  console.log(height, 'height');
  console.log(width, 'width');
  const scrollX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue,
  ).interpolate({
    inputRange,
    outputRange: [0, INTRO_DATA.length * width],
  });

  const onPageScroll = React.useMemo(
    () =>
      Animated.event<PagerViewOnPageScrollEventData>(
        [
          {
            nativeEvent: {
              offset: scrollOffsetAnimatedValue,
              position: positionAnimatedValue,
            },
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <Box flex={1} height={'100%'} bg='white'>
      <StatusBar backgroundColor='#2A52BE' barStyle={'light-content'}  />


      <Box alignItems={'center'} position="relative">
        <Image
          source={onboard1}
          style={{
            height: Platform.OS === 'ios' ? '95%' : heightPercentageToDP('80%'),
            width: '100%'
          }}
          alt="onboarding image"
          resizeMode={'cover'}
        // removeClippedSubviews={false}
        />

      </Box>


      <Box bg='transparent' position={'absolute'} width={'100%'} bottom={0} pt={'s'} height={'45%'} >
        <LinearGradient style={{ flex: 1 }} colors={['#FFFFFF00', '#FFFFFF', '#FFFFFF']}>
          <Box flex={1} justifyContent={'center'}>
            <Box>



              <Box
                alignItems={'center'}
                justifyContent={'center'}
                // zIndex={10}
                alignSelf={'center'}
                // position="absolute"
                // bottom={{
                //   base: 16,
                //   md: 24,
                // }}
                // minHeight={60}
                width={{
                  phone: '75%',
                  longPhone: '95%'
                }}>
                <Text

                  accessibilityLabel={`title${page}`}
                  variant={'title'}
                  textAlign="center"
                  color="textBlack">
                  <Text variant={'title'} color={'primary'}>Connect</Text> with <Text variant={'title'} color={'primary'}>friends</Text> and become the <Text variant={'title'} color={'primary'}>Champ!</Text>
                </Text>
                <Box width={{
                  phone: '83%',
                  longPhone: '75%'
                }}>

                  <Text
                    accessibilityLabel={`description${page}`}
                    textAlign={'center'}
                    variant={'body_md'}
                    my={'m'}
                    color="textBlack">
                    Create weekly games and invite your friends to join your stake
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box >

              {/* <Button
                accessibilityLabel="button"
                bg="primary"
                onPress={() => {
                  navigate('Login');
                }}
                mt="l"
                py={'m'}
                justifyContent={'center'}
                alignSelf={'center'}
                width={'85%'}
                label='Get Started'
              /> */}


              <ExpandingDot
                data={INTRO_DATA}
                expandingDotWidth={width / 12}
                accessibilityLabel="dot"
                //@ts-ignore
                scrollX={scrollX}
                inActiveDotOpacity={0.6}
                inActiveDotColor={gray}
                activeDotStyle={{ 
                  width: width / 12,
                 }}
                activeDotColor={primary}
                dotStyle={{
                  width: width / 20,
                  height: 6,
                  marginHorizontal: 3,
                  borderRadius: 6,
                }}
                
                containerStyle={{
                  top: 35,
                }}
              />
            </Box>
          </Box>


        </LinearGradient>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  PagerView: {
    flex: 4,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  progressContainer: { flex: 0.1, backgroundColor: '#63a4ff' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
  },
  separator: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  touchableTitle: {
    textAlign: 'center',
    color: '#000',
  },
  touchableTitleActive: {
    color: '#fff',
  },
  dotsContainer: {
    flex: 0.8,
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
  },
  dotContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  contentSlider: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dots: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    // bottom: 310,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
});
