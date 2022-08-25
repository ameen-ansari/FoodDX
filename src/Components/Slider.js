import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slider.Module.css'
import woman from './../Images/woman.png'
import React, { Component } from "react";
import Slider from "react-slick";

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
          <div className="slideschild">
            <img src={woman} alt="" />
            <p>
            "Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
          </div>
          <div className="slideschild">
            <img src={woman} alt="" />
            <p>
            1"Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
          </div>
          <div className="slideschild">
            <img src={woman} alt="" />
            <p>
            1"Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
          </div>
          
        </Slider>
      </div>
    );
  }
}