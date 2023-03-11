import { API_KEY } from '@env';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import IconGrid from './IconGrid';
import InfoText from "./InfoText";
import KanjiPreview from './KanjiPreview';
import Page from "./Page";
import PageHeader from "./PageHeader";
import RadicalIcon from "./RadicalIcon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SmallHeader from "./SmallHeader";

const Radical = (props) => {
    const { id, characters } = props.route.params;
    const [subjectData, setSubjectData] = useState({});
    const [kanjiData, setKanjiData] = useState([]);

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
                ids: response.data.data.amalgamation_subject_ids.reduce((f, s) => `${f},${s}`)
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
                    <RadicalIcon
                        id={id}
                        characters={characters}
                        navigation={props.navigation}
                    />
                    <PageHeader title={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                </View>
            </Section>
            <Section>
                <SectionHeader title='Name'/>
                <SmallHeader title='Primary'/>
                <InfoText text={subjectData.meanings && subjectData.meanings.find((meaning) => meaning.primary).meaning}/>
                <SmallHeader title='Mnemonic'/>
                <InfoText text={subjectData.meaning_mnemonic}/>
            </Section>
            <Section>
                <SectionHeader title='Found In Kanji'/>
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
            <Section>
                <SectionHeader title='Your Progression'/>
            </Section>
        </Page>
    )
}

export default Radical