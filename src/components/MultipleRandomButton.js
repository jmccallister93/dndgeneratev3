import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleRandomButton = (props) => {
  const onRandomClick = (e) => {
    props.setSelectedItem([]);
    let n = Math.round(Math.random() * (6 - 0));
    for (let i = 0; i <= n; i++) {
      let max = props.valueOptions.length - 1;
      let r = Math.round(Math.random() * (max - 0));
      if (props.selectedItem.includes(props.valueOptions[r])) {
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.valueOptions[r],
        ]);
      }
    }
  };

  return (
    <>
      <button
        className={style.diceBtn}
        onClick={onRandomClick}
        title="Generate Random Values"
      >
        <span className={style.diceBtnText}>Random</span>
      </button>
    </>
  );
};

export default MultipleRandomButton;
