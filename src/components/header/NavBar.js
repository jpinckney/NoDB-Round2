import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to='/2019tournaments'>2019 Tournaments</Link>
      <Link to='/forum'>Forum</Link>
      <Link to='/eventScheduler'>Schedule an Event</Link>
    </div>
  )
}

