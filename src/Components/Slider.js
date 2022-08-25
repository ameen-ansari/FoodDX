import woman from './../Images/woman.png'
import React from 'react'
import './slider.Module.css'

export default function Slider() {
  var showspan1 = () => {
    var show1 = document.getElementsByClassName('show1')[0]
    var show2 = document.getElementsByClassName('show2')[0]
    var show3 = document.getElementsByClassName('show3')[0]
    show1.style.transform = 'translateX(0vw)'
    show2.style.transform = 'translateX(70vw)'
    show3.style.transform = 'translateX(140vw)'
    console.log('a');
  }
  var showspan2 = () => {
    var show1 = document.getElementsByClassName('show1')[0]
    var show2 = document.getElementsByClassName('show2')[0]
    var show3 = document.getElementsByClassName('show3')[0]
    show1.style.transform = 'translateX(-70vw)'
    show2.style.transform = 'translateX(-70vw)'
    show3.style.transform = 'translateX(-70vw)'
    console.log('b');
  }
  var showspan3 = () => {
    var show1 = document.getElementsByClassName('show1')[0]
    var show2 = document.getElementsByClassName('show2')[0]
    var show3 = document.getElementsByClassName('show3')[0]
    show1.style.transform = 'translateX(-140vw)'
    show2.style.transform = 'translateX(-140vw)'
    show3.style.transform = 'translateX(-140vw)'
    console.log('c');
  }
  return (
    <>
    <div className="slider">
      <div className="slides">
        <div className="show1">
          <img src={woman} alt="" />
          <p>
            1"Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
        </div>
      </div>
      <div className="slides">
        <div className="show2">
          <img src={woman} alt="" />
          <p>
            2"Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
        </div>
      </div>
      <div className="slides">
        <div className="show3">
          <img src={woman} alt="" />
          <p>
            3"Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts Separated they
            live."
          </p>
          <p>Chiranjit Hazarika - Web Designer</p>
        </div>
      </div>
    </div>
      <div className="dots">
        <span onClick={showspan1}></span>
        <span onClick={showspan2}></span>
        <span onClick={showspan3}></span>
      </div>
      </>
  )
}
