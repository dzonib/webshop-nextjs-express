import React from 'react'
import Slider from "react-slick"
import { StyledImg } from '../styles/StyledImage'


export default function CarouselComponent() {

  var settings = {
    // arrows: true,
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3900,
    speed: 2200,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerPadding: '0px'
    // accessibility: true,
  };

  return (
    <Slider {...settings}>
      <StyledImg src='/static/images/img1.jpg' alt="" />
      <StyledImg src='/static/images/img2.jpg' alt="" />
      <StyledImg src='/static/images/img3.jpg' alt="" />
      <StyledImg src='/static/images/img4.jpg' alt="" />
    </Slider>
  )
}
