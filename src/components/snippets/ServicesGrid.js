import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../snippets/ServiceCard'

const GridContainer = styled.div`
    font-size: 1em;
`

const ServicesGrid = (props) => {
    return (
        <GridContainer>
            {props.services.map((service, key) => {
                return (
                    <ServiceCard
                        key={key}
                        name={service.name}
                        description={service.description}
                        list={service.list}
                    ></ServiceCard>
                )
            })}
        </GridContainer>
    )
}

export default ServicesGrid