import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll';
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import Button from '../snippets/Button'

const NavbarContainer = styled.header`
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding: 25px 15px;
    box-shadow: 1px 1px 3px 1px rgba(128,128,128,.1);
    -webkit-transform: translate3d(0, 0, 0);
    transform : translate3d(0, 0, 0);
`
const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 95%;
    
    @media(min-width: ${props => props.theme.pageWidth.s}px){
        max-width: ${props => props.theme.pageWidth.m}px;
    }

    @media(min-width: ${props => props.theme.pageWidth.m}px){
        max-width: ${props => props.theme.pageWidth.l}px;
    }

    @media(min-width: ${props => props.theme.pageWidth.l}px){
        max-width: ${props => props.theme.pageWidth.xl}px;
    }

    @media(min-width: ${props => props.theme.pageWidth.xl}px){
        max-width: ${props => props.theme.pageWidth.xxl}px;
    }
`

const Brand = styled(Link)`
    display: flex;
    align-items: center;
    padding: 5px 0px;
    cursor: pointer;
    svg {
        display: block;
    }
`

const NavLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.title};
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    padding: 10px 5px;
    display: block;
    border-bottom: 2px dotted transparent;
    cursor: pointer;
    transition: .2s ease-in-out;
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        paddding: 15px 5px;
    }
    &.active,
    &:hover {
        color: ${(props) => props.theme.colors.secondary};
        border-bottom: 2px dotted ${(props) => props.theme.colors.secondary};
    }
`

const BrandText = styled.h1`
    font-size: .75rem;
    position: absolute;
    left: -9999px;
`
const Nav = styled.nav`
`

const Menu = styled.ul`
    display: flex;    
    align-items: center;
    &.show {
        transform: translateX(0);
    }
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        position: absolute;
        left: 0;
        height: 90vh;
        flex-direction: column;
        justify-content: flex-start;
        left: 0;
        top: 100px;
        width: 100%;
        background: #fff;
        transform: translateX(-100%);
        transition: .3s ease-in-out;
        border-top: 1px solid magenta;
    }
`

const NavItem = styled.li`
    cursor: pointer;
    margin: 0px 20px;
    a {
        font-size: 1.2rem;
    }
    &:first-of-type {
        display: none;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        margin: 15px 15px;
        &:nth-child(2) {
            margin-top: 30px;
        }        
    }
`

const Toggler = styled.button`
    height: 50px;
    width: 50px;    
    margin-left: auto;
    font-family: ${(props) => props.theme.fonts.title};
    color: transparent;
    text-transform: uppercase;
    cursor: pointer;
    outline: none !important;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzNSAxNy40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAxNy40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzQ5NDA2Njt9PC9zdHlsZT48ZyBpZD0iQ2FwYV8yXzFfIj48ZyBpZD0iQ2FwYV8xLTIiPjxyZWN0IGNsYXNzPSJzdDAiIHdpZHRoPSIzNSIgaGVpZ2h0PSIzLjUiLz48cmVjdCB4PSI2LjEiIHk9IjYuOSIgY2xhc3M9InN0MCIgd2lkdGg9IjI4LjkiIGhlaWdodD0iMy41Ii8+PHJlY3QgeD0iMTMuNCIgeT0iMTMuOSIgY2xhc3M9InN0MCIgd2lkdGg9IjIxLjUiIGhlaWdodD0iMy41Ii8+PC9nPjwvZz48L3N2Zz4=); !important;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
    &.open {
        background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzNSAxNy40IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAxNy40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6IzQ5NDA2Njt9PC9zdHlsZT48cmVjdCB4PSI2LjciIHk9IjYuOSIgdHJhbnNmb3JtPSJtYXRyaXgoMC42OTY0IC0wLjcxNzcgMC43MTc3IDAuNjk2NCAtMC45Mzg4IDE1LjE5MDkpIiBjbGFzcz0ic3QwIiB3aWR0aD0iMjEuNSIgaGVpZ2h0PSIzLjUiLz48cmVjdCB4PSIxNS43IiB5PSItMi4xIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjY5NjQgLTAuNzE3NyAwLjcxNzcgMC42OTY0IC0wLjkzODggMTUuMTkwOSkiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjUiIGhlaWdodD0iMjEuNSIvPjwvc3ZnPg==);
    }
    &:active {
        background-color: transparent;
    }
    &:focus {
        background-color: transparent;
    }
    &::-moz-focus-inner {
        border: none !important;
        outline: none !important;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    @media (min-width: ${(props) => props.theme.pageWidth.l}px) {
        display: none;
    }
`
const CallToAction = styled(Button)`
    display: flex;
`
const Navbar = (props) => {
    const showMenu = () => {
        const menu = document.querySelector('.menu')
        const toggler = document.querySelector('.toggler')
        const bodyTag = document.body
        menu.classList.toggle('show')
        toggler.classList.toggle('open')
        bodyTag.classList.toggle('opened-menu')
    }
    return (
        <NavbarContainer>
            <NavBarWrapper>
                <Brand to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={100}>
                    <BrandText>e-ver</BrandText>
                    <Logo height="28" />
                </Brand>
                <Toggler className="toggler" onClick={showMenu}></Toggler>
                <Nav>
                    <Menu className="menu">
                        {
                            Object.entries(props.navItems).map((navItem, key) => {
                                return (
                                    <NavItem key={key}>
                                        <NavLink
                                            activeClass="active"
                                            to={navItem[1].slug}
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            delay={100}>
                                            {navItem[1].navText}
                                        </NavLink>
                                    </NavItem>
                                )
                            })
                        }
                    </Menu>
                </Nav>
            </NavBarWrapper>
        </NavbarContainer>
    )
}

export default Navbar
