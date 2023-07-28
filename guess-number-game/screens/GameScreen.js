import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

function GameScreen() {
    return (
        
        <View style={styles.screen}>
            <Title>Opponents Guess</Title>
            {/* Guess */}
            <View>
                <Text>Higher or Lower?</Text>
                {/* + -  */}
            </View>
            <Text>LOG ROUNDS</Text>
        </View>
    
    );
    
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 20
    },

});