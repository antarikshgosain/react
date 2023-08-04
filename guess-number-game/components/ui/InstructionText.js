import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/Color'

function InstructionText({children, styleProp}) {
    return <Text style={[styles.instructionYellow, styleProp]}>{children}</Text> 
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionYellow: {
        color:  Colors.yellow400,
        fontSize: 16,
    },
    instructionWhite: {
        color:  Colors.white1000,
        fontSize: 16,
    }

});