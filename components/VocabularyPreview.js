import { Pressable, StyleSheet, Text, View } from "react-native"

const VocabularyPreview = (props) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                { 
                    opacity: pressed ? 0.25 : 1,
                    shadowOffset: { width: 0, height: pressed ? 0 : 3 }, 
                    marginTop: pressed ? 3 : 0,
                    marginBottom: pressed ? 5 : 8
                }, 
                styles.previewWrapper 
            ]}
            onPress={() => props.navigation.navigate('Vocabulary', { id: props.id, characters: props.characters })}
        >
            <Text style={styles.charactersText}>{props.characters}</Text>
            <View>
                <Text style={styles.readingText}>{props.reading}</Text>
                <Text style={styles.meaningText}>{props.meaning}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    previewWrapper: {
        backgroundColor: '#a0f',
        shadowColor: '#80c',
        borderRadius: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
        padding: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    charactersText: {
        color: '#fff',
        fontSize: 32,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0,
    },
    readingText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "right",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0,
    },
    meaningText: {
        color: '#fff',
        fontSize: 14,
        textAlign: "right",
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    }
})

export default VocabularyPreview