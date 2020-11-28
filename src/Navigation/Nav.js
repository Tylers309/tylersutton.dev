import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class Navigation extends Component {

  state = {
    navOpen: false
  }

  render() {
    return(
      <Wrapper >
        
        <HamburgerHolder onClick={() => {
          this.setState({navOpen: !this.state.navOpen});
          console.log(this.state.navOpen)
        }}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerHolder>

        <NavContainer open={this.state.navOpen}>
          <NavHolder>
            Home <br/><br/>
            About <br/><br/>
            Projects <br/><br/>
            Contact
          </NavHolder>
        </NavContainer>
      </Wrapper>
    );
  }
}

export default Navigation;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;

  top: 0;
  left: 0;

  // border: 2px solid red;
`;

const NavContainer = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;

  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  transition: .3s;

  z-index: ${props => props.open ? 1 : -1};
  opacity: ${props => props.open ? .95 : 0};

  

  background-color: #e8e8e8;

  border: 2px solid goldenrod;
`;

const NavHolder = styled.div`
  align-self: center;
  text-align: center;
  font-size: 24px;
`;

// const fadein = keyframes`
//   from {
//     opacity: 0;
//   }

//   to {
//     opacity: 1;
//   }
// `;

// const fadeout = keyframes`
//   from {
//     opacity: 1;
//   }
  
//   to {
//     opacity: 0;
//   }
// `;

const HamburgerHolder = styled.div`
  width: 32px; 
  position: absolute;

  top: 0;
  right: 0;

  padding: 5px;
  margin: 10px;

  // border: 2px solid red;

  z-index: 2;
`;

const HamburgerLine = styled.div`
  border: 3px solid #444;
  background-color: #444;

  border-radius: 9999999px;

  display: block;
  margin-bottom: 3px;
`;

