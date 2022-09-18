import { auth } from '../Firebase'
import React, { useState ,useEffect} from 'react'
import Articles from './Articles'
import Explorefoods from './Explorefoods'
import Questions from './Questions'
import Header from './Header'
import Testimonial from './Testimonial'
import { useNavigate } from 'react-router-dom'



export default function Homepage() {
  let navigate = useNavigate()
  const [userEmail, setuserEmail] = useState("")
  const [logger, setlogger] = useState()
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
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user === null || user === "") {
        setlogger('Login')
        setuserEmail("")
        navigate('/login')
      }else{
        setuserEmail(user.email)
        setlogger("Logout")
      }
    })
  },[navigate])

  return (
    <>
      <Header showof={ofc} mail={userEmail} logger={logger}/>
      <Articles />
      <Explorefoods />
      <Testimonial />
      <Questions />
    </>
  )
}
