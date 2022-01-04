import React from 'react';
import ExpensesList from "./components/Expenses/ExpensesList/ExpensesList";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  const expensesList = [
    {
      id: 'e1',
      title: 'Item 1',
      date: new Date(2021, 5, 28),
      amount : '222'
    },
    {
      id: 'e2',
      title: 'Item 2',
      date: new Date(2021, 2, 28),
      amount : '123'
    },
    {
      id: 'e3',
      title: 'Item 3',
      date: new Date(2021, 9, 28),
      amount : '8000'
    }
  ];

  return (
    <div>
      <NewExpense></NewExpense>
      <ExpensesList items={expensesList}></ExpensesList>
    </div>
  );
}

export default App;
