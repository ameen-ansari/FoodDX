import React from 'react'
import logincss from "./Signup.module.css"
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
                    <p>Welcome to <span style={{ color: "var(--orange)" }}>FoodDX</span></p>
                    <p>Have An Account ?<Link to="/login" style={{ textDecoration: 'none', color: "var(--orange)" }}><span> Sign in</span></Link></p>
                </div>
                <p>Sign up</p>
                <div>
                    <img src={img3} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                </div>
                <p>Enter username or email  address</p>
                <input style={{height:'45px'}} type="text" placeholder='Enter username or email address' />
                <div className={logincss.twoinputs} >
                    <div>
                        <p>User Name</p>
                        <input  type="text" placeholder='User Name' />
                    </div>
                    <div>
                        <p>Contact #</p>
                        <input  type="text" placeholder='Contact Number' />
                    </div>
                </div>
                <p>Enter your Password</p>
                <input style={{height:'45px'}} type="password" placeholder='Enter your Password' />
                <Button variant="contained" disableElevation>
                    Sign up
                </Button>
            </div>
        </div>
    )
}
