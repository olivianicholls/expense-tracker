import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-GB', {month: 'long'});
  const day = props.date.toLocaleString('en-GB', {day: '2-digit'});
  const year = props.date.getFullYear();

  return (
    <div className='c-expense-date'>
      <div className='c-expense-date__month'>{month}</div>        
      <div className='c-expense-date__day'>{day}</div>        
      <div className='c-expense-date__year'>{year}</div>        
    </div>  
  );
}


export default ExpenseDate;