import React from 'react'
import './index.css'

const clickIt = () => {
  console.log('clickIt')
  alert('You clicked it!!!')
}

export default function Login() {
  return (
    <div className='loginTab'>
      <label htmlFor="loginId">Login ID</label>
      <input id="loginId" type="text" />
      <label htmlFor="passwordTag">Password</label>
      <input id="passwordTag" type="password" />
      <button className='loginBtn' onClick={clickIt}>Login</button>
    </div>
  )
}