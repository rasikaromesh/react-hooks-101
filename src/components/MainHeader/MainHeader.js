import React from "react";
import styles from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={styles["main-headder"]}>
      <h1>The Titile</h1>
      <Navigation isLoggedIn={props.isLoggedIn} />
    </header>
  );
};

export default MainHeader;
