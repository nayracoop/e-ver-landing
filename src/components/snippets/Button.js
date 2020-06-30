import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll";


const BtnLink = styled(Link)`
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
    padding: 12px 40px;
    border-radius: 45px;
    cursor: pointer;
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
        <BtnLink
            to={props.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            delay={100}
            className={props.className}>{props.btnText}
        </BtnLink>
    )
}

export default Button
