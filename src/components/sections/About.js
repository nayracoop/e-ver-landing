import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import Image from '../snippets/Image'

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
`

const AboutContainer = styled(SectionContainer)`
    padding-top:15vh;
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
    position: relative;
    &::after {
        content: url('${require('../../assets/img/arrow-left.svg')}');
        display: inline-block;
        width: 25px;
        margin-left: 10px;
        bottom: 0px;
        position: absolute;
    }

`

const AboutImg = styled(Image)`
    margin-bottom: 35px;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        max-width: 75%;
        margin: auto;
        height: auto;
    }
`


const About = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <AboutContainer>
                <LeftBlock>
                    <AboutTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></AboutTexts>
                    <NavLink href='#'>Conocé las características de la plataforma</NavLink>
                </LeftBlock>
                <RightBlock>
                    <AboutImg imgHeight={props.imgHeight} imgSrc={props.imgSrc}></AboutImg>
                </RightBlock>
            </AboutContainer>
        </Wrapper >
    )
}

export default About