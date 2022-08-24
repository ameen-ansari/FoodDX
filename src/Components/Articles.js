import React from 'react'
import './artitles.Module.css'
import './artmedia.Module.css'
import plate from './../Images/plate.png'
import burger from './../Images/burger.png'
import vecter from './../Images/Vector.png'
import ourstory from './../Images/Vecto.png'
import { Button } from '@mui/material'

export default function Articles() {
  return (
    <>
      <div>
        <div className="art1">
          <div className="img">
            <img src={plate} alt="" />
          </div>
          <div className="art1b">
            <p>
              We pride ourselves on making real food from the best ingredients.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum amet leo.{' '}
            </p>
            <Button variant="contained" disableElevation>
              Learn More &gt;
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="art12">
          <div className="art2b">
            <p>
              We make everything by hand with the best possible ingredients.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div>
              <img src={vecter} alt="" />
              <p>Etiam sed dolor ac diam volutpat.</p>
            </div>
            <div>
              <img src={vecter} alt="" />
              <p>Etiam sed dolor ac diam volutpat.</p>
            </div>
            <div>
              <img src={vecter} alt="" />
              <p>Etiam sed dolor ac diam volutpat.</p>
            </div>
            <Button variant="contained" disableElevation>
              Learn More &gt;
            </Button>
          </div>
          <div className="img">
            <img src={burger} alt="" />
          </div>
        </div>
      </div>
      <div className="artborder">
        <p>
          When a man's stomach is full it makes no difference whether he is rich
          or poor.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
          tellus.
        </p>
        <div>
          <img src={ourstory} alt="" />
          <p>Watch Our Story</p>
        </div>
      </div>
    </>
  )
}
