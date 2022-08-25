import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import c from'./slider.Module.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="sliderppp">
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          123
          </div>
          <div>
  456
          </div>
          <div>
    789
          </div>
        </Slider>
      </div>
    );
  }
}