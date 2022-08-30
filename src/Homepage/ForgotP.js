import styles from './ForgotP.module.css'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import img1 from '../Images/fb.png'
import img3 from '../Images/Group 50.png'
import img4 from '../Images/iph.png'
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.head}>
                    <p>Welcome to <span>FoodDX</span></p>
                </div>
                <p>Enter username or email  address</p>
                <input style={{ height: '45px' }} type="text" placeholder='Enter username or email address' />
                <p>Enter Six Digit verification Code</p>
                <input style={{ height: '45px' }} type="text" />
                <Button variant="contained" disableElevation>
                    Verify
                </Button>
            </div>
        </div>
    )
}