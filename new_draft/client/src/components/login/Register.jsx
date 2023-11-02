import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import watering from "../../assets/plantwater.png"
import NavBar from './NavBar'
import '../../CSS/Register.css'
import toast, { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { registerValidate } from '../../login-middleware/helper/validate'
import { useState } from 'react'
import { registerUser } from '../../login-middleware/helper/helper'

const Register = () => {

    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: ''
        },
        validate: registerValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
            let registerPromise = registerUser(values)
            toast.promise(registerPromise, {
                loading: 'Creating....',
                success: <b>Registered Successfully!</b>,
                error: <b>Sorry an error occurred</b>
            });

            registerPromise.then(function () { navigate('/username') })
        }
    })

    return (
        <>
            <NavBar />
            <div className="container">

                <Toaster position='top-center' reverseOrder={false} containerStyle={{ fontFamily: 'Poppins' }}></Toaster>

                <form onSubmit={formik.handleSubmit}>

                    <div className='inputs'>
                        <input {...formik.getFieldProps('email')} type="text" placeholder='Email' className='email' />
                        <input {...formik.getFieldProps('username')} type="text" placeholder='Username' className='user' />
                        <input {...formik.getFieldProps('password')} type="password" placeholder='Password' className='pass' />
                        <button type='submit' className='signup'>Sign Up</button>
                    </div>
                </form>

                <img src={watering} className='blur' />
            </div>
        </>
    )
}

export default Register

