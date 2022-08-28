import React from 'react'
import { Button } from '@mui/material'
import style from "./btn.module.css"
export default function (props) {
    return (
        <div>
            <Button className={style.btnnn} variant="contained" disableElevation>
                {props.value}
            </Button>
        </div>
    )
}
