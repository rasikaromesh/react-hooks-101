import React, { useState } from "react";
import Card from "../UI/Card/Card";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";

import styles from "./Login.module.css";
const Login = (props) => {
  const [enterdEmail, setEnterdEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [enterdPassword, setEnterdPassword] = useState("");
  const [isPasswordValied, setIsPasswordValied] = useState(true);
  const [isFormValied, setIsFormValied] = useState(false);

  const onEmailCahngeHandle = (value) => {
    setEnterdEmail(value);
    setIsFormValied(value.includes("@") && enterdPassword.trim().length > 6);
  };

  const onPasswordChangeHandle = (value) => {
    setEnterdPassword(value);
    setIsFormValied(value.trim().length > 6 && enterdEmail.includes("@"));
  };

  const onClickedLogin = (event) => {
    event.preventDefault();
    console.log(isFormValied);
    if (!isFormValied) {
      validateEmailHandler();
      validatePasswordhandler();
    } else {
      props.onLoginHandle(enterdEmail, enterdPassword);
    }
  };

  const validateEmailHandler = () => {
    setIsEmailValid(enterdEmail.includes("@"));
  };

  const validatePasswordhandler = () => {
    setIsPasswordValied(enterdPassword.trim().length > 6);
  };

  return (
    <Card className={styles["login-card"]}>
      <form onSubmit={onClickedLogin}>
        <AppInput
          error={isEmailValid ? null : "Please enter valid email"}
          onChange={onEmailCahngeHandle}
          lable="E-mail"
          type="email"
          onBlur={validateEmailHandler}
        />
        <AppInput
          onChange={onPasswordChangeHandle}
          lable="Password"
          type="password"
          onBlur={validatePasswordhandler}
          error={isPasswordValied ? null : "Invalid password"}
        />
        <AppButton type="submit" lable="Login" />
      </form>
    </Card>
  );
};

export default Login;
