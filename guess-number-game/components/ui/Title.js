import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../constants/Color';


function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 28,
        color: Colors.white1000,
        textAlign: 'center',
        borderWidth: 5,
        borderColor: Colors.white1000,
        borderRadius: 4,
        padding: 12
    }
});