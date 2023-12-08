import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.container}>{children}</View>
        )
    }
    
export default Card;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        borderRadius: 8,
        padding: 16,
        backgroundColor: Colors.primary800,
        // Android Shadow
        elevation: 4,
        // IOS Shadow
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: .5,
        width: '100%'
    },
})
