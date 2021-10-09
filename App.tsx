import React from 'react';
import {configureFonts, DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import { navigationRef } from './src/navigation/Navigator';
import Root from './src/root'

const fontConfig = {
  ios: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    }
  },
  android: {
    regular: {
      fontFamily: 'Roboto-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Roboto-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto-Thin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'Roboto-Bold',
      fontWeight: 'normal',
    }
  }
}
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#ff7043',
    primary: '#03dac5',
    accent: '#00b798',
    text: '#000',
    screenBackground: '#EEEEEE'
  },
  fonts: configureFonts(fontConfig),
};
const App = () => {
  return (
      <PaperProvider theme={theme}>
          <NavigationContainer ref={navigationRef} theme={theme}>
            <Root />   
          </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
