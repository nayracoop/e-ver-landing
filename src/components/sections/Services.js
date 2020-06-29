import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import ServicesGrid from '../snippets/ServicesGrid'

const Services = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <ServicesGrid services={props.services} ></ServicesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Services