import { setStatusBarTranslucent } from 'expo-status-bar';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/Color';

function PrimaryButton({children, onPress, colorProp}) {
    //console.log('Color prop: '+{colorProp})
    return (
        <View style={[styles.buttonOuterContainer, colorProp]}>
            <Pressable onPress={onPress} android_ripple={{color: Colors.primary600}}
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.iosPressed, colorProp] : [styles.buttonInnerContainer, colorProp] }>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
         </View>
    )
}


export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 12,
        paddingHorizontal: 16,
        elevation: 4
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',

    },
    iosPressed: {
        opacity: 0.75,
        //0=0% and 1=100%, so 0.75=75%
    }
})