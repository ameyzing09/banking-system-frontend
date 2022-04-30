import React from 'react'
import './Update.css'

function Update() {
  return (
    
    <form className='update'>
      <label>Enter name:
        <input type="text" />
      </label>
      <label>Enter address:
        <input type="text" />
      </label>
      <label>Enter marital status:
        <input type="text" />
      </label>
      <label>Enter phone number:
        <input type="text" />
      </label>
      
      <input type="submit" className="submitBtn"/>
          
    </form>
)
  }

export default Update;