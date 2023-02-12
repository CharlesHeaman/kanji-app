import { StyleSheet, Text, View } from "react-native"

const SectionSubHeader = (props) => {
    return (
        <View style={styles.sectionSubHeaderWrapper}>
            <Text style={styles.sectionSubHeaderText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionSubHeaderWrapper: {
        paddingBottom: 7,
        marginBottom: 10
    },
    sectionSubHeaderText: {
        fontSize: 18,
        fontWeight: '300',
        lineHeight: 22,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})

export default SectionSubHeader