import { StyleSheet, Text, View } from "react-native"
import Section from "./Section"
import SubSection from "./SubSection"

const PageNav = (props) => {
    return (
        <SubSection>
            <View style={styles.pageNavWrapper}>
                <Text style={styles.pageNavText}>Go To</Text>
                {props.navItems.map((item, index) =>
                    <View style={styles.pageNavItemWrapper} key={index}>
                        <Text style={styles.pageNavItemText}>{item.text}</Text>
                    </View>
                )}
            </View>
        </SubSection>
    )
}

const styles = StyleSheet.create({
    pageNavWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    pageNavText: {
        color: '#999',
        marginRight: 2,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    },
    pageNavItemWrapper: {
        margin: 2,
        borderRadius: 3,
        backgroundColor: '#e1e1e1',
    },
    pageNavItemText: {
        color: 'gray',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        textShadowColor: '#fff',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 0
    }
})

export default PageNav