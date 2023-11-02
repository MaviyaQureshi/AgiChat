import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='logo'>

                    <img src={logo} /> <span className='name'>AgiChat</span>
                </div>
                <div>
                    <span className="anchor">

                        <span className='buttons'>Home</span>
                        <Link to='/dashboard' style={{ textDecoration: 'none' }}><span className='buttons'>Weather</span></Link>
                        <span className='buttons'>Market</span>
                        <Link to='/inventory' style={{ textDecoration: 'none' }}><span className='buttons'>Inventory</span></Link>
                    </span>
                    <Link to='/' style={{ textDecoration: 'none' }}><button className='login'>Log out</button></Link>
                </div>
            </div>
        </>
    )
}

export default NavBar