// import REACT,  {useRef} from 'react';
import useFormValidity from "../../hooks/use-form-validity";
import classes from "./Checkout.module.css";
const notEmpty = (value) => value.trim() !== "";
const hasFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  //  const nameInputRef= useRef()
  //  const streetInputRef= useRef()
  //  const postalInputRef= useRef()
  //  const cityInputRef=useRef()

  const {
    value: nameInput,
    isValid: nameInputIsValid,
    hasError: nameInputHasError,
    fieldChangeHandler: nameInputChangeHandler,
    fieldBlurHandler: nameInputBlurHandler,
    fieldReset: nameInputResetHandler,
    fieldClassName: nameInputClassName,
  } = useFormValidity(notEmpty);
  const {
    value: streetInput,
    isValid: streetInputIsValid,
    hasError: streetInputHasError,
    fieldChangeHandler: streetInputChangeHandler,
    fieldBlurHandler: streetInputBlurHandler,
    fieldReset: streetInputResetHandler,
    fieldClassName: streetInputClassName,
  } = useFormValidity(notEmpty);
  const {
    value: postalInput,
    isValid: postalInputIsValid,
    hasError: postalInputHasError,
    fieldChangeHandler: postalInputChangeHandler,
    fieldBlurHandler: postalInputBlurHandler,
    fieldReset: postalInputResetHandler,
    fieldClassName: postalInputClassName,
  } = useFormValidity(hasFiveChars);
  const {
    value: cityInput,
    isValid: cityInputIsValid,
    hasError: cityInputHasError,
    fieldChangeHandler: cityInputChangeHandler,
    fieldBlurHandler: cityInputBlurHandler,
    fieldReset: cityInputResetHandler,
    fieldClassName: cityInputClassName,
  } = useFormValidity(notEmpty);
  let formIsValid = false;
  if (
    nameInputIsValid &&
    streetInputIsValid &&
    postalInputIsValid &&
    cityInputIsValid
  ) {
    formIsValid = true;
  }

  const orderSubmitHandler =  (e) => {
    e.preventDefault();

    // const enteredName = nameInputRef.current.value
    // const enteredStreet = nameInputRef.current.value
    // const enteredPostal = nameInputRef.current.value
    // const enteredCity = nameInputRef.current.value

    if (!formIsValid) {
      return;
    }

    props.onConfirm({name:nameInput, street:streetInput, postal:postalInput,city:cityInput})


    nameInputResetHandler();
    streetInputResetHandler();
    postalInputResetHandler(); 
    cityInputResetHandler();
  };
  return (
    <form className={classes.form} onSubmit={orderSubmitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Name</label>

        <input
          id="name"
          type="text"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={nameInput}
        ></input>
        {nameInputHasError && (
          <div className={classes.invalid}>
            <p>Enter a valid Name</p>
          </div>
        )}
      </div>
      <div className={streetInputClassName}>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          onChange={streetInputChangeHandler}
          onBlur={streetInputBlurHandler}
          value={streetInput}
        ></input>
        {streetInputHasError && (
          <div className={classes.invalid}>
            <p>Enter a valid Street</p>
          </div>
        )}
      </div>{" "}
      <div className={postalInputClassName}>
        {" "}
        <label htmlFor="postal">Postal code</label>
        <input
          id="postal"
          type="text"
          onChange={postalInputChangeHandler}
          onBlur={postalInputBlurHandler}
          value={postalInput}
        ></input>
        {postalInputHasError && (
          <div className={classes.invalid}>
            <p>Enter a valid Postal code</p>
          </div>
        )}
      </div>
      <div className={cityInputClassName}>
        {" "}
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          onChange={cityInputChangeHandler}
          onBlur={cityInputBlurHandler}
          value={cityInput}
        ></input>
        {cityInputHasError && (
          <div className={classes.invalid}>
            <p>Enter a valid city</p>
          </div>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button> Confirm </button>
      </div>
    </form>
  );
};
export default Checkout;
