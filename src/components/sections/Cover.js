import React from 'react'
import { Wrapper, SectionContainer } from '../layout'
import Slide from '../snippets/Slide'


const Cover = (props) => {
    return (
        <Wrapper>
            <SectionContainer>
                <Slide 
                    slideImage = {props.slideImage}
                    text = {props.text}
                    textSize = {props.textSize}
                    btnText = {props.btnText}
                />
            </SectionContainer>
        </Wrapper>
    )
}

export default Cover