import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
const GenerateButton = (props) => {
  //----PROPS NEEDED----
  //generateItems
  //itemOptions
  //setItem
  //selectedItemOptions
  //selectedItem
  //setSelectedItem
  //numberItem
  //setNumberItem
  //maxNumber
  //minNumber
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
      let n = Math.round(Math.random() * (6 - 0));
      for (let x = 0; x <= n; x++) {
        //check if props.seleceteditems[i] already has the item
        let max = props.selectItemOptions[i].length - 1;
        let set = props.setSelectedItem[i];
        let r = Math.round(Math.random() * (max - 0));
        if (props.selectedItems[i].length <= 0) {
          if (props.selectedItem === undefined) {
            set((oldArray) => [...oldArray, props.selectItemOptions[i][r]]);
          }
        }
      }
    }

    //Number generate
    if (props.numberItem) {
      for (let i = 0; i < props.numberItem.length; i++) {
        if (props.numberItem[i] === "" || props.numberItem[i] === undefined) {
          let r = Math.floor(Math.random() * (props.maxNumber - props.minNumber));
          props.setNumberItem[i](r);
        }
      }
    }

    //Generate a random name for each props.nameItem in the array
    if (props.nameItem) {
      for (let i = 0; i < props.nameItem.length; i++) {
        if (props.nameItem[i] === "" || props.nameItem[i] === undefined) {
          let f = Math.floor(Math.random() * 208);
          let firstName = [props.nameItemOptions[i][f].first_name];
          let eA = Math.floor(Math.random() * 208);
          let epiphet_a = [props.nameItemOptions[i][eA].epithet_a];
          let eB = Math.floor(Math.random() * 208);
          let epiphet_b = [props.nameItemOptions[i][eB].epithet_b];
          let nA = Math.floor(Math.random() * 208);
          let noun_a = [props.nameItemOptions[i][nA].noun_a];
          let nB = Math.floor(Math.random() * 208);
          let noun_b = [props.nameItemOptions[i][nB].noun_b];
  
          let random = Math.round(Math.random() * 3);

          if (random === 0) {
            props.setNameItem[i](firstName + " " + epiphet_a + noun_a);
          } else if (random === 1) {
            props.setNameItem[i](firstName + " " + epiphet_a + noun_b);
          } else if (random === 2) {
            props.setNameItem[i](firstName + " " + epiphet_b + noun_a);
          } else if (random === 3) {
            props.setNnameItem[i](firstName + " " + epiphet_b + noun_b);
          }
        }
      }
    }
  };


  return (
    <>
      <button onClick={onGenerate} className={style.btnGen}>
        Generate
      </button>
    </>
  );
};

export default GenerateButton;
