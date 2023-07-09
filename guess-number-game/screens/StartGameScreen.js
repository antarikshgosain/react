import { StyleSheet, TextInput , View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){

    return  <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.numberInput} maxLength={2} 
                    keyboardType={'number-pad'}
                    autoCapitalize='none' autoCorrect='none'/>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 12,
        backgroundColor: '#72063c',

        //shadow for android
        elevation: 10, 
        
        //shadow for iOS
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.5,

    },
    numberInput: {
        height: 50,
        fontSize: 32,
        width: 60,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})