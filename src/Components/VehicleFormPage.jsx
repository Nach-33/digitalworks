import React from 'react'
import MyInput from './Elements/MyInput'
import MyButton from './Elements/MyButton'
import carIcon from '../Assets/car-icon.svg'
import './VehicleFormPage.css'

function VehicleFormPage() {
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
                    <MyInput type="text" field="name" place="NAME" />
                    <MyInput type="text" field="vehicle_number" place="VEHICLE NUMBER" />
                    <MyInput type="text" field="brand" place="BRAND" />
                    <MyInput type="text" field="model" place="MODEL" />
                    <MyInput type="text" field="color" place="COLOR" />
                    <MyButton />
                </form>
            </div>
        </section>
    )
}

export default VehicleFormPage