import Colors from '../../constants/Color';
import { View, Text, StyleSheet, Dimensions } from "react-native";

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
    )
}

export default NumberContainer; 

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: Colors.yellow400,
        paddingVertical: deviceWidth < 300 ? 12 : 24 ,
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