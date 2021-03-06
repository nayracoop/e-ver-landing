import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const SlideContainer = styled.div`
    width: 100%;
    height: 100vh;
    min-height: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        height: unset;
        min-height: 650px;
        flex-direction: column;
        justify-content: flex-start;
        padding-top: 105px;
    }
    @media (min-width: ${(props) => props.theme.pageWidth.l}px) and (max-width: ${(props) => props.theme.pageWidth.xxl}px) {
        min-height: 850px;
    }
`
const SlideImgContainer = styled.div`
    flex-basis: 50%;
    padding: 0 35px;
    margin-bottom: 30vh;
    text-align: center;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        flex-basis: 20%;
        margin-bottom: 25px;
    }
`
const SlideImg = styled.img`
    height: 100%;
    max-height: 400px;
    width: auto;
    max-width: 100%;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        height: 180px;
        margin-left: auto;
        margin-right: auto;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        height: 165px;
        margin-top: 25px;
        margin-bottom: 5px;
    }
`
const SlideInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-basis: 50%;
    padding: 0 35px;
    margin-bottom: 20vh;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        flex-basis: 30%;
        max-width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    @media (min-width: ${(props) => props.theme.pageWidth.s}px) and (max-width: ${(props) => props.theme.pageWidth.l}px) {
        max-width: 60%;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        padding: 0 60px;
    }
`
const SlideText = styled.p`
    font-family: ${(props) => props.theme.fonts.display};
    font-size: 4rem;
    position: relative;
    max-width: 70%;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 55px;
    padding-bottom: 55px;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        font-size: 3rem;
        max-width: unset;
        margin: auto;
        padding-bottom: 40px;
        margin-bottom: 40px;
    }
    @media (min-width: ${(props) => props.theme.pageWidth.l}px) and (max-width: ${(props) => props.theme.pageWidth.xxl}px) {
        font-size: 3.25rem;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        font-size: 2.25rem;
    }
    &::after {
        content: '';
        position: absolute;
        display: block;
        height: 5px;
        width: 70px;
        bottom: 0;
        background: ${ (props) => props.theme.colors.gradient}; 
        @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
            width: 50px;
        }
    }
`

const Slide = (props) => {
    return (
        <SlideContainer>
            <SlideImgContainer>
                <SlideImg alt={props.slideImgAlt} height="100" src={require('../../assets/img/' + props.slideImage + '.svg')} />
            </SlideImgContainer>
            <SlideInfo>
                <SlideText>{props.text}</SlideText>
                <Button link={props.link} btnText={props.btnText} />
            </SlideInfo>
        </SlideContainer>
    )
}

export default Slide