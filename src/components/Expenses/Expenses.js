import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [currentYear, setFilter] = useState("All");

  const filterChangeHandler = (year) => {
    setFilter(year);
  };

  const filteredArray = props.items.filter((item) => {
    if(currentYear === "All") {
      return true;
    }
    return item.date.getFullYear().toString() === currentYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={currentYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredArray.map((item) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            key={item.id}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
