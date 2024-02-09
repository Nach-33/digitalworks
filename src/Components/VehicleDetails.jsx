import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios"

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
            console.log(data)
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
                <div>Vehicle Details</div>
                {vehicleData ?
                    <>
                        <p>{vehicleData.name}</p>
                        <p>{vehicleData.vehicle_number}</p>
                        <p>{vehicleData.brand}</p>
                        <p>{vehicleData.model}</p>
                        <p>{vehicleData.color}</p>
                        <img src={vehicleData.qr_code} alt="QR" />
                    </>
                    : <>No Vehicle</>}
            </section>
        </>
    )
}

export default VehicleDetails