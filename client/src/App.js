import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import All from './All'
import Single from './Single'

function App() {
  return (
    <Fragment>
      <h1>Ticket Viewer</h1>
      <Router>
        <Switch>
          <Route exact path='/' render={All} />
          <Route exact path='/:id' component={Single} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App