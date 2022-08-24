import React from 'react'
import img1 from './../Images/img1.png'
import './header.Module.css'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./headermedia.Module.css"



export default function Header() {
    return (
      <>
    <div className="header">
      <div className="lhead">
        <p>
          Food<span>XD</span>
        </p>
        <p>Order food from favourite restaurants near you.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum amet leo.
        </p>
        <div>
          <Button endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
            Order Now
          </Button>
          <Button variant="contained" disableElevation>
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
          <Button variant="contained" disableElevation>
            Log In
          </Button>
        <img src={img1} alt="" />
      </div>
    </div>
    <div className='hr'>
        <div><p>+1234</p><p>Savings</p></div>
        <div><p>+1234</p><p>Savings</p></div>
        <div><p>+1234</p><p>Savings</p></div>
        <div><p>+1234</p><p>Savings</p></div>
    </div>
    <div className='burger'>
      <p>&#8801;</p>
    </div>
    </>
  )
}
