import React from 'react'
import Slider from 'react-slick'

import { StyledImg } from '../styles/StyledImage'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};


export default function CarouselComponent() {

  return (
    <Slider {...settings}>
      <StyledImg src='/static/images/img1.jpg' alt="" />
      <StyledImg src='/static/images/img2.jpg' alt="" />
      <StyledImg src='/static/images/img3.jpg' alt="" />
      <StyledImg src='/static/images/img4.jpg' alt="" />
    </Slider>
  )
}
