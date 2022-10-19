import React from "react";
import styles from "./AppButton.module.css";

const AppButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type ? props.type : "button"}
      className={props.className? `${styles.button} ${props.className}`: styles.button}
    >
      {props.lable ? props.lable : "Okay"}
    </button>
  );
};

export default AppButton;
