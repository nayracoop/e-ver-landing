import styled from 'styled-components'


export const Wrapper = styled.section`
    position: relative;
    width: 100%;
    height: auto;
    //padding-top:50px;
    min-height: ${props => props.minHeight};
    background-color: ${(props) => props.background};
    max-width: ${props => props.maxWidth};
`

export default Wrapper