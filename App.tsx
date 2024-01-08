/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet} from 'react-native';

import {StackNav} from './src/navigation/StackNav';
import {ThemeProvider, useTheme} from '@shopify/restyle';
import theme, {Theme, darkTheme} from './src/utils/theme';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import {usePreference} from './src/state/hooks/preference.hook';

let persistor = persistStore(store);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeHandler />
      </PersistGate>
    </Provider>
  );
}

const RootNav = () => {
  const {colors} = useTheme<Theme>();
  const {mainBg} = colors;
  const {darkMode} = usePreference();

  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={mainBg}
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <StackNav />
    </NavigationContainer>
  );
};

const ThemeHandler = () => {
  const {darkMode} = usePreference();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
      <RootNav />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
