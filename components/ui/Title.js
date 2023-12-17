import { Text, StyleSheet, Platform } from "react-native";

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
        borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderColor: 'white',
        padding: 12,
        textAlign: 'center',
        maxWidth: '80%',
        width: 300
    }
})

export default Title;