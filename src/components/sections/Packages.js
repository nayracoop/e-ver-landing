import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'
import SectionTexts from '../snippets/SectionTexts'
import PackagesGrid from '../snippets/PackagesGrid'


const Packages = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <SectionTexts sectionTitle={props.sectionTitle} sectionText={props.sectionText} ></SectionTexts>
                <PackagesGrid packagesData={props.packagesData}></PackagesGrid>
            </SectionContainer>
        </Wrapper>
    )
}

export default Packages