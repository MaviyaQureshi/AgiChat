import React from 'react'
import logo from "../../assets/logo.png"

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
                        <span className='buttons'>Weather</span>
                        <span className='buttons'>Market</span>
                        <span className='buttons'>Inventory</span>
                    </span>
                    <button className='login'>Log out</button>
                </div>
            </div>
        </>
    )
}

export default NavBar