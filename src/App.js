import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";
import { themes, ThemeContext } from "./themeContext";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.light ? themes.dark : themes.light
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };
  }

  render() {
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
            <span onClick={context.toggleTheme}>Toggle Theme</span>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
}
