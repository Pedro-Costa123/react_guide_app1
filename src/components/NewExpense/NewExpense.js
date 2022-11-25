import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    closeForm();
  };

  const startOpenedHandler = () => {
    setIsOpened(true);
  };

  const closeForm = () => {
    setIsOpened(false);
  };

  return (
    <div className="new-expense">
      {!isOpened && (
        <button onClick={startOpenedHandler}>Add New Expense</button>
      )}
      {isOpened && (
        <ExpenseForm
          closeFunction={closeForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
