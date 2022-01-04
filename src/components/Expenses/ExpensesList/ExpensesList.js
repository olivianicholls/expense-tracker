import React from 'react';

import './ExpensesList.css';

import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpensesList = (props) => {

  return (
      <Card className="c-expenses">
      <ExpenseItem 
        title={props.items[0].title}
        date={props.items[0].date}
        amount={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[1].title}
        date={props.items[1].date}
        amount={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem 
        title={props.items[2].title}
        date={props.items[2].date}
        amount={props.items[2].amount}
      ></ExpenseItem>
    </Card>    
  );
}


export default ExpensesList;