import "./ExpenseItem.css";
import ExpensesDate from "./ExpensesDate";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-Item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
