import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import PackagesGrid from '../snippets/PackagesGrid'


const Packages = (props) => {
    return (
        <Wrapper minHeight="100vh">
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <PackagesGrid packagesList={props.packagesList}></PackagesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Packages