import { StyleSheet, Text } from "react-native";

const InfoText = (props) => {
    return (
        <Text style={styles.infoText}>
            {props.text}
        </Text>
    )
}

const styles = StyleSheet.create({
    infoText: {
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 10,
        textShadowColor: '#fff',
        textShadowOffset: { width: 0, height: 1 },
    },
});

export default InfoText