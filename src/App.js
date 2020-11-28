import React, { Component } from 'react';
import styled from 'styled-components';

import Landing from './Landing/landing';
import About from './About/about';
import Projects from './Projects/projects';
import Contact from './Contact/contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Landing />
        <About />
        <Projects />
        <Contact />
        {/* <Buffer /> */}
      </Wrapper>
    );
  }
  
}

export default App;


const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  overflow-x: hidden;
  // border: 2px solid red;
`;

const Buffer = styled.div` height: 100vh; width: 100vw; display: block; border: 2pxs solid red;`;