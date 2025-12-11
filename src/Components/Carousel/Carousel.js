import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function Carousel() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="banner1.jpg" alt="" height={"300px"} width={"100%"}/>
      </div>
      <div>
        <img src="banner2.jpg" alt="" height={"300px"} width={"100%"}/>
      </div>
      <div>
        <img src="banner3.webp" alt="" height={"300px"} width={"100%"}/>
      </div>
      <div>
        <img src="banner4.jpg" alt="" height={"300px"} width={"100%"}/>
      </div>
      
    </Slider>
  );
}