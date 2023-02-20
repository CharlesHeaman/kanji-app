import { Text, View } from "react-native"
import CharacterGridItem from "../../../../components/CharacterGridItem"
import SectionHeader from "../../../../components/SectionHeader"

const FoundInKanji = (props) => {
    return (
        <View>
            <SectionHeader title='Found In Kanji'/>
            {props.foundInData.map((kanji, index) =>
                kanji.object === "kanji" ?
                    <CharacterGridItem
                        characters={kanji.data.characters}
                        meaning={kanji.data.meanings.find((meaning) => meaning.primary).meaning}
                        reading={kanji.data.readings.find((reading) => reading.primary).reading}
                        level={kanji.data.level}
                        burned={props.assignmentData.find((assignment) => assignment.data.subject_id == kanji.id) ?
                            props.assignmentData.find((assignment) => assignment.data.subject_id == kanji.id).data.burned_at != null :
                            false
                        }
                        locked={props.assignmentData.find((assignment) => assignment.data.subject_id == kanji.id) ?
                            props.assignmentData.find((assignment) => assignment.data.subject_id == kanji.id).data.unlocked_at == null :
                            true
                        }
                        key={index}
                    /> : ''
            )}
        </View>
    )
}

export default FoundInKanji
