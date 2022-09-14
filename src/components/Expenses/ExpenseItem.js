/* 
It is necessary that you import the functions and other files intended for use.
import function from file path.
*/
import React from "react";

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";
import "./ExpenseItem.css"


const ExpenseItem= (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__desciption">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

/* export your newly created components to make them reusable */
export default ExpenseItem;
