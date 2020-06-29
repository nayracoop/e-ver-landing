import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import PlansGrid from '../snippets/PlansGrid'

const PlanTexts = styled(SectionTexts)`
    margin-left: auto;
    margin-right: auto;
`

const Plans = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <SectionContainer>
                <PlanTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></PlanTexts>
                <PlansGrid plansList={props.plansList} btnText={props.btnText}></PlansGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Plans