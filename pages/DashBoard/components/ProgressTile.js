import { StyleSheet, Text, View } from "react-native"

function ProgressTile(props) {
    return (
        <View style={[styles.progressTileWrapper, styles[props.level.toLowerCase()]]}>
            <Text style={styles.progressTileCountText}>{props.count}</Text>
            <Text style={styles.progressTileLevelText}>{props.level}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    progressTileWrapper: {
        borderRadius: 5,
        padding: 24,
        marginBottom: 10
    },
    progressTileCountText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 12
    },
    progressTileLevelText: {
        color: '#fff',
        opacity: 0.7,
        fontSize: 18,
        textAlign: 'center'
    },
    burned: {
        backgroundColor: '#434343'
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
        backgroundColor: '#dd0093'
    },
})

export default ProgressTile