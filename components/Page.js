import { StyleSheet, View } from "react-native"

const Page = (props) => {
    return (
        <View style={styles.page}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default Page