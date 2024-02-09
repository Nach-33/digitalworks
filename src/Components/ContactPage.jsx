import React from 'react'
import "./ContactPage.css"
import { useParams } from "react-router-dom";


function Contact() {
  const {vehicle_id} = useParams();
  return (
    <>
      <section id='contact-main'>
        <div>Contact {vehicle_id}</div>
        
      </section>
    </>
  )
}

export default Contact