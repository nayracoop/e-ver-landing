import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import ServicesGrid from '../snippets/ServicesGrid'


const Services = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <ServicesGrid></ServicesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Services