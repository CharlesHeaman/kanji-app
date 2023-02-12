import { StyleSheet, View } from "react-native"

const SubSection = (props) => {
    return (
        <View style={styles.sectionWrapper}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    sectionWrapper: {
        marginBottom: 10
    }
})

export default SubSection