import React, { Component } from 'react'
import NerdSports from '../header/NerdSports';
import NavBar from '../header/NavBar';
import MainPageStyle from '../styles/styles'


export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomeMessage: ''
    }
  }




  render() {
    return (
      <div>
          <NerdSports color='red' />
          <NavBar />
      </div>
    )
  }
}
