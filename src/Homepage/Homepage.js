import React, { useState } from 'react'
import Articles from './Articles'
import Explorefoods from './Explorefoods'
import Questions from './Questions'
import Header from './Header'
import Testimonial from './Testimonial'
import ForgotP from "./ForgotP"



export default function Homepage() {
  const [ofcan, setofcan] = useState(true)
  var ofc = () => {
    var posi = document.getElementsByClassName('Offcanvas')[0]
    var burger = document.getElementsByClassName('burger')[0]
    var xd = document.getElementById('xd')
    if (ofcan === true) {
      posi.style.left = "0vw"
      xd.style.color = "white"
      burger.innerHTML = '&#9747;'
    } else {
      posi.style.left = "-75vw"
      xd.style.color = "var(--orange)"
      burger.innerHTML = '&#8801;'
    }
    setofcan(!ofcan)
  }

  return (
    <>
      <Header showof={ofc} />
      <Articles />
      <Explorefoods />
      <Testimonial />
      <Questions />
    </>
  )
}
