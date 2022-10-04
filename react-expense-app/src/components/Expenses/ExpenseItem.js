// Every word starts with a Capital in React file names(ExpenseItem.js)

// How is a component written in React?
// It's just a JS FUNCTION!

import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../GeneralUI/Card";
import "./ExpenseItem.css";


//Passing data via Props
const ExpenseItem = (props) => {
//const [title,setTitle] = useState(props.title);
//console.log("ExpenseItem evaluated by React!") //This will be seen whenever ExpenseItem component is called. So, for our example it will be called 4 times. But, after page load, it will be executed only when we run clickHandler function.

//const clickHandler= () => {
//setTitle("new title");
//console.log(title);
//}
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${Number(props.amount).toFixed(2)}</div>
            </div>
        </Card>
    );
    // <div className="expense-item">
    //     <div>March 28th 2021</div>
    //     <div className="expense-item__description">
    //         <h2>Car Insurance</h2>
    //         <div className="expense-item__price">$294.67</div>
    //     </div>
    // </div>

    //Yukarıdaki şekilde de yazılabilir.

    //<h2>{1+1}</h2>: 2 sonucunu vererek element içerisine yazar.ÖNEMLİ!

    //Format Document: Option+Shift+F

    /*
    <div>Date</div><div><h2>Title</h2></div>Amount<div></div>; 
    
    This code doesn't run as in one return we must have only one root element.So we should wrap all the elements with a div as done above.*/

    /*
    Regarding readibility we can cover the elements wih braclets().
    */
}

export default ExpenseItem;


//The toISOString() method returns a date object as a string, using the ISO standard.
//<div>{props.date.toISOString()}</div>



//<button onClick={clickHandler}>Delete</button>