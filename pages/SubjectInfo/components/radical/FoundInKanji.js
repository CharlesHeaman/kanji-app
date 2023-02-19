import { Text, View } from "react-native"
import CharacterGridItem from "../../../../components/CharacterGridItem"
import SectionHeader from "../../../../components/SectionHeader"

const FoundInKanji = (props) => {
    console.log(Object.keys(props.foundInData.data))
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
                        key={index}
                    /> : ''
            )}
        </View>
    )
}

export default FoundInKanji
