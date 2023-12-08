import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  // Load fonts
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold
  })

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])

  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  function gameOverHandler() {
    setGameIsOver(true)
  }
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  // if (!fontsLoaded) {
  //   return null;
  // } else {
  //   SplashScreen.hideAsync();
  // }


  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accentColor]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    opacity: .2
  }
});
