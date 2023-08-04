import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Color';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber) {
    screen = ( <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/> );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen/>
  }


  return (
    <LinearGradient colors={[Colors.gradient1, Colors.gradient2]} style={styles.rootScreeen}>
      
      <ImageBackground source={require('./assets/images/bg-img-dice.jpg')} 
        resizeMode="cover" style={styles.rootScreeen} imageStyle={styles.backgroundImage} >
          <SafeAreaView style={styles.rootScreeen}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootScreeen: {
    flex: 1,
  }, 
  backgroundImage : {
    opacity: 0.9,
  }
});
