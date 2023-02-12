import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import Section from "../../../../components/Section.js"
import SectionHeader from "../../../../components/SectionHeader.js"
import SectionSubHeader from "../../../../components/SectionSubHeader.js"
import SubSection from "../../../../components/SubSection.js"
import TextBody from "../../../../components/TextBody.js"

const Name = (props) => {
    return (
        <Section>
            <SectionHeader title='Name'/>
            {/* Names */}
            <SubSection>
                {/* Primary */}
                <View>
                    <Text>Primary</Text>
                </View>
                {/* User Synonyms */}
                <View>
                    <Text>User Synonyms</Text>
                    <Button title='Add Synonym'></Button>
                </View>
            </SubSection>
            {/* Mnemonic */}
            <SubSection>
                <SectionSubHeader title='Mnemonic'/>
                <TextBody text={props.mnemonic}/>
            </SubSection>
            <SubSection>
                <SectionSubHeader title='Note'/>
                <TextInput/>
            </SubSection>
        </Section>
    )
}

export default Name