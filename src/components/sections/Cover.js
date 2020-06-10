import React from 'react'
import Wrapper from '../layout/Wrapper'
import Slide from '../snippets/Slide'


const Cover = (props) => {
    return (
        <Wrapper>
            <Slide 
                slideImage = {props.slideImage}
                text = {props.text}
                textSize = {props.textSize}
                btnText = {props.btnText}
            />
        </Wrapper>
    )
}

export default Cover