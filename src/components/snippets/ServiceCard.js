import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import Image from '../snippets/Image'

const ServicesWrapper = styled.li`
    padding: 20px 25px;
    margin: 15px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 1px 1px 15px rgba(20, 20, 20, .16);
    display: flex;
    flex-direction: column;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        flex-direction: row;
    }
`

const Title = styled.h2`
    color: ${ (props) => props.theme.colors.secondary}; 
    font-size: 1.325rem;
    margin-bottom: 8px;
`

const Description = styled.p`
    font-size: 1.1rem;
    font-weight: 300;
    color: ${ (props) => props.theme.colors.primary}; 
    margin-bottom: 18px;
    line-height: 1.125;
`

const Item = styled.li`
    color: ${ (props) => props.theme.colors.text}; 
    display: inline;
    font-size: .85rem;
    line-height: 1.35;
    display: none;
    &::after {
        display: inline-block;
        content: '|';
        color: ${ (props) => props.theme.colors.secondary}; 
        opacity: .5;
        margin: 0 5px;
    }
    &:last-child {
        &::after {
            content: none;
        }
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        display: none;
    }
`

const IconWrapper = styled.div`
    position: relative;
    max-width: 150px;
    margin: 0 auto 15px auto;
    &::before {
        content: url('${require ('../../assets/img/dots.svg')}');
        width: 48px;
        position: absolute;
        left: -5px;
        bottom: 2px;
        z-index: 3;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        margin-right: 15px;
        margin-bottom: 0;
        height: 75px;
        &::before {
            width: 35px;
            bottom: -2px;
        }
    }
`

const Icon = styled.img`
    position: relative;
    z-index: 4;
    margin: auto;
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        height: 75px;
    }
`

const ServiceCard = (props) => {
    return (
        <ServicesWrapper>
            <IconWrapper>
                <Icon height="95" src={require ('../../assets/img/'+ props.icon + '.svg')}></Icon>
            </IconWrapper>
            <Wrapper>
                <Title>{props.name}</Title>
                <Description>{props.lead}</Description>
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