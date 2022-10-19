import React from "react";
import AppButton from "../UI/AppButton/AppButton";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      {props.isLoggedIn && (
        <ul>
          <li>
            <a href="#">Users</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
          <li>
            <AppButton />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
