import React from "react";
import style from "./AppInput.module.css";

const AppInput = (props) => {
  const onChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className={style["form-control"]}>
      <label>{props.lable}</label>
      <input value={props.value} onChange={onChangeHandler} type={props.type} />
    </div>
  );
};

export default AppInput;
