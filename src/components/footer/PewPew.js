import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function PewPew() {
  return (
    <div>

      <Footer to='/aboutus'>©PewPewLLC</Footer>
    </div>
  )
}

const Footer = styled(Link)`
color: white;
text-decoration: none;
position: relative;
bottom: 10px;
`
