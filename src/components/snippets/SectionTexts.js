import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'

const SectionTitle = styled.h1`

`

const SectionText = styled.p`

`

const SectionTexts = (props) => {
    return (
        <Wrapper maxWidth="650px">
            <SectionTitle> {props.sectionTitle} </SectionTitle>
            <SectionText> {props.sectionText}  </SectionText>
        </Wrapper>
    )
}

export default SectionTexts