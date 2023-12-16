import { View, StyleSheet, Alert, FlatList, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/instructionText";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem";

// These need to be out of the component so they don't rerender
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, setNumberOfGuesses, numberOfGuesses }) {

    const [currentGuess, setCurrentGuess] = useState(null);
    const [guessRoundLogs, setGuessRoundLogs] = useState([]);


    useEffect(() => {
        const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber);
        minBoundary = 1;
        maxBoundary = 100;
        setCurrentGuess(initialGuess);
        setGuessRoundLogs(prevArr => [initialGuess, ...prevArr])
    }, [userNumber])

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
        setNumberOfGuesses(numberOfGuesses + 1)
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
        setGuessRoundLogs(prevArr => [newRndNumber, ...prevArr])
    }

    const guessRoundsLength = guessRoundLogs.length;

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
                                +
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton
                                onPress={nextGuessHandler.bind(this, 'lower')}
                                style={styles.button}>
                                -
                            </PrimaryButton>
                        </View>
                        {/* Round Logs */}
                    </View>
                </Card>

                <View style={styles.roundLogListContainer}>
                    <FlatList 
                        data={guessRoundLogs}
                        renderItem={(itemData) => <GuessLogItem guess={itemData.item} roundNumber={guessRoundsLength - itemData.index} />}
                        keyExtractor={item => item}
                    />
                </View>
            </View>
            <View>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
    roundLogListContainer: {
        flex: 1,
        padding: 16,
        marginBottom: 200
    },
})
