import { StyleSheet, TextInput , View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen(){
    return  
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.numberInput} maxLength={2} 
            keyboardType={'number-pad'} numberOfLines={1}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    </View>
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
        backgroundColor: '#4e0329',

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
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer:{
        flex: 1
    }
})