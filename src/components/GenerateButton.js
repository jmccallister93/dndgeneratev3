import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
const GenerateButton = (props) => {
  //----PROPS NEEDED----
  //generateItems
  //setItem
  //itemOptions
  //numberItem
  //---PROPS NEEDED----
  const [multipleDisplay, setMultipleDisplay] = useState([]);
  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

  const onGenerate = (e) => {
    //DropDown Generate
    for (let i = 0; i < props.generateItems.length; i++) {
      let max = props.itemOptions[i].length - 1;
      let set = props.setItem[i];
      if (
        props.generateItems[i] === "" ||
        props.generateItems[i] === undefined
      ) {
        let r = Math.round(Math.random() * (max - 0));
        set(props.itemOptions[i][r].name);
      }
    }
    //DataTable generate
    for (let i = 0; i < props.selectedItems.length; i++) {
      let max = props.itemOptions[i].length - 1;
      let set = props.setSelectedItem[i];
      let r = Math.round(Math.random() * (max - 0));
      if (props.selectedItems[i].length <= 0) {
        if (props.selectedItem === undefined) {
          set((oldArray) => [...oldArray, props.itemOptions[i][r]]);
        }
        let n1 = Math.round(Math.random() * (1 - 0));
        let x1 = Math.round(Math.random() * (max - 0));
        if (n1 === 0) {
          if (
            props.selectedItems[i].includes(props.itemOptions[i][r]) ||
            props.selectedItems[i].includes(props.itemOptions[i][x1])
          ) {
          } else {
            set((oldArray) => [...oldArray, props.itemOptions[i][x1]]);
          }
        }
        let n2 = Math.round(Math.random() * (1 - 0));
        let x2 = Math.round(Math.random() * (max - 0));
        if (n2 === 0) {
          if (
            props.selectedItems[i].includes(props.itemOptions[i][r]) ||
            props.selectedItems[i].includes(props.itemOptions[i][x1]) ||
            props.selectedItems[i].includes(props.itemOptions[i][x2])
          ) {
          } else {
            set((oldArray) => [...oldArray, props.itemOptions[i][x2]]);
          }
        }
      }
    }

    //Number generate
    //Standard
    if (props.numberItem) {
      for (let i = 0; i < props.numberItem.length; i++) {
        if (props.numberItem[i] === "" || props.numberItem[i] === undefined) {
          let r = Math.floor(Math.random() * (2000 - 50) + 50);
          props.setNumberItem[i](r);
        }
      }
    }
    //Based on size
    if (props.numberItemHuge) {
      for (let i = 0; i < props.numberItemHuge.length; i++) {
        if (
          props.numberItemHuge[i] === "" ||
          props.numberItemHuge[i] === undefined
        ) {
          let r = Math.floor(Math.random() * (1000000 - 99999) + 99999);
          props.setNumberItem[i](r);
        }
      }
    }
    if (props.numberItemLarge) {
      for (let i = 0; i < props.numberItemLarge.length; i++) {
        if (
          props.numberItemLarge[i] === "" ||
          props.numberItemLarge[i] === undefined
        ) {
          let r = Math.floor(Math.random() * (100000 - 9999) + 9999);
          props.setNumberItem[i](r);
        }
      }
    }
    if (props.numberItemMedium) {
      for (let i = 0; i < props.numberItemMedium.length; i++) {
        if (
          props.numberItemMedium[i] === "" ||
          props.numberItemMedium[i] === undefined
        ) {
          let r = Math.floor(Math.random() * (10000 - 999) + 999);
          props.setNumberItem[i](r);
        }
      }
    }
    if (props.numberItemSmall) {
      for (let i = 0; i < props.numberItemSmall.length; i++) {
        if (
          props.numberItemSmall[i] === "" ||
          props.numberItemSmall[i] === undefined
        ) {
          let r = Math.floor(Math.random() * (1000 - 99) + 99);
          props.setNumberItem[i](r);
        }
      }
    }
    if (props.numberItemTiny) {
      for (let i = 0; i < props.numberItemTiny.length; i++) {
        if (
          props.numberItemTiny[i] === "" ||
          props.numberItemTiny[i] === undefined
        ) {
          let r = Math.floor(Math.random() * (120 - 0));
          props.setNumberItem[i](r);
        }
      }
    }

    //DataTable generate
  };

  // const onGenerate = (e) => {
  //   let max = props.itemOptions.length;
  //   let r = Math.round(Math.random() * (max - 0));
  //   if (props.singularItem === ""){
  //     props.setSingularItem(props.itemOptions[r].name)
  //   }

  // }
  return (
    <>
      <button onClick={onGenerate} className={style.btnGen}>
        Generate
      </button>
    </>
  );
};

export default GenerateButton;
