import React from 'react'
import './CashWithdraw.css'

function CashWithdraw() {
  return (
    <form className='withdraw'>
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
      <input type="submit" className="submitBtn"/>
          
    </form>
)
  }

export default CashWithdraw;