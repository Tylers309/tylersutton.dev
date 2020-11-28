import React, { Component } from 'react';
import styled from 'styled-components';

import facebook from './facebook.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';
import github from './github.png';

class Contact extends Component {
  render() {
    return (
      <Wrapper>
        <ContactHolder>

          <InfoContainer>

            <InfoTop>
              <InfoHeader>Contact Me</InfoHeader>
            </InfoTop>

            <InfoBottom>
              <InfoBottomLeft>
                <LinksContainer>
                  <a href="https://www.facebook.com/Tylers.309/" target="_blank" rel="noopener noreferrer">
                    <LinkImg src={facebook} alt="Facebook Link"/>
                  </a>

                  <a href="https://www.instagram.com/tylercodes/" target="_blank" rel="noopener noreferrer">
                    <LinkImg src={instagram} alt="Instagram Link"/>
                  </a>
                  
                  <a href="https://www.linkedin.com/in/tyler-sutton-889521174/" target="_blank" rel="noopener noreferrer">
                    <LinkImg src={linkedin} alt="Linkedin Link"/>
                  </a>

                  <a href="https://www.github.com/Tylers309" target="_blank" rel="noopener noreferrer">
                    <LinkImg src={github} alt="Github Link"/>
                  </a>

                </LinksContainer>
              </InfoBottomLeft>
              <InfoBottomRight>
                <InfoText>
                I really appreciate you 
                checking out my website and
                sticking around. This site
                is a constant work in progress.
                Constantly! (I think it's been
                fully redesigned like 6 times)

                Either way, you seem like a cool
                person! If you could fill the form 
                here and I'll email you asap! :)
                </InfoText>
              </InfoBottomRight>
            </InfoBottom>
          </InfoContainer>
          <FormContainer>

            <FormNameContainer>
              <FormHolder>
                <FormLabel>Name</FormLabel>
                <FormName type="text" required/>
              </FormHolder>
              
            </FormNameContainer>
            <FormEmailContainer>
              <FormHolder>
                <FormLabel>Email</FormLabel>
                <FormEmail type="email" required/>
              </FormHolder>

              
            </FormEmailContainer>
            <FormMessageContainer>
              <FormHolder message>
                <FormLabel>Message</FormLabel>
                <FormMessage required/>
              </FormHolder>
              
            </FormMessageContainer>
            <FormButtonContainer>
              <FormSubmitButton>Submit</FormSubmitButton>
            </FormButtonContainer>
            
          </FormContainer>
        </ContactHolder>
        
      </Wrapper>
    );
  }
  
}

export default Contact;


const Wrapper = styled.div`
  @media (max-width: 768px) {
    height: 150%;
  }

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;

   /* border: 2px solid red; */
`;

const ContactHolder = styled.div`
  
  @media (max-width: 768px) {
    height: 100%;
    width: 100%;
    display: block;
  }
  height: 90%;
  width: 90%;

  align-self: center;

  display: flex;

  /* border: 2px solid red; */

`;

const InfoContainer = styled.div`

  @media (max-width: 768px) {
    height: 45%;
    width: 100%;

    display: block;
    float: none;
  }

  height: 100%;
  width: 49%;

  float: left;

  /* border: 2px solid green; */
`;

const InfoTop = styled.div`
  height: 25%;
  width: 100%;

  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
  justify-content: flex-end;

  /* border: 2px solid green; */
`;

const InfoBottom = styled.div`
  height: 75%;
  width: 100%;

  /* border: 2px solid red; */
`;

const InfoBottomLeft = styled.div`
  height: 100%;
  width: 30%;

  float: left;

  display: flex;
  justify-content: center;

  /* border: 2px solid goldenrod; */
`;

const InfoBottomRight = styled.div`
  height: 100%;
  width: 69%;

  float: left;

  display: flex;
  justify-content: center;

  /* border: 2px solid blue; */
`;


const InfoHeader = styled.h2`
  font-size: 28px;

  color: #707070;

  align-self: center;
`;

const LinksContainer = styled.div`
  align-self: center;

  /* border: 2px solid red; */

`;

const LinkImg = styled.img`
  max-width: 40%;
  height: auto;

  display: block;
  margin: 25px auto;

`;

const InfoText = styled.p`
  align-self: center;

  font-size: 18px;

  max-width: 70%;

  color: #707070;

`;




const FormContainer = styled.form`
  @media (max-width: 768px) {
    height: 50%;
    width: 100%;

    display: block;
    float: none;
  }
  height: 80%;
  width: 50%;

  float: left;

  align-self: flex-end;

  /* border: 2px solid red; */
`;

const FormNameContainer = styled.div`
  height: 15%;
  width: 100%;

  /* border: 2px solid blue; */

  display: flex;
  align-items: center;

  padding: 0 20px;
`;

const FormEmailContainer = styled.div`
  height: 15%;
  width: 100%;

  /* border: 2px solid green; */

  display: flex;
  align-items: center;

  padding: 0 20px;
`;

const FormMessageContainer = styled.div`
  height: 45%;
  width: 100%;

  /* border: 2px solid goldenrod; */

  display: flex;
  align-items: center;

  padding: 0 20px;
`;

const FormButtonContainer = styled.div`
  height: 25%;
  width: 100%;

  display: flex;
  align-items: center;

  padding: 0 20px;

`;

const FormHolder = styled.div`
  /* border: 2px solid red; */

  height: ${props => props.message ? "70%": "auto"};
  width: ${props => props.message ? "70%": "auto"};

  align-self: center;

`;


const FormLabel = styled.p`
  font-size: 15px;
  
  padding: 5px 0;

  display: block;
  color: #707070;
`;

const FormName = styled.input`
  display: block;

  border: 3px solid #707070;
  padding: 5px 7px;
`;
const FormEmail = styled.input`
  border: 3px solid #707070;
  padding: 5px 7px;
`;
const FormMessage = styled.textarea`

  width: 100%;
  height: 80%;

  resize: none;

  border: 3px solid #707070;
  padding: 5px 7px;

`;

const FormSubmitButton = styled.button`
  padding: 15px 40px;

  border: 4px solid #707070;

  font-size: 18px;

  cursor: pointer;

  box-shadow: 0 0 8px 4px rgba(0,0,0,0.1);

  color: #707070;
  background-color: #fff;
`;

const Buffer = styled.div` height: 100vh; width: 100vw; display: block; border: 2pxs solid red;`;