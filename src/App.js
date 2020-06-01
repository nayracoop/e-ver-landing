import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import './assets/styles/main.css';

const theme = {
  colors: {
    text: "#04090d",
    textOpacity: "0.7",
    background: "#bd8cbf",
    backgroundOpacity: "0.3",
  },
  fonts: {
    display: "'Roboto Slab', serif",
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

const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

class App extends Component {
  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>

        </ThemeProvider>
      </Container>
    );
  }
}

export default App;
