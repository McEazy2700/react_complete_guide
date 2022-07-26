import React, { useState } from 'react'
import './ExpenseFilter.scss'

const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
  return (
    <div className='expenses-filter'>
        <div className="expenses-filter__control">
            <label htmlFor="years">Filter by year</label>
            <select value={props.selected} name="years" id="years" onChange={dropdownChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter