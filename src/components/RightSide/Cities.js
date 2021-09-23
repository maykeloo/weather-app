import React from 'react'
import styled from 'styled-components'


const City = styled.button`
box-sizing: border-box;
text-align: left;
width: 50%;
background: transparent;
border: 0;
padding: 5px 10px;
margin-top: 10px;
margin-bottom: 10px;
cursor: pointer;
font-size: 20px;
font-style: italic;
color: grey;
font-weight: 500;
`

const Cities = (props) => {
    return (
        <>
        <City onClick = {props.lastCity} value = {props.city}>{props.city}</City>
        <br/>
        </>
    )
}

export default Cities
