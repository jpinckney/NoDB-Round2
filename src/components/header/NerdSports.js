import React from "react";
import styled from 'styled-components'

export default function NerdSports(props) {
  return (

    <div>
      <Title color={props.color}>NerdSports</Title>

    </div>


  )
}



const Title = styled.h1`
font-size: 100px;
color: ${props => props.color};
font-family: 'Audiowide', cursive;

`