import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import ContactForm from '../snippets/ContactForm'

const ContactContainer = styled(SectionContainer)`
    display: flex!important;
    align-items: flex-start;
    padding-top: 100px;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        flex-wrap: wrap;
    }
`

const ContactTexts = styled(SectionTexts)`
    flex-basis: 45%;
    margin: 0 auto auto auto;
    padding-top: 0;
    text-align: left;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        margin: 0;
        flex-basis: 100%;
    }
    h1 {
        text-align: left;
        em {
            display: block;
        }
    }
    p {
        margin-left: 0;
        margin-right: auto;
        text-align: left;
    }
`

const Contact = (props) => {
    return (
        <Wrapper minHeight="80vh">
            <ContactContainer>
                <ContactTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></ContactTexts>
                <ContactForm></ContactForm>
            </ContactContainer>
        </Wrapper>
    )
}

export default Contact