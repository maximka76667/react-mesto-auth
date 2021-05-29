import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Cards from './Cards'

export default function Main(props) {
  return (
    <main className="content">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <ProtectedRoute exact path="/" />
          <Route path="/sign-up">
          <button>Registr</button>
          </Route>
          <Route path="/sign-in">
            <button>Login</button>
          </Route>
          <ProtectedRoute path="/cards" {...props} component={Cards} />
        </Switch>
      </BrowserRouter>
    </main>
  )
}