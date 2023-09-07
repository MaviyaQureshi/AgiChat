import Structure from './Structure'
// import AboutUs from './AboutUs';
import "./CSS/Header.css"
// import { Routes, Route, Link } from "react-router-dom";



const Header = () => {
    return (
        <>

            {/* <Routes>
                <Route path="/aboutus" compomt={<AboutUs />} />
            </Routes> */}

            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet" />
            <nav>
                <span className="name">Agichat</span>

                {/* need to make react router here and make a seperate component for things inside link-contianer*/}


                <span className="link-container" >


                    <span className="router">About Us</span>
                    <span className="router">Features</span>
                    <span className="router">Our Blog</span>
                </span>

                <span className="button-container">
                    <button className="sign-up">Sign Up</button>
                    <button className="login">Log In</button>
                </span>

            </nav>
            <Structure />
        </>
    )
}

export default Header