import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import CustomModifier from "./CustomModifier";

const MultipleRandomButtonMod = (props) => {
  const [modifier, setModifier] = useState([]);
  const [saveNames, setSaveNames] = useState([]);
  const [saveModMap, setSaveModMap] = useState([]);

  //Sets selectedItems to random number and passes to parent
  const handleSelectedItem = (e) => {
    props.setSelectedItem([]);
    let n = Math.round(Math.random() * (6 - 0));
    let usedIndexes = [];
    for (let i = 0; i <= n; i++) {
      let max = props.valueOptions.length - 1;
      let r = Math.round(Math.random() * (max - 0));
      if (usedIndexes.includes(r)) {
        continue;
      } else {
        props.setSelectedItem((oldArray) => [
          ...oldArray,
          props.valueOptions[r],
        ]);
        usedIndexes.push(r);
      }
    }

    if (props.mod) {
        props.mod.forEach((mod, index) => {
          let n = Math.round(Math.random() * (props.maxNumber - 1));
          props.setMod[index](n);
        });
      }

      if (props.senseMod) {
        props.senseMod.forEach((mod, index) => {
            let n = Math.floor(Math.random() * (props.maxNumber / 5 - 1)) * 5;
          props.setSenseMod[index](n);
        });
      }
  };

  //Fires click event on random button
  const onRandomClick = (e) => {
    handleSelectedItem(e);
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

export default MultipleRandomButtonMod;
