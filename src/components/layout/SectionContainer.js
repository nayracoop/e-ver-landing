import styled, { withTheme } from 'styled-components'


const SectionContainer = styled.div`
    width: calc(100% - 40px);
    margin: 0 auto;
    padding: 100px 20px;
    display: grid;
    
    @media(max-width: ${props => props.theme.pageWidth.m}px){
        padding: 0px 20px;
    }

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