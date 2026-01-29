/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  // useSafeAreaInsets,
} from 'react-native-safe-area-context';
import SplashScreen from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingNavigator from './src/navigation/onboarding';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
      <NavigationContainer>
        <View style={styles.container}>

          <SplashScreen>
            {/* <NewAppScreen
            templateFileName="App.tsx"
            safeAreaInsets={safeAreaInsets}
          /> */}
            <OnboardingNavigator />
          </SplashScreen>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
