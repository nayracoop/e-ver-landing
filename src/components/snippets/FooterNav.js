import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll"

const NavbarContainer = styled.div`
    background: transparent;
`
const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`

const Brand = styled(Link)`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    svg {
        display: block;
    }
`

const NavLink = styled(Link)`
    font-family: ${(props) => props.theme.fonts.title};
    color: #fff;
    text-decoration: none;
    padding: 25px 5px;
    display: block;
`

const BrandText = styled.h1`
    color: red;
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
        padding-top: 25px;
    }
`

const NavItem = styled.li`
    margin: 0px 20px;
    a {
        font-size: 1.1rem;
    }
    @media (max-width: ${(props) => props.theme.pageWidth.l}px) {
        margin: 15px 15px;
    }
`

const FooterNav = (props) => {
    return (
        <NavbarContainer className={props.className}>
            <NavBarWrapper>
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
                        <Menu>
                            <NavItem>
                                <NavLink to='/#terminos-y-condiciones'>Términos y condiciones</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to='/#politicas-de-privacidad'>Políticas de privacidad</NavLink>
                            </NavItem>
                        </Menu>
                    </Menu>
                </Nav>
            </NavBarWrapper>
        </NavbarContainer>
    )
}

export default FooterNav
