import React from 'react'
import Transaction from './Transaction'
import { useContext } from 'react'
import context from '../Contexts/context'

const History = () => {
  
  const context_1 = useContext(context);
  const {transactions} = context_1;

  return (
    <div className='history_component'>
      <p className="history_header">
        History
      </p>
      <div className="transactions_box">
        {transactions.map((transactionObj) => {
          return <Transaction text = {transactionObj.text} amount = {transactionObj.amount} key={transactionObj.id} id={transactionObj.id}/>
        })}
       
      </div>
    </div>
  )
}

export default History
