import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const MultipleRandomButton = (props) => {
  const onRandomClick = (e) => {
    for (let i =0; i <= 3; i++){
    let max = props.valueOptions.length;
    let r = Math.round(Math.random() * (max - 0));
    if (props.selectedItem.includes(props.valueOptions[r])) {
    } else {
      props.setSelectedItem((oldArray) => [...oldArray, props.valueOptions[r]]);
    }
    let n1 = Math.round(Math.random() * (1 - 0));
    let x1 = Math.round(Math.random() * (max - 0));
    if (n1 === 0) {
      if (
        props.selectedItems.includes(props.itemOptions[r]) ||
        props.selectedItems.includes(props.itemOptions[x1])
      ) {
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.itemOptions[x1],
        ]);
      }
    }
    let n2 = Math.round(Math.random() * (1 - 0));
    let x2 = Math.round(Math.random() * (max - 0));
    if (n2 === 0) {
      if (
        props.selectedItems.includes(props.itemOptions[r]) ||
        props.selectedItems.includes(props.itemOptions[x1]) ||
        props.selectedItems.includes(props.itemOptions[x2])
      ) {
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.itemOptions[x2],
        ]);
      }
    }
    let n3 = Math.round(Math.random() * (1 - 0));
    let x3 = Math.round(Math.random() * (max - 0));
    if (n3 === 0) {
      if (
        props.selectedItems.includes(props.itemOptions[r]) ||
        props.selectedItems.includes(props.itemOptions[x1]) ||
        props.selectedItems.includes(props.itemOptions[x2]) ||
        props.selectedItems.includes(props.itemOptions[x3])
      ) {
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.itemOptions[x3],
        ]);
      }
    }
}
  };

  return (
    <>
      <button className={style.btnName} onClick={onRandomClick}>
        Random
      </button>
    </>
  );
};

export default MultipleRandomButton;
