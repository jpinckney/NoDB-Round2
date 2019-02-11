import styled from 'styled-components'

/**
 * Login.Js
 */

const WholeLoginPage = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-between;
  background: url('https://cdnb.artstation.com/p/assets/images/images/007/684/435/large/rudy-siswanto-arcade-brand-splash-color2-artstation.jpg?1507829765');
`
const P = styled.p`
  font-size: 28px;
`
const Input = styled.input`
  margin: 15px;
  padding: 5px;
  border-radius: 3px;
  outline: none;
  border: grey 1px solid;
`
const LoginBox = styled.div`
  height: fit-content;
	width: fit-content;
  border: solid 1px black;
  border-radius: 3px;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 30px 40px 30px 40px;
  background: lightgrey;
  opacity: .7;
  position: relative;
  bottom: 40px;
`
const Button = styled.button`
  color: white;
  margin-top: 15px;
  box-sizing: border-box;
  padding: 5px;
  height: 30px;
  width: 80px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  border: solid black 1px;
cursor: pointer;
:hover{
  background: grey;
  transition: .25s;
}
`

const ForumBox = styled.div`
  height: fit-content;
  width: fit-content;
  border: solid 1px black;
  background: #CECBCB;
  display: flex;
  flex-flow:column;
  border-radius:5px;
  padding:10px;
  margin:10px;
  box-sizing:border-box;
  /* animation:App-logo-spin 1 2s linear; */
`

// const MainPageStyle = styled.div`
// display: flex;
// `


export {
  WholeLoginPage, P, Input, Button, LoginBox, ForumBox, 

}