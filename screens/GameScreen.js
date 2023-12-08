import { View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

// These need to be out of the component so they don't rerender
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const [currentGuess, setCurrentGuess] = useState(null)

    useEffect(() => {
        const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
        setCurrentGuess(initialGuess);
    }, [])

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min) + min);
        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return rndNum
        }
    }

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'higher' && currentGuess > userNumber)
        ) {
            Alert.alert('Don\'t lie!', 'You know that is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Card>
                    <InstructionText style={{ marginBottom: 20 }}>Higher or Lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 'higher')}
                                style={styles.button}>
                                <Ionicons name="md-remove" size={24} color='yellow' />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 'lower')}
                                style={styles.button}>
                                <Ionicons name="md-add" size={24} color='white' />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
            <View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 40
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})

export default GameScreen;