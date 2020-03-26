import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div>
        <Link to ='/'>Go Home</Link>
        <Link to='/hotdog'>Go Hotdog</Link>
        <Switch>
          {/* Route for the homepage */}
          <Route exact path = '/'>
            <h1>This is the homepage</h1>
          </Route>
          <Route exact path = '/hotdog'>
            <h1>This is the hotdog page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App