import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import watering from "../../assets/plantwater.png"
import NavBar from './NavBar'
import '../../CSS/SignUp.css'
import toast, { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from '../../login-middleware/helper/validate'
import useFetch from '../../login-middleware/hooks/hooks'
import { useAuthStore } from '../../login-middleware/store/store'
import { verifyPassword } from '../../login-middleware/helper/helper'

const Password = () => {

    const navigate = useNavigate()
    const { username } = useAuthStore(state => state.auth)
    const [{ isLoading, serverError }] = useFetch(`/user/${username}`)

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            let loginPromise = verifyPassword({ username, password: values.password })
            toast.promise(loginPromise, {
                loading: 'Checking...',
                success: <b>Login Successfully...!</b>,
                error: <b>Password Not Match!</b>
            });

            loginPromise.then(res => {
                let { token } = res.data;
                localStorage.setItem('token', token);
                navigate('/dashboard')
            })
            console.log(values)
        }
    })

    if (isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
    if (serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>


    return (
        <>
            <NavBar />
            <div className="container">

                <Toaster position='top-center' reverseOrder={false} containerStyle={{ fontFamily: 'Poppins' }}></Toaster>

                <form onSubmit={formik.handleSubmit}>

                    <div className='boxes'>
                        <input {...formik.getFieldProps('password')} type="password" placeholder='Password' className='password' />
                        <button type='submit' className='LogIn'>Log In</button>
                    </div>

                    <div className='forgot'>
                        Forgot Password? <Link to="/recovery">Recover Now</Link>
                    </div>
                </form>

                <img src={watering} className='blur' />
            </div>
        </>
    )
}

export default Password