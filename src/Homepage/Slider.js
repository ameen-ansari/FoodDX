import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import React, { Component } from "react";
import Slider from "react-slick";
import array1 from "./Scroller/Scrollitems"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slides">
        <Slider {...settings} className="SLIDER">
          {array1.map((x,i)=>{
            return(
              <div key={i}>
                <img src={x.img} alt="" />
                <p>{x.p}</p>
                <p>{x.p2}</p>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}