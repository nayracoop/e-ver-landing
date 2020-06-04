import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../../assets/img/logo.svg'
import { ReactComponent as Icon } from '../../../assets/img/under-icon.svg'

const Container = styled.div`
    margin: 0 auto;
    max-width: 614px;
    text-align: center;
`
const Title = styled.h1`
    color: purple;
    margin-bottom: 77px;
    svg {
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        height: 40px;
    }
    }
`
const Text = styled.p`
    font-family: 'rotundaextra_bold', sans-serif;
    font-size: 4.8rem;
    color: #494066;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        font-size: 2.25rem;
        max-width: 500px;
        margin: auto;
    }
`
const InnerContainer = styled.div`
    width: 100%;
    svg {
        margin-top: 66px;
        @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
            height: 50px;
        }
    }
    p {
        font-family: 'rotundamedium', sans-serif;
        margin-top: 20px;
        font-size: 2rem;
        @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
            font-size: 1.625rem;
        }
    }
`
const TitleText = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`


const UnderConstruction = (props) => {
    return (
        <Container>
            <Title>
                <TitleText>{props.title}</TitleText>
                <Logo height="62" />
            </Title>
            <Text>{props.lead}</Text>
            <InnerContainer>
                <Icon height="55" />
                <Text>{props.text}</Text>
            </InnerContainer>
        </Container>
    )
}

export default UnderConstruction