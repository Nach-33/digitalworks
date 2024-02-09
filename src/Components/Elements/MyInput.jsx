import React from 'react'
import "./MyInput.css"

function MyInput(props) {
  return (
    <input type={props.type} name={props.field} placeholder={props.place} className='my-input'/>
  )
}

export default MyInput