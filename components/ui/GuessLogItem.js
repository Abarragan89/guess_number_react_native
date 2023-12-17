import { View, Text, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function GuessLogItem({ roundNumber, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>#{roundNumber}</Text>
            <Text style={styles.listItemText}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1, 
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accentColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
    },
    listItemText: {
        marginHorizontal: 30
    }
})