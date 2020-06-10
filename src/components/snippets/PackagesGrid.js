import React from 'react'
import styled from 'styled-components'
import PackageCard from '../snippets/PackageCard'

const GridContainer = styled.div`

`

const PackagesGrid = (props) => {
    return (
        <GridContainer>
            {props.packagesList.map((pack, key) => {
                return (
                    <PackageCard
                        key={key}
                        name={pack.name}
                        list={pack.servicesList}
                    ></PackageCard>
                )
            })}
        </GridContainer>
    )
}

export default PackagesGrid