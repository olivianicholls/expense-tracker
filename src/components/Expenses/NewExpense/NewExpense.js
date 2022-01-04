import React from 'react';

import './NewExpense.css';

import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {

  return (
    <div className="c-new-expense">
      <ExpenseForm></ExpenseForm>
    </div>    
  );
}


export default NewExpense;