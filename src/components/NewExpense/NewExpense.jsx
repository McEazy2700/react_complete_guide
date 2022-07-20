import React from 'react'
import './NewExpense.scss'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    console.log('from NewExpense', expenseData)
    props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense