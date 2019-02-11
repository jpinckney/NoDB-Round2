import React, { Component } from 'react'
import NerdSports from '../header/NerdSports';
import PewPew from '../footer/PewPew';
import { Link } from 'react-router-dom'
import {WholeLoginPage, P, Input, Button, LoginBox}  from '../styles/styles'
import axios from 'axios'


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userGuess: '',
      welcomeMessage: '',
    }
  }

 

  render() {
    return (
      <WholeLoginPage>
        <NerdSports color='white' />
        <LoginBox>
          <P>Name that character!!</P>
          <Input
            onChange={ (e) => { this.setState({ userGuess: e.target.value }) } }
            placeholder='Guess...' />
          { this.state.userGuess === 'brand' ? <Link to='/mainpage'><Button
            color={ 'green' }>Good Job!!</Button></Link> : <></> }
        </LoginBox>
        {/* {this.state.userGuess} */}
        <PewPew />
      </WholeLoginPage>


    )
  }
}








