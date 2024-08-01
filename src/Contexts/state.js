import React from 'react'
import { useState } from 'react'
import context from './context'

const State = (props) => {

  const income = 100;

  //getting data from local storage
  const data = localStorage.getItem('transactions');
  const data2 = JSON.parse(data);
  // console.log(data2)


  const initialTransactions = data2 ? data2 : []; // if data exist in local storage then return data2 otherwise an empty array

  const [transactions, setTransacions] = useState(initialTransactions);


/////////////  Adding New Transaction  /////////////////
const addTransaction = (text, amount, date) => {
    const newTransc = {
        "text" : text,
        "amount" : amount,
        "id": transactions.length + 1,
        "date": date
      }
    // add the transaction only when amount is positive and if amount is positive it should be greater than balance amount
    if(amount > 0){
      setTransacions(transactions.concat(newTransc));

      localStorage.setItem('transactions', JSON.stringify(transactions.concat(newTransc)));
    }
    if(amount < 0 && Math.abs(amount) <= balance){
      setTransacions(transactions.concat(newTransc));

      localStorage.setItem('transactions', JSON.stringify(transactions.concat(newTransc)));
    }
    if(amount < 0 && Math.abs(amount) > balance){
      alert('Balance cant be negative')
    }
}
/////////////// Deleting Transaction //////////////////
const delTransaction = (id) => {
  // filtering the transaction whose id does not match with delete button id passed in the function
  const newArray = transactions.filter((obj) => obj.id !== id);
  console.log(newArray);

  setTransacions(newArray);
  
  // setting the array in local storage
  localStorage.setItem('transactions', JSON.stringify(newArray));
}


/////////////  Calculating Transactions Sum ////////////
let totalExpenses = "";

const transactionSum = () => {

  const amountarray = transactions.map((obj)=>{
    return Number(obj.amount)
  });

  const expensesArray = amountarray.filter((amount)=>amount < 0);

  totalExpenses = expensesArray.reduce((acc, cur) => {
   return acc + cur;
  }, 0);
}
transactionSum();

/////////////  Calculating Remaing Balance for Your Balance Component  ////////////////////

const balance = income - (-totalExpenses);

  return (
    <div>
      <context.Provider value={{transactions, addTransaction, delTransaction, totalExpenses, income, balance}}>
        {props.children}
      </context.Provider>
    </div>
  )
}

export default State

