import React, { useState,useRef } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const[enterdValueIsValid,setEnteredValueIsValid]=useState(true);
  const amountInputRef = useRef();

  const submitFormHandler= (e)=>{
    e.preventDefault();
    const enteredAmount= amountInputRef.current.value;
    const enteredAmountNumber= +enteredAmount;

    if (enteredAmountNumber >5 || enteredAmount.trim().length ===0|| enteredAmountNumber<1){
      setEnteredValueIsValid(false);
      return;
    }
    props.onAddItemToCart(enteredAmountNumber)
  }
  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
        label="Amount"
      />
      <button>+ Add</button>
      {!enterdValueIsValid && <p>Please enter a valid amount to add</p>}
    </form>
  );
};
export default MealItemForm;
