import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import Home from './components/templates/Home'

//import BackgroundImg from './assets/img/bg.svg'

const theme = {
  colors: {
    primary: "#494066",
    secondary: "#f72d7d",
    text: "#444444",
    gradient1: "rgba(255,46,121,1)",
    gradient2: "rgba(194,41,152,1)",
    gradient: "linear-gradient(90deg, rgba(255,46,121,1) 0%, rgba(194,41,152,1) 100%)",
    gradienthover: "linear-gradient(90deg, rgba(255,46,121,1) 5%, #494066 80%)",
    shadow: "1px 1px 15px rgba(20,20,20,.16)"
  },
  fonts: {
    display: "'rotundabold', sans-serif",
    title: "'rotundamedium', sans-serif",
    text: "'rotundaregular', sans-serif"
  },
  pageWidth: {
    xxl: 1366,
    xl: 1200,
    l: 992,
    m: 768,
    s: 576,
  },
  maxWidth: 1366,
  articleMaxWidth: 680,
};


class App extends Component {
  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      <div ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Home></Home>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
