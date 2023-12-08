import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        // fontFamily: 'Inter_600SemiBold',
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        textAlign: 'center',
    }
})

export default Title;