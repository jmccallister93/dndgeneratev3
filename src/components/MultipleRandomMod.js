import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import CustomModifier from "./CustomModifier";

const MultipleRandomButtonMod = (props) => {
  const [modifier, setModifier] = useState([]);
  const [saves, setSaves] = useState([]);

  useEffect(() => {
    setSaves(
      props.value.map((save, index) => ({
        name: save.name,
        modifier: save.modifier,
        index: index,
      }))
    );
  }, [props.value]);

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

    if (props.value) {
        let newValue = [...props.value];
        newValue.forEach((value, index) => {
          let r = Math.floor(Math.random() * (30 - 0));
          newValue[index] = { ...value, modifier: r };
        });
        props.setValue(newValue);
    }
  };


  const onRandomClick = (e) => {
    handleSelectedItem(e);
  };

//   useEffect(() => {
//     console.log(props.selectedItem);
//   }, [props.selectedItem, props.value]);

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
