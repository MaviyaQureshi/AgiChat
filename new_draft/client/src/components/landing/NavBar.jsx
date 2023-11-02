import React from 'react'
import "../../CSS/NavBar.css"
import Body from './Body'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>

                    <img src={logo} alt="" /> <span className='name'>AgiChat</span>
                </div>
                <div>
                    <span className="anchor">
                        <Link to='/username' style={{ textDecoration: 'none' }}>

                            <span className='buttons'>Home</span>
                            <span className='buttons'>Weather</span>
                            <span className='buttons'>Market</span>
                            <span className='buttons'>Inventory</span>
                        </Link>
                    </span>
                    <button className='login'>Login/Sign Up</button>
                </div>
            </div>
            <Body />
        </>
    )
}

export default Navbar