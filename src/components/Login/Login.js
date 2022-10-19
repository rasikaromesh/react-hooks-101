import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const timeOutRef = setTimeout(() => {
      setIsFormValied(
        enterdEmail.includes("@") && enterdPassword.trim().length > 6
      );
    }, 500);
    return () => {
      clearTimeout(timeOutRef);
    };
  }, [enterdEmail, enterdPassword]);

  const onEmailCahngeHandle = (value) => {
    setEnterdEmail(value);
  };

  const onPasswordChangeHandle = (value) => {
    setEnterdPassword(value);
  };

  const onClickedLogin = (event) => {
    event.preventDefault();

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
        <AppButton type="submit" lable="Login" disabled={!isFormValied} />
      </form>
    </Card>
  );
};

export default Login;
