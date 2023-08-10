import { useState, useEffect } from 'react';
import { Alert, FlatList, StyleSheet, Text, View, useWindowDimensions, Button } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/Color';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions();

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]); //if any of these state changes, this effect will take place and check for gameOver

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []); //this empty useEffect will only execute 1st time when GameScreen component is loaded

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
        setGuessRounds(prevGuessRound => [newRandomNumber, ...prevGuessRound]);
        console.log('min: '+ minBoundary + ' max: '+ maxBoundary);
    }

    const guessRoundsListLength = guessRounds.length;

    let content = (
        <>
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
                <InstructionText>Guesses:</InstructionText>
            </Card>
        </>
    )

    const currentNumberHeight = 24;

    if (width > 500){
        content = (
            <>
                {/* <InstructionText styleProp={styles.instructionTextProp}>Lower or Higher?</InstructionText> */}
                <View style={styles.buttonContainerWide}>
                    <View style={styles.buttonsContainer}>
                        <View style={[styles.buttonContainer, {paddingTop: 30}]}>
                            <PrimaryButton colorProp={styles.redButtonProp} onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name='md-remove-circle' size={24} color={'orange'}/>
                            </PrimaryButton>
                        </View>
                        <View style={styles.numberContainer}>
                            <NumberContainer>{currentGuess}</NumberContainer>
                        </View>
                        <View style={[styles.buttonContainer, {paddingTop: 30}]}>
                            <PrimaryButton colorProp={styles.greenButtonProp} onPress={nextGuessHandler.bind(this, 'higher')}>
                                <Ionicons name='md-add-circle' size={24} color={'lime'}/>
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map(guessRound => <InstructionText key={{guessRound}}>{guessRound}</InstructionText>)} */}
                <FlatList data = {guessRounds} 
                renderItem = {(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}></GuessLogItem>} 
                keyExtractor = {(item) => item}
                />
            </View>
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
    },
    listContainer:{
        flex: 1,
        padding: 16,
    },
    buttonContainerWide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    numberContainer: {
        width: '30%'
    }

});