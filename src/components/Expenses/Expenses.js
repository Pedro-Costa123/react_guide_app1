import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [currentYear, setFilter] = useState("All");

  const filterChangeHandler = (year) => {
    setFilter(year);
  };

  const filteredArray = props.items.filter((item) => {
    if (currentYear === "All") {
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
        <ExpensesList items={filteredArray} />
      </Card>
    </div>
  );
};

export default Expenses;
