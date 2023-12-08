import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { useState } from 'react';
import Title from '../components/ui/Title'
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
import PrimaryButton from '../components/ui/PrimaryButton';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnterNumber] = useState('');

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                // title
                'Invalid Number',
                // message
                'Number has to be between 1 and 99',
                // buttons   
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHander }]
            );
            return;
        }
        onPickNumber(enteredNumber)
    }

    function resetInputHander() {
        setEnterNumber('')
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>

                <InstructionText>Pick a number</InstructionText>
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
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        marginHorizontal: 24
    },
    numberInput: {
        height: 50,
        width: 75,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accentColor,
        borderBottomWidth: 2,
        color: Colors.accentColor,
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