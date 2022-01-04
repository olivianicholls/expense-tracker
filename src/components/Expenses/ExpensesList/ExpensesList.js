import React, { useState } from 'react';

import './ExpensesList.css';

import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";

const ExpensesList = (props) => {
  useState();

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterYearHandler = (year) => {
    setFilteredYear(year)
  }

  return (
    <Card className="c-expenses">
      <ExpenseFilter selected={filteredYear} onFilterYear={filterYearHandler}></ExpenseFilter>
      {props.items.map(item => 
      <ExpenseItem
        title={item.title}
        date={item.date}
        amount={item.amount}
      />)}
    </Card>
  );
}


export default ExpensesList;