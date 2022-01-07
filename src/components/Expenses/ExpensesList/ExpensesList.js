import React from 'react';

import './ExpensesList.css';

import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {

  if (props.items.length === 0) {
    return <h2 className="c-expenses-list__fallback">No items found.</h2>
  }

  return (
    <ul className='c-expenses-list'>
      {props.items.map(item => 
      <ExpenseItem
        key={item.id}
        title={item.title}
        date={item.date}
        amount={item.amount}
      />)}
    </ul>
  );
}


export default ExpensesList;