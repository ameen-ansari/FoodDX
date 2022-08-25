import './body.Module.css'
import React from 'react'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import child1 from './../Images/child1.png'
import child2 from './../Images/child2.png'
import child3 from './../Images/child3.png'


export default function Bodypart() {
  return (
    <div className='efood'>
      <div className="headefood">
        <p>
            Explore Our Foods
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
      </div>
      <div className="childs">
        <div>
            <img src={child1} alt="" />
            <p>Rainbow Vegetable Sandwich</p>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <p> $8.50  <span><del>$10.70 </del></span></p>
            <hr />
            <Button endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
            Order Now
          </Button>
        </div>
        <div>
            <img src={child2} alt="" />
            <p>Rainbow Vegetable Sandwich</p>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <p> $9.50  <span><del>$11.70 </del></span></p>
            <hr />
            <Button endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
            Order Now
          </Button>
        </div>
        <div>
            <img src={child3} alt="" />
            <p>Rainbow Vegetable Sandwich</p>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <p> $10.50  <span><del>$12.70 </del></span></p>
            <hr />
            <Button endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
            Order Now
          </Button>
        </div>
      </div>
    </div>
  )
}
