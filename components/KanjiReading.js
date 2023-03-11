import { StyleSheet, Text, View } from "react-native"
import SmallHeader from "./SmallHeader"

const KanjiReadings = (props) => {
    const reading = props.readings && props.readings.find((reading) => reading.type === props.type.replace("'", '').toLowerCase())
    return (
        <View style={[styles.readingWrapper, reading && reading.primary ? styles.primary : '']}>
            <SmallHeader title={props.type}/>
            <Text style={styles.readingText}>
                {reading ? reading.reading : 'None'}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    readingWrapper: {
        width: '33.33%',
        marginBottom: 10,
        opacity: 0.5
    },
    readingText: {
        fontSize: 20,
        lineHeight: 26
    },
    primary: {
        opacity: 1
    }
})

export default KanjiReadings