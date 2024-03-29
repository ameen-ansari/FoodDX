import img1 from './../Images/img1.png'
import './Header.css'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import './Headermedia.css'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'

function Header(props) {
  let nevigate = useNavigate()
  function logout() {
    signOut(auth)
    nevigate('/login')
  }

  return (
    <>
      <div className="Offcanvas">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Explore Foods</li>
          <li>Reviews</li>
          <li>FAQ</li>
        </ul>
        <Button style={{ backgroundColor: "white", color: 'black', }} variant="contained" disableElevation>
          Login
        </Button>
      </div>
      <div className="header">
        <div className="lhead">
          <p>
            Food<span id="xd">XD</span>
          </p>
          <p>Order food from favourite restaurants near you.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <div>
            <Button
              endIcon={<ShoppingBasketIcon />}
              variant="contained"
              disableElevation
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              disableElevation
            >
              Learn More &gt;
            </Button>
          </div>
        </div>
        <div className="rhead">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore Foods</li>
            <li>Reviews</li>
            <li>FAQ</li>
          </ul>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{ backgroundColor: "var(--orange)", color: 'white' }} onClick={logout} disableElevation className="bnnb">
              {props.logger}
            </Button>
          </Link>
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="hr">
        <div>
          <p>+1234</p>
          <p>Savings</p>
        </div>
        <div>
          <p>+1234</p>
          <p>Savings</p>
        </div>
        <div>
          <p>+1234</p>
          <p>Savings</p>
        </div>
        <div>
          <p>+1234</p>
          <p>Savings</p>
        </div>
      </div>
      <div className="burger" onClick={props.showof}>
        <p>&#8801;</p>
      </div>

    </>
  )
}
export default Header