import styled, { withTheme } from 'styled-components'


const SectionContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 100px 20px;
    display: grid;

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
export default withTheme(SectionContainer)