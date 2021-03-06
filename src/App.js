import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "./routes";
import { themes, ThemeContext } from "./themeContext";
import { APIContext } from './apiContext';

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
      selectTheme: this.selectTheme,
      imageURL: 'https://laracasts.com/images/series/circles/do-you-react.png',
      apiKey: 'asdf1234'
    };
  }

  render() {
    return (
      <HashRouter>
        <APIContext.Provider value={{
          imageURL: this.state.imageURL,
          apiKey: this.state.apiKey
          }}>
        <ThemeContext.Provider value={{
          theme: this.state.theme,
          selectTheme: this.state.selectTheme
        }}>
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
        </APIContext.Provider>
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
            <label htmlFor="theme-selector">Select Theme</label>
            <select id="theme-selector" onChange={context.selectTheme}>
              <option value="light">light</option>
              <option value="dark">dark</option>
              <option value="sky">sky</option>
            </select>
          </div>
        </nav>
      )}
    </ThemeContext.Consumer>
  );
}
