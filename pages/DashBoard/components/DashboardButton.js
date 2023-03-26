import { Pressable, StyleSheet, Text } from "react-native"

const DashBoardButton = (props) => {
    return (
        <Pressable 
            style={({ pressed }) => [{ 
                opacity: pressed ? 0.25 : 1, 
                shadowOffset: { width: 0, height: pressed ? 0 : 6 }, 
                marginTop: props.title === "Lessons" ? 
                    pressed ? 5 : 0 :
                    pressed ? 15 : 10, 
                marginBottom: pressed ? 0 : 5}, 
                styles.dashboardButton,
                styles[props.title.toLowerCase()],
                props.count === 0 ? styles.locked : ''
            ]}
            onPress={() => props.navigation.navigate('Review')}
        >
            <Text style={styles.dashboardButtonText}>{props.title}</Text>
            <Text style={styles.dashboardButtonText}>{props.count}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    dashboardButton: {
        display: 'flex',
        flexDirection: 'row',        
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 3,
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    dashboardButtonText: {
        color: '#fff',
        fontSize: 20,
        textShadowColor: 'rgba(0,0,0,0.2)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 0
    },
    lessons: {
        backgroundColor: '#f100a1',
        shadowColor: '#dd0093',
    },
    reviews: {
        backgroundColor: '#0af',
        shadowColor: '#0993dd'
    },
    locked: {
        backgroundColor: '#999',
        shadowColor: '#777',
        opacity: 0.5
    }
})

export default DashBoardButton