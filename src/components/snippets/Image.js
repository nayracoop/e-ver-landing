import React from 'react'
// import styled from 'styled-components'

const Image = (props) => {
    return (
        <img className={props.className} alt={props.imgAlt} height={props.imgHeight} src={require('../../assets/img/' + props.imgSrc)} />
    )
}

export default Image