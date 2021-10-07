import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {BottomTabNavigation} from "./src/navigation/BottomTabNavigation";
import {NavigationContainer} from "@react-navigation/native";
import { navigationRef } from './src/navigation/Navigator';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#ff7043',
    primary: '#03dac5',
    accent: '#00b798',
    text: '#260f03'
  },
};
const App = () => {
  return (
      <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
              <BottomTabNavigation />
          </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
