import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import SocialMedia from '../snippets/SocialMedia'
import ContactForm from '../snippets/ContactForm'

const Contact = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <SocialMedia></SocialMedia>
                <ContactForm></ContactForm>
            </SectionContainer>
        </Wrapper>
    )
}

export default Contact