import { Text, View } from "react-native"
import SectionHeader from "../../../components/SectionHeader"
import SectionSubHeader from "../../../components/SectionSubHeader"
import SmallHeader from "../../../components/SmallHeader"

const Progress = (props) => {
    return (
        <View>
            <SectionHeader title='Progress'/>
            <SectionSubHeader title='Name Answered Correct'/>
            <SmallHeader title='Current Streak'/>
            <Text>{props.reviewStatData.meaning_current_streak}</Text>
            <SmallHeader title='Longest Streak'/>
            <Text>{props.reviewStatData.meaning_max_streak}</Text>
            <Text>0</Text>
            <Text>{props.reviewStatData.meaning_correct + props.reviewStatData.meaning_incorrect}</Text>
            <SmallHeader title='Unlocked Date'/>
            <Text>{props.reviewStatData.created_at}</Text>
        </View>
    )
}

export default Progress