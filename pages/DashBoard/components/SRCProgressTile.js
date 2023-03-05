import { StyleSheet, Text, View } from "react-native"

function SRCProgressTile(props) {
    return (
        <View style={[styles.progressTileWrapper, styles[props.level.toLowerCase()]]}>
            <Text style={styles.progressTileLevelText}>{props.level}</Text>
            <Text style={styles.progressTileCountText}>{props.count}</Text>
        </View>
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
        // width: 40,
        fontWeight: '700',
        // textAlign: 'center',
        // marginBottom: 12
    },
    progressTileLevelText: {
        color: '#fff',
        // opacity: 0.7,
        fontSize: 16,
        // textAlign: 'center'
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