import React, { Component } from 'react';
import styled from 'styled-components';

class CodeBox extends Component {

  state = {

  }

  render() {
    return (

      <Wrapper>

        <Holder>
          <Row indent={20}>{"<"}!DOCTYPE html{">"}</Row>
          <Row indent={20}>{"<"}html{">"}</Row>
            <Row indent={40}>{"<"}head{">"}</Row>
              <Row indent={60}>{"<"}title Tyler Sutton{">"}</Row>
              <Row indent={60}>{"<"}meta rel=""{">"}</Row>
            <Row indent={40}>{"<"}head{">"}</Row>
        </Holder>
      </Wrapper>
    );
  }
}

export default CodeBox;


const Wrapper = styled.div`
  // width: 60vw;
  // height: 50vw;

  padding: 50px;


  position: absolute;

  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;

  transform: translateX(10%) translateY(50%);

  @media (max-width: 768px) {
    transform: translateX(30%) translateY(30%);
    padding: 25px;
  }

  border: 8px solid #707070;
`;

const Holder = styled.div`
  height: auto;
  width: auto;

  align-self: center;
`;

const Row = styled.p`
  text-indent: ${props => props.indent}px;
  color: #707070;
  font-size: 20pt;
  // font-weight: semi-bold;

  @media (max-width: 768px) {
    font-size: 12pt;
  }
`;