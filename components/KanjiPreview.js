import { Pressable, StyleSheet, Text } from "react-native"

const KanjiPreview = (props) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                { 
                    opacity: pressed ? 0.25 : 1,
                    shadowOffset: { width: 0, height: pressed ? 0 : 3 }, 
                    marginTop: pressed ? 3 : 0,
                    marginBottom: pressed ? 10 : 13
                }, 
                styles.previewWrapper 
            ]}
            onPress={() => props.navigation.navigate('Kanji', { id: props.id, characters: props.characters })}
        >
            <Text style={styles.charactersText}>{props.characters}</Text>
            <Text style={styles.readingText}>{props.reading}</Text>
            <Text style={styles.meaningText}>{props.meaning}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    previewWrapper: {
        backgroundColor: '#f100a1',
        shadowColor: '#dd0093',
        width: 90,
        borderRadius: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
        marginRight: 10,
        padding: 10
    },
    charactersText: {
        color: '#fff',
        fontSize: 42,
        textAlign: "center",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0,
        paddingBottom: 5
    },
    readingText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "center",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0,
        paddingBottom: 5
    },
    meaningText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "center",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    }
})

export default KanjiPreview