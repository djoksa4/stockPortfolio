import { useState } from "react";

const useInput = (validationFn) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const valueValid = validationFn(inputValue);
  const inputInvalid = isTouched && !valueValid;

  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsTouched(true);
    setIsFocused(false);
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const reset = () => {
    setInputValue("");
    setIsTouched(false);
    setIsFocused(false);
  };

  return {
    inputValue,
    inputInvalid,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
    isFocused,
    reset,
  };
};

export default useInput;
