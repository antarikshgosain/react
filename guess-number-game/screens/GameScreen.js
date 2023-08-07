import { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/Color';
import { Ionicons } from '@expo/vector-icons';

function generateRandomNumberBetween(min, max, exclude) {
    const result = Math.floor(Math.random() * (max-min)) + min ;
    if(result === exclude){
        return generateRandomNumberBetween(min, max, exclude);
    } else {
        return result;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {


    const initialGuess = generateRandomNumberBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]); //if any of these state changes, this effect will take place and check for gameOver

    function nextGuessHandler(direction) { // direction = 'lower' or 'higher'

        if( (direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber) ) {
            console.log('Lie Detected: '+userNumber);
            Alert.alert("Don't lie","You know that ain't it",
            [{text: 'Sorry!', style:'cancel'}]);
            return ;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess ;
        } else {
            minBoundary = currentGuess + 1 ;
        }
        const newRandomNumber = generateRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber);
        console.log('min: '+ minBoundary + ' max: '+ maxBoundary);
    }

    return (
        
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText styleProp={styles.instructionTextProp}>Lower or Higher?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton colorProp={styles.redButtonProp} onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name='md-remove-circle' size={24} color={'orange'}/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton colorProp={styles.greenButtonProp} onPress={nextGuessHandler.bind(this, 'higher')}>
                            <Ionicons name='md-add-circle' size={24} color={'lime'}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <Text>LOG ROUNDS</Text>
        </View>
    
    );
    
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    instructionTextProp: {
        marginBottom: 12,
    },
    greenButtonProp: {
        backgroundColor: Colors.green400,
    },
    redButtonProp: {
        backgroundColor: Colors.red400,
    }

});