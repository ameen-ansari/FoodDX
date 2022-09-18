import React , {useState}from 'react'
import logincss from "./login.module.css"
import { Button } from '@mui/material'
import img1 from '../Images/fb.png'
import img3 from '../Images/Group 50.png'
import img4 from '../Images/iph.png'
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../Firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    let navigate = useNavigate()
    let [values, setvalues] = useState({
        email: "",
        password: "",
    })
    function Login(e) {
        let inputs = { [e.target.name]: e.target.value }
        setvalues({ ...values, ...inputs })
    }
    async function submit() {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password)
            alert('logged in')
            navigate('/')
            setvalues({
                email: "",
                password: "",
            })
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>Welcome to <span>FoodDX</span></p>
                    <p>No Account ?
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <span>  Sign up</span>
                        </Link>
                    </p>
                </div>
                <p>Sign in</p>
                <div>
                    <img src={img3} alt="" />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                </div>
                <p>Enter username or email  address</p>
                <input value={values.email} onChange={Login} name="email" style={{ height: '45px' }} type="text" placeholder='Enter username or email address' />
                <p>Enter your Password</p>
                <input value={values.password} onChange={Login} name="password" style={{ height: '45px' }} type="password" placeholder='Enter your Password' />
                <Link to="/forgetpassword" style={{ textDecoration: 'none',width:'100%' }}>
                    <div className={logincss.fgp}>
                        <p >Forgot Password </p>
                    </div>
                </Link>
                <Button onClick={submit} variant="contained" disableElevation>
                    Sign In
                </Button>
            </div>
        </div>
    )
}
