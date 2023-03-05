import { StyleSheet, Text, View } from "react-native"

const ProgressTile = (props) => {
    return (
        <View>
            {props.children}
            <View style={[styles.progressWrapper, props.srsStage >= 5 ? styles.complete : '',]}>
                {[...Array(5)].map((_, index) =>
                    <View 
                        style={[
                            styles.progressPip, 
                            props.srsStage >= 5 ? styles.full : '',
                            index <= props.srsStage - 1 ? styles.filled : '',
                            index === 0 ? styles.roundLeft : '',
                            index === 4 ? styles.roundRight : ''
                        ]}  
                        key={index}  
                    />
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    progressWrapper: {
        display: "flex",
        flexDirection: 'row',
        width: 43,
        marginBottom: 10
    },
    complete: {
        width: 48
    },
    progressPip: {
        width: '20%',
        height: 4,
        marginRight: 1,
        backgroundColor: '#ddd'
    },
    full: {
        marginRight: 0
    },
    filled: {
        backgroundColor: '#08C66C',
    },
    roundLeft: {
        borderBottomLeftRadius: 2,
        borderTopLeftRadius: 2
    },
    roundRight: {
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2
    }
})

export default ProgressTile