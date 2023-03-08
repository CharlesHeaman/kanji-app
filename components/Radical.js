import { API_KEY } from '@env';
import Axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import InfoText from "./InfoText";
import Page from "./Page";
import PageHeader from "./PageHeader";
import RadicalIcon from "./RadicalIcon";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SmallHeader from "./SmallHeader";

const Radical = (props) => {
    const { id, characters } = props.route.params;
    const [subjectData, setSubjectData] = useState({})

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
            </Section>
            <Section>
                <SectionHeader title='Your Progression'/>
            </Section>
        </Page>
    )
}

export default Radical