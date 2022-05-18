/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";

import AccountDetailsSpan from '../AccountDetailsSpan';

import "./CashDeposit.css";

function CashDeposit() {
  // const [isLoading, setLoading] = useState(false);
  const [accountNumberInput, setAccountNumberInput] = useState("");
  const [accountHeader, setAccountHeader] = useState([]);
  const [accountDetails, setAccountDetails] = useState({});
  const [transactionType, setTransactionType] = useState("");
  const [amountInput, setAmountInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
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
      setErrorMessage(error.response.data.error.message);
      setOpen(true);
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
      setErrorMessage("Amount should be greater than 0");
      setOpen(true);
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
        setErrorMessage(transactionResponse.data.data.message);
        setOpen(true);
      } else if (transactionResponse.data.error.code === 400) {
        setErrorMessage(transactionResponse.data.error.message);
        setOpen(true);
      }
    } catch (error) {
      console.error(
        `Error in ${transactionType}: `,
        error.response.data.error.message
      );
      setErrorMessage(error.response.data.error.message);
      setOpen(true);
      setAmountInput("");
      setTransactionType("");
      setAccountDetails("");
    }
  };
  return (
    <div>
      <Snackbar
        message={errorMessage}
        autoHideDuration={4000}
        open={open}
        onClose={() => setOpen(false)}

      />
      <div className='deposit-form-div'>
        <div className='center-div search-account-div'>
          <input
            type='text'
            name='accountNumber'
            onChange={handleFetchChange}
            value={accountNumberInput}
            className='fetch-account-input'
            placeholder='Enter account number to deposit'
          />

          <input
            type='submit'
            onClick={handleFetch}
            className='fetch-details-btn'
            placeholder='Fetch'
          />
        </div>
        {/* <div className="search-account-result-div"> */}
        {accountHeader.length > 0 ? (
          accountHeader.map((head, index) => {
            const accountDetailsSpan = Object.keys(accountDetails);
            return (
              <div
            className='center-div search-account-result-div'
            key={index}
          >
              <AccountDetailsSpan
                header={head}
                accountDetailsSpan={accountDetailsSpan}
                accountDetails={accountDetails}
              />
            </div>
            );
          })
        ) : (
          <h1 className='no-account-found'>No account Found</h1>
        )}
        <div className='center-div search-account-div'>
          <input
            type='radio'
            name='transactionType'
            id='select-transaction'
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
            className='submit-btn'
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
