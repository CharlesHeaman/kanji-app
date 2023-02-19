import { StyleSheet, Text, View } from "react-native"

const CharacterGridItem = (props) => {
    return (
        <View style={styles.itemWrapper}>
            <View style={styles.charactersLevelWrap}>
                <Text style={[styles.itemText, styles.charactersText]}>{props.characters}</Text>
                <Text style={styles.itemText}>{props.level}</Text>
            </View>
            <View style={styles.meaningReadingWrap}>
                <Text style={styles.itemText}>{props.reading}</Text>
                <Text style={styles.itemText}>{props.meaning}</Text>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    itemWrapper: {
        backgroundColor: '#f0a',
        borderBottomColor: '#f6c',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
    },
    charactersText: {
        fontSize: 27,
        marginRight: 10
    },  
    itemText: {
        color: '#fff',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    },
    charactersLevelWrap: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    meaningReadingWrap: {
        display: 'flex',
        alignItems: 'flex-end'
    }
})

export default CharacterGridItem