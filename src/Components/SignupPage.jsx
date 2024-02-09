import React from 'react'
import "./SignupPage.css"
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'

function LoginPage() {
    return (
        <section id='signup-main'>
            <div className='card' id='signup-form-card'>
                <h1 className='form-header'>Signup</h1>
                <form id='signup-form'>
                    <MyInput type="text" field="name" place="NAME" />
                    <MyInput type="email" field="email" place="EMAIL" />
                    <MyInput type="password" field="password" place="PASSWORD" />
                    <MyButton />
                </form>
            </div>
        </section>
    )
}

export default LoginPage