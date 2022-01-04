import React, { useState } from 'react';

import './ExpenseItem.css';

import Card from "../../UI/Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <Card className="c-expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="c-expense-item__description">
        <h2>{props.title}</h2>
        <div className="c-expense-item__price">${props.amount}</div>
      </div>
    </Card>    
  );
}


export default ExpenseItem;