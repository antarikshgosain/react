import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

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

function GameScreen({userNumber}) {


    const initialGuess = generateRandomNumberBetween(1,100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) { // direction = 'lower' or 'higher'
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
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}> - </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}> + </PrimaryButton>
                </View>
            </View>
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

});