import React, { useState } from 'react';

import './NewExpense.css';

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  useState();

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData
    }

    props.onAddExpense(expenseData)

    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
    <div className="c-new-expense">
      <button onClick={startEditingHandler}>Add new expense</button>
    </div>  
    )
  }


  return (
    <div className="c-new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
    </div>    
  );
}


export default NewExpense;