import React from 'react'
import './index.css'

export default function Register() {
  return (
    <div>
      <h1>Registration</h1>
      <form action="#">
        <div className="registration-name">
          <input type="text" name="firstName" id="first-name" placeholder='First Name'/>
          <input type="text" name="middleName" id="middle-name" placeholder='Middle Name'/>
          <input type="text" name="lastName" id="last-name" placeholder='Last Name'/>
        </div>

        <div className="contact-details">
          <input type="text" name="email" id="emailId" placeholder='Email'/>
          <input type="tel" name="mobileNumber" id="contact-number" />
        </div>
      </form>
    </div>
  )
}