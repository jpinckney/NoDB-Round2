import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import NerdSports from './components/header/NerdSports';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }


  componentDidMount() {
    // axios.get()
  }



  render() {
    return (
      <div className="App">
        {/* <NerdSports /> */}
        <Routes />
      </div>
    );
  }
}

export default App;
