import React from "react";
import Card from "../UI/Card/Card";
import AppButton from "../UI/AppButton/AppButton";
import AppInput from "../UI/AppInput/AppInput";

import styles from "./Login.module.css";
const Login = () => {
  return (
    <Card className={styles['login-card']}>
      <AppInput lable="E-mail" type="email" />
      <AppInput lable="Password" type="password" />
      <AppButton lable='Login' />
    </Card>
  );
};

export default Login;
