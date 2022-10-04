import React, { useState } from "react";
import Card from "../GeneralUI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
      

      let [filteredYear, setFilteredYear] = useState(`All`);
      const filterChangeHandler = selectedYear => {
            setFilteredYear(selectedYear);
      };
      

      const filteredExpenses = props.items.filter(expense => {
            if(filteredYear !== 'All') {return expense.date.getFullYear().toString() === filteredYear};
            return <ExpensesList/>
      });



      return (
            <div>
                  <Card className="expenses">
                        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                        <ExpensesChart expenses={filteredExpenses}/>
                        <ExpensesList items={filteredExpenses}/>
                  </Card>
            </div>
      )

}

export default Expenses;



// 1. Yöntem

// return (
//       <div>
//             <Card className="expenses">
//                   <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//                   {filteredExpenses.length === 0 ? (<p className="no-expenses">No expenses found.</p>) : (filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)))}

//             </Card>
//       </div>
// )



//2. Yöntem: Ternary Operator ile yazım

// {filteredExpenses.length === 0 && <p>No expenses found.</p>}
// {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))}

//The part after && operator returns if the part before && is true.




// 3. yöntem

// let expensesContent = <p>No expenses found.</p>;

//if (filteredExpenses.length > 0) {
//      expensesContent = filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))
// }


// return (
//       <div>
//             <Card className="expenses">
//                   <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//                {expensesContent}
//             </Card>
//       </div>
// )