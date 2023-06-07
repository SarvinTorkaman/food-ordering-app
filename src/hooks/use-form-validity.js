import { useState } from "react";
import classes from '../components/Cart/Checkout.module.css'
const useFormValidity = (validate) => {
  const [fieldValue, setFieldValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const fieldValueIsValid = isTouched && validate(fieldValue);
  const fieldValueHasError = !fieldValueIsValid && isTouched;

  const fieldChangeHandler = (e) => {
    setFieldValue(e.target.value);
  };

  const fieldBlurHandler = () => {
    setIsTouched(true);
  };

  const fieldReset = () => {
    setFieldValue("");
    setIsTouched(false);
  };

  const fieldClassName = fieldValueHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;
  return {
    value: fieldValue,
    isValid: fieldValueIsValid,
    hasError: fieldValueHasError,
    fieldChangeHandler: fieldChangeHandler,
    fieldBlurHandler: fieldBlurHandler,
    fieldReset: fieldReset,
    fieldClassName: fieldClassName,
  };
};
export default useFormValidity;
