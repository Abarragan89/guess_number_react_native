import { Text, View, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuter}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInner, styles.pressed] : styles.buttonInner}
                onPress={onPress}
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={styles.buttonText}>
                    {children}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    //This is the outer View
    buttonOuter: {
        borderRadius: 28,
        margin: 4,
        // in case the ripple goes beyond the container
        overflow: 'hidden'
    },
    // This is the Pressable
    buttonInner: {
        backgroundColor: Colors.primary500,
        elevation: 2,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },

    // These are text specific
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
})

export default PrimaryButton;