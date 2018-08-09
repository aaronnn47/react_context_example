import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";
import { themes, ThemeContext } from "./themeContext";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.selectTheme = evt => {
      this.setState({
        theme: themes[evt.target.value]
      });
    };
    this.state = {
      theme: themes.light,
      selectTheme: this.selectTheme
    };
  }

  render() {
    console.log("__app_state:", this.state);
    return (
      <HashRouter>
        <ThemeContext.Provider value={this.state}>
          <div className="app-component">
            <header
              style={{
                background: this.state.theme.background,
                color: this.state.theme.color
              }}
            >
              <div className="header-content">
                <h1>React Context API Demo</h1>
              </div>
            </header>
            <Nav />
            {routes}
          </div>
        </ThemeContext.Provider>
      </HashRouter>
    );
  }
}

function Nav(props) {
  return (
    <ThemeContext.Consumer>
      {context => (
        <nav>
          <div className="nav-content-wrapper">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <label for="theme-selector">Select Theme</label>
            <select id="theme-selector" onChange={context.selectTheme}>
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="groovy">groovy</option>
            </select>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
}
