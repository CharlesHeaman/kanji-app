import FoundInKanji from "./components/radical/FoundInKanji"
import Name from "./components/radical/Name"
import Progress from "./components/Progress"
import SubjectHeader from "./components/SubjectHeader.js"
import Page from "../../components/Page"

const SubjectInfo = (props) => {
    return (
        <Page>
            <SubjectHeader 
                level={props.subjectData.level}
                characters={props.subjectData.characters}
                primaryMeaning={props.subjectData.meanings.find((meaning) => meaning.primary).meaning}
            />
            <Name 
                mnemonic={props.subjectData.meaning_mnemonic}
                primaryMeaning={props.subjectData.meanings.find((meaning) => meaning.primary).meaning}
            />
            <FoundInKanji foundInData={props.foundInData}/>
            <Progress reviewStatData={props.reviewStatData[0].data}/>
        </Page>
    )
}

export default SubjectInfo