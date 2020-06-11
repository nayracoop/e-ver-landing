import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";


const BtnLink = styled(Link)`
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
    padding: 12px 40px;
    border-radius: 45px;
    background: ${ (props) => props.theme.colors.gradient}; 
    @media (max-width: ${(props) => props.theme.pageWidth.m}px) {
        font-size: 1.125rem;
        margin-right: auto;
    }
    &:hover {
        background: ${ (props) => props.theme.colors.gradienthover}; 
    }
`

const Button = (props) => {
    return (
        <BtnLink className={props.className}>{props.btnText}</BtnLink>
    )
}

export default Button
