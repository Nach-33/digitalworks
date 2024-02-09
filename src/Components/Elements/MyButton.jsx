import React from 'react'
import './MyButton.css'

function MyButton(props) {
  return (
    <button className='btn' onClick={props.func || (() => { })}>
      {props.text || "Submit"}
    </button>
  )
}

export default MyButton