import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import ServicesGrid from '../snippets/ServicesGrid'

const ServicesSectionTexts = styled(SectionTexts)`
    margin: auto auto 60px auto;
`

const Services = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <SectionContainer>
                <ServicesSectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></ServicesSectionTexts>
                <ServicesGrid services={props.services} ></ServicesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Services