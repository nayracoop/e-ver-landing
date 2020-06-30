import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import ReactMarkdown from "react-markdown";

const TextsWrapper = styled(Wrapper)`
    margin: auto auto 40px auto;
`

const SectionTitle = styled(ReactMarkdown)`
    h1 {
        font-size: 2.8rem;
        color: ${ (props) => props.theme.colors.primary}; 
        text-align: center;
        margin-bottom: 25px;
        line-height: 1.15;

        strong,
        em {
            color: ${ (props) => props.theme.colors.secondary}; 
            font-family: 'rotundamedium', sans-serif;
        }

        @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
            font-size: 1.8rem;
        }
    }
`

const SectionText = styled(ReactMarkdown)`
    p {
        font-family: 'rotundalight', sans-serif;
        font-size: 1.2rem;
        line-height: 1.35;
        color: ${ (props) => props.theme.colors.text}; 
        text-align: center;
        max-width: 75%;
        margin: auto;

        strong,
        em {
            color: ${ (props) => props.theme.colors.secondary}; 
            font-family: 'rotundalight_italic', sans-serif;
        }
        
        @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
            font-size: 1.2rem;
        }
    }
`
const SectionTexts = (props) => {
    return (
        <TextsWrapper className={props.className} maxWidth="750px">
            <SectionTitle source={props.sectionTitle}> </SectionTitle>
            <SectionText source={props.sectionText} ></SectionText>
        </TextsWrapper>
    )
}

export default SectionTexts