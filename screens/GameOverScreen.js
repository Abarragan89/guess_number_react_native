import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ userNumber, numberOfGuesses, startNewGame }) {
    return (
        <View style={styles.screenContainer}>
            <Title>GAME OVER!</Title>
            {/* wrap images in views to style them */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            {/* if you nest text, styles will cascade. It's not really cascading just how the text components compile */}
            <Text style={styles.summaryText}>Your phone needed
                <Text style={styles.highlight}> {numberOfGuesses} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {userNumber} </Text>
            </Text>
            <PrimaryButton onPress={startNewGame}>Play Again?</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
        borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },

    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        color: Colors.primary500
    }
})