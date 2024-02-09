import React, { useEffect, useState } from 'react'
import "./IDCard.css"
import idBgWave from '../Assets/id-bg-wave.svg'
import dwlogo from "../Assets/dwlogo.png"
import axios from "axios"

function IDCard() {
    const [userData, setUserData] = useState({});
    const token = localStorage.getItem('token');
    const url = "http://localhost:4000/api/user/";
    const getUserData = async () => {
        axios.get(url, {
            headers: {
                token,
                "Content-Type": "application/json"
            }
        }).then(response => response.data).then(data => {
            setUserData(data.user);
        }).catch(error => {
            console.log(error.message);
        });
    }
    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <section id="id-main">
                {userData ?
                    <div className="card">
                        <img src={idBgWave} id='id-bg-wave' />
                        <div id='id-top-banner'>
                            <div id='id-pic'>
                                <img src={userData.image} id = 'id-pic-img'/>
                            </div>
                            <img src={dwlogo} id='id-dwlogo' />
                        </div>
                        <div id="id-bottom-banner">
                            <p>Name: {userData.name}</p>
                            <p>Email: {userData.email}</p>
                            <p>Designation: {userData.designation}</p>
                        </div>
                    </div> : <></>
                }

            </section>
        </>
    )
}

export default IDCard