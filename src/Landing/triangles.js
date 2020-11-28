import React, { Component } from 'react';
import styled, { css }from 'styled-components';

const th = 82;
const bw = (th*2) * .75;


class Triangles extends Component {

  state = {
    triangles: [],
  }
  createTriangles = () => {
    
    const triangle = 
      <TriangleHolder>
        <Triangle light/>
        <Triangle upsideDown shift />
      </TriangleHolder>
    ;

    var winw = window.innerWidth;
    var amt = Math.round((winw/bw));
    this.state.triangles.length !== amt && this.setState({triangles: []});
    console.log(amt);
    let tempTriangleArray = []

      for(var i=0;i<amt;i++) {

        tempTriangleArray.push(triangle);
        
        this.setState({triangles: tempTriangleArray})
      }
      
      console.log(this.state.triangles);
    }
    

  componentWillMount() {
    
      this.createTriangles();
    }
    componentDidMount() {
        window.addEventListener("resize", this.createTriangles);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", );
    }
  render() {

    
    
    return (
      <Wrapper>
        <TriangleHolder shiftLeft >
          <Triangle />
          <Triangle upsideDown />
        </TriangleHolder>
        {this.state.triangles.map((e) => e)}
      </Wrapper>
    );
    };    
  
}

export default Triangles;


const Wrapper = styled.div`
  height: auto; 
  min-width: 200vw;

  position: absolute;
  left: 0%;
  top: 25%;

  
  
  transform:  translateX(-25px) rotate(-44deg);
  transform-origin: top left;
  // border: 2px solid red;
`;

const TriangleHolder = styled.div`
  width: ${bw / .65}px;
  height: ${bw}px;

  position: relative;

  ${props => props.shiftLeft && css`
    position: absolute;
    top: 0;
    transform: translateX(-100%);
  `}

  float: left;

  display: flex;
  justify-content: center;
`;

var triColor = '';

const Triangle = styled.div`
  height: 0;
  width: 0;


  ${props => props.light ? triColor = '#66707070' : triColor = '#ACACAC' }

  float: left;
  // If there is the upsideDown prop, boom flip it
  ${props => props.upsideDown ? css`
    
    border-left: ${th}px solid transparent;
    border-right: ${th}px solid transparent;

    border-top: ${bw}px solid ${triColor};
    
    position: absolute;
    top: 0;
    right: 0%;
    transform: translateX(50%);

    // box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
  

  ` : css`

    border-left: ${th}px solid transparent;
    border-right: ${th}px solid transparent;

    border-bottom: ${bw}px solid ${triColor};
    // transform: translateX(-40%)
    display: block;
    margin: 0 auto;

  ` }
  
  // ${props => props.shift && 'transform: translateX(-40%)'}

  
`;