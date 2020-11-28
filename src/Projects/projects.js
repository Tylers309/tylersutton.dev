import React, { Component } from 'react';
import styled from 'styled-components';

import perfectlyrenee from './perfectlyrenee.png';
import scottstephens from './scottstephens.png';

class Projects extends Component {

  render() {
    return(
      <Wrapper>
        <ProjectsContainer>
          <ProjectsHeader>Projects</ProjectsHeader>
          <ProjectContainer>
            <ProjectHeader>Renee Sutton</ProjectHeader>
            <ProjectImg src={perfectlyrenee} alt="Renee Sutton Project" />
            {/* <ProjectText>
              Project site for my Mom
            </ProjectText> */}
            <ProjectLink href="https://perfectlyrenee.com" rel="noopener noreferrer" target="_blank">Link {`>>`}</ProjectLink>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectHeader>Scott Stephens</ProjectHeader>
            <ProjectImg src={scottstephens} alt="Scott Stephens Project" />
            {/* <ProjectText>
              Gallery Site for Scott Stephens
            </ProjectText> */}
    <ProjectLink href="https://scottstephens.photo/" rel="noopener noreferrer" target="_blank">Link {`>>`}</ProjectLink>
          </ProjectContainer>
          {/* <ProjectContainer></ProjectContainer>
          <ProjectContainer></ProjectContainer>
          <ProjectContainer></ProjectContainer> */}
        </ProjectsContainer>
      </Wrapper>
    );
  }
}

export default Projects;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;

`;

const ProjectsContainer = styled.div`
  width: 90%;

  display: flex;
  justify-content: space-evenly;
  align-content: space-around;
  
  flex-wrap: wrap;

  /* border: 2px solid red; */

  position: relative;

`;

const ProjectsHeader = styled.h2`
  text-align: center;
  
  position: absolute;
  top: 0;

  font-size: 28px;
  color: #707070;
  

  /* border: 2px solid red; */
`;

const ProjectContainer = styled.div`

  @media (max-width: 768px) {
    width: 60%;
  }
  width: 25%;
  height: auto;

  border: 1px solid #fff;

  float: left;

  flex: none;
`;


const ProjectHeader = styled.h2`
  font-size: 22px;
  margin: 20px 0;

  color: #707070;
`;

const ProjectImg = styled.img`
  max-width: 100%;
  height: auto;
  border: 4px solid #707070;
`;

const ProjectText = styled.p`
  font-size: 16px;
  padding: 10px 0;
`;

const ProjectLink = styled.a`
  text-decoration: none;

  font-size: 22px;
  color: #707070;

  padding: 10px 0;

`;