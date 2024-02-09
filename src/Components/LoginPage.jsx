import React, { useRef } from 'react'
import "./LoginPage.css"
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'
import axios from "axios"

function LoginPage() {
    const email = useRef(null);
    const password = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/api/auth/login"
        const response = await axios.post(url,
            {
                "user_details": {
                    "email": email.current.value,
                    "password": password.current.value
                }
            })
        const { token } = response.data;
        if (token) {
            window.localStorage.setItem('token', token);
            window.location.href = "/user"
        }
    }

    return (
        <section id='login-main'>
            <div className='card' id='login-form-card'>
                <h1 className='form-header'>Login</h1>
                <form id='login-form'>
                    <MyInput type="email" field="email" place="EMAIL" reff={email} />
                    <MyInput type="password" field="password" place="PASSWORD" reff={password} />
                    <MyButton func={handleLogin} />
                </form>
            </div>
        </section>
    )
}

export default LoginPage