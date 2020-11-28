import React, { Component } from 'react';
import styled from 'styled-components';

import WelcomeHeader from './welcomeHeader';
import Triangles from './triangles';
import Navigation from '../Navigation/Nav';
import CodeBox from './codebox';
class Landing extends Component {
  render() {
    return (
      <Wrapper>
        {/* <Navigation /> */}
        <Triangles />
        <WelcomeHeader />
        <CodeBox />
      </Wrapper>
    );
  }
  
}

export default Landing;


const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  position: relative;
  // overflow-X: hidden;
  // overflow-Y: auto;
`;