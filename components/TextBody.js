import { StyleSheet, Text, View } from "react-native"

const TextBody = (props) => {
    const replactCustomTags = (text) => {
        var textArray = [{
            text: text
        }];
        let currentText = textArray[textArray.length - 1].text
        while (currentText.indexOf('<radical>') > -1) {
            textArray.pop();
            textArray.push({
                text: currentText.substring(0, currentText.indexOf("<radical>"))
            })
            textArray.push({
                text: currentText.substring(currentText.indexOf("<radical>") + "<radical>".length, currentText.indexOf("</radical>")),
                type: 'radical'
            })
            textArray.push({
                text: currentText.substring(currentText.indexOf("</radical>") + "</radical>".length)
            })
            currentText = textArray[textArray.length - 1].text
        }
        return textArray
    }
    return (
        <Text style={styles.textBodyText}>
            {replactCustomTags(props.text).map((text, index) => 
                text.type ? 
                    <View style={styles[`${text.type}Wrapper`]} key={index}>
                        <Text style={styles[`${text.type}Text`]}>
                            {text.text}
                        </Text>
                    </View> :
                    text.text
                
            )}
        </Text>
    )
}

const styles = StyleSheet.create({
    textBodyText: {
        fontSize: 16,
        lineHeight: 26,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    },
    radicalWrapper: {
        backgroundColor: '#0af',
        shadowColor: '#0993dd',
        shadowOpacity: 1,
        shadowRadius: 0,
        shadowOffset: { width: 0, height: 3 },
        paddingVertical: 1,
        paddingHorizontal: 4,
        borderRadius: 3
    },
    radicalText: {
        color: '#fff',
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 0

    }
})


export default TextBody