import React, { useState } from 'react'
import styled from 'styled-components'
import Slide from './Slide'

const SliderContainer = styled.div`
    height:auto;
    display: flex;
    transform: translate(${props => props.translate}px);
    transition: all ease-in-out .5s;
`
const SlideContainer = styled.div`
    flex: 1;
    min-width:100%;
`

const Arrow = styled.div`
    z-index: 1;
    position: absolute;
    top: 50vh;
    left:${props => props.align === "left" ? "10px" : ""};
    right:${props => props.align === "right" ? "10px;" : ""};
    width: 20px;
    height: 25px;
    background-color: lightgrey;
    cursor: pointer;
    border-radius: 40px 0 0 40px;
    transform: rotate(${props => props.align === "right" ? "180deg" : ""});    
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        width: 30px; 
        height: 35px; 
    }
`

const Cover = (props) => {

    const getWidth = () => window.innerWidth - 15

    const [state, setState] = useState({
        currentIndex: 0,
        translate: 0,
    })

    const { translate, currentIndex } = state

    const next = () => {
        if (state.currentIndex >= props.slides.length - 1) {
            return setState({
                ...state,
                currentIndex: 0,
                translate: 0
            })
        }
        setState({
            ...state,
            currentIndex: currentIndex + 1,
            translate: -(getWidth() * (currentIndex + 1))
        })
    }

    const prev = () => {
        console.log(state.currentIndex)
        if (state.currentIndex === 0) {
            return setState({
                ...state,
                currentIndex: props.slides.length - 1,
                translate: -(getWidth() * 2)
            })
        }
        setState({
            ...state,
            currentIndex: currentIndex - 1,
            translate: -(getWidth() * (currentIndex - 1))
        })

    }


    return (
        <div>
            <Arrow onClick={prev} align="left"></Arrow>
            <Arrow onClick={next} align="right"></Arrow>
            <SliderContainer
                translate={state.translate}
            >

                {props.slides.map((slide, key) => {
                    return (
                        <SlideContainer key={key}>
                            < Slide
                                slideImage={slide.image}
                                slideImgAlt={slide.slideImgAlt}
                                text={slide.text}
                                btnText={slide.buttonText}
                                link={slide.link} >
                            </Slide>
                        </SlideContainer>
                    )
                })
                }
            </SliderContainer>
        </div>
    )
}

export default Cover