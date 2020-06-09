import React from 'react'
import Wrapper from '../layout/Wrapper'
import SectionContainer from '../layout/SectionContainer'


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