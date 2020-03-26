import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Router>
      <div>
      <Navbar />
      
      <Switch>
        <Route exact path = '/'>
          <About />
        </Route>
        <Route exact path = '/portfolio'>
          <Portfolio />
        </Route>
        <Route exact path = '/contact'>
          <Contact />
        </Route>
      </Switch>
      </div>
    </Router>
    </>
  )
}

export default App