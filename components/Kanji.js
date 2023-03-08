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

const Kanji = (props) => {
    const { id, characters } = props.route.params;
    const [subjectData, setSubjectData] = useState({})
    const [radicalData, setRadicalData] = useState([]);

    useEffect(() => {
        getSubject();
    }, [])

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
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <RadicalIcon
                                id={radical.id}
                                characters={radical.data.characters}
                                navigation={props.navigation}
                                key={index}
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
            </Section>
            <Section>
                <SectionHeader title='Visually Similar Kanji'/>
            </Section>
            <Section>
                <SectionHeader title='Found In Vocabulary'/>
            </Section>
            <Section>
                <SectionHeader title='Your Progression'/>
            </Section>
        </Page>
    )
}

export default Kanji