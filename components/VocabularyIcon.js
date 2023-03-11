import { Pressable, StyleSheet, Text } from "react-native"

const VocabularyIcon = (props) => {
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
            onPress={() => props.navigation.navigate('Vocabulary', { id: props.id, characters: props.characters })}
        >
            <Text style={styles.iconText}>{props.characters}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconWrapper: {
        backgroundColor: '#a0f',
        shadowColor: '#80c',
        height: 48,
        borderRadius: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginRight: 10,
        paddingHorizontal: 10
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

export default VocabularyIcon