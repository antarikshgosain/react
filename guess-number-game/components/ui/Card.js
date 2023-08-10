import { View, StyleSheet } from "react-native";
import Colors from '../../constants/Color.android';


function Card({children}){
    return (
        <View style={styles.inputContainer}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 40,
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
});