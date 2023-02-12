import { StyleSheet, Text, View } from "react-native"

const Icon = (props) => {
    return (
        <View style={styles.iconWrapper}>
            <Text style={styles.iconText}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#a1a1a1',
        width: 48,
        height: 48,
        borderRadius: 3,
        shadowColor: 'rgb(0,0,0)',
        shadowOpacity: 0.5,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 3 },
        marginRight: 10,
        marginBottom: 10

    },
    iconText: {
        color: '#d5d5d5',
        fontSize: 27,
        textAlign: "center",
        lineHeight: 48,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: -1 },
        textShadowRadius: 0
    }
})

export default Icon