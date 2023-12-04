import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    const [enteredNumber, setEnterNumber] = useState('');

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) ||chosenNumber <=0 || chosenNumber > 99) {
            Alert.alert(
                // title
                'Invalid Number',
                // message
                'Number has to be between 1 and 99',
                // buttons   
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHander}] 
            );
            return;
        }
        console.log('valid numberr')
    }

    function resetInputHander() {
        setEnterNumber('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                // import for strings:
                autoCapitalize='none'
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={(input) => setEnterNumber(input)}
            />
            <View style={styles.buttonsContainer}>
                {/* Wrap buttons in view so they take all the space evenly and are same size */}
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={resetInputHander}
                    >Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton
                        onPress={confirmInputHandler}
                    >Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#4b0327',
        // Android Shadow
        elevation: 4,
        // IOS Shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .5
    },
    numberInput: {
        height: 50,
        width: 75,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 15
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScreen;