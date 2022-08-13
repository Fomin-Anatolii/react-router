import React from "react"
import Navbar from "./components/navBar"
import { Route, Switch } from "react-router-dom"
import Dashboard from "./components/dashboard"
import Login from "./components/login"
import Posts from "./components/posts"
import Home from "./components/home"

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  )
}

export default App
