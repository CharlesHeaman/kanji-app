import { StyleSheet, Text } from "react-native"

const TextBody = (props) => {
    return (
        <Text style={styles.textBodyText}>{props.text}</Text>
    )
}

const styles = StyleSheet.create({
    textBodyText: {
        fontSize: 16,
        lineHeight: 26,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})


export default TextBody