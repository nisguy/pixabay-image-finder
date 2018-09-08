import React, { Component } from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import NavBar from "./navBar/navBar";
import Search from "./search/search";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
