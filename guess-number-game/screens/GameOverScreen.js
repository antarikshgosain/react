import { View, Text, Pressable, StyleSheet, Image, useWindowDimensions, ScrollView } from 'react-native';
import Colors from '../constants/Color.android';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {

    const {width, height} = useWindowDimensions();
    let imageSize = 300;
    let paddingFromTop = 100;

    if (width < 400) {
        imageSize = 150;
    }

    if (height < 500) {
        imageSize = 100;
        paddingFromTop = 30;
    }

    const imageStyle = {
        width: imageSize ,
        height: imageSize ,
        borderRadius: imageSize/2 ,
    }

    return (
        <ScrollView>
        <View style={[styles.rootContainer, {paddingTop: paddingFromTop} ]}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
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
        </ScrollView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        paddingHorizontal: 20,
        paddingTop: 100,
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center'

    },
    imageContainer: {
        // width: 300,
        // height: 300,
        // borderRadius: 150,
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
    },
    debugRed: {
        borderColor: 'red',
        borderWidth: 1,
        
    }

});