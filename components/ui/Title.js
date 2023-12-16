import { Text, StyleSheet } from "react-native";

function Title({ children }) {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        textAlign: 'center',
    }
})

export default Title;