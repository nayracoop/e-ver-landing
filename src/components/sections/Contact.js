import React from 'react'
import { Wrapper, SectionContainer } from '../layout'
import SectionTexts from '../snippets/SectionTexts'
import SocialMedia from '../snippets/SocialMedia'
import ContactForm from '../snippets/ContactForm'

const Contact = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts></SectionTexts>
                <SocialMedia></SocialMedia>
                <ContactForm></ContactForm>
            </SectionContainer>
        </Wrapper>
    )
}

export default Contact