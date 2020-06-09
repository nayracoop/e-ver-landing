import styled, { withTheme } from 'styled-components'


const SectionContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    padding: 20px;
    display: grid;

    @media(min-width: ${props => props.theme.pageWidth.l}px){
        max-width: ${props => props.theme.pageWidth.xl}px;
    }
`
export default withTheme(SectionContainer)