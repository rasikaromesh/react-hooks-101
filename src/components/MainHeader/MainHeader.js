import React from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={styles["main-headder"]}>
      <h1>The Titile</h1>
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout}/>
    </header>
  );
};

export default MainHeader;
