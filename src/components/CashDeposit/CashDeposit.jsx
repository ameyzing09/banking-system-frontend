import React from 'react'
import './CashDeposit.css'

function CashDeposit() {
  return (
    
    <form className='deposit'>
      <label>Enter account holder name:
        <input type="text" />
      </label>
      <label>Enter your Account no:
        <input type="text" />
      </label>
      <label>Enter amount in numbers:
        <input type="text" />
      </label>
      <label>Enter amount in words:
        <input type="text" />
      </label>
      <label>Enter number of notes:
        <input type="text" />
      </label>
      <input type="submit" className="submitBtn"/>
          
    </form>
)
  }

export default CashDeposit;