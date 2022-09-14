import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Interior Decor",
    amount: 769.43,
    date: new Date(2022, 8, 20),
  },
  {
    id:"e2",
    title: "Gadgets",
    amount: 1851.02,
    date: new Date(2022, 1, 25),
  },
  {
    id:"e3",
    title: "Health Insurance",
    amount: 368.66,
    date: new Date(2022, 3, 11),
  },
  {
    id:"e4",
    title: "Real Estate",
    amount: 4500.00,
    date: new Date(2022, 5, 9),
  },
];


const App = () => {

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <h2> Expie is a web app built to help you stay <br></br>conscious of yearly expenses </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  ); 
};

export default App;
