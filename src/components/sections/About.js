import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import Image from '../snippets/Image'
import { ReactComponent as Arrow } from '../../assets/img/arrow-left.svg'

const LeftBlock = styled.div`
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        margin-bottom: 65px;
    }
`

const AboutTexts = styled(SectionTexts)`
    max-width: unset;
    * {
        text-align: left!important;
        margin-left: 0;
    }
    p {
        margin-right: auto;
        margin-left: 0;
    }
`

const AboutContainer = styled(SectionContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    background-color: #fff;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        grid-template-columns: 1fr;
    }
`

const RightBlock = styled.div`
`

const NavLink = styled.a`
    color: ${(props) => props.theme.colors.secondary};
    padding-bottom: 5px;
    text-decoration: none;
    border-bottom: 2px dotted ${(props) => props.theme.colors.secondary};
    font-size: 1.2rem;
    line-height: 2.25;
    position: relative;
    transition: .2s ease-in-out;
    &:hover,
    &:active {
        color: ${(props) => props.theme.colors.primary};
        border-color: ${(props) => props.theme.colors.primary};
        svg polygon {
            fill: ${(props) => props.theme.colors.primary};
        }
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        font-size: 1.125rem;
    }
`
const RightArrow = styled(Arrow)`
    width: 25px;
    margin-left: 10px;
`

const AboutImg = styled(Image)`
    margin-bottom: 35px;
    pointer-events: none;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        max-width: 75%;
        margin: auto;
        height: auto;
    }
`


const About = (props) => {
    return (
        <Wrapper minHeight="75vh">
            <AboutContainer>
                <LeftBlock>
                    <AboutTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></AboutTexts>
                    <NavLink href='#'>Conocé las características de la plataforma <RightArrow /> </NavLink>
                </LeftBlock>
                <RightBlock>
                    <AboutImg imgAlt={props.imgAlt} imgHeight={props.imgHeight} imgSrc={props.imgSrc}></AboutImg>
                </RightBlock>
            </AboutContainer>
        </Wrapper >
    )
}

export default About