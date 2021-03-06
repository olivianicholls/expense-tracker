import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Item 1',
    date: new Date(2021, 5, 28),
    amount : '222'
  },
  {
    id: 'e2',
    title: 'Item 2',
    date: new Date(2022, 2, 28),
    amount : '123'
  },
  {
    id: 'e3',
    title: 'Item 3',
    date: new Date(2019, 9, 28),
    amount : '8000'
  }
];

const App = () => {
  useState();

  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [
        expense,
        ...prevExpenses      
      ]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
