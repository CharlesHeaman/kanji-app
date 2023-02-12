import { View } from "react-native"
import FoundInKanji from "./components/radical/FoundInKanji"
import Name from "./components/radical/Name"
import Progress from "./components/Progress"
import SubjectHeader from "./components/SubjectHeader.js"

const SubjectInfo = (props) => {
    return (
        <View>
            <SubjectHeader 
                level={props.subjectData.level}
                characters={props.subjectData.characters}
                primaryMeaning={props.subjectData.meanings.filter((meaning) => meaning.primary)[0].meaning}
            />
            <Name mnemonic={props.subjectData.meaning_mnemonic}/>
            <FoundInKanji/>
            <Progress/>
        </View>
    )
}

export default SubjectInfo