import { StyleSheet, Text, View } from "react-native"

const PageHeader = (props) => {
    return (
        <Text style={styles.pageHeaderText}>{props.title}</Text>
    )
}

const styles = StyleSheet.create({
    pageHeaderText: {
        fontSize: 38.5,
        fontWeight: '300',
        lineHeight: 38.5,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})

export default PageHeader