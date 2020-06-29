import React from 'react'
import styled from 'styled-components'
import Slide from '../snippets/Slide'

const SliderContainer = styled.div`
    width: 100vw;
    height:100vh;
    overflow: hidden;
    display: flex;
`
const SlideContainer = styled.div`
    flex: 1;
    min-width:100%;
`

const Cover = (props) => {
    return (
        <SliderContainer>
            {props.slides.map((slide, key) => {
                console.log(slide)
                return (
                    <SlideContainer>
                        < Slide
                            key={key}
                            slideImage={slide.image}
                            text={slide.text}
                            textSize={props.textSize}
                            btnText={slide.buttonText} >
                        </Slide>
                    </SlideContainer>
                )
            })
            }
        </SliderContainer>
    )
}

export default Cover