import styled from 'styled-components'


export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    min-height: ${props => props.minHeight};
    background-color: ${(props) => props.background};
    max-width: ${props => props.maxWidth}
`

export default Wrapper