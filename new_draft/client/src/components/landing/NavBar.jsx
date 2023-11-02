import React from 'react'
import "../../CSS/NavBar.css"
import Body from './Body'
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>

                    <img src={logo} alt="" /> <span className='name'>AgiChat</span>
                </div>
                <div>
                    <span className="anchor">

                        <span className='buttons'>Home</span>
                        <span className='buttons'>Weather</span>
                        <span className='buttons'>Market</span>
                        <span className='buttons'>Inventory</span>
                    </span>
                    <button className='login'>Login/Sign Up</button>
                </div>
            </div>
            <Body />
        </>
    )
}

export default Navbar