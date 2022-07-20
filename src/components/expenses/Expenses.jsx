import React, { useState } from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }
    let expenses = Array.from(props.expenses)
    const filterExpense = (expenses) => {
        let filteredExpenses = []
        for (const expense of expenses) {
        if (expense.date.getFullYear() == filteredYear) {
            filteredExpenses.push(expense)
        }}
        return filteredExpenses;
    }

    const filteredExpenses =filterExpense(expenses)

    let expensesContent = <p>No Expenses yet!</p>
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {return (
            <ExpenseItem title={expense.title}
            date={expense.date} amount={expense.amount} key={expense.id} />)})
    }
    return ( 
    <div>
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            { expensesContent }
        </Card>
    </div>
     );
}

export default Expenses;