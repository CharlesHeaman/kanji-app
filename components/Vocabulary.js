import Axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { API_KEY } from '@env';
import Icon from "./Icon";
import Page from "./Page";
import PageHeader from "./PageHeader";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import VocabularyIcon from "./VocabularyIcon";
import IconGrid from "./IconGrid";
import KanjiPreview from "./KanjiPreview";
import SmallHeader from "./SmallHeader";
import InfoText from "./InfoText";

const Vocabulary = (props) => {
    const { id, characters } = props.route.params;
    const [subjectData, setSubjectData] = useState({});
    const [kanjiData, setKanjiData] = useState([])

    useEffect(() => {
        getSubject();
    }, [id, characters])

    const getSubject = () => {
        Axios.get(`https://api.wanikani.com/v2/subjects/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Wanikani-Revision": "20170710",
                "Authorization": `Bearer ${API_KEY}`
            }
        }).then((response) => {
            setSubjectData(response.data.data)
            console.log(Object.keys(response.data.data))
            Axios.get(`https://api.wanikani.com/v2/subjects`, {
                headers: {
                    "Content-Type": "application/json",
                    "Wanikani-Revision": "20170710",
                    "Authorization": `Bearer ${API_KEY}`
                },
                params: {
                    ids: response.data.data.component_subject_ids.reduce((f, s) => `${f},${s}`)
                }
            }).then((response) => {
                setKanjiData(response.data.data)
            }) 
        }) 
    }

    return (
        <Page>
            <Section>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon text={subjectData.level}/>
                    <VocabularyIcon
                        id={id}
                        characters={characters}
                        navigation={props.navigation}
                    />
                    <PageHeader title={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                </View>
            </Section>
            <Section>
                <SectionHeader title='Meaning'/>
                <SmallHeader title='Primary'/>
                <InfoText text={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                {subjectData.meanings && subjectData.meanings.filter((meaning) => !meaning.primary).length > 0 &&
                    <>
                        <SmallHeader title='Alternatives'/>
                        <InfoText text={subjectData.meanings && subjectData.meanings.filter((meaning) => !meaning.primary).map((meaning) =>
                            meaning.meaning
                        ).join(', ')}/>
                    </>
                }
                <SmallHeader title='Word Type'/>
                <InfoText text={
                    subjectData.parts_of_speech && subjectData.parts_of_speech.map((type) => {
                        return type.split(' ').map((word) => 
                            word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')
                    }).join(', ')
                }/>
            </Section>
            <Section>
                <SectionHeader title='Reading'/>
                <Text style={styles.readingText}>
                    {subjectData.readings && subjectData.readings.find((reading) => reading.primary).reading}
                </Text>
                <SmallHeader title='Explanation'/>
                <InfoText text={subjectData.reading_mnemonic}/>
            </Section>
            <Section>
                <SectionHeader title='Context'/>
                <SmallHeader title='Context Sentences'/>
                {subjectData.context_sentences && subjectData.context_sentences.map((sentences, index) =>
                    <View 
                        style={{
                            marginBottom: 15
                        }}
                        key={index}
                    >
                        <InfoText text={sentences.ja}/>
                        <InfoText text={sentences.en}/>
                    </View>
                )}
            </Section>
            <Section>
                <SectionHeader title='Kanji Composition'/>
                <IconGrid>
                    {kanjiData.map((kanji, index) => 
                        <KanjiPreview
                            id={kanji.id}
                            characters={kanji.data.characters}
                            reading={kanji.data.readings.find((reading) => reading.primary).reading}
                            meaning={kanji.data.meanings.find((meaning) => meaning.primary).meaning}
                            navigation={props.navigation}
                            key={index}
                        />
                    )}
                </IconGrid>
            </Section>
        </Page>
    )
}

const styles = StyleSheet.create({
    readingText: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10
    }
})

export default Vocabulary