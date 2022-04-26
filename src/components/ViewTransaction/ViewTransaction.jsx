import React from 'react'
import './ViewTransaction.css'

function ViewTransaction() {
  return (
    <div className='ViewTransaction'>
        <table className='Transaction'>
            <thead className=''>
                <tr className=''>
                    <th>S No.</th>
                    <th>Date</th>
                    <th>Acc. Holders Name</th>
                    <th>Description</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Balance</th>
                    <th>Reciept</th>
                </tr>
            </thead>
            <tbody className='table-body'>
                <tr className='table-row'>
                    <td>1</td>
                    <td>02-04-2022</td>
                    <td>snehal bargaje</td>
                    <td>cash withdrawal</td>
                    <td>5000</td>
                    <td>0</td>
                    <td>6000</td>
                    <td><button>Print</button></td>
                </tr>
                <tr className='table-row'>
                    <td>2</td>
                    <td>02-04-2022</td>
                    <td>snehal bargaje</td>
                    <td>cash withdrawal</td>
                    <td>5000</td>
                    <td>0</td>
                    <td>6000</td>
                    <td><button>Print</button></td>
                </tr>
                <tr className='table-row'>
                    <td>3</td>
                    <td>02-04-2022</td>
                    <td>snehal bargaje</td>
                    <td>cash withdrawal</td>
                    <td>5000</td>
                    <td>0</td>
                    <td>6000</td>
                    <td><button>Print</button></td>
                </tr>
                <tr className='table-row'>
                    <td>4</td>
                    <td>02-04-2022</td>
                    <td>snehal bargaje</td>
                    <td>cash withdrawal</td>
                    <td>5000</td>
                    <td>0</td>
                    <td>6000</td>
                    <td><button>Print</button></td>
                </tr>
              </tbody>
        </table>
    </div>
  )
}

export default ViewTransaction