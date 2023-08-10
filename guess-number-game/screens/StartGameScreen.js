import { StyleSheet, TextInput, View, Alert, Text, Dimensions, useWindowDimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/Color';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');
    const {width, height} = useWindowDimensions();

    function numberInputHandler(num) {
        console.log('New entered value is: ' + num);
        setEnteredNumber(num);
    }

    function resetInputHadler(){
        setEnteredNumber('');
    }

    function confirmInputHandler(){
        const chosenNumber = parseInt(enteredNumber);
        console.log('trying to confirm: '+ chosenNumber);
        if(isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>=100){
            
            console.error("Invalid Number "+ chosenNumber);

            Alert.alert('Invalid number!', 'Number has to be between 1 and 99',
            [{text:'Got it', style: 'default'}, {text:'Okay', style: 'destructive', onPress: resetInputHadler}]);
            
        } 

        console.log('Valid Number');
        onPickNumber(chosenNumber);

    }

    const marginTopDistance = height < 500 ? 40 : 100 ;

    return  (
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>

            {/* <View style={styles.title}><Title>Guess My Number</Title></View> */}
            <Title>Bot Guess My Number</Title>
            <Card>
                <InstructionText>Enter Any 2 Digit Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} maxLength={3} 
                    keyboardType={'number-pad'} numberOfLines={1}
                    value={enteredNumber}       
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHadler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        // marginTop: deviceHeight < 500 ? 40 : 100,
        alignItems: 'center',
    },

    numberInput: {
        height: 50,
        fontSize: 32,
        width: 60,
        borderBottomColor:  Colors.yellow400,
        borderBottomWidth: 2,
        color: Colors.yellow400,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1
    },
    title: {
        paddingHorizontal: 20
    },


})