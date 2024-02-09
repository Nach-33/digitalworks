import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import axios from "axios"
import MyButton from './Elements/MyButton';

function Dashboard() {
    const [userData, setUserData] = useState({ vehicles: [] });
    const [vehiclesData, setVehiclesData] = useState(<></>);
    const [navState, setNavState] = useState(0);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YzVkZDU1YzU2ODJlODliMzZjNTcyNCIsIm5hbWUiOiJwcmVldCIsImVtYWlsIjoicHJlZXRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsInZlaGljbGVzIjpbXSwiX192IjowfSwiaWF0IjoxNzA3NDY2MDc0fQ._ZcSAmEqJ0BvXpYruguvoKIQCnyCeOyfBfFP3V6HOJE"
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
        getUserData();
    }, [])

    const handleVehicleClick = (e) => {
        console.log(e.target.parentElement.id);
        window.location.href = "user/vehicle/" + e.target.parentElement.id;
    }

    const populateVehicles = async () => {

        let vehicles = []

        userData.vehicles.forEach(element => {
            const url = "http://localhost:4000/api/vehicle/" + element;
            const response = axios.get(url, {
                headers: { token }
            })
            vehicles = [...vehicles, response];
        });

        vehicles = await Promise.all(vehicles);

        vehicles = vehicles.map((element, ind) => {
            const thisVehicle = element.data.vehicle
            return (
                <div className="card" id={thisVehicle._id} key={ind}>
                    <p>Name: {thisVehicle.name}</p>
                    <p>{thisVehicle.vehicle_number}</p>
                    <span className='dashboard-car-specs'>
                        <p>{thisVehicle.color}</p>
                        <p>{thisVehicle.brand}</p>
                        <p>{thisVehicle.model}</p>
                    </span>
                    <MyButton func={handleVehicleClick} text="Get QR" />
                </div>
            )
        })

        setVehiclesData(vehicles)
    }
    useEffect(() => {
        populateVehicles();
    }, [userData])

    return (
        <section id="dashboard-main">
            <div id="dashboard-nav" className='card'>
                <div className={'nav-item ' + (navState ? "" : "active")} onClick={() => { setNavState(0) }}>My Vehicles</div>
                <div className={'nav-item ' + (navState ? "active" : "")} onClick={() => { setNavState(1) }}>Messages</div>
            </div>
            {
                navState ?
                    <>
                        <div className="card">
                            Messages
                        </div>

                    </>
                    :
                    <>
                        <div className="card">
                            {vehiclesData}
                            <div id='dashboard-add-container'>
                                <MyButton text="Add Vehicle" />
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}

export default Dashboard