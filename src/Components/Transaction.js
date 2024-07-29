import React from 'react';
import { useContext } from 'react'
import context from '../Contexts/context'

const Transaction = ({text, amount, id}) => {
  
  const context_5 = useContext(context);
  const {delTransaction} = context_5

  const handleDeleteTransc = function(e){
    console.log(e.target.id)
    delTransaction(Number(e.target.id))
  }


  return (
    <>
    <div className='transaction_component'>
        <button onClick={handleDeleteTransc} className="del_transaction invisible_btn" id={id}>✖</button>
      <div className="transaction_details_box">
      <p>{text}</p>
      <div className='transaction_value_color_box'>
        <p className="transaction_value">{amount > 0 ? '+' + amount : amount}</p>
        <div className={`transaction_color_box ${amount > 0 ? 'deposit' : 'withdraw'}`}></div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Transaction
