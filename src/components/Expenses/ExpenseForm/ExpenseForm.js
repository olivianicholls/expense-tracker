import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const clearInputs = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    clearInputs();
  }

  return (
    <form onSubmit={submitHandler} className="c-expense-form">
      <div className='c-expense-form__controls'>
        <div className='c-expense-form__control'>

          <label>Title</label>
          <input onChange={titleChangeHandler} name="title" type="text" value={enteredTitle}/>
        
        </div>
        <div className='c-expense-form__control'>
          <label>Amount</label>
          <input onChange={amountChangeHandler} name="amount" type="number" min="0.01" step="0.01" value={enteredAmount} />
        </div>
        <div className='c-expense-form__control'>
          <label>Date</label>
            <input onChange={dateChangeHandler} name="date" type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} />
        </div>
      </div>
      <div className='c-expense-form__actions'>
        <button type="submit">Add Expense</button>
      </div>
    </form>    
  );
}


export default ExpenseForm;