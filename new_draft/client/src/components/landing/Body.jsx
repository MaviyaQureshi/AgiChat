import React from 'react'
import { Link } from 'react-router-dom'
import '../../CSS/Body.css'
import watering from "../../assets/plantwater.png"

const Body = () => {
    return (
        <>

            <div className="container">

                <div className='typewriter'>
                    <div className='c1' style={{ color: "#686868", fontSize: '40px', fontWeight: '700' }}>Hi! we're </div>
                    <div className='c2' style={{ color: "#000000", fontSize: '60px', fontWeight: '700' }}>AgiChat!</div>
                    <div className='c3' style={{ color: "#686868", fontSize: '30px' }}>Your go-to online resource for </div>
                    <div className='c4' style={{ color: "#686868", fontSize: '30px' }}>all things agriculture.</div>
                    <Link to='/username'>
                        <button className='start'>Get Started!</button>
                    </Link>
                </div>

                <img src={watering} className='water' />
            </div>


        </>
    )
}

export default Body