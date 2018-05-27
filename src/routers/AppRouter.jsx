import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom'

import Header from '../components/Header'

const Portfolio = props => <p>Portfolio{console.log(props)}</p>
const Home = () => <p>Home</p>
const NotFound = () => <p>404: Page not found</p>

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfolio/:id" component={Portfolio} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
