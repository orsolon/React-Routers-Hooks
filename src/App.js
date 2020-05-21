import React from "react";
import "./styles.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Params from "./pages/Params";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
          <li>
            <Link to="/user/2">User Logged</Link>
          </li>
          <li>
            <Link
              to={{
                pathname: "/params",
                search: "",
                hash: "",
                state: { from: "react course" }
              }}
            >
              Route with State
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user/:id?" component={User} />
          <Route path="/params" component={Params} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
