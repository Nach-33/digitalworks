import React, { useRef, useState } from 'react'
import "./SignupPage.css"
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'
import axios from "axios";

function SignupPage() {
    let name = useRef(null);
    let email = useRef(null);
    let designation = useRef(null);
    let password = useRef(null);
    const [imageFile, setImageFile] = useState("")

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
            fileReader.onerror = (error) => {
                reject(error);
            }
        })
    }

    const handleFileUpload = async(e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file)
        setImageFile(base64);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/api/auth/signup"
        const response = await axios.post(url,
            {
                "user_details": {
                    "name": name.current.value,
                    "email": email.current.value,
                    "image": imageFile,
                    "designation": designation.current.value,
                    "password": password.current.value
                }
            })
        const user = response.data.user;
        if (user) {
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
                    <MyInput type="text" field="designation" place="DESIGNATION" reff={designation} />
                    <MyInput type="password" field="password" place="PASSWORD" reff={password} />
                    <input type="file" id='image' onChange={handleFileUpload}/>
                    <MyButton func={handleSignup} />
                </form>
            </div>
        </section>
    )
}

export default SignupPage