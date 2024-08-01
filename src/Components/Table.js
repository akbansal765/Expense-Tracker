import React, { useState } from 'react'
import { writeFile, utils } from 'xlsx';
import { useContext } from 'react'
import context from '../Contexts/context'
import Pagination from './Pagination';

const Table = () => {

  const context_5 = useContext(context);
  const {transactions} = context_5;

  const [filterArray, setFilterArray] = useState(transactions);
  
  // converting transactions data to the new data for exporting excel sheet - changing the new headers for the coloumns by changinf the obj keys
  const newData = transactions.map(obj => {
    let newobj = {
      Description : obj.text,
      Amount : '$' + Math.abs(obj.amount),
      Date : obj.date,
      Type : obj.amount > 0 ? 'Deposit' : 'Withdraw'
    }
    return newobj;
  });
  /////////////////////////////////////////////////////////

  const [curPage, setCurPage] = useState(1);
  // eslint-disable-next-line
  const [transactionsPerpage, setTransacionsPerPage] = useState(10);

  const lastIndex = curPage * transactionsPerpage;
  const firstIndex = lastIndex - transactionsPerpage;


  // const newTransactionsData = transactions.slice(firstIndex, lastIndex);
  const newTransactionsData = filterArray.slice(firstIndex, lastIndex);

  // const generateExcel = () => {
  //   // Create a new workbook and worksheet
  //   const ws = utils.table_to_sheet(document.getElementById('table-id'));
  //   const wb = utils.book_new();
  //   utils.book_append_sheet(wb, ws, 'Sheet1');

  //   // Generate Excel file and download it
  //   writeFile(wb, 'table-data.xlsx');
  // };

  const generateExcelFromJSON = () => {
    // Create a new workbook and worksheet
    const ws = utils.json_to_sheet(newData);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Sheet1');

    // Generate Excel file and download it
    writeFile(wb, 'json-data.xlsx');
  };

  const handleDropDown = function(e){
    console.log(e.target.value);

    const array_1 = transactions.filter((obj)=> obj.date.startsWith(e.target.value));
    console.log(array_1);

    setFilterArray(array_1);
  }

  return (
    <div className='table_component'>
            <table id="table-id" border="1">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Amount</th>
                        {/* <th>Date</th> */}
                        <th>{
                            <select onChange={handleDropDown}>
                              <option value="">All Results</option>
                              <option value="6">Jun</option>
                              <option value="7">July</option>
                              <option value="8">Aug</option>
                              <option value="9">Sept</option>
                           </select>
                          }</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {newTransactionsData.map((obj, i) => {
                      return <tr key={i}>
                                <td>{obj.text}</td>
                                <td>{Math.abs(obj.amount)}</td>
                                <td>{obj.date}</td>
                                <td>{obj.amount > 0 ? 'Deposit' : 'Withdraw'}</td>
                             </tr>
                    })}
                </tbody>
            </table>
            {/* <button onClick={generateExcel}>Export Table Data</button> */}
            <Pagination totalTransactions = {filterArray.length} transactionsPerpage = {transactionsPerpage} setCurPage={setCurPage} curPage = {curPage}/>
            <button className='export_btn' onClick={generateExcelFromJSON}>Export Statement</button>
        </div>
  )
}
export default Table
