import img1 from './../Images/img1.png'
import './header.Module.css'
import { Button } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import './headermedia.Module.css'
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <>
      <div className="Offcanvas">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Explore Foods</li>
          <li>Reviews</li>
          <li>FAQ</li>
        </ul>
        <Link to="/login">
          <Button variant="contained" disableElevation>
            Sign In
          </Button>
        </Link>
      </div>
      <div className="header">
        <div className="lhead">
          <p>
            Food<span id="xd">XD</span>
          </p>
          <p>Order food from favourite restaurants near you.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
            purus a odio finibus bibendum amet leo.
          </p>
          <div>
            <Button
              endIcon={<ShoppingBasketIcon />}
              variant="contained"
              disableElevation
            >
              Order Now
            </Button>
            <Button
              variant="contained"
              disableElevation
            >
              Learn More &gt;
            </Button>
          </div>
        </div>
        <div className="rhead">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Explore Foods</li>
            <li>Reviews</li>
            <li>FAQ</li>
          </ul>
          <Link to="/login">
            <Button variant="contained" disableElevation className="bnnb">
              Log In
            </Button>
          </Link>

          <img src={img1} alt="" />
        </div>
      </div>
      <div className="hr">
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
      <div className="burger" onClick={props.showof}>
        <p>&#8801;</p>
      </div>

    </>
  )
}
