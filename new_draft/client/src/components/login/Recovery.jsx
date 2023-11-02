import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { generateOTP, verifyOTP } from '../../login-middleware/helper/helper';
import '../../CSS/Username.css'
import toast, { Toaster } from 'react-hot-toast'
import { useAuthStore } from '../../login-middleware/store/store'

const Recovery = () => {

    const { username } = useAuthStore(state => state.auth);
    const [OTP, setOTP] = useState();
    const navigate = useNavigate()

    useEffect(() => {
        generateOTP(username).then((OTP) => {
            console.log(OTP)
            if (OTP) return toast.success('OTP has been send to your email!');
            return toast.error('Problem while generating OTP!')
        })
    }, [username]);

    async function onSubmit(e) {
        e.preventDefault();
        try {
            let { status } = await verifyOTP({ username, code: OTP })
            if (status === 201) {
                toast.success('Verify Successfully!')
                return navigate('/reset')
            }
        } catch (error) {
            return toast.error('Wrong OTP! Check email again!')
        }
    }

    // handler of resend OTP
    function resendOTP() {

        let sentPromise = generateOTP(username);

        toast.promise(sentPromise,
            {
                loading: 'Sending...',
                success: <b>OTP has been send to your email!</b>,
                error: <b>Could not Send it!</b>,
            }
        );

        sentPromise.then((OTP) => {
            console.log(OTP)
        });

    }

    return (
        <>
            <div className="body">

                <Toaster position='top-center' reverseOrder={false} containerStyle={{ fontFamily: 'Poppins' }}></Toaster>

                <form onSubmit={onSubmit}>

                    <div>

                        <div>
                            <span className="py-4 text-sm text-field text-gray-500">
                                Enter 6 digit OTP send to your email address
                            </span>
                            <input onChange={(e) => setOTP(e.target.value)} type="text" placeholder='OTP' className='textbox' />
                        </div>
                        <button type='submit' className='signup'>Sign In</button>
                    </div>

                </form>
                <div>
                    <span>Did not receive OTP? <button onClick={resendOTP}>Resend</button></span>
                </div>
            </div>
        </>
    )
}

export default Recovery