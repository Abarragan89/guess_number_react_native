import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';


export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [numberOfGuesses, setNumberOfGuesses] = useState(1)


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGameIsOver(false);
    setNumberOfGuesses(1)
    screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  function gameOverHandler() {
    setGameIsOver(true)
  }
  if (userNumber) {
    screen = <GameScreen setNumberOfGuesses={setNumberOfGuesses} numberOfGuesses={numberOfGuesses} userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen numberOfGuesses={numberOfGuesses} userNumber={userNumber} startNewGame={startNewGameHandler} />
  }


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
