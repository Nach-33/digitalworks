import React, { useEffect, useState } from 'react'
import "./ContactPage.css"
import { useParams } from "react-router-dom";
import axios from "axios"
import MyButton from './Elements/MyButton';


function Contact() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1YzVkZDU1YzU2ODJlODliMzZjNTcyNCIsIm5hbWUiOiJwcmVldCIsImVtYWlsIjoicHJlZXRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJwYXNzd29yZCIsInZlaGljbGVzIjpbXSwiX192IjowfSwiaWF0IjoxNzA3NDY2MDc0fQ._ZcSAmEqJ0BvXpYruguvoKIQCnyCeOyfBfFP3V6HOJE"

  const { vehicle_id } = useParams();
  const [vehicleData, setVehicleData] = useState(0);

  const SendMessage = async() => {

  }
  
  const populateVehicleData = async () => {
    const url = "http://localhost:4000/api/vehicle/" + vehicle_id;
    await axios.get(url, {
      headers: { token }
    }).then(response => response.data.vehicle).then(data => {
      setVehicleData(data)
      console.log(data)
    })
  }
  useEffect(() => {
    populateVehicleData();
  }, [])
  return (
    <>
      <section id='contact-main'>
        <h1 className='display-header'>Contact The Owner</h1>
        {vehicleData ?
          <>
            <div className='card' id='contact-vehicle-number'>{vehicleData.vehicle_number}</div>
            <div id='contact-vehicle-specs'>
              <p>{vehicleData.color}</p>
              <p>{vehicleData.brand}</p>
              <p>{vehicleData.model}</p>
            </div>
            <textarea id="contact-message" cols="70" rows="10">
            </textarea>
            <MyButton func = {SendMessage} text = "Send Mesagge" />
          </>
          :
          <></>}
      </section>
    </>
  )
}

export default Contact