import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.scss';

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-item__falback">Found no expenses</h2>
    }
  return ( 
    <ul className='expenses-list'>
        {
        props.items.map((expense) => {return (
        <ExpenseItem title={expense.title}
        date={expense.date} amount={expense.amount} key={expense.id} />)})
        }
    </ul>
  )
}

export default ExpensesList