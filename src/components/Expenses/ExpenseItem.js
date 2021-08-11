import "./ExpenseItem.css";
import React, { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHendler = () => {
    setTitle("Update!");
    console.log(title);
  };

  return (
    <Card className="expense-Item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHendler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
