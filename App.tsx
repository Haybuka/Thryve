/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreen from '@/screen/SplashScreen';
// import OnboardingNavigator from './src/navigation/onboarding';
import MainNavigator from '@/navigation/main';
import RootThemeProvider from '@/providers/ThemeProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  // const safeAreaInsets = useSafeAreaInsets();

  return (
    <GestureHandlerRootView>
      <RootThemeProvider>
        <NavigationContainer>
          <View style={styles.container}>

            <SplashScreen>
              {/* <NewAppScreen
            templateFileName="App.tsx"
            safeAreaInsets={safeAreaInsets}
          /> */}
              {/* <OnboardingNavigator /> */}
              <MainNavigator />
            </SplashScreen>
          </View>
        </NavigationContainer>
      </RootThemeProvider>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
