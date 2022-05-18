/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Snackbar } from "@mui/material";
import "./ViewTransaction.css";
// import Dashboard from "../Dashboard/Dashboard";
// import TableContext from "../../services/tableContext";

function TableRow({ transactionArray }) {
  console.info("in TableRow: ", transactionArray);
  return (
    <tr className='view-transaction-row'>
      {transactionArray.map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  );
}

function ViewTransaction() {
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [searchInput, setSearchInput] = useState({ accountNumber: "" });
  const [transactionData, setTransactionData] = useState({
    accountNumber: "",
  });
  const [transactionHeading, setTransactionHeading] = useState([]);

  const handleSearchInputChange = (e) => {
    const { name, value } = e.target;
    setSearchInput({ ...searchInput, [name]: value });
    console.info("Fetching data for....", searchInput);
  };
  const handleKeyEvent = async (e) => {
    if (e.code === "Enter") {
      console.info("searchInput from key event ", searchInput);
      try {
        const transactionDetails = await axios.post(
          "http://localhost:8080/viewTransaction",
          searchInput
        );
        console.info("Transaction Details", transactionDetails.data.data);
        setTransactionData(
          Array.from(transactionDetails.data.data.transactionDetails)
        );
        setTransactionHeading(
          Array.from(transactionDetails.data.data.transactionHeading)
        );
        console.info(
          "Transaction Data Type: ",
          typeof transactionData.transactionHeading
        );
        setSearchInput({
          accountNumber: "",
        });
      } catch (error) {
        console.error(error);
        setSnackBarMessage("Error fetching data");
        setOpen(true);
        setTransactionData({
          accountNumber: "",
        });
        setTransactionHeading([]);
        setSearchInput({
          accountNumber: "",
        });
      }
    }
  };
  return (
    <div className='view-transaction'>
      <Snackbar
        open={open}
        message={snackBarMessage}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      />
      {/* <TableContext.Provider value={tableData}> */}
      {/* <Dashboard /> */}
      <div className='search-div'>
        <input
          type='number'
          id='search-input'
          placeholder='Enter account number to search'
          name='accountNumber'
          value={searchInput.accountNumber}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyEvent}
        />
        <button className='print-report-btn'>Print/Download</button>
      </div>
      <table className='view-transaction-table'>
        <thead className='view-transaction-head'>
          <tr className='view-transaction-row'>
            {transactionHeading.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
          {/* <TableRow transactionArray={transactionData.transactionHeading} /> */}
        </thead>
        <tbody className='view-transaction-body'>
          {transactionData && transactionData.length > 0 ? (
            transactionData.map((data, index) => {
              const transactionDetailsArray = Object.values(data);
              console.info(
                "transactionDetailsArray: ",
                transactionDetailsArray
              );
              return (
                <TableRow
                  key={index}
                  transactionArray={transactionDetailsArray}
                />
              );
              // console.info("transactionData.transactionDetails : ", data.transaction_type);
            })
          ) : (
            <tr>
              <td key={1} className='view-transaction-row'>
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Link className='summary-back-link' to='/dashboard'>
        <input
          type='submit'
          id='summary-back-btn'
          value='Back'
          className='backBtn'
        />
      </Link>
      {/* </TableContext.Provider> */}
    </div>
  );
}

export default ViewTransaction;
