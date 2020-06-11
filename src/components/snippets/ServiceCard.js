import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import Image from '../snippets/Image'

const ServicesWrapper = styled.li`
    padding: 15px;
    margin: 15px;
    background-color: pink;
    border-radius: 20px;
`


const Title = styled.h2`

`

const Description = styled.p`

`

const Item = styled.li`

`

const Icon = styled(Image)`

`

const ServiceCard = (props) => {
    return (
        <ServicesWrapper>
            <Icon src="" ></Icon>
            <Wrapper>
                <Title>{props.name}</Title>
                <Description>{props.description}</Description>
                <ul>
                    {props.list.map((item, key) => {
                        return (
                            <Item key={key}>{item}</Item>
                        )
                    })}
                </ul>
            </Wrapper>
        </ServicesWrapper>
    )
}

export default ServiceCard