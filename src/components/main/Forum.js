import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { ForumBox } from '../styles/styles'

export default class Forum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userMessages: [],
      userInput: ''
    }
  }
  componentDidMount() {
    axios.get('/api/usermessages').then(
      res => this.setState({ userMessages: res.data })
    )
  }
  handleMessageInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }
  handleSubmit = (res) => {
    axios.post('/api/createMessage', {
      text: this.state.userInput
    })
      .then(res => this.setState({
        userMessages: res.data, userInput: ''
      }))
  }
  handlePut = async (id, text) => {
    let res = await axios.put('/api/editMessage', { id, text })
    // const index = this.state.userMessages.findIndex(message => message.id === id);
    // let newArray = this.state.userMessages
    // newArray[ id ] = res.data
    this.setState({
      userMessages: res.data, userInput: ''
    })
  }


  handleDelete(id) {
    axios.delete(`/api/deleteMessage/${id}`)
      .then((res) => {
        this.setState({ userMessages: res.data })
      })
  }

  render() {
    return (
      <>
        <input 
        value={this.state.userInput}
        onChange={ this.handleMessageInput } 
        placeholder='Stuff here.... thanks'/>

        <button onClick={ this.handleSubmit }>Submit</button>
        { this.state.userMessages.map(e => {
          return <ForumBox key={ Math.random() }>
            <Space>{ e.text }</Space>
            <Space>{ e.date }</Space>
            <Space>{ e.time }</Space>


            <button onClick={ () => this.handlePut(e.id, this.state.userInput) }>Edit</button>
            <button onClick={ () => this.handleDelete(e.id) }>Delete</button>
          </ForumBox>
        }) }
        {/* <HelpMe> <Help>help</Help></HelpMe> */ }
      </>
    )
  }
}
const Space = styled.div`
margin:5px;
`
// const HelpMe = styled.div`
// position:relative;
// height:500px;
// width:500px;
// border-radius:50%;
// animation:App-logo-spin infinite 2s linear;
// background: lightblue;
// `

// const Help = styled.div`
// position: absolute;
// bottom: 5;
// `



