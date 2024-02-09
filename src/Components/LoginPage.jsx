import React from 'react'
import "./LoginPage.css"
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'

function LoginPage() {
    return (
        <section id='login-main'>
            <div className='card' id='login-form-card'>
                <h1 className='form-header'>Login</h1>
                <form id='login-form'>
                    <MyInput type="email" field="email" place="EMAIL" />
                    <MyInput type="password" field="password" place="PASSWORD" />
                    <MyButton />
                </form>
            </div>
        </section>
    )
}

export default LoginPage