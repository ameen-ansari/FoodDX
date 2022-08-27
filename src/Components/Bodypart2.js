import React from 'react'
import './bodypart2.css'
import { Button } from '@mui/material'
import v1 from './../Images/v1.png'
import v2 from './../Images/v2.png'
import v3 from './../Images/v3.png'


export default function Bodypart2() {
  return (
    <>
    <div className='body2'>
      <p>Frequently Asked Questions</p>
      <div className='body2b'>
        <div>
            <p>~ Is Foodera Bread really baked fresh each day?</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </div>
        <div>
            <p>~ Do you bake breads containing animal fats or products?</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </div>
        <div>
            <p>~ Can I order your products online?</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </div>
        <div>
            <p>~ When are you opening a shop near me?</p>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
        </div>
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
