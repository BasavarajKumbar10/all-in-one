import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {App as AppHolder} from './src/App';
import {NavigationContainer} from "@react-navigation/native";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: '#ff7043',
    primary: '#03dac5',
    accent: '#ffa270',
      text: '#260f03'
  },
};
const App = () => {
  return (
      <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
              <AppHolder />
          </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
