import React from 'react'
import styled from 'styled-components'
import PackageCard from '../snippets/PackageCard'

const GridContainer = styled.div`

`

const PackagesGrid = (props) => {
    return (
        <GridContainer>
            <PackageCard></PackageCard>
        </GridContainer>
    )
}

export default PackagesGrid