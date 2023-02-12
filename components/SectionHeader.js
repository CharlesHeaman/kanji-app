import { StyleSheet, Text, View } from "react-native"

const SectionHeader = (props) => {
    return (
        <View style={styles.sectionHeaderWrapper}>
            <Text style={styles.sectionHeaderText}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionHeaderWrapper: {
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 7,
        marginBottom: 10
    },
    sectionHeaderText: {
        fontSize: 28,
        fontWeight: '300',
        lineHeight: 40,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})

export default SectionHeader