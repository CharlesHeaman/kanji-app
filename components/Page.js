import { ScrollView, StyleSheet, View } from "react-native"

const Page = (props) => {
    return (
        <ScrollView>            
            <View style={styles.page}>
                {props.children}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 10
    }
})

export default Page