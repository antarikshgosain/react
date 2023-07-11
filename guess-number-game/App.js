import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f', '#4e0329']} style={styles.rootScreeen}>
      <ImageBackground source={require('./assets/images/bg-img-dice.jpg')} 
        resizeMode="cover" style={styles.rootScreeen} imageStyle={styles.backgroundImage} >
          
        <StartGameScreen/>
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
    backgroundColor: '#ddb52f',
  }, 
  backgroundImage : {
    opacity: 0.9,
  }
});
