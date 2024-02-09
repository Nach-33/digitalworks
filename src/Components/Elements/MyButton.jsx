import React from 'react'
import './MyButton.css'

function MyButton(props) {
  return (
    <button className='btn'>
        {props.text || "Submit"}
    </button>
  )
}

export default MyButton