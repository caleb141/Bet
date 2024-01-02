import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
// import {News, Scores, Settings, Sports, Videos} from '../assets/global';
import User from '../assets/svgs/user.svg';
// import UserActive from '../assets/svgFiles/ProfileActive.svg';
import Home from '../assets/svgs/home.svg';
// import HomeActive from '../assets/svgs/HomeActive.svg';
import Trophy from '../assets/svgs/trophy.svg';
// import SearchActive from '../assets/svgFiles/SearchActive.svg';
import Setting from '../assets/svgs/setting.svg';
// import CommentActive from '../assets/svgFiles/ColorChat.svg';
// import Plus from '../assets/svgFiles/plus.svg';
import Box from '../components/Box';
import Button from '../components/Button';
import Plus from 'react-native-vector-icons/Entypo';
import {Theme} from '../utils/theme';
import {useTheme} from '@shopify/restyle';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProp } from '../utils/rootParams';
import { CreateGame } from '../Pages/CreateGame';

type Props = {
  state: any;
  descriptors: any;
  navigation: any;
};
export const BottomTabBar: React.FC<Props> = ({
  state,
  descriptors,
  navigation,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {colors} = useTheme<Theme>();
  const {textColor, primary, mainBg} = colors;
  const {navigate} = useNavigation<MainScreenNavigationProp>();
  return (
    <Box>
      <Box
        flexDirection="row"
        position={'relative'}
        alignItems="center"
        backgroundColor="mainBg"
        borderTopColor={'inputBorder'}
        borderTopWidth={0.3}
        // elevation={10}
        // shadowColor={'white'}
        zIndex={5}
        justifyContent="space-evenly"
        py="m">
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              key={index}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              {label === 'Dashboard' ? (
                <>
                  {isFocused ? (
                    <Home fill={primary} height={30} width={30} />
                  ) : (
                    <Home height={30} width={30} />
                  )}
                </>
              ) : label === 'Trophy' ? (
                <Box mr={'xl'}>
                  {isFocused ? (
                    <Trophy height={30} width={30} />
                  ) : (
                    <Trophy height={30} width={30} />
                  )}
                </Box>
              ) : label === 'Setting' ? (
                <Box ml={'xl'}>
                  {isFocused ? (
                    <Setting height={30} width={30} />
                  ) : (
                    <Setting height={30} width={30} />
                  )}
                </Box>
              ) : (
                <Box>
                  {isFocused ? (
                    <User height={30} width={30} />
                  ) : (
                    <User height={30} width={30} />
                  )}
                </Box>
              )}
            </TouchableOpacity>
          );
        })}
      </Box>

      <Box
        position={'absolute'}
        left={widthPercentageToDP('39%')}
        py="s"
        zIndex={1}
        borderColor={'inputBorder'}
        borderWidth={0.5}
        shadowColor={'white'}
        // elevation={10}
        bg="mainBg"
        borderRadius={60}
        width={widthPercentageToDP('22%')}
        height={widthPercentageToDP('22%')}
        // justifyContent={'center'}
        alignItems={'center'}
        top={-heightPercentageToDP('2.3%')}></Box>
      <Box
        position={'absolute'}
        left={0}
        right={0}
        zIndex={10}
        bg="transparent"
        // top={-heightPercentageToDP('0.04%')}
        height={'20%'}
        flex={1}
        justifyContent={'center'}
        alignItems={'center'}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            backgroundColor: mainBg,
            top: -1,
            padding:0,
            margin:0,
            width: widthPercentageToDP('17.3%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigate("CreateGame")}>
          <Plus name="plus" size={24} color={textColor} />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  imageWrapper: {
    width: 125, // half of the image width
    height: 250,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 125, // half of the image width
    backgroundColor: 'transparent',
  },
});
