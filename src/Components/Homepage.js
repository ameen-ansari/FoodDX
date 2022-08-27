import React, { useState } from 'react'
import Articles from './Articles'
import Bodypart from './Bodypart'
import Bodypart2 from './Bodypart2'
import Header from './Header'
import Testi from './Testi'
// import Offcanvas from './Offcanvas'


export default function Homepage() {
  const [ofcan, setofcan] = useState(true)
  return (
    <>
      {/* <Offcanvas /> */}
      <Header showof={() => {
        var posi = document.getElementsByClassName('Offcanvas')[0]
        var header = document.getElementsByClassName('header')[0]
        var burger = document.getElementsByClassName('burger')[0]
        var btttn = document.getElementsByClassName('bnnb')[0]
        var xd = document.getElementById('xd')
        if (ofcan === true) {
          btttn.style.display = "none"
          posi.style.display = 'flex'
          posi.style.height = '100vh'
          posi.style.left = "0vw"
          xd.style.color = "white"
          burger.innerHTML = '&#9747;'
        } else {
          posi.style.display = 'none'
          posi.style.left = "-75vw"
          xd.style.color = "var(--orange)"
          burger.innerHTML = '&#8801;'
          btttn.style.display = "block"
        }
        setofcan(!ofcan)
      }} />
      <Articles />
      <Bodypart />
      <Testi />
      <Bodypart2 />
    </>
  )
}
