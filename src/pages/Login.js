import React, { useReducer, useRef } from "react";
import classes from "./Login.module.css";

const usernameReducer = (state, action ) =>{

}

const Login = () => {
  const userName = useRef("");
  const password = useRef("");
 const [usernameState, dispatchUserName] = useReducer( usernameReducer, {isValid: false, value: ''})
  const submitHandler = (event) => {
    event.preventDefault();

    const userObj = {
      username: userName.current.value,
      password: password.current.value,
    };
    console.log(userObj);
  };

  const usernameChangeHandler = (event) => {};
  const validateUsernameHandler = (event) => {};
  const passwordChangeHandler = (event) => {};
  const validatePasswordHandler = (event) => {};

  return (
    <React.Fragment>
      <div
        className={`d-flex flex-row justify-content-center card ${classes.login}`}
      >
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="userName"></label>
            <input
              type="text"
              ref={userName}
              name="userName"
              className="form-control"
              onChange={usernameChangeHandler}
              onBlur={validateUsernameHandler}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              ref={password}
              name="password"
              className="form-control"
              onChange={passwordChangeHandler}
              onBlur={validatePasswordHandler}
            />
          </div>
          <button type="submit" className="btn btn-sm btn-primary">
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
