import React from 'react'
import styled from 'styled-components'
import Wrapper from '../layout/Wrapper'
import Image from '../snippets/Image'

const Title = styled.h2`

`

const Description = styled.p`

`

const Item = styled.li`

`

const Icon = styled(Image)`

`

const PackageCard = (props) => {
    return (
        < Wrapper >
            <Icon src="" ></Icon>
            <Wrapper>
                <Title>{props.name}</Title>
                <ul>
                    {console.log(props.list)}
                </ul>
            </Wrapper>
        </Wrapper >
    )
}

export default PackageCard