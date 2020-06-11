import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../snippets/ServiceCard'

const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-colore: pink;
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