import React, { useState } from 'react'
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

  const [formIsOpen, setFormIsOpen] = useState(false)

  const openExpenseForm = () => {
    setFormIsOpen(true)
  }

  const closeExpenseForm = () => {
    setFormIsOpen(false);
  }

  return (
    <div className='new-expense'>
      {!formIsOpen && <button onClick={openExpenseForm}>Add New Expense</button>}
      {formIsOpen && <ExpenseForm closeForm={closeExpenseForm} onSaveExpenseData={onSaveExpenseDataHandler} />}
    </div>
  )
}

export default NewExpense