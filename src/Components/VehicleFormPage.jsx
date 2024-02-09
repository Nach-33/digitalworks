import React, { useRef } from 'react'
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'
import carIcon from '../Assets/car-icon.svg'
import './VehicleFormPage.css'
import axios from "axios"

function VehicleFormPage() {
    const token = window.localStorage.getItem('token')
    const name = useRef(null);
    const brand = useRef(null);
    const model = useRef(null);
    const vehicle_number = useRef(null);
    const color = useRef(null);

    const handleAddVehicle = async (e) => {
        e.preventDefault();
        const url = "http://localhost:4000/api/vehicle";
        const response = await axios.post(url, {
            "vehicle_details": {
                "name": name.current.value,
                "vehicle_number": vehicle_number.current.value,
                "brand": brand.current.value,
                "model": model.current.value,
                "color": color.current.value,
            }
        }, {headers:{ token }})
        const vehicle = response.data.created_vehicle;
        if(vehicle){
            window.location.href = "/user"
        }
    }
    return (
        <section id='vehicle-form-main'>
            <div className='card' id='vehicle-form-card'>
                <h1 className='form-header'>Add Vehicle</h1>
                <form id='vehicle-form'>
                    <div id='vehicle-form-car-img-banner'>
                        <div id='vehicle-form-car-img-container' className='card'>
                            <img src={carIcon} id='vehicle-form-car-img' />
                        </div>
                    </div>
                    <MyInput type="text" field="name" place="NAME" reff={name} />
                    <MyInput type="text" field="vehicle_number" place="VEHICLE NUMBER" reff={vehicle_number} />
                    <MyInput type="text" field="brand" place="BRAND" reff={brand} />
                    <MyInput type="text" field="model" place="MODEL" reff={model} />
                    <MyInput type="text" field="color" place="COLOR" reff={color} />
                    <MyButton func={handleAddVehicle} />
                </form>
            </div>
        </section>
    )
}

export default VehicleFormPage