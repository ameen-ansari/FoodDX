import React from 'react'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import style1 from "./Button.module.css"
export default function (props) {
    return (
        <div>
            <Button
            className={style1.btn}
                endIcon={<ShoppingBasketIcon />} variant="contained" disableElevation>
                {props.value}
            </Button>
        </div>
    )
}