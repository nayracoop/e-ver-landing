import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'


const SectionTitle = styled.h1`
    font-size: 2.8rem;
    color: ${ (props) => props.theme.colors.primary}; 
    text-align: center;
    margin-bottom: 20px;
    line-height: 1.15;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        font-size: 2rem;
    }
`

const SectionText = styled.p`
    font-family: 'rotundalight', sans-serif;
    font-size: 1.2rem;
    line-height: 1.35;
    color: ${ (props) => props.theme.colors.text}; 
    text-align: center;
    max-width: 75%;
    margin: auto;
`
const SectionTexts = (props) => {
    return (
        <Wrapper className={props.className} maxWidth="750px">
            <SectionTitle> {props.sectionTitle}
            </SectionTitle>
            <SectionText> {props.sectionText}  </SectionText>
        </Wrapper>
    )
}

export default SectionTexts