import Colors from '../../constants/Color';
import { View, Text, StyleSheet } from "react-native";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer; 

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.yellow400,
        paddingVertical: 4,
        marginHorizontal: 20,
        marginVertical: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',

    },
    number: {
        color: Colors.yellow400,
        fontSize: 28,
        fontWeight: 'bold'
    }

})