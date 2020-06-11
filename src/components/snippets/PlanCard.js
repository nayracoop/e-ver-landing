import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import Image from './Image'

const PlansWrapper = styled.li`
    padding: 15px;
    margin: 15px;
    background-color: pink;
    border-radius: 20px;
`

const Title = styled.h2`

`

const Item = styled.li`

`

const Icon = styled(Image)`

`

const PlanCard = (props) => {
    return (
        < PlansWrapper >
            <Icon src="" ></Icon>
            <Wrapper>
                <Title>{props.name}</Title>
                <ul>
                    {
                        props.list.map((service, key) => {
                            console.log(service)
                            return (
                                <Item key={key}><span>{service.included ? "o" : "x"} </span>{service.name}</Item>
                            )
                        })}
                </ul>
            </Wrapper>
        </PlansWrapper >
    )
}

export default PlanCard