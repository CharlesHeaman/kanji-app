import { Pressable, StyleSheet, Text } from "react-native"

const RadicalIcon = (props) => {
    return (
        <Pressable 
            style={styles.iconWrapper} 
            onPress={() => props.navigation.navigate('Radical', { id: props.id, characters: props.characters })}
        >
            <Text style={styles.iconText}>{props.characters}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#0af',
        shadowColor: '#0993dd',
        width: 48,
        height: 48,
        borderRadius: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 3 },
        marginRight: 10,
        marginBottom: 10
    },
    iconText: {
        color: '#fff',
        fontSize: 27,
        textAlign: "center",
        lineHeight: 48,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    }
})

export default RadicalIcon