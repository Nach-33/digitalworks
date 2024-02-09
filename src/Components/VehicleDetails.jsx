import React, { useState, useEffect } from 'react'
import "./VehicleDetails.css"
import { useParams } from "react-router-dom";
import axios from "axios"
import qrBg from "../Assets/qr-bg.svg"

function VehicleDetails() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YzVkZDU1YzU2ODJlODliMzZjNTcyNCIsIm5hbWUiOiJwcmVldCIsImVtYWlsIjoicHJlZXRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsInZlaGljbGVzIjpbXSwiX192IjowfSwiaWF0IjoxNzA3NDY2MDc0fQ._ZcSAmEqJ0BvXpYruguvoKIQCnyCeOyfBfFP3V6HOJE"
    const { vehicle_id } = useParams();
    const [vehicleData, setVehicleData] = useState({})

    const url = "http://localhost:4000/api/vehicle/" + vehicle_id;
    const getVehicleData = async () => {
        axios.get(url, {
            headers: {
                token,
                "Content-Type": "application/json"
            }
        }).then(response => response.data).then(data => {
            setVehicleData(data.vehicle);
        }).catch(error => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        getVehicleData();
    }, [])

    return (
        <>
            <section id="vehicle-details-main">
                <div><h1 className='display-header'>Download The QR</h1></div>
                {vehicleData ?
                    <>
                        <div id="vehicle-details-qr" className='card'>
                            <img src={qrBg} id="vehicle-details-qrbg"/>
                            <img src={vehicleData.qr_code} alt="QR" id='vehicle-details-qr-code'/>
                        </div>

                        <div id="vehicle-details-data" className='card'>
                            <h1 className='display-header'>Vehicle Details</h1>
                            <p className='display-header'>{vehicleData.name}</p>
                            <p className='display-header'>{vehicleData.vehicle_number}</p>
                            <p className='display-header'>{vehicleData.brand}</p>
                            <p className='display-header'>{vehicleData.model}</p>
                            <p className='display-header'>{vehicleData.color}</p>
                        </div>
                    </>
                    : <>No Vehicle</>}
            </section>
        </>
    )
}

export default VehicleDetails