import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleRandomButton = (props) => {

  const onRandomClick = (e) => {
    let max = props.valueOptions.length;
    let r = Math.round(Math.random() * (max - 0));
    if (props.selectedItem.includes(props.valueOptions[r])) {
    } else {
      props.setSelectedItem((oldArray) => [...oldArray, props.valueOptions[r]]);
    }
  };

//   useEffect(() => {
//     props.setList(props.selectedItem);
//     console.log("Loaded")
//   }, [props.selectedItem]);


  return (
    <button className={style.btnName} onClick={onRandomClick}>
      Random
    </button>
  );
};

export default MultipleRandomButton;
