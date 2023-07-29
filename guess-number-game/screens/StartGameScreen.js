import { StyleSheet, TextInput, View, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/Color';

function StartGameScreen({onPickNumber}){

    const [enteredNumber, setEnteredNumber] = useState('');

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

    return  (
    <View style={styles.inputContainer}>
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
    </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 12,
        backgroundColor: Colors.primary800,

        //shadow for android
        elevation: 10, 
        
        //shadow for iOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,        shadowOpacity: 0.5,

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
    }
})