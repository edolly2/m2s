import React from 'react'
import styled from 'styled-components'
import Hero from '../assets/HeroImage.jpg';

const HeroContainer = styled.div`
width: 100%;
position: absolute;
z-index: 1;
`;
const HeroImage = styled.img`
width: 100%;
height: auto;
`;

const HomeHero = () => {
  return (
    <HeroContainer><HeroImage src={Hero} alt='Candle' /></HeroContainer>
  )
}

export default HomeHero