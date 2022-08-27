import React from 'react'
import logincss from "./login.module.css"
import { Button } from '@mui/material'
import img1 from '../Images/fb.png'
// import img2 from '../Images/google.png'
import img3 from '../Images/Group 50.png'
import img4 from '../Images/iph.png'

export default function Login() {
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>Welcome to <span>FoodDX</span></p>
                    <p>No Account ?<span> Sign up</span></p>
                </div>
                <p>Sign in</p>
                <div>
                        <img src={img3} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                </div>
                <p>Enter username or email  address</p>
                <input type="text" placeholder='Enter username or email address' />
                <p>Enter your Password</p>
                <input type="text" placeholder='Enter your Password' />
                <div>
                    <p>Forgot Password </p>
                </div>
                <Button variant="contained" disableElevation>
                    Sign In
                </Button>
            </div>
        </div>
    )
}
