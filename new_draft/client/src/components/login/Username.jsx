import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from './NavBar'
import watering from "../../assets/plantwater.png"
import '../../CSS/SignUp.css'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from '../../login-middleware/helper/validate'
import { useAuthStore } from '../../login-middleware/store/store'


const Username = () => {

    const navigate = useNavigate();
    const setUsername = useAuthStore(state => state.setUsername)

    const formik = useFormik({
        initialValues: {
            username: ''
        },
        validate: usernameValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
            setUsername(values.username);
            navigate('/password')
        }
    })

    return (
        <>
            <NavBar />
            <div className="container">

                <Toaster position='top-center' reverseOrder={false} containerStyle={{ fontFamily: 'Poppins' }}></Toaster>

                <form onSubmit={formik.handleSubmit}>
                    <div className='boxes'>

                        <input {...formik.getFieldProps('username')} type="text" placeholder='Username' className='username' />
                        <button type='submit' className='signup'>Continue</button>
                    </div>

                    <div className='new'>
                        Don't have an account?<Link to="/register">Sign Up</Link>
                    </div>
                </form>

                <img src={watering} className='blur' />
            </div >
        </>
    )
}

export default Username