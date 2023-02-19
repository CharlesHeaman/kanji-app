import { Button, Pressable, StyleSheet, Text } from "react-native"

const AddButton = (props) => {
    return (
        <Pressable style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>{props.title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonWrapper: {
        backgroundColor: '#ccc',
        borderRadius: '4px',
        paddingHorizontal: 8,
        paddingVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textTransform: 'uppercase',
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0,
        fontSize: 12
    }
})

export default AddButton