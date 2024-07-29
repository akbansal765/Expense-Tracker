import React from 'react';
import { useContext } from 'react'
import context from '../Contexts/context'

const IncomeExpense = () => {

  const context_3 = useContext(context);
  const {income, totalExpenses} = context_3;
 
  return (
    <div className='Income_Expense_comp'>
       <div className="income_box box">
        <p>INCOME</p>
        <p className="income_amount">{`$${income}.00`}</p>
       </div>
       <div className="expense_box box">
        <p>EXPENSE</p>
        <p className="expense_amount">{`$${-(totalExpenses)}.00`}</p>
       </div>
    </div>
  )
}

export default IncomeExpense
