import React from "react";
import style from "./AppInput.module.css";

const AppInput = (props) => {
  const onChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <div className={style["form-control"]}>
      <label>{props.lable}</label>
      <div>
        <input
          value={props.value}
          onChange={onChangeHandler}
          type={props.type}
          onBlur={props.onBlur}
        />
        {props.error && <span>{props.error}</span>}
      </div>
    </div>
  );
};

export default AppInput;
