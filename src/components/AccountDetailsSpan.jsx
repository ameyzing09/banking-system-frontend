/* eslint-disable array-callback-return */
import "./CashDeposit/CashDeposit.css";

export default function AccountDetailsSpan({ header, accountDetailsSpan, accountDetails }) {
    return accountDetailsSpan.map((key, index) => {
      if (header.key === key) {
        return (
          <div
            className='search-account-result-div'
            key={index}
          >
            <span className='account-head-span'>{header.value}</span>
            <span className='account-text-span'>{accountDetails[key]}</span>
          </div>
        );
      }
    });
  }