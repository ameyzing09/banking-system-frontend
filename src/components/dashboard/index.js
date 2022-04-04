import React from 'react'
import './index.css'

export default function Dashboard() {
  return (
    <div className='dashboard'>
    <button className='register'>Register</button>
    <button className='update'>Update</button>
    <button className='delete'>Delete</button>
    <button className='withdraw'>Cash Withdraw</button>
    <button className='deposit'>Cash Deposit</button>
    <button className='summary'>Summary</button>
    </div>
  )
}