import React from 'react'
import { Button } from '@mui/material'
import './Offcanvas.css'


export default function Offcanvas() {
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
        <Button variant="contained" disableElevation>
          Sign In
        </Button>
      </div>
    </>
  )
}