import { StyleSheet, Text } from "react-native"

const SmallHeader = (props) => {
    return (
        <Text style={styles.headerText}>{props.title}</Text>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontWeight: '700',
        marginRight: 11,
        color: '#999',
        textTransform: 'uppercase',
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})

export default SmallHeader