import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import PlansGrid from '../snippets/PlansGrid'


const Plans = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <PlansGrid plansList={props.plansList}></PlansGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Plans