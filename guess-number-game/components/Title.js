import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Color';


function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.yellow400,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.yellow400,
        padding: 12
    }
});