import React,{ useState } from 'react'
import logincss from "./Signup.module.css"
import { Button } from '@mui/material'
import img1 from '../Images/fb.png'
import img3 from '../Images/Group 50.png'
import img4 from '../Images/iph.png'
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../Firebase'
import { addDoc, collection } from 'firebase/firestore'

export default function Login() {
    let navigate = useNavigate()
    let [values, setvalues] = useState({
        email: "",
        userName: "",
        phoneNumber: "",
        password: "",
        uid: ""
    })
    function register(e) {
        let inputs = { [e.target.name]: e.target.value }
        setvalues({ ...values, ...inputs })
    }
    async function submit() {
        try {
            let obj = await createUserWithEmailAndPassword(auth, values.email, values.password)
            let user = obj.user.uid 
            setvalues(values.uid = user)
            alert('Acount Created Successfully')
            navigate('/')
            await addDoc(collection(db ,"users"),values)
            setvalues({
                email: "",
                userName: "",
                phoneNumber: "",
                password: "",
                uid:""
            })
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <div className={logincss.container}>
            <div className={logincss.login}>
                <div className={logincss.head}>
                    <p>Welcome to <span style={{ color: "var(--orange)" }}>FoodDX</span></p>
                    <p>Have An Account ?<Link to="/login" style={{ textDecoration: 'none', color: "var(--orange)" }}><span> Sign in</span></Link></p>
                </div>
                <p>Sign up</p>
                <div>
                    <img src={img3} alt=" " />
                    <img src={img1} alt="" />
                    <img src={img4} alt="" />
                </div>
                <p>Enter username or email  address</p>
                <input type="email" value={values.email} onChange={register} name="email" placeholder='Enter username or email address' />
                <div className={logincss.twoinputs} >
                    <div>
                        <p>User Name</p>
                        <input type="text" value={values.userName} onChange={register} name="userName" placeholder='User Name' />
                    </div>
                    <div>
                        <p>Contact #</p>
                        <input type="text" value={values.phoneNumber} onChange={register} name="phoneNumber" placeholder='Contact Number' />
                    </div>
                </div>
                <p>Enter your Password</p>
                <input type="password" value={values.password} onChange={register} name="password" placeholder='Enter your Password' />
                <Button onClick={submit} variant="contained" disableElevation>
                    Sign up
                </Button>
            </div>
        </div>
    )
}

