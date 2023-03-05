import { View } from "react-native"
import Icon from "./Icon"
import KanjiIcon from "./KanjiIcon"
import Page from "./Page"
import PageHeader from "./PageHeader"
import Section from "./Section"
import SectionHeader from "./SectionHeader"

const Kanji = (props) => {
    const { id, characters } = props.route.params;
    return (
        <Page>
            <Section>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon/>
                    <KanjiIcon
                        id={id}
                        characters={characters}
                    />
                    <PageHeader title={characters}/>
                </View>
            </Section>
            <Section>
                <SectionHeader title='Radical Combination'/>
            </Section>
            <Section>
                <SectionHeader title='Meaning'/>
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