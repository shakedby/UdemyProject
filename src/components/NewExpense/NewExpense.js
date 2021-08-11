import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
      {/* <button className="new-expense">Add Expense</button> */}
    </div>
  );
};
export default NewExpense;
