import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Color';

function GuessLogItem({ roundNumber, guess}) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber} </Text>
            <Text style={styles.itemText}>Bot's Guess: {guess}</Text>
        </View>
    );
};

export default GuessLogItem;

const styles = StyleSheet.create({
    rootContainer: {

    },
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 2,
        borderRadius: 20,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primary800,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    itemText: {
        fontFamily: 'open-sans',
        color: Colors.yellow400,
    }
});