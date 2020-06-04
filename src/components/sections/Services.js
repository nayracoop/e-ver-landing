import React from 'react'
import { Wrapper, SectionContainer } from '../layout'
import SectionTexts from '../snippets/SectionTexts'
import ServicesGrid from '../snippets/ServicesGrid'


const Services = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts></SectionTexts>
                <ServicesGrid></ServicesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Services