import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../../constants/Color.android';


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
        // borderWidth: Platform.OS === 'web' ? 15 : 0,
        // borderWidth: Platform.select({ios: 0, android: 4}),
        borderWidth: 4,
        borderColor: Colors.white1000,
        borderRadius: 4,
        padding: 12
    }
});