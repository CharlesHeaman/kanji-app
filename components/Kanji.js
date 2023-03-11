import Axios from "axios"
import { API_KEY } from '@env';
import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import Icon from "./Icon"
import KanjiIcon from "./KanjiIcon"
import Page from "./Page"
import PageHeader from "./PageHeader"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import SmallHeader from "./SmallHeader";
import InfoText from "./InfoText";
import RadicalIcon from "./RadicalIcon";
import IconGrid from "./IconGrid";
import KanjiPreview from "./KanjiPreview";
import VocabularyPreview from "./VocabularyPreview";
import KanjiReadings from "./KanjiReading";

const Kanji = (props) => {
    const { id, characters } = props.route.params;
    const [subjectData, setSubjectData] = useState({});
    const [radicalData, setRadicalData] = useState([]);
    const [similarData, setSimilarData] = useState([]);
    const [vocabularyData, setVocabularyDate] = useState([]);

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
                setRadicalData(response.data.data)
            }) 
            Axios.get(`https://api.wanikani.com/v2/subjects`, {
                headers: {
                    "Content-Type": "application/json",
                    "Wanikani-Revision": "20170710",
                    "Authorization": `Bearer ${API_KEY}`
                },
                params: {
                    ids: response.data.data.visually_similar_subject_ids.reduce((f, s) => `${f},${s}`)
                }
            }).then((response) => {
                setSimilarData(response.data.data)
            }) 
            Axios.get(`https://api.wanikani.com/v2/subjects`, {
                headers: {
                    "Content-Type": "application/json",
                    "Wanikani-Revision": "20170710",
                    "Authorization": `Bearer ${API_KEY}`
                },
                params: {
                    ids: response.data.data.amalgamation_subject_ids.reduce((f, s) => `${f},${s}`)
                }
            }).then((response) => {
                setVocabularyDate(response.data.data)
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
                    <KanjiIcon
                        id={id}
                        characters={characters}
                        navigation={props.navigation}
                    />
                    <PageHeader title={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                </View>
            </Section>
            <Section>
                <SectionHeader title='Radical Combination'/>
                <IconGrid>
                    {radicalData.map((radical, index) => 
                        <View 
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            key={index}
                        >
                            <RadicalIcon
                                id={radical.id}
                                characters={radical.data.characters}
                                navigation={props.navigation}
                            />
                            <Text style={{
                                textAlign: 'center',
                                marginRight: 10
                            }}>{radical.data.meanings.find((meaning) => meaning.primary).meaning}</Text>
                        </View>
                    )}
                </IconGrid>
            </Section>
            <Section>
                <SectionHeader title='Meaning'/>
                <SmallHeader title='Primary'/>
                <InfoText text={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                <SmallHeader title='Mnemonic'/>
                <InfoText text={subjectData.meaning_mnemonic}/>
            </Section>
            <Section>
                <SectionHeader title='Readings'/>
                <View
                    style={{ 
                        display: "flex",
                        flexDirection: 'row'
                    }}
                >
                    <KanjiReadings
                        type={"On'yomi"}
                        readings={subjectData.readings}
                    />
                    <KanjiReadings
                        type={"Kun'yomi"}
                        readings={subjectData.readings}
                    />
                    <KanjiReadings
                        type={"Nanori"}
                        readings={subjectData.readings}
                    />
                </View>
                <SmallHeader title='Mnemonic'/>
                <InfoText text={subjectData.reading_mnemonic}/>
            </Section>
            <Section>
                <SectionHeader title='Visually Similar Kanji'/>
                <IconGrid>
                    {similarData.map((kanji, index) => 
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
            <Section>
                <SectionHeader title='Found In Vocabulary'/>
                {vocabularyData.map((vocabulary, index) =>
                    <VocabularyPreview
                        id={vocabulary.id}
                        characters={vocabulary.data.characters}
                        reading={vocabulary.data.readings.find((reading) => reading.primary).reading}
                        meaning={vocabulary.data.meanings.find((meaning) => meaning.primary).meaning}
                        navigation={props.navigation}
                        key={index}
                    />
                )}
            </Section>
            <Section>
                <SectionHeader title='Your Progression'/>
            </Section>
        </Page>
    )
}

export default Kanji