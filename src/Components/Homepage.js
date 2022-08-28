import React, { useState } from 'react'
import Articles from './Articles'
import Bodypart from './Bodypart'
import Bodypart2 from './Bodypart2'
import Header from './Header'
import Testi from './Testi'


export default function Homepage() {
  const [ofcan, setofcan] = useState(true)
  var ofc = () => {
    var posi = document.getElementsByClassName('Offcanvas')[0]
    var burger = document.getElementsByClassName('burger')[0]
    var btttn = document.getElementsByClassName('bnnb')[0]
    var body = document.getElementsByTagName('body')[0]
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
      {/* <Offcanvas /> */}
      <Header showof={ofc} />
      <Articles />
      <Bodypart />
      <Testi />
      <Bodypart2 />
    </>
  )
}
