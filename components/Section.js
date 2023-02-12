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
        marginBottom: 30
    }
})

export default Section