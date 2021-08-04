import React, { Component } from 'react';
import styled from 'styled-components';

import securityPlus from './securityPlus.png';

class About extends Component {

  render() {
    return(
      <Wrapper>
        <TextSectionContainer>
          <TextSectionHolder>
            <TextSectionHeader>About Me</TextSectionHeader>

            <TextContainer>
              <AboutText>
              Hi, my name is Tyler Sutton. I'm 20 years old and have made web development my hobby for the past 5 years.
              <br/>
              <br/>
I started learning about the internet and found how easy it was to start creating a website and the rest was a snowball effect.
After creating many websites and web apps weaved it's way into a position in Information Technology. After being in IT for 2 years now 
I'm now the IT Manager for a local business in Meridian, Mississippi! In IT I've passed Comptia's Security+ and am studying for my Network+.
              <br/>
              <br/>
In web development I'm proficient in HTML, CSS, Javascript, Nodejs, SQL, React, and React Native. I'm more of a developer with some occasional designer tendencies.
              </AboutText>
            </TextContainer>
          </TextSectionHolder>
        </TextSectionContainer>

        <CertSectionContainer>
          <CertSectionHolder>
            <a href="https://www.youracclaim.com/badges/745d03a5-e111-4052-b3bf-073432b2cffe/public_url" target="_blank" rel="noopener noreferrer">
              <CertImg src={securityPlus} alt="Security Plus" />
            </a>
          </CertSectionHolder>
        </CertSectionContainer>
      </Wrapper>
    );
  }
}

export default About;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    height: auto;
    height: 110%;
  }

  position: relative;

  // border: 2px solid red;
`;

const TextSectionContainer = styled.div`
  height: 100%;
  width: 70%;

  @media (max-width: 768px) {
    height: 80%;
    width: 100%;
  }

  float: left;
  
  position: relative;

  // border: 2px solid red;

  display: flex;
  justify-content: center;
`;

const TextSectionHolder = styled.div`
  width: 60%;

  @media (max-width: 768px) {
    width: 80%;
  }

  align-self: center;

  margin: 50px 0;

  color: #707070;
`;

const TextSectionHeader = styled.h2`
  margin: 40px 20px;
  font-size: 28px;
`;

const TextContainer = styled.div`
  padding: 15px 20px;

  border: 4px solid #707070;


  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.2);
`;

const AboutText = styled.p`
  font-size: 19px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CertSectionContainer = styled.div`
  height: 100%;
  width: 29%;

  float: left;

  display: flex;
  justify-content: center;

  // border: 2px solid blue;

  @media (max-width: 768px) {
    height: 20%;
    width: 100%;
  }
`;

const CertSectionHolder = styled.div`
  height: 10px;
  width: 10px;
  align-self: center;

  // border: 2px solid red;
`;

const CertImg = styled.img`
  height: 156px;
  width: 156px;

  @media (max-width: 768px) {
    height: 84px;
    width: 84px;
  }

  // filter: drop-shadow(30px 10px 4px #4444dd);

  // border: 2px solid blue;

  transform: translateY(-50%) translateX(-50%);
`;
