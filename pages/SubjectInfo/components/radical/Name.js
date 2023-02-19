import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import AddButton from "../../../../components/AddButton.js"
import Section from "../../../../components/Section.js"
import SectionHeader from "../../../../components/SectionHeader.js"
import SectionSubHeader from "../../../../components/SectionSubHeader.js"
import SmallHeader from "../../../../components/SmallHeader.js"
import SubSection from "../../../../components/SubSection.js"
import TextBody from "../../../../components/TextBody.js"

const Name = (props) => {
    return (
        <Section>
            <SectionHeader title='Name'/>
            {/* Names */}
            <SubSection>
                {/* Primary */}
                <SubSection>
                    <SmallHeader title='Primary'/>
                    <TextBody text={props.primaryMeaning}/>
                </SubSection>
                {/* User Synonyms */}
                <SubSection>
                    <SmallHeader title='User Synonyms'/>
                    <AddButton title='Add Synonym'/>
                </SubSection>
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