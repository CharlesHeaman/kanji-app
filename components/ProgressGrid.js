import { StyleSheet, View } from "react-native"

const ProgressGrid = (props) => {
    return (
        <View style={styles.grid}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default ProgressGrid