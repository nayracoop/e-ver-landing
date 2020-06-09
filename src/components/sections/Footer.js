import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import Image from '../snippets/Image'

const Footer = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <Image></Image>
            </SectionContainer>
        </Wrapper>
    )
}

export default Footer