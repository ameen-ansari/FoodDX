import React from 'react'
import logincss from "./login.module.css"
import { Button } from '@mui/material'
import img1 from '../Images/fb.png'
// import img2 from '../Images/google.png'
import img3 from '../Images/Group 50.png'
import img4 from '../Images/iph.png'
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>Welcome to <span>FoodDX</span></p>
                    <p>No Account ?<Link to="/signup" style={{ textDecoration: 'none' }}><span> Sign up</span></Link></p>
                </div>
                <p>Sign in</p>
                <div>
                    <img src={img3} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                </div>
                <p>Enter username or email  address</p>
                <input style={{height:'45px'}} type="text" placeholder='Enter username or email address' />
                <p>Enter your Password</p>
                <input style={{height:'45px'}} type="text" placeholder='Enter your Password' />
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
