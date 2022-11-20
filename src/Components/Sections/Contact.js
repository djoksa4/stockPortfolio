import useInput from "../../hooks/use-input";
import classes from "./Contact.module.scss";

const validateText = (text) => text.trim().length > 1;
const validateEmail = (email) => email.includes("@") && email.length > 5;

const Contact = () => {
  // FORM INPUT VALIDATION HOOKS
  const {
    inputValue: nameInputValue,
    inputInvalid: nameInputInvalid,
    onChangeHandler: nameChangeHandler,
    onBlurHandler: nameBlurHandler,
    onFocusHandler: nameFocusHandler,
    isFocused: nameFocused,
    reset: nameReset,
  } = useInput(validateText);

  const {
    inputValue: emailInputValue,
    inputInvalid: emailInputInvalid,
    onChangeHandler: emailChangeHandler,
    onBlurHandler: emailBlurHandler,
    onFocusHandler: emailFocusHandler,
    isFocused: emailFocused,
    reset: emailReset,
  } = useInput(validateEmail);

  const {
    inputValue: messageInputValue,
    inputInvalid: messageInputInvalid,
    onChangeHandler: messageChangeHandler,
    onBlurHandler: messageBlurHandler,
    onFocusHandler: messageFocusHandler,
    isFocused: messageFocused,
    reset: messageReset,
  } = useInput(validateText);

  const formValid =
    emailInputValue.length > 1 &&
    !emailInputInvalid &&
    nameInputValue.length > 1 &&
    !nameInputInvalid &&
    messageInputValue.length > 1 &&
    !messageInputInvalid;

  // CLASS HELPERS
  let nameInputControlClasses;
  if (!nameFocused) {
    nameInputControlClasses = nameInputInvalid
      ? `${classes.contact__inputControl} ${classes["contact__inputControl--error"]}`
      : classes.contact__inputControl;
  } else {
    nameInputControlClasses = nameInputInvalid
      ? `${classes.contact__inputControl} ${classes["contact__inputControl--error"]} ${classes["contact__inputControl--focused"]}`
      : `${classes.contact__inputControl} ${classes["contact__inputControl--focused"]}`;
  }

  let emailInputControlClasses;
  if (!emailFocused) {
    emailInputControlClasses = emailInputInvalid
      ? `${classes.contact__inputControl} ${classes["contact__inputControl--error"]}`
      : classes.contact__inputControl;
  } else {
    emailInputControlClasses = emailInputInvalid
      ? `${classes.contact__inputControl} ${classes["contact__inputControl--error"]} ${classes["contact__inputControl--focused"]}`
      : `${classes.contact__inputControl} ${classes["contact__inputControl--focused"]}`;
  }

  let messageInputControlClasses;
  if (!messageFocused) {
    messageInputControlClasses = messageInputInvalid
      ? `${classes.contact__inputControl} 
      ${classes.contact__inputControlMessage} 
      ${classes["contact__inputControl--error"]}`
      : `${classes.contact__inputControl} 
      ${classes.contact__inputControlMessage}`;
  } else {
    messageInputControlClasses = messageInputInvalid
      ? `${classes.contact__inputControl} 
      ${classes.contact__inputControlMessage} 
      ${classes["contact__inputControl--error"]} 
      ${classes["contact__inputControl--focused"]}`
      : `
      ${classes.contact__inputControl}
      ${classes.contact__inputControlMessage} 
      ${classes["contact__inputControl--focused"]}`;
  }

  return (
    <div className={classes.contact}>
      <form
        className={classes.contact__form}
        autoComplete="off"
        action="https://formsubmit.co/f3049aa79f206be029ea80cedfb5cbb7"
        method="POST"
      >
        {/* HIDDEN inputs */}
        <input
          type="hidden"
          name="_next"
          value="https://djordjevodovar.netlify.app/"
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* NAME input */}
        <div className={nameInputControlClasses}>
          <label
            className={(nameFocused || nameInputValue) && classes.focused}
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            spellCheck="flase"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            onFocus={nameFocusHandler}
            value={nameInputValue}
          />
        </div>
        {nameInputInvalid && (
          <p className={classes.contact__errorMessage}>
            Name field must not be empty.
          </p>
        )}

        {/* EMAIL input */}
        <div className={emailInputControlClasses}>
          <label
            className={(emailFocused || emailInputValue) && classes.focused}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            spellCheck="flase"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onFocus={emailFocusHandler}
            value={emailInputValue}
          ></input>
        </div>
        {emailInputInvalid && (
          <p className={classes.contact__errorMessage}>
            Email field must not be empty and a valid email address must be
            entered.
          </p>
        )}

        {/* MESSAGE input */}
        <div className={messageInputControlClasses}>
          <label
            className={(messageFocused || messageInputValue) && classes.focused}
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            spellCheck="flase"
            onChange={messageChangeHandler}
            onBlur={messageBlurHandler}
            onFocus={messageFocusHandler}
            value={messageInputValue}
          ></textarea>
        </div>
        {messageInputInvalid && (
          <p className={classes.contact__errorMessage}>
            Message field must not be empty.
          </p>
        )}

        <button
          type="submit"
          disabled={!formValid}
          className={classes.contact__button}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
