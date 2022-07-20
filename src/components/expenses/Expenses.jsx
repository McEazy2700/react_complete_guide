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
    return ( 
    <div>
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount}
                    key={expense.id} />
                )
                })}
        </Card>
    </div>
     );
}

export default Expenses;