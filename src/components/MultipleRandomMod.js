import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import CustomModifier from "./CustomModifier";

const MultipleRandomButtonMod = (props) => {
  const [modifier, setModifier] = useState([]);
  const [saveNames, setSaveNames] = useState([]);
  const [saveModMap, setSaveModMap] = useState([]);

  //Extract names from selectedSaves
  //   useEffect(() => {
  //     setSaveNames(
  //       props.value.map((save, index) => ({
  //         name: save.name,
  //         modifier: save.modifier,
  //         index: index,
  //       }))
  //     );
  //   }, [props.value]);

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
          let n = Math.round(Math.random() * (30 - 1));
          props.setMod[index](n);
        });
      }
  };

  useEffect(() => {
    const saveModMap = {
      Strength: props.strSave,
      Dexterity: props.dexSave,
      Constitution: props.conSave,
      Intelligence: props.intSave,
      Wisdom: props.wisSave,
      Charisma: props.chaSave,
    };
    setSaveNames(
      props.selectedItem.map((save) => {
        const modifier = saveModMap[save.name];
        return { name: save.name, modifier };
      })
    );
    // console.log(saveNames);
  }, [props.selectedItem]);

  const handleModifier = (e) => {};

  //Fires click event on random button
  const onRandomClick = (e) => {
    handleSelectedItem(e);
  };

  //   useEffect(() => {
  //     const saveModMap = {
  //       Strength: props.strSave,
  //       Dexterity: props.dexSave,
  //       Constitution: props.conSave,
  //       Intelligence: props.intSave,
  //       Wisdom: props.wisSave,
  //       Charisma: props.chaSave,
  //     };
  //     setSaveModMap(saveModMap);
  //     props.value(
  //       selectedSave.map((save) => {
  //         const modifier = saveModMap[save.name];
  //         return { name: save.name, modifier };
  //       })
  //     );
  //   }, [selectedSave]);

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
