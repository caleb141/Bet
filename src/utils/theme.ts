import {createTheme} from '@shopify/restyle';
import {RFValue} from 'react-native-responsive-fontsize';

const palette = {
  primary: '#2A52BE',
  primaryLight: '#2A52BE33',
  transparent: 'transparent',

  greenLight: '#2A741833',
  greenPrimary: '#2A7418',

  red: '#C31616',
  redLight: '#C3161633',

  black: '#2A2D37',
  lightDark: '#18181833',

  textBlack: '#2A2D37',

  white: '#fff',
  faint: '#FFFFFF33',
  gray: '#D2D2D2',
  muted: '#F6F6F6',
  darkGray: '#3C3C3C',
  whiteFaint: '#6A86D1',
  lightGray: '#D9D9D9',
  mediumGray: '#969696',
  successLight: '#2A741833',
  dangerLight: '#C3161633',
};

const theme = createTheme({
  colors: {
    primary: palette.primary,
    danger: palette.red,
    white: palette.white,
    black: palette.black,
    transparent: palette.transparent,
    textBlack: palette.textBlack,
    gray: palette.gray,
    faint: palette.faint,
    muted: palette.muted,
    inputBg: palette.white,
    inputFilledBg: palette.muted,
    mainBg: palette.white,
    mainBgInv: palette.black,
    textColor: palette.black,
    textColorInv: palette.white,
    inputToggle: palette.primary,
    success: palette.greenPrimary,
    inputBorder: palette.gray,
    pillsBg: palette.white,
    fixtureBg: palette.muted,
    screenBg: palette.muted,
    liveColor: palette.whiteFaint,
    sliderColor: palette.lightGray,
    fundBg: palette.primaryLight,
     transactionColor:palette.mediumGray,
     successBg: palette.successLight,
     dangerBg: palette.dangerLight,
     overlayBg: palette.lightDark,
     beneficiaryBg: palette.primaryLight,
    pickerBg: palette.muted,
    pickerBorder: palette.gray,
    beneficiaryBtn: palette.primaryLight,
    beneficiaryBtnText: palette.primary,

  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 60,
  },

  breakpoints: {
    phone: {
      width: 384,
      height: 774,
    },
    longPhone: {
      width: 411,
      height: 890,
    },
    tablet: 768,
    largeTablet: 1024,
  },
  textVariants: {
    h1: {
      fontSize: 56,
      fontFamily: 'Montserrat-Black',
    },
    h2: {
      fontSize: 40,
      fontFamily: 'Montserrat-ExtraBold',
    },
    h3: {
      fontSize: 32,
      fontFamily: 'Montserrat-Bold',
    },
    h4: {
      fontSize: RFValue(28, 774),
      fontFamily: 'Montserrat-SemiBold',
    },
    h5: {
      fontSize: 16,
      fontFamily: 'Montserrat-ExtraBold',
    },
    title: {
      fontSize: RFValue(24, 774),
      fontFamily: 'NunitoSans_10pt-SemiBold',
    },
    subtitle: {
      fontSize: 18,
      fontFamily: 'NunitoSans_10pt-Medium',
    },
    body: {
      fontSize: 16,
      fontWeight: '600',
      fontFamily: 'NunitoSans_10pt-Regular',
    },
    body_md: {
      fontSize: 14,
      fontFamily: 'NunitoSans_10pt-Light',
    },
    body_sm: {
      fontSize: 12,
      fontFamily: 'NunitoSans_10pt-Light',
    },
    logo: {
      fontFamily: 'InknutAntiqua-Regular',
      fontSize: RFValue(12),
    },
    body_xs: {
      fontSize: 8,
      fontFamily: 'NunitoSans_10pt-Light',
    },
    defaults: {},
  },
});

export type Theme = typeof theme;
export default theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    inputBg: palette.darkGray,
    inputFilledBg: palette.darkGray,
    mainBg: palette.black,
    mainBgInv: palette.white,
    textColor: palette.white,
    textColorInv: palette.black,
    inputToggle: palette.gray,
    inputBorder: palette.faint,
    pillsBg: palette.faint,
    fixtureBg: palette.faint,
    screenBg: palette.black,
    liveColor: palette.whiteFaint,
    sliderColor: palette.lightGray,
    fundBg: palette.primaryLight,
    transactionColor: palette.white,
    successBg: palette.successLight,
    dangerBg: palette.dangerLight,
    overlayBg:palette.faint,
    beneficiaryBg:palette.faint,
    pickerBg: palette.darkGray,
    pickerBorder: palette.darkGray,
    beneficiaryBtn: palette.faint,
    beneficiaryBtnText: palette.white,
  },
};
