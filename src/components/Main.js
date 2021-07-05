import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Cards from './Cards'
import Register from './Register'
import Login from './Login'

export default function Main(props) {
  return (
    <main className="content">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/sign-in">
            <Login {...props} />
          </Route>
          <ProtectedRoute path="/" {...props} component={Cards} />
        </Switch>
      </BrowserRouter>
    </main>
  )
}