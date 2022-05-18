import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Snackbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import AccountDetailsSpan from "../AccountDetailsSpan";

import "./Delete.css";

function Delete() {
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [accountNumberInput, setAccountNumberInput] = useState("");
  const [accountHeader, setAccountHeader] = useState([]);
  const [accountDetails, setAccountDetails] = useState({});
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [showConfirmBtn, setShowConfirmBtn] = useState(false);

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
      // setAccountNumberInput("");
      setAccountDetails(getAccountDetails.data.data);
      setShowConfirmBtn(true);
      console.log("getAccountDetails : ", accountDetails);
    } catch (error) {
      console.error("Error : ", error);
      setSnackBarMessage(error.response.data.error.message);
      setOpen(true);
      // setAccountNumberInput("");
      setShowConfirmBtn(false);
    }
    // setAccountDetails(await getAccountDetails.json());
    // setLoading(false)
  };

  const handleDeleteClick = async (e) => {
    // setShowConfirmationDialog(!showConfirmationDialog);
    e.preventDefault();
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this account?"
    // );
    console.log("confirm: ", showConfirmationDialog)
    setShowConfirmationDialog(true);
  };

  const handleConfirmDeleteClick = async (e) => {
    e.preventDefault();
    console.log("accountNumberInput : ", accountNumberInput);
    // if (confirmDelete === true) {
    try {
      const deleteAccountResponse = await axios.post(
        "http://localhost:8080/deleteAccount",
        {
          accountNumber: accountNumberInput,
        }
      );
      console.log("deleteAccountResponse : ", deleteAccountResponse);
      if (deleteAccountResponse.data.data.code === 200) {
        setSnackBarMessage(deleteAccountResponse.data.data.message);
        setOpen(true);
        setShowConfirmationDialog(false);
        setAccountNumberInput("");
        setShowConfirmBtn(false);
        setAccountDetails({});
        setAccountHeader([]);
      } else if (deleteAccountResponse.data.data.code === 400) {
        setSnackBarMessage(deleteAccountResponse.data.data.message);
        setOpen(true);
        setShowConfirmationDialog(false);
        setAccountNumberInput("");
        setShowConfirmBtn(false);
        setAccountDetails({});
        setAccountHeader([]);
      }
    } catch (err) {
      console.error("Error : ", err.response.data.error);
      setSnackBarMessage(err.response.data.error.message);
      setOpen(true);
      setShowConfirmationDialog(false);
      setAccountNumberInput("");
      setShowConfirmBtn(false);
      setAccountDetails({});
      setAccountHeader([]);
    }
  };

  return (
    <div className='delete-div'>
      <div>
        <Snackbar
          open={open}
          message={snackBarMessage}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
        />
      </div>
      <div className='search-account-div'>
        {/* <h1>Delete account number</h1> */}
        <input
          type='text'
          className='fetch-account-input-to-delete'
          onChange={handleFetchChange}
          value={accountNumberInput}
          placeholder='Please enter account number to delete'
        />
        <input
          type='submit'
          onClick={handleFetch}
          className='submit-btn'
          value='Show'
        />
        <input
          type='submit'
          onClick={() => navigate("/dashboard")}
          className='back-btn'
          value='Back'
        />
      </div>
      {accountHeader.length > 0 ? (
        accountHeader.map((head, index) => {
          const accountDetailsSpan = Object.keys(accountDetails);
          return (
            <div className='center-div search-account-result-div' key={index}>
              <AccountDetailsSpan
                header={head}
                accountDetailsSpan={accountDetailsSpan}
                accountDetails={accountDetails}
              />
            </div>
          );
        })
      ) : (
        <h3 className='no-account-found'>No account data</h3>
      )}
      {/* {showConfirmationDialog ? (
        <div
          // id={showConfirmationDialog ? "show" : "hide"}
          className='modal'
        >
          <h3 style={{ textAlign: "center" }}>
            Are you sure you want to delete this account?
          </h3>
          <div className='delete-confirmation-yes-no-div'>
            <input
              type='submit'
              onClick={handleConfirmDeleteClick}
              className='submit-btn'
              value='Yes'
            />
            <input type='submit' className='submit-btn' value='No' />
          </div>
        </div>
      ) : (
        ""
      )} */}
      <div
        id={showConfirmBtn ? "show" : "hide"}
        className='delete-confirm-btn-div'
      >
        <input
          type='submit'
          onClick={handleDeleteClick}
          className='submit-btn'
          value='Delete'
        />
        <input
          type='submit'
          onClick={() => {
            setAccountDetails({});
            setShowConfirmBtn(false);
            setAccountNumberInput("");
          }}
          className='back-btn'
          value='Cancel'
        />
      </div>
      <div>
        <Dialog
          open={showConfirmationDialog}
          onClose={() => setShowConfirmationDialog(false)}
        >
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <h3>Are you sure you want to delete this account?</h3>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setShowConfirmationDialog(false)}
              color='primary'
            >
              Cancel
            </Button>
            <Button onClick={handleConfirmDeleteClick} color='primary'>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Delete;
