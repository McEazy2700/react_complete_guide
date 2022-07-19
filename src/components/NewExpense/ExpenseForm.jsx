import React from 'react'
import './ExpenseForm.scss'

const ExpenseForm = () => {
  return (
    <div>
        <form action="">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input id='title' type="text" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input id='date' type="date" min="2019-01-01" max="2022-12-31" />
                </div>
            </div>
            <div className='new-expense__action'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm