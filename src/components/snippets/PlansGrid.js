import React from 'react'
import styled from 'styled-components'
import PlanCard from './PlanCard'

const GridContainer = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
`

const PlansGrid = (props) => {
    return (
        <GridContainer>
            {props.plansList.map((plan, key) => {
                console.log(plan.servicesList)
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