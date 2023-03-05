import { View } from "react-native";
import Icon from "./Icon";
import Page from "./Page"
import PageHeader from "./PageHeader";
import RadicalIcon from "./RadicalIcon";
import Section from "./Section"
import SectionHeader from "./SectionHeader"

const Radical = (props) => {
    const { id, characters } = props.route.params;
    return (
        <Page>
            <Section>
                <View style={{ 
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Icon/>
                    <RadicalIcon
                        id={id}
                        characters={characters}
                    />
                    <PageHeader title={characters}/>
                </View>
            </Section>
            <Section>
                <SectionHeader title='Name'/>
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