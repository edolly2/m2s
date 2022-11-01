import React from 'react'
import styled from 'styled-components'

const CarouselContainer = styled.div`

`;
const Carousel = styled.div`
overflow: hidden;
`;

const CarouselInner = styled.div`
white-space: nowrap;
transition: transform 0.3s;
`;


const CarouselItem = styled.div`
display: inline-flex;
align-items: center;
justify-content: center;
height: 200px;
background-color: blue;
color: green;
`;


const BestSellerCarousel = () => {
  return (
    <CarouselContainer>BestSellerCarousel</CarouselContainer>
  )
}

export default BestSellerCarousel