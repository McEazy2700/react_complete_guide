import React, { useState } from 'react'
import './ExpenseForm.scss'

const ExpenseForm = (props) => {
    // Title state and changeHandler
    const [enteredTitle, setEnteredTitle] = useState('');
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    };

    // Amount state and changeHandler
    const [enteredAmount, setEnteredAmount] = useState('');
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    // Date state and changeHandler
    const [enteredDate, setEnteredDate] = useState('')
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    const closeForm = () => {
        props.closeForm()
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input id='title' type="text" value={enteredTitle} 
                    onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input id='amount' type="number" value={enteredAmount} 
                    min="0.01" step="0.01"  onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input id='date' type="date" value={enteredDate} 
                    min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__action'>
                <button onClick={closeForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    </div>
  )
}

export default ExpenseForm