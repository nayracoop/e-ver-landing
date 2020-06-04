import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter, Route } from "react-router-dom"

import UnderConstruction from './components/layout/sections/UnderConstruction'
import Home from '.'
import BackgroundImg from './assets/img/bg.svg'

const theme = {
  colors: {
    text: "#04090d",
    textOpacity: "0.7",
    background: "#fff",
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
  width: 90%;
  min-height: 650px;
  max-height: 84vh;
  padding-top: 16vh;
  //background-image: url(${BackgroundImg});
  background-size: 65%;
  background-repeat: no-repeat;
  background-position: 50% 95%;

  @media (max-width: ${theme.pageWidth.l}px) {
    padding-top: 10vh;
    max-height: 90vh;
    background-size: 100%;    
    min-height: 500px;
    background-position: 50% 88%;
  }
`;

class App extends Component {
  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      <Container ref={this.container} className="App">
        <ThemeProvider theme={theme}>
          <Route path="/" exact>
            <UnderConstruction
              title="e-ver"
              lead="¡Organizamos tu evento virtual!"
              text="Sitio en construcción"
            />
          </Route>
          <Route path="/home" exact>
            Home
          </Route>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withRouter(App);
