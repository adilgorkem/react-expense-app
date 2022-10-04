import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState(``);
    const [enteredAmount, setEnteredAmount] = useState(``);
    const [enteredDate, setSelectedDate] = useState(``);
    // Yukarıdaki gibi yazmak yerine aşağıda obje şeklinde yazabiliriz.

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:``,
    //     enteredAmount:``,
    //     enteredDate:``
    // });


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        //OR(which is the correct way)

        //         setUserInput((previousState)=>{
        // return {...previousState,enteredTitle: event.target.value}
        // }) Safer way
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })
    }
    const dateChangeHandler = (event) => {
        setSelectedDate(event.target.value);
        //    setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        //    })
    }
    const setTodayHandler = () => {
        setSelectedDate(new Date().toISOString().slice(0,10))
    }



    // event.target.value always holds a string value, even if we input number(it holds the number as a string)

    const submitHandler = (event) => {

        event.preventDefault(); // Preventing the auto page reload.
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        //Clearing input
        setEnteredTitle(``);
        setEnteredAmount(``);
        setSelectedDate(``);

    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>       
            </div>
        </div>
        <div className="today-button" onClick={setTodayHandler}>Set Date to Today</div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>

};

export default ExpenseForm;