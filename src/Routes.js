import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AboutUs from './AboutUs'
import MainPage from './components/main/MainPage';
import Login from './components/login/Login'
import Forum from './components/main/Forum'

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={ Login } />
      <Route path='/aboutus' component={ AboutUs } />
      <Route path='/mainpage' component={ MainPage } />
      <Route path='/forum' component={Forum}/>
      <Route />
    </Switch>
  )
}