import './botton.Module.css'
import React from 'react'
import { Button } from '@mui/material';


export default function Botton(props) {
  return (

      <Button className='childheader' endIcon={props.icon} variant="contained">{props.value}</Button>
  
  )
}
