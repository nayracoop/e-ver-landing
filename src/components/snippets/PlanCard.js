import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import Button from '../snippets/Button'
import Bg from '../../assets/img/bg-plancard.svg'

const PlansWrapper = styled.li`
    padding: 0px 65px 40px 65px;
    margin: 15px;
    background-image: url(${Bg});
    background-position: top center;
    background-repeat: no-repeat;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.colors.shadow};
    text-align: center;
    margin-bottom: 50px;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        margin: 15px 15px 0 0;
    }
`

const Title = styled.h2`
    font-family: 'rotundabold', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 35px;
    &::after {
        content: '';
        background-image: ${(props) => props.theme.colors.gradient};
        height: 4px;
        width: 65px;
        position: absolute; 
        bottom: 0; 
        left: 0;
        right: 0;
        margin: auto;
    }
`
const ServiceStatus = styled.span`
    position: absolute;
    left: -25px;
    &.included {
        color: #6caf61;
    }
    &.not-included {
        color: #ff0000;
    }
`

const ServicesList = styled.ul`
    text-align: left;
    margin-bottom: 50px;
`
const Item = styled.li`
        font-family: 'rotundalight', sans-serif;
        font-size: 1.125rem;
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 10px;
        padding-left: 5px;
`

const Icon = styled.img`
    margin: 0 auto;
    margin-bottom: 20px;
`

const PlanButton = styled(Button)`
    display: block;
`

const PlanCard = (props) => {
    return (
        <PlansWrapper >            
            <Wrapper>
                <Icon height="130" src={require('../../assets/img/' + props.icon + '.svg')} ></Icon>
                <Title>{props.name}</Title>
                <ServicesList>
                    {
                        props.list.map((service, key) => {
                            console.log(service)
                            return (
                                <Item key={key}>
                                    <ServiceStatus className={service.included ? "included" : "not-included"}>{service.included ? "✔" : "x"} </ServiceStatus>{service.name}
                                </Item>
                            )
                        })}
                </ServicesList>
                <PlanButton btnText={props.btnText}/>
            </Wrapper>
        </PlansWrapper >
    )
}

export default PlanCard