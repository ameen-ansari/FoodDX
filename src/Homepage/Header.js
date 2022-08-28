import img1 from './../Images/img1.png'
import headCss from './Header.module.css'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useState } from 'react'

export default function Header() {
    const [ofcan, setofcan] = useState(false)
    var ofc = () => {
        var ofcc = document.getElementById('zxx')
        var xd = document.getElementById('xd')
        var burger = document.getElementById('burger')
        if (ofcan === true) {
            ofcc.style.display = 'flex'
            xd.style.color = 'white'
            burger.innerHTML = '&#9747;'

        } else {
            ofcc.style.display = 'none'
            xd.style.color = '#F46A06'
            burger.innerHTML = '&#8801;'
        }
        setofcan(!ofcan)
    }
    return (
        <>
            <div id="zxx" className={`${headCss.Offcanvas} ${headCss.position}`}>
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
            <div className={headCss.header}>
                <div className={headCss.lhead}>
                    <p>
                        Food<span id="xd">XD</span>
                    </p>
                    <p>Order food from favourite restaurants near you.</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
                        purus a odio finibus bibendum amet leo.
                    </p>
                    <div className={headCss.btns}>
                        <Button
                            endIcon={<ShoppingBasketIcon />}
                            variant="contained"
                            disableElevation
                        >
                            Order Now
                        </Button>
                        <Button variant="contained" disableElevation>
                            Learn  more&gt;
                        </Button>
                    </div>
                </div>
                <div className={headCss.rhead}>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Explore Foods</li>
                        <li>Reviews</li>
                        <li>FAQ</li>
                    </ul>
                    <Button variant="contained" disableElevation className="bnnb">
                        Log In
                    </Button>
                    <img src={img1} alt="" />
                </div>
                <div className={headCss.burger} onClick={ofc}>
                    <p id="burger">&#8801;</p>
                </div>
            </div>
            <div className={headCss.hr}>
                <div>
                    <p>+1234</p>
                    <p>Savings</p>
                </div>
                <div>
                    <p>+1234</p>
                    <p>Savings</p>
                </div>
                <div>
                    <p>+1234</p>
                    <p>Savings</p>
                </div>
                <div>
                    <p>+1234</p>
                    <p>Savings</p>
                </div>
            </div>


        </>
    )
}
