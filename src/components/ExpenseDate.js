import "./ExpenseDate.css";
import { capitalizeFirstLetter } from "../myFunctions"; //My Added Stuff

function ExpenseDate(props) {
  const month = capitalizeFirstLetter(
    props.date.toLocaleString("pt-PT", { month: "long" })
  );
  const day = props.date.toLocaleString("pt-PT", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
