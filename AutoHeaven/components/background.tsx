import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet } from "react-native";


const Background = () => {
    return (
        <LinearGradient
            colors={['rgba(98, 0, 238, 0.1)', 'transparent']}
            style={styles.background} />
    )
}
const styles = StyleSheet.create({
    flatListContent: {
        paddingHorizontal: 16,
        paddingTop: 20,
        paddingBottom: 20,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: '100%',
    },
});
export default Background;