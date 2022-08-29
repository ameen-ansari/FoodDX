import './Explorefoods.css'
import React from 'react'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import array2 from './Items/Items';


export default function Bodypart() {
  return (
    <div className='efood'>
      <div className="headefood">
        <p>
          Explore Our Foods
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
      <div className="childs" >
        {array2.map((x, i) => {
          return (
            <div key={i}>
              <img src={x.img} alt="" />
              <p>{x.p1}</p>
              <p>{x.p2}</p>
              <p>{x.p3}<span><del>{x.p4}</del></span></p>
              <hr />
              <Button endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
                Order Now
              </Button>
            </div>
          )
        })}
      </div>
    </div >
  )
}
