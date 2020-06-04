import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../snippets/ServiceCard'

const GridContainer = styled.div`

`

const ServicesGrid = (props) => {
    return (
        <GridContainer>
            <ServiceCard></ServiceCard>
        </GridContainer>
    )
}

export default ServicesGrid