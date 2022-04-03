import React from 'react'
import './index.css'

export default function Login() {
  return (
    <div className='loginTab'>
      <label htmlFor="loginId">Login ID</label>
      <input id="loginId" type="text" />
      <label htmlFor="passwordTag">Password</label>
      <input id="passwordTag" type="password" />
      <button className='loginBtn'>Login</button>
    </div>
  )
}