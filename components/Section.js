import { StyleSheet, View } from "react-native"

const Section = (props) => {
    return (
        <View style={styles.sectionWrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    sectionWrapper: {
        backgroundColor: 'white',
        padding: 15,
        marginBottom: 15
    }
})

export default Section