import React from 'react'
import './Questions.css'
import { Button } from '@mui/material'
import v1 from './../Images/v1.png'
import v2 from './../Images/v2.png'
import v3 from './../Images/v3.png'
import array3 from './Questions/Questions'

export default function Bodypart2() {
  return (
    <>
      <div className='body2'>
        <p>Frequently Asked Questions</p>
        <div className='body2b'>
          {array3.map((x, i) => {
            return (
              <div key={i}>
                <p>{x.p1}</p>
                <p>{x.p2}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='body2c'>
        <p>Baked fresh daily by bakers with passion.</p>
        <Button variant="contained" disableElevation>
          Learn More
        </Button>
      </div>
      <div className='body2d'>
        <p>Hurry up! Subscribe our newsletter and get 25% Off</p>
        <p>Limited time offer for this month. No credit card required.</p>
        <div>
          <input type="text" placeholder='Email Address Here' />
          <Button variant="contained" disableElevation>
            Subscribe
          </Button>
        </div>
      </div>
      <div className='body2e'>
        <div>
          <ul>
            <li>Register</li>
            <li>Forum</li>
            <li>Affiliate</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <img src={v1} alt="" />
          <img src={v2} alt="" />
          <img src={v3} alt="" />
        </div>
        <div>
          <p>© 2021. FoodDX. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}
