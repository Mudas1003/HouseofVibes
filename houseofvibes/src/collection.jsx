import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

import sea1 from './assets/sea1.jpeg';
import sea2 from './assets/sea2.jpeg';
import sea3 from './assets/sea3.jpeg';
import sea4 from './assets/sea6.jpeg';
import sea5 from './assets/sea5.jpeg';

import leftImage from './assets/sea4.jpeg';
import centerImage from './assets/season7.jpeg';
import rightImage from './assets/sea1.jpeg';
import logo from './assets/logo.png'; // Add your logo image
import SeasonHighlight from './product';

const Collection = () => {
  const images = [sea1, sea2, sea3, sea4, sea5];

  const PageWrapper = styled.div`
    width: 1350px;
    height: 2600px; // Increased height to accommodate new sections
    background: #052B33;
    text-align: center;
    font-family: 'Montaga', serif;
    box-sizing: border-box;
    position: relative;
    margin-top: -50px;
    margin-left: -35px;
    overflow: hidden;
  `;

  const Logo = styled(Link)`
    position: absolute;
    top: -3rem;
    left: 34rem;
    z-index: 1000;
    
    img {
      width: 300px;
      height: auto;
    }
  `;

  const Title = styled.h1`
    font-size: 7rem;
    font-weight: bold;
    color: white;
    margin-top: 7rem;
  `;

  const Subtitle = styled.p`
    font-size: 1.3rem;
    color: white;
    margin-top: -50px;
  `;

  const CarouselWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 450px;
    margin-top: 0px;
    gap: 2rem;
    overflow: visible;
    width: 1250px;
    margin-left: 50px;
    margin-top: 120px;
  `;

  const Card = styled.div`
    width: 400px;
    height: 400px;
    border-radius: 1.2rem;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 1.8);
    transition: transform 0.4s ease;
    background: #eee;

    ${({ index }) => {
      const center = 2;
      const offset = index - center;
      const rotation = offset * 6;
      const translateY = Math.abs(offset) * 12;

      return `
        transform: translateY(${translateY}px) rotate(${rotation}deg);
        z-index: ${100 - Math.abs(offset)};
      `;
    }}
  `;

  const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  // Showcase Section
  const ShowcaseWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #022c33;
    padding: 6rem 1rem 4rem;
    color: #f0f0f0;
    font-family: 'Montaga', serif;
    gap: 2rem;
    margin-bottom: -150px;
  `;

  const LeftSection = styled.div`
    flex: 1;
    text-align: center;
    margin-left: 30px
  `;

  const LeftImage = styled.img`
    width: 320px;
    height: 520px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1rem;
  `;

  const Date = styled.p`
    font-size: 1.5rem;
    color: #ccc;
  `;

  const Name = styled.h4`
    font-size: 1.7rem;
    margin-top: 0.5rem;
    line-height: 1.5;
  `;

  const CenterSection = styled.div`
    flex: 2;
    text-align: center;
    position: relative;
  `;

  const Arch = styled.div`
    width: 440px;
    height: 640px;
    margin: 0 auto;
    background-color: #033c44;
    border-top-left-radius: 160px;
    border-top-right-radius: 160px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 2rem;
    position: relative;
    margin-left: 50px;
  `;

  const Headline = styled.h2`
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
  `;

  const CenterImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 160px;
    border-top-right-radius: 160px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  `;

  const Caption = styled.p`
    font-size: 0.9rem;
    color: #eee;
    padding-top: 1rem;
    width: 350px;
    margin-left: 120px;
  `;

  const RightSection = styled.div`
    flex: 1;
    text-align: center;
  `;

  const RightImageWrapper = styled.div`
    background: #033840;
    border-radius: 2rem;
    padding: 1.5rem;
    height: 400px;
    margin-top: 340px;
    width: 300px;
    margin-left: -100px
  `;

  const RightImage = styled.img`
    width: 100%;
    height: 400px;
    border-radius: 1rem;
  `;

  const RightText = styled.p`
    margin-top: 1.5rem;
    font-size: 1.1rem;
    margin-left: -140px
  `;

  // About Section
  const AboutSection = styled.div`
    background: #033c44;
    padding: 4rem 2rem;
    margin-top: 100px;
    text-align: center;
    color: white;
    margin-bottom: -200px
  `;

  const AboutTitle = styled.h2`
    font-size: 5rem;
    margin-bottom: 1rem;
    color: #fff;
    margin-top: 1rem;
  `;

  const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    max-width: 1100px;
    margin: 0 auto;
  `;

  const AboutText = styled.p`
    flex: 1;
    font-size: 1.4rem;
    line-height: 1.6;
    text-align: center;
    margin-top: 50px;
  `;

  const AboutImage = styled.img`
    flex: 1;
    max-width: 400px;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
  `;

  return (
    <>
    <PageWrapper>
      <Logo to="/">
        <img src={logo} alt="Company Logo" />
      </Logo>
      
      <CarouselWrapper>
        {images.map((src, index) => (
          <Card key={index} index={index}>
            <CardImage src={src} alt={`Season ${index + 1}`} />
          </Card>
        ))}
      </CarouselWrapper>

      <Title>The Season's Collection</Title>
      <Subtitle>A curated drop to match your vibes for every season.</Subtitle>

      {/* Jewelry Showcase Section */}
      <ShowcaseWrapper>
        <LeftSection>
          <LeftImage src={leftImage} alt="Guest" />
          <Date>12.01</Date>
          <Name>ELIZABETH'S<br />STONE</Name>
        </LeftSection>

        <CenterSection>
          <Arch>
            <Headline>Fashion ReImagined</Headline>
            <CenterImage src={centerImage} alt="Model" />
          </Arch>
          <Caption>TRACE YOUR FAVOURITE HOV PIECES FROM CONCEPTION TO COMPLETION.</Caption>
        </CenterSection>

        <RightSection>
          <RightImageWrapper>
            <RightImage src={rightImage} alt="Product" />
          </RightImageWrapper>
          <RightText>Time to make<br />somebody happy!</RightText>
        </RightSection>
      </ShowcaseWrapper>

      {/* About Section */}
      <AboutSection>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          <AboutText>
            Our seasonal collections are crafted with passion and precision, drawing inspiration from nature's ever-changing beauty. Each piece tells a story, blending timeless elegance with contemporary design. 
            <br /><br />
            Founded in 2010, we've dedicated ourselves to creating jewelry that celebrates life's special moments while maintaining sustainable and ethical practices throughout our production process.
          </AboutText>
          <AboutImage src={sea3} alt="About our collections" />
        </AboutContent>
      </AboutSection>
    </PageWrapper>
  <SeasonHighlight />
    </>
  );
};

export default Collection;