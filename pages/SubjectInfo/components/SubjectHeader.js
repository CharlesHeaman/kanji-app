import { Text, View } from "react-native"
import Icon from "../../../components/Icon"
import PageHeader from "../../../components/PageHeader"
import PageNav from "../../../components/PageNav"
import SubSection from "../../../components/SubSection"

const SubjectHeader = (props) => {
    return (
        <View>
            <SubSection>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon text={props.level}/>
                    <Icon text={props.characters} radical/>
                    <PageHeader title={props.primaryMeaning}/>
                </View>
            </SubSection>
            <PageNav navItems={[
                {
                    text: 'Name'
                },
                {
                    text: 'Found In Kanji'
                },
                {
                    text: 'Progress'
                },
            ]}/>
        </View>
    )
}

export default SubjectHeader