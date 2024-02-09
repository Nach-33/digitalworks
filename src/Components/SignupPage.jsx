import React, { useRef } from 'react'
import "./SignupPage.css"
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'
import axios from "axios";

function SignupPage() {

    let name = useRef(null);
    let email = useRef(null);
    let password = useRef(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/api/auth/signup"
        const response = await axios.post(url,
            {
                "user_details": {
                    "name": name.current.value,
                    "email": email.current.value,
                    "password": password.current.value
                }
            })
        const user = response.data.user;
        if(user){
            window.location.href = "/auth/login"
        }
    }

    return (
        <section id='signup-main'>
            <div className='card' id='signup-form-card'>
                <h1 className='form-header'>Signup</h1>
                <form id='signup-form'>
                    <MyInput type="text" field="name" place="NAME" reff={name} />
                    <MyInput type="email" field="email" place="EMAIL" reff={email} />
                    <MyInput type="password" field="password" place="PASSWORD" reff={password} />
                    <MyButton func={handleSignup} />
                </form>
            </div>
        </section>
    )
}

export default SignupPage