import React, { Component } from 'react';
import styled from 'styled-components';


import headerSvg from './welcomeHeader.svg';

class WelcomeHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Holder>
          <Header>Hi, I'm <br /> Tyler Sutton</Header>
          <HeaderSvg src={headerSvg} alt="Developer/Designer" />
        </Holder>
      </Wrapper>
    );
  }
  
}

export default WelcomeHeader;


const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
`;

const Holder = styled.div`
  align-self: center;

  position: relative;
`;

const Header = styled.h1`
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateY(-150%) translateX(-50%);
  text-align: center;
  font-weight: lighter;
  color: #707070;
`;

const HeaderSvg = styled.img`
  max-width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
  // positon: 
`;