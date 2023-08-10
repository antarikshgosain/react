import { View, Text, Pressable, StyleSheet, Image, Dimensions } from 'react-native';
import Colors from '../constants/Color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')}></Image>
            </View>
            <View>
                <InstructionText>
                    Your phone needed 
                    <Text style={styles.highlight}> {roundsNumber} </Text> 
                    rounds to guess the number 
                    <Text style={styles.highlight}> {userNumber} </Text>
                </InstructionText>
            </View>
            <View style={styles.newGameButtonContainer}>
                <PrimaryButton onPress={onStartNewGame}>
                    <InstructionText>Start New Game</InstructionText>
                </PrimaryButton>
            </View>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

console.log('Device Height: ' + deviceHeight);
console.log('Device Width: ' + deviceWidth);

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 20,
        paddingTop: 100,
        justifyContent: 'center',
        alignContent:'center',

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 4,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 0,
        alignItems: 'center',
        margin: 40

    },
    image: {
        height: '100%',
        width: '100%',
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.green400,
        fontSize: 30,
    },
    newGameButtonContainer: {
        marginHorizontal: 60,
        paddingVertical: 20
    }

});