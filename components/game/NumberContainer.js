import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default NumberContainer;

// Dimensions API can give us information about the phone
// Using this data we can conditionally style our app
const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accentColor,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accentColor,
        fontSize: deviceWidth < 380 ? 20 : 28,
        fontWeight: 'bold'
    }
})