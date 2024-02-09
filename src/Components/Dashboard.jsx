import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import axios from "axios"
import MyButton from './Elements/MyButton';

function Dashboard() {
    const [userData, setUserData] = useState({ vehicles: [], messages: []});
    const [vehiclesData, setVehiclesData] = useState(<></>);
    const [messagesData, setMessagesData] = useState(<></>);
    const [navState, setNavState] = useState(0);

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

    const handleAddVehicle = () => {
        window.location.href = "/user/add/vehicle"
    }
    
    const handleVehicleClick = (e) => {
        console.log(e.target.parentElement.id);
        window.location.href = "user/vehicle/" + e.target.parentElement.id;
    }

    const populateVehicles = async () => {
        if(!userData) return;
        
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
            const thisMessage = element.data.vehicle
            return (
                <div className="card" id={thisMessage._id} key={ind}>
                    <p>Name: {thisMessage.name}</p>
                    <p>{thisMessage.vehicle_number}</p>
                    <span className='dashboard-car-specs'>
                        <p>{thisMessage.color}</p>
                        <p>{thisMessage.brand}</p>
                        <p>{thisMessage.model}</p>
                    </span>
                    <MyButton func={handleVehicleClick} text="Get QR" />
                </div>
            )
        })
        
        setVehiclesData(vehicles)
    }
    
    const populateMessages = async () => {
        if(!userData) return;
        let messages = []
        
        userData.messages.forEach(element => {
            const url = "http://localhost:4000/api/message/" + element;
            const response = axios.get(url, {
                headers: { token }
            })
            messages = [...messages, response];
        });

        messages = await Promise.all(messages);
        messages = messages.map((element, ind) => {
            const thisMessage = element.data.message_obj
            return (
                <div className="card" id={thisMessage._id} key={ind}>
                    <p>Message: {thisMessage.message_content}</p>
                </div>
            )
        })
        
        setMessagesData(messages)
    }

    useEffect(() => {
        getUserData();
    }, [])

    useEffect(() => {
        populateVehicles();
        populateMessages();
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
                            {messagesData}
                        </div>

                    </>
                    :
                    <>
                        <div className="card">
                            {vehiclesData}
                            <div id='dashboard-add-container'>
                                <MyButton text="Add Vehicle" func = {handleAddVehicle}/>
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}

export default Dashboard