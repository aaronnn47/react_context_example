import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app-component">
          <header>
            <div className="header-content">
              <h1>React Context API Demo</h1>
            </div>
          </header>
          <Nav />
          {routes}
        </div>
      </HashRouter>
    );
  }
}

function Nav(props) {
  return (
    <nav>
      <div className="nav-content-wrapper">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <span onClick={_=>alert('this doesn\'t work')}>Toggle Theme</span>
      </div>
    </nav>
  );
}
