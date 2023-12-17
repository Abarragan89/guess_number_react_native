import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import { useState } from 'react';
import Title from '../components/ui/Title'
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
import PrimaryButton from '../components/ui/PrimaryButton';

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnterNumber] = useState('');

    // this hook is listening for width and height changes
    const { width, height } = useWindowDimensions()

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

    // this styles needs to be within the component to react to changes
    const marginTopDistance = height < 450 ? 20 : 50;

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.root} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen;


const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
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
