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
    max-width: 220px;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        margin: 25px 5px;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.s}px) {
        margin: 25px auto;
    }
`
const PlansInnerWrapper = styled(Wrapper)`
    display: flex;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom: 50px;
    height: calc(100% - 100px);
    justify-content: space-between;

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
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        font-size: 1.8rem;
    }
`
const ServiceStatus = styled.span`
    position: absolute;
    left: 0px;
    &.included {
        color: #6caf61;
    }
    &.not-included {
        color: #ff0000;
        font-size: 1.3rem;
    }
`

const ServicesList = styled.ul`
    text-align: left;
    margin-bottom: 30px;
`
const Item = styled.li`
        font-family: 'rotundalight', sans-serif;
        font-size: 1.125rem;
        color: ${(props) => props.theme.colors.primary};
        margin-bottom: 10px;
        //padding-left: 5px;
        margin-left: 25px;
`

const Icon = styled.img`
    margin: 0 auto;
    margin-bottom: 0px;
    pointer-events: none;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        height: 120px;
    }
`

const PlanButton = styled(Button)`
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const PlanCard = (props) => {
    return (
        <PlansWrapper >
            <PlansInnerWrapper>
                <Icon height="130" src={require('../../assets/img/' + props.icon + '.svg')} ></Icon>
                <Title>{props.name}</Title>
                <ServicesList>
                    {
                        props.list.map((service, key) => {
                            return (
                                <Item key={key}>
                                    <ServiceStatus className={service.included ? "included" : "not-included"}>{service.included ? "✔" : "x"} </ServiceStatus>{service.name}
                                </Item>
                            )
                        })}
                </ServicesList>
                <PlanButton link="contacto" btnText={props.btnText} />
            </PlansInnerWrapper>
        </PlansWrapper >
    )
}

export default PlanCard