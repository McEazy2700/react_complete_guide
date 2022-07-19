import React from 'react'
import './Expenses.scss'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card';

function Expenses(props) {
    let expenses = Array.from(props.expenses)
    return ( 
    <Card className='expenses'>
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
     );
}

export default Expenses;