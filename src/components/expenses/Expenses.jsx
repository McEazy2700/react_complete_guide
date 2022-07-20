import React, { useState } from 'react'
import './Expenses.scss'
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

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

    return ( 
    <div>
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    </div>
     );
}

export default Expenses;