import { Button, Keyboard, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"

const Characters = (props) => {
    return (
        <View>
            <View style={styles.charactersWrapper}>
                <Text style={styles.charactersText}>国宝</Text>
            </View>
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Vocabulary</Text>
                <Text style={[styles.questionText, styles.strongText]}>Meaning</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.inputStyle}
                    autoFocus
                    autoCorrect={false}
                    spellCheck={false}
                    placeholder='Your Response'
                />
            </View>
        </View>
    )
    
}

const styles = StyleSheet.create({
    charactersWrapper: {
        backgroundColor: '#a100f1',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    charactersText: {
        color: '#fff',
        fontSize: 64,
        textAlign: 'center'
    },
    questionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9e9',
        padding: 12,
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    questionText: {
        color: '#555',
        fontSize: 18,
    },
    strongText: {
        fontWeight: '700',
        paddingLeft: 4
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    inputStyle: {
        textAlign: 'center',
        fontSize: 24,
        padding: 12
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    inputStyle: {
        textAlign: 'center',
        fontSize: 24,
        padding: 12
    }
  });

export default Characters