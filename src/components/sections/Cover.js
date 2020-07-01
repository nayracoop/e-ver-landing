import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from '../snippets/Slider'
import Bg from '../../assets/img/bg-slider.svg'

const CoverContainer = styled.section`
    width: 100%;
    height:auto;
    overflow: hidden;
    background-image: url(${Bg});
    background-position: bottom center;
    background-repeat: no-repeat;
`
const Cover = (props) => {

    return (
        <CoverContainer>
            <Slider slides={props.slides}></Slider>
        </CoverContainer>
    )
}

export default Cover