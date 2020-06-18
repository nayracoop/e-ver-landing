import React from 'react'
import styled from 'styled-components'
import ServiceCard from '../snippets/ServiceCard'

const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    background-colore: pink;
    @media(max-width: ${props => props.theme.pageWidth.l}px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        grid-template-columns: 1fr;
    }
`

const ServicesGrid = (props) => {
    return (
        <GridContainer>
            {props.services.map((service, key) => {
                return (
                    <ServiceCard
                        key={key}
                        name={service.name}
                        lead={service.lead}
                        icon={service.icon}
                        list={service.list}
                    ></ServiceCard>
                )
            })}
        </GridContainer>
    )
}

export default ServicesGrid