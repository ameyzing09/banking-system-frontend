/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Loader } from "react-loader-spinner";
import "./CashDeposit.css";

function AccountDetailsSpan({ header, accountDetailsSpan, accountDetails }) {
  return accountDetailsSpan.map((key, index) => {
    if (header.key === key) {
      return (
        <div
          className='transaction-type-center-div search-account-result-div'
          key={index}
        >
          <span className='account-head-span'>{header.value}</span>
          <span className='account-text-span'>{accountDetails[key]}</span>
        </div>
      );
    }
  });
}

function CashDeposit() {
  // const [isLoading, setLoading] = useState(false);
  const [accountNumberInput, setAccountNumberInput] = useState("");
  const [accountHeader, setAccountHeader] = useState([]);
  const [accountDetails, setAccountDetails] = useState({});
  const [transactionType, setTransactionType] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const navigate = useNavigate();

  const handleFetchChange = (event) => {
    const { value } = event.target;
    setAccountNumberInput(value);
    // console.log("Account Number : ", accountNumberInput);
  };

  const handleFetch = async (e) => {
    // setLoading(true)
    e.preventDefault();
    try {
      const getAccountInfoHeader = await axios.get(
        "http://localhost:8080/getHeaders"
      );
      console.log("Account Header axios: ", getAccountInfoHeader.data.data);
      setAccountHeader(Array.from(getAccountInfoHeader.data.data));
      // console.log("Account Header : ", accountHeader);
      const getAccountDetails = await axios.post(
        "http://localhost:8080/getAccountInfo",
        { accountNumber: accountNumberInput }
      );
      setAccountNumberInput("");
      setAccountDetails(getAccountDetails.data.data);
      console.log("getAccountDetails : ", accountDetails);
    } catch (error) {
      console.error("Error : ", error);
      alert(error.response.data.error.message);
      setAccountNumberInput("");
    }
    // setAccountDetails(await getAccountDetails.json());
    // setLoading(false)
  };

  const handleTransactionChange = async (e) => {
    // e.preventDefault();
    setTransactionType(e.target.value);
  };

  const handleAmountChange = async (e) => {
    // e.preventDefault();
    if (e.target.value > 0 || e.target.value === "") {
      setAmountInput(e.target.value);
    } else {
      alert("Please enter valid amount");
    }
  };

  const handleAmountSubmit = async (e) => {
    setAmountInput(e.target.value);
    try {
      console.log("Account Number: ", accountDetails.accountNumber);
      console.log("Amount: ", amountInput);
      const transactionResponse = await axios.post(
        `http://localhost:8080/${transactionType}`,
        {
          accountNumber: accountDetails.account_no,
          amount: +amountInput,
        }
      );
      setAmountInput("");
      setTransactionType("");
      setAccountDetails("");
      console.log("Transaction Response : ", transactionResponse.data);
      if (transactionResponse.data.data.code === 200) {
        alert(transactionResponse.data.data.message);
      } else if (transactionResponse.data.error.code === 400) {
        alert(transactionResponse.data.error.message);
      }
    } catch (error) {
      console.error(
        `Error in ${transactionType}: `,
        error.response.data.error.message
      );
      alert(error.response.data.error.message);
      setAmountInput("");
      setTransactionType("");
      setAccountDetails("");
    }
  };
  return (
    <div>
      <div className='deposit-form-div'>
        <div className='transaction-type-center-div search-account-div'>
          <input
            type='text'
            name='accountNumber'
            onChange={handleFetchChange}
            value={accountNumberInput}
            id='fetch-account-input'
            className='search-account-no'
            placeholder='Enter account number to deposit'
          />

          <input
            type='submit'
            onClick={handleFetch}
            id='fetch-details-btn'
            placeholder='Fetch'
          />
        </div>
        {/* <div className="search-account-result-div"> */}
        {accountHeader.length > 0 ? (
          accountHeader.map((head) => {
            const accountDetailsSpan = Object.keys(accountDetails);
            return (
              <AccountDetailsSpan
                header={head}
                accountDetailsSpan={accountDetailsSpan}
                accountDetails={accountDetails}
              />
            );
          })
        ) : (
          <h1 className='no-account-found'>No account Found</h1>
        )}
        <div className='transaction-type-center-div'>
          <input
            type='radio'
            name='transactionType'
            id='selectTransaction'
            value='cashDeposit'
            checked={transactionType === "cashDeposit"}
            onChange={handleTransactionChange}
          />{" "}
          Deposit
          <input
            type='radio'
            name='transactionType'
            id='selectTransaction'
            value='cashWithdrawal'
            checked={transactionType === "cashWithdrawal"}
            onChange={handleTransactionChange}
          />{" "}
          Withdraw
        </div>
        <input
          type='number'
          onChange={handleAmountChange}
          className='amount-input'
          value={amountInput}
          placeholder='Amount to Deposit / Withdraw'
        />
        <div className='nav-btn'>
          <input
            type='submit'
            onClick={handleAmountSubmit}
            className='deposit-btn'
            value='Deposit/Withdraw'
          />
          <input
            type='submit'
            onClick={() => navigate("/dashboard")}
            className='back-btn'
            value='Back'
          />
          <input
            type='reset'
            onClick={() => {
              setAmountInput("");
              setTransactionType("");
              setAccountDetails("");
            }}
            value='Reset'
            className='reset-btn'
          />
        </div>
      </div>
    </div>
  );
}
export default CashDeposit;
