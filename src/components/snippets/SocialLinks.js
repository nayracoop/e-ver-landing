import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Ig } from '../../assets/img/ig.svg'
import { ReactComponent as Fb } from '../../assets/img/fb.svg'
import { ReactComponent as Yt } from '../../assets/img/yt.svg'


const Nav = styled.ul`
    display: flex;
    justify-content: flex-start;    
`

const NavItem = styled.li`
    margin: 0 20px 0 0;
`

const NavLink = styled.a`
    font-family: ${(props) => props.theme.fonts.title};
    color: #fff;
    text-decoration: none;
    display: block;
    svg {
        path {
            transition: all .12s ease-in-out;
        }
    }
    &:hover {
        * {
            fill: ${(props) => props.theme.colors.secondary};
        }
    }
`

const SocialLinks = (props) => {
return (
    <Nav className="menu">
        <NavItem>
            <NavLink target="_blank" href='https://instagram.com'>
                <Ig height="15" />
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink target="_blank" href='https://facebook.com'>
                <Fb height="15" />
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink target="_blank" href='https://youtube.com'>
                <Yt height="15" />
            </NavLink>
        </NavItem>
    </Nav>
)
}

export default SocialLinks