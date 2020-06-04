import React from 'react'
import { Wrapper, SectionContainer } from '../layout'
import SectionTexts from '../snippets/SectionTexts'
import Image from '../snippets/Image'

const About = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts></SectionTexts>
                <Image></Image>
            </SectionContainer>
        </Wrapper>
    )
}

export default About