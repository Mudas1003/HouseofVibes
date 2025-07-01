import React from "react";
import styled, { keyframes } from "styled-components";
import bgImage from "./assets/wardrobe.png";
import { Link } from 'react-router-dom';

// Images
import fashion1 from "./assets/fashion1.jpeg";
import fashion2 from "./assets/fashion2.jpeg";
import fashion3 from "./assets/fashion3.jpeg";
import fashion4 from "./assets/fashion4.jpeg";
import fashion5 from "./assets/fashion5.jpeg";
import fashion6 from "./assets/fashion6.jpeg";
import fashion7 from "./assets/fashion7.jpeg";
import fashion8 from "./assets/fashion8.jpeg";

// Icons (import as images)
import eyeIcon from "./assets/eye.png";
import binIcon from "./assets/delete.png";
import bag from "./assets/bag.png";

// Animations
const zoomIn = keyframes`
  from { transform: scale(1); }
  to { transform: scale(1.2); }
`;

const slideFromLeft = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideFromRight = keyframes`
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px #fff, 0 0 20px #000, 0 0 30px #111; }
  50% { box-shadow: 0 0 20px #fff, 0 0 30px #000, 0 0 40px #111; }
  100% { box-shadow: 0 0 10px #fff, 0 0 20px #000, 0 0 30px #111; }
`;

// Layout Wrappers
const Wrapper = styled.div`
  position: relative;
  width: 1358px;
  height: 1400px;
  overflow: hidden;
  margin-left: -35px;
`;

const Background = styled.div`
  position: absolute;
  width: 1330px;
  height: 100%;
  background: url(${bgImage}) center/cover no-repeat;
  animation: ${zoomIn} 3s ease forwards;
  z-index: 0;
  margin-left: -80px;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

// Headings
const Heading = styled.div`
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  z-index: 2;
  font-family: Montaga, serif;
`;

const SmallText = styled.div`
  font-size: 45px;
  animation: ${slideFromLeft} 1.2s ease-out;
`;

const LargeText = styled.div`
  font-size: 130px;
  font-weight: bold;
  margin-top: -20px;
  animation: ${slideFromRight} 1.2s ease-out;
`;

// Cards
const CardContainer = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1600px;
  height: 600px;
  z-index: 2;
`;

const CardBase = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  transition: all 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  transform-origin: center;

  &:hover {
    transform: scale(1.08) !important;
    z-index: 10;
  }

  &:hover div {
    opacity: 1;
  }
`;

const LargeCard = styled(CardBase)`
  width: 280px;
  height: 370px;
`;

const SmallCard = styled(CardBase)`
  width: 190px;
  height: 260px;
`;

const CardButtons = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
`;

const IconButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  img {
    width: 25px;
    height: 25px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

// Checkout Button
const StyledButton = styled.button`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  animation: ${glow} 2s infinite;
  z-index: 3;
  font-size: 22px;
  font-family: Montaga;
  color: black;

  img {
    width: 24px;
    height: 24px;
  }
`;

const renderCard = (type = "large", image, style) => {
  const CardComponent = type === "large" ? LargeCard : SmallCard;
  return (
    <CardComponent style={{ 
      backgroundImage: `url(${image})`, 
      ...style,
      transform: style.transform ? style.transform : 'none'
    }}>
      <CardButtons>
        <IconButton><img src={eyeIcon} alt="View" /></IconButton>
        <IconButton><img src={binIcon} alt="Delete" /></IconButton>
      </CardButtons>
    </CardComponent>
  );
};

const DigitalWardrobe = () => {
  return (
    <Wrapper>
      <Background />
      <Overlay />

      <Heading>
        <SmallText>Your</SmallText>
        <LargeText>Wardrobe</LargeText>
      </Heading>

      <CardContainer>
        {renderCard("large", fashion1, { left: "31%", top: "35%" })}
        {renderCard("large", fashion2, { left: "51%", top: "35%" })}

        {renderCard("small", fashion3, { left: "15%", top: "5%" })}
        {renderCard("small", fashion4, { left: "15%", top: "65%" })}
        {renderCard("small", fashion5, { left: "73%", top: "5%" })}
        {renderCard("small", fashion6, { left: "73%", top: "65%" })}
        {renderCard("small", fashion7, { left: "44%", top: "-20%",  })}
        {renderCard("small", fashion8, { left: "44%", top: "105%",  })}
      </CardContainer>
      <Link to='/checkout'>

      <StyledButton>
        <img src={bag} alt="Shopping Bag" /> Checkout
      </StyledButton></Link>
    </Wrapper>
  );
};

export default DigitalWardrobe;