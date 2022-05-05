import React, { useState } from "react";
import { Loader } from "react-loader-spinner";
import "./CashDeposit.css";

function CashDeposit() {
  const [isLoading, setLoading] = useState(false);
  const [accountDetails, setAccountDetails] = useState({});

  const handleFetch = async (e) => {
    setLoading(true)
    const { accountNumber } = e.target.value;
    const getAccountDetails = await fetch('http://localhost:8080/getAccountInfo', {
      method: 'GET',
      body: JSON.stringify({ accountNumber }),
  });
    setAccountDetails(await getAccountDetails.json());
    setLoading(false)
  };
  return (
    <div>
      {isLoading ? (
        <Loader type='Circles' color='#00BFFF' height={80} width={80} />
      ) : (
        <div>
            {
              Object.keys(accountDetails).length > 0 ? (
            }
        </div>
      )}
      <form className='deposit-form-div'>
        <div className='search-account-div'>
          <input
            type='text'
            name='accountNumber'
            id='fetch-account-input'
            className='search-account-no'
            placeholder='Enter account number to deposit'
          />
          <input
            type='submit'
            onClick={handleFetch}
            id='fetch-details-btn'
            value='Fetch'
          />
        </div>
        <input
          type='number'
          className='amount-input'
          placeholder='Amount to deposit'
        />
        <div className='nav-btn'>
          <input type='submit' className='deposit-btn' value='Deposit' />
          <input type='submit' className='back-btn' value='Back' />
        </div>
      </form>
    </div>
  );
}

export default CashDeposit;
