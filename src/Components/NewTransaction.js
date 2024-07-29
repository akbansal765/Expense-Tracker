import React from 'react';
import { useState } from 'react';
import { useContext } from 'react'
import context from '../Contexts/context'

const NewTransaction = () => {
  const context_2 = useContext(context);
  const {addTransaction} = context_2;

  const [transaction, setTransacion] = useState({text: '', amount: ''});

  const handleFormSubmit = (e) => {
      e.preventDefault();
      const text = transaction.text;
      const amount = transaction.amount;
      addTransaction(text, amount);
      // clearing the input fields
      setTransacion({text : '', amount : ''})
  }

  const onChange = (e) => {
    setTransacion({...transaction, [e.target.name] : e.target.value})
  }

  return (
    <div className='newTransaction_component'>
        <div className="newTransaction_header">Add new transaction</div>
        <div className='newTransaction_form'>
            <form className='form' onSubmit={handleFormSubmit}>
                <div>
                    <p>Text</p>
                    <input className='transaction_description' type="text" name='text' value={transaction.text} onChange={onChange} placeholder='Enter text...'/>
                </div>
                <div>
                    <p>Amount</p>
                    <p>(negative - expense, positive - income)</p>
                    <input className='newTransaction_amount' type="number" name='amount' value={transaction.amount} onChange={onChange} placeholder='Enter amount...'/>
                </div>
                <button className="addTransaction_btn">Add transaction</button>
            </form>
        </div>
    </div>
  )
}

export default NewTransaction
