import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
const GenerateButton = (props) => {
  //----PROPS NEEDED----
  //generateItems
  //setItem
  //itemOptions
  //---PROPS NEEDED----
  const [currentSet, setCurrentSet] = useState()

  const onGenerate = (e) => {
    for (let i = 0; i < props.generateItems.length; i++) {
      let max = props.itemOptions[i].length;
      let set = props.setItem[i]
      if (props.generateItems[i] === "" || props.generateItems[i] === undefined) {
        let r = Math.round(Math.random() * (10 - 0));
        set(props.itemOptions[i][r].name)
      }
    }
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
