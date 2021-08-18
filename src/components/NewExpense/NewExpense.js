import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [editNewExpense, setEditNewExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const editNewExpenseHandler = () => {
    setEditNewExpense(true);
  };

  const stopEditNewExpenseHandler = () => {
    setEditNewExpense(false);
  };
  return (
    <div className="new-expense">
      {!editNewExpense && ( //if false show buttn
        <button onClick={editNewExpenseHandler}>Add New Expense</button>
      )}
      {editNewExpense && ( //if true show a form
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditNewExpenseHandler}
        />
      )}
    </div>
  );
};
export default NewExpense;
