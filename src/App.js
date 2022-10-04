import React, {useState} from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const InitialExpenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28)
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14)
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 450,
    date: new Date(2020, 5, 12)
  }
];

const App = () => {
  
const [expenses, setExpenses] = useState(InitialExpenses);


const addExpenseHandler = (expense) => {
setExpenses((previousExpenses) => {
  return [expense, ...previousExpenses];
});
}

  return (

    <div>
     <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

//JSX: It allows us to code like above which is normally can not be applied on js. JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.

//HTML in the end is XML.

export default App;

// React code is just Javascript code