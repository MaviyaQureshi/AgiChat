import React from 'react'
import Chatbot from './Chatbot'
import WeatherApp from '../weather/WeatherApp'
import NavBar from './NavBar'

const DashBoard = () => {
    return (
        <>
            <NavBar />
            <WeatherApp />
            <Chatbot />
        </>
    )
}

export default DashBoard