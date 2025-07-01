import React from "react";
import styled, { keyframes } from "styled-components";
import ExampleImage from "./assets/img2.jpeg";
import { FaPaperPlane } from "react-icons/fa";

// Keyframes for shiny animation
const shiny = keyframes`
  0% { border-color: rgba(255, 255, 255, 0.2); }
  50% { border-color: rgba(255, 255, 255, 0.6); }
  100% { border-color: rgba(255, 255, 255, 0.2); }
`;

// Zoom effect on image hover
const zoomIn = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`;

const Background = styled.div`
  width: 1360px;
  height: 100vh;
  background: linear-gradient(135deg, #111, #000);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-left: -35px;
`;

const StyledImageWrapper = styled.div`
  position: absolute;
  left: 250px;
  top: 50%;
  transform: translateY(-50%);
  width: 320px;
  height: 380px;
  border-radius: 30px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(196, 12, 12, 0.2);
  backdrop-filter: blur(30px);
  box-shadow: 0 20px 60px rgba(255, 255, 255, 0.3), 0 30px 30px rgba(255,255,255,0.05);
  z-index: 3;

  &:hover img {
    animation: ${zoomIn} 0.5s forwards;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1.2) contrast(1.2);
  transition: transform 0.5s ease;
`;

const FormCard = styled.div`
  width: 500px;
  padding: 40px;
  background: #1c1c1c;
  color: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 2;
  left: 120px;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 700;
  font-family: Montaga;
  position: absolute;
  left: 800px;
  top: -20px;
  color: white;
  opacity: 0.1;
  z-index: 0;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  outline: none;
  margin-left: 50px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  animation: ${shiny} 2s infinite;

  &::placeholder {
    color: #bbb;
  }
`;

const TextArea = styled.textarea`
  width: 90%;
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  height: 80px;
  resize: none;
  outline: none;
  margin-left: 50px;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  animation: ${shiny} 2s infinite;

  &::placeholder {
    color: #bbb;
  }
`;

const SubmitButton = styled.button`
  margin-top: 15px;
  width: 40%;
  padding: 12px 16px;
  background: linear-gradient(145deg, rgba(255,255,255,0.95), rgba(220,220,220,0.85));
  color: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: inset 0 0 20px rgba(255,255,255,0.3), 0 10px 30px rgba(255,255,255,0.1);
  animation: ${shiny} 2s infinite;

  &:hover {
    transform: scale(1.07);
    background: linear-gradient(145deg, rgba(255,255,255,1), rgba(230,230,230,0.95));
  }
`;

const ContactForm = () => {
  return (
    <Background>
      <StyledImageWrapper>
        <StyledImage src={ExampleImage} alt="decor" />
      </StyledImageWrapper>

      <Title>CONTACT</Title>
      <FormCard>
        <form>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <TextArea placeholder="Your Message" />
          <SubmitButton type="submit">
            Send Message <FaPaperPlane />
          </SubmitButton>
        </form>
      </FormCard>
    </Background>
  );
};

export default ContactForm;
