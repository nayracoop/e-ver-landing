import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from '../snippets/Slider'

const CoverContainer = styled.section`
    width: 100%;
    height:auto;
    overflow: hidden;
`
const Cover = (props) => {

    return (
        <CoverContainer>
            <Slider slides={props.slides}></Slider>
        </CoverContainer>
    )
}

export default Cover