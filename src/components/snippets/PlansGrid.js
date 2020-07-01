import React from 'react'
import styled from 'styled-components'
import PlanCard from './PlanCard'

const GridContainer = styled.ul`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media(max-width: ${props => props.theme.pageWidth.xl}px){
        grid-template-columns: 1fr 1fr 1fr;
    }
    
    @media(max-width: ${props => props.theme.pageWidth.l}px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        grid-template-columns: 1fr;
    }
`

const PlansGrid = (props) => {
    return (
        <GridContainer>
            {props.plansList.map((plan, key) => {
                return (
                    <PlanCard
                        key={key}
                        name={plan.name}
                        icon={plan.icon}
                        list={plan.servicesList}
                        btnText={props.btnText}
                    ></PlanCard>
                )
            })}
        </GridContainer>
    )
}

export default PlansGrid