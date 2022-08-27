import React, { useState } from 'react'
import Articles from './Articles'
import Bodypart from './Bodypart'
import Bodypart2 from './Bodypart2'
import Header from './Header'
import Testi from './Testi'
// import Offcanvas from './Offcanvas'


export default function Homepage() {
  const [ofcan, setofcan] = useState(true)
  var ofc = () => {
    var posi = document.getElementsByClassName('Offcanvas')[0]
    var burger = document.getElementsByClassName('burger')[0]
    var btttn = document.getElementsByClassName('bnnb')[0]
    var body = document.getElementsByTagName('body')[0]
    var xd = document.getElementById('xd')
    if (ofcan === true) {
      btttn.style.display = "none"
      posi.style.display = 'flex'
      posi.style.height = '100vh'
      posi.style.left = "0vw"
      xd.style.color = "white"
      burger.innerHTML = '&#9747;'
      body.style.overflow = 'hidden'
    } else {
      posi.style.display = 'none'
      posi.style.left = "-75vw"
      xd.style.color = "var(--orange)"
      burger.innerHTML = '&#8801;'
      body.style.overflowY = 'scroll'
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
