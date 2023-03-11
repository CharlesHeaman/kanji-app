import { Pressable, StyleSheet, Text } from "react-native"

const RadicalIcon = (props) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                { 
                    opacity: pressed ? 0.25 : 1,
                    shadowOffset: { width: 0, height: pressed ? 0 : 3 }, 
                    marginTop: pressed ? 3 : 0,
                    marginBottom: pressed ? 7 : 10
                }, 
                styles.iconWrapper ,
                props.locked ? styles.locked : ''
            ]}
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
        marginRight: 10
    },
    iconText: {
        color: '#fff',
        fontSize: 27,
        textAlign: "center",
        lineHeight: 48,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    },
    locked: {
        backgroundColor: '#999',
        shadowColor: '#777',
        opacity: 0.5
    }
})

export default RadicalIcon