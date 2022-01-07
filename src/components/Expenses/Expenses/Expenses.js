import React, { useState } from 'react';

import './Expenses.css';

import Card from "../../UI/Card/Card";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpenseFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseChart from "../ExpensesChart/ExpensesChart";

const Expenses = (props) => {
  useState();

  const [filteredYear, setFilteredYear] = useState('2020')

  const filterYearHandler = (year) => {
    setFilteredYear(year)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <Card className="c-expenses">
      <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
      <ExpenseFilter selected={filteredYear} onFilterYear={filterYearHandler}></ExpenseFilter>
      <ExpensesList items={filteredExpenses} filteredYear={filteredYear}></ExpensesList>
    </Card>
  );
}


export default Expenses;