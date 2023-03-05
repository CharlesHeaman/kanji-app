import { StyleSheet, Text, View } from "react-native"

const SmallHeader = (props) => {
    return (
        <Text style={styles.headerText}>{props.title}</Text>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: '700',
        textTransform: 'uppercase',
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0,
        marginTop: 5,
        marginBottom: 5,
    }
})

export default SmallHeader