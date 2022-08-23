import img1 from './../Images/img1.png'
import React from 'react'
import './header.Module.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Botton from './Botton';
export default function Header() {
  return (
    <div className='header'>
      <div className='childheader'>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>ExploreFoods</li>
            <li>Reviews</li>
            <li>FAQ</li>
        </ul>
        <p><span>Food</span><span>DX</span></p>
        <p>Order food from favourite restaurants near you.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
        <div>
        <Botton icon={<ShoppingBasketIcon/>} value="Order Now"/>
            <div><b>Learn More &gt;</b></div>
        </div>
      </div>
      <div className='childheader2'>
        <Botton value="Log In" />
        <img src={img1} alt="" />
      </div>
    </div>
  )
}
