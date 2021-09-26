import React from 'react';
import {StyleSheet, useColorScheme,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors,} from 'react-native/Libraries/NewAppScreen';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
      <PaperProvider theme={theme}>
        <NavigationContainer>

        </NavigationContainer>
      </PaperProvider>
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
