import React, { useEffect, useRef, useState } from 'react'
import "./ContactPage.css"
import { useParams } from "react-router-dom";
import axios from "axios"
import MyButton from './Elements/MyButton';


function Contact() {
  const { vehicle_id } = useParams();
  const [vehicleData, setVehicleData] = useState(0);
  const message_content = useRef(null);

  const SendMessage = async() => {
    const url = "http://localhost:4000/api/message"
    const response = await axios.post(url,{
      "receiver": vehicleData.user_id,
      "message_content": message_content.current.value
    })
    const message_obj = response.data.message_obj;
    if(message_obj){
      window.alert("Message Sent");
    }
  }
  
  const populateVehicleData = async () => {
    const url = "http://localhost:4000/api/contact/" + vehicle_id;
    await axios.get(url, {
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
            <textarea id="contact-message" cols="70" rows="10" ref={message_content}>
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