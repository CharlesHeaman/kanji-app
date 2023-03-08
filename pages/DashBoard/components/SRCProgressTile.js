import { Pressable, StyleSheet, Text } from "react-native"

function SRCProgressTile(props) {
    return (
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.25 : 1 }, styles.progressTileWrapper, styles[props.level.toLowerCase()]]}>
            <Text style={styles.progressTileLevelText}>{props.level}</Text>
            <Text style={styles.progressTileCountText}>{props.count}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    progressTileWrapper: {
        display: 'flex',
        flexDirection: 'row',        
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    progressTileCountText: {
        color: '#fff',
        fontSize: 16,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    },
    progressTileLevelText: {
        color: '#fff',
        fontSize: 16,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0
    },
    burned: {
        backgroundColor: '#434343',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    enlightened: {
        backgroundColor: '#0093dd'
    },
    master: {
        backgroundColor: '#294ddb'
    },
    guru: {
        backgroundColor: '#882d9e'
    },
    apprentice: {
        backgroundColor: '#dd0093',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5

    },
})

export default SRCProgressTile