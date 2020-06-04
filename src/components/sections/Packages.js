import React from 'react'
import { Wrapper, SectionContainer } from '../layout'
import SectionTexts from '../snippets/SectionTexts'
import PackagesGrid from '../snippets/PackagesGrid'


const Packages = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts></SectionTexts>
                <PackagesGrid></PackagesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Packages