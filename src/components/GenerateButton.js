import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import { Tooltip } from "primereact/tooltip";
import { Button } from "primereact/button";
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
  const [fetchError, setFetchError] = useState(null);

  //Set Multiple Display State
  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

  //Useeffect to set height, age, weight
  useEffect(() => {
    setHeightAgeWeight();
  }, [props.generateItems]);

  //DropDown Generate
  const dropDownGenerate = (e) => {
    if (props.generateItems) {
      for (let i = 0; i < props.generateItems.length; i++) {
        if (
          props.generateItems[i] === "" ||
          props.generateItems[i] === undefined
        ) {
          let r = Math.floor(Math.random() * props.itemOptions[i].length);

          // console.log(Math.max(...props.itemOptions))

          props.setItem[i](props.itemOptions[i][r].name);
        }
      }
    }
  };
  //Datatable Generate
  const dataTableGenerate = (e) => {
    if (props.selectedItems) {
      const allItemsSelected = props.selectedItems.every(
        (item) => item.length > 0
      );

      if (!allItemsSelected) {
        if (props.selectedItems) {
          const usedIndexes = [];
          for (let i = 0; i < props.selectedItems.length; i++) {
            if (props.selectedItems[i].length <= 0) {
              let n = Math.floor(Math.random() * (6 - 0));
              for (let x = 0; x <= n; x++) {
                let r = Math.floor(
                  Math.random() * props.selectedItemOptions[i].length
                );
                const option = props.selectedItemOptions[i][r];
                if (!usedIndexes.includes(r)) {
                  usedIndexes.push(r);
                  props.setSelectedItem[i]((oldArray) => [...oldArray, option]);
                }
              }
            }
          }
        }
      }
    }
  };
  //AbilityScore Stats Generate
  const abilityScoreGenerate = (e) => {
    if (props.statsItem) {
      for (let i = 0; i < props.statsItem.length; i++) {
        if (props.statsItem[i] === "" || props.statsItem[i] === undefined) {
          let r = Math.floor(Math.random() * (props.statsMax - props.statsMin));
          r = r.toString();
          props.setStatsItem[i](r);
        }
      }
    }
  };
  //Number Generate HP
  const numberGenerateHP = (e) => {
    if (props.hpItem) {
      for (let i = 0; i < props.hpItem.length; i++) {
        if (props.hpItem[i] === "" || props.hpItem[i] === undefined) {
          let r = Math.floor(
            Math.random() * (props.hpMax - props.hpMin) + props.hpMin
          );
          r = r.toString();
          props.setHpItem[i](r);
        }
      }
    }
  };
  //Number generate AC
  const numberGenerateAC = (e) => {
    if (props.acItem) {
      for (let i = 0; i < props.acItem.length; i++) {
        if (props.acItem[i] === "" || props.acItem[i] === undefined) {
          let r = Math.floor(
            Math.random() * (props.acMax - props.acMin) + props.acMin
          );
          r = r.toString();
          props.setAcItem[i](r);
        }
      }
    }
  };

  //Number Generate Speed randomnly
  const randomSpeedIndex = (speedItem, setSpeedItem, speedMin, speedMax) => {
    if (speedItem === undefined) {
      return;
    } else {
      if (speedItem.some((value) => value)) {
        return;
      }
      if (props.speedItem) {
        const indexArray = [0, 1, 2, 3, 4, 5];
        let numItems = Math.floor(Math.random() * (indexArray.length + 1));
        if (numItems === 0) {
          numItems = 1;
        }
        const selectedIndexes = [];

        for (let i = 0; i < numItems; i++) {
          const randomIndex = Math.floor(Math.random() * indexArray.length);
          selectedIndexes.push(indexArray[randomIndex]);
          indexArray.splice(randomIndex, 1);
        }

        for (let i = 0; i < speedItem.length; i++) {
          if (selectedIndexes.includes(i)) {
            const r =
              Math.floor(Math.random() * (speedMax - speedMin + 1)) + speedMin;
            const rMultipleOf5 = Math.floor(r / 5) * 5;
            setSpeedItem[i](rMultipleOf5.toString());
          } else {
            setSpeedItem[i]("");
          }
        }
      }
    }
  };

  //NPC Name Generate
  const npcNameGenerate = (e) => {
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

          let random = Math.floor(Math.random() * 3);

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

  const monsterNameGenerate = (e) => {
    if (props.monsterName) {
      for (let i = 0; i < props.monsterName.length; i++) {
        if (props.monsterName[i] === "" || props.monsterName[i] === undefined) {
          let a = Math.floor(Math.random() * 83);
          let adjective = [props.monsterNameOptions[i][a].adjective];
          let n = Math.floor(Math.random() * 69);
          let noun = [props.monsterNameOptions[i][n].noun];
          let an = Math.floor(Math.random() * 100);
          let animal = [props.monsterNameOptions[i][an].animal];

          let random = Math.round(Math.random() * 2);

          if (random === 0) {
            props.setMonsterName[0](
              adjective.toString().charAt(0).toUpperCase() +
                adjective.toString().slice(1) +
                " " +
                noun.toString().charAt(0).toUpperCase() +
                noun.toString().slice(1)
            );
          } else if (random === 1) {
            props.setMonsterName[0](
              adjective.toString().charAt(0).toUpperCase() +
                adjective.toString().slice(1) +
                " " +
                animal
            );
          } else {
            props.setMonsterName[0](
              adjective.toString().charAt(0).toUpperCase() +
                adjective.toString().slice(1) +
                " " +
                noun.toString().charAt(0).toUpperCase() +
                noun.toString().slice(1) +
                " " +
                animal
            );
          }
        }
      }
    }
  };

  //Pantheon Name Generate
  const pantheonNameGenerate = (e) => {
    if (props.pantheonName) {
      for (let i = 0; i < props.pantheonName.length; i++) {
        if (
          props.pantheonName[i] === "" ||
          props.pantheonName[i] === undefined
        ) {
          let a = Math.floor(Math.random() * 25);
          let adjective = [props.pantheonNameOptions[i][a].adjective];
          let n = Math.floor(Math.random() * 25);
          let noun = [props.pantheonNameOptions[i][n].noun];
          let a2 = Math.floor(Math.random() * 25);
          let adjective2 = [props.pantheonNameOptions[i][a2].adjective];

          let random = Math.round(Math.random() * 2);

          if (random === 0) {
            props.setPantheonName[0](adjective + " " + noun);
          } else if (random === 1) {
            props.setPantheonName[0](adjective + " " + adjective2 + " " + noun);
          } else {
            props.setPantheonName[0](adjective + " " + noun + " " + adjective2);
          }
        }
      }
    }
  };
  //Height Age Weight
  const setHeightAgeWeight = (e) => {
    if (props.generateItems[0] === "Aasimar") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Deep Gnome") {
      let ageMin = 20;
      let ageMax = 500;
      let heightFtMin = 3;
      let heightFtMax = 4;
      let weightMin = 35;
      let weightMax = 50;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Dragonborn") {
      let ageMin = 15;
      let ageMax = 80;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Duergar") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 4;
      let heightFtMax = 5;
      let weightMin = 150;
      let weightMax = 250;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Drow") {
      let ageMin = 20;
      let ageMax = 750;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Firbolg") {
      let ageMin = 20;
      let ageMax = 750;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Genasi") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Gnome") {
      let ageMin = 20;
      let ageMax = 500;
      let heightFtMin = 3;
      let heightFtMax = 4;
      let weightMin = 35;
      let weightMax = 50;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Goblin") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 4;
      let heightFtMax = 5;
      let weightMin = 150;
      let weightMax = 250;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Goliath") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Half-Elf") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Half-Orc") {
      let ageMin = 20;
      let ageMax = 75;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "High Elf") {
      let ageMin = 20;
      let ageMax = 750;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Hill Dwarf") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 4;
      let heightFtMax = 5;
      let weightMin = 150;
      let weightMax = 250;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Hobgoblin") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 4;
      let heightFtMax = 5;
      let weightMin = 120;
      let weightMax = 250;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Human") {
      let ageMin = 15;
      let ageMax = 80;
      let heightFtMin = 4;
      let heightFtMax = 6;
      let weightMin = 110;
      let weightMax = 200;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Kenku") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Kobold") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 3;
      let heightFtMax = 4;
      let weightMin = 35;
      let weightMax = 50;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Lightfoot Halfling") {
      let ageMin = 20;
      let ageMax = 150;
      let heightFtMin = 3;
      let heightFtMax = 4;
      let weightMin = 35;
      let weightMax = 50;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Lizardfolk") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Mountain Dwarf") {
      let ageMin = 20;
      let ageMax = 350;
      let heightFtMin = 4;
      let heightFtMax = 5;
      let weightMin = 150;
      let weightMax = 250;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Orc") {
      let ageMin = 20;
      let ageMax = 75;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Tabaxi") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Tiefling") {
      let ageMin = 18;
      let ageMax = 100;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Triton") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 6;
      let heightFtMax = 7;
      let weightMin = 175;
      let weightMax = 300;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Stout Halfling") {
      let ageMin = 20;
      let ageMax = 150;
      let heightFtMin = 3;
      let heightFtMax = 4;
      let weightMin = 35;
      let weightMax = 50;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Wood Elf") {
      let ageMin = 20;
      let ageMax = 750;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Yuan-Ti") {
      let ageMin = 20;
      let ageMax = 180;
      let heightFtMin = 5;
      let heightFtMax = 6;
      let weightMin = 90;
      let weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
  };
  //Age Generate
  const ageGenerate = (ageMax, ageMin) => {
    if (props.ageItem === "" || props.ageItem === undefined) {
      let r = Math.floor(Math.random() * (ageMax - ageMin) + ageMin);
      r = r.toString();
      props.setAgeItem(r);
    }
  };
  //Height Generate
  const heightGenerate = (heightFtMax, heightFtMin) => {
    if (props.heightFtItem === "" || props.heightFtItem === undefined) {
      let r = Math.floor(
        Math.random() * (heightFtMax - heightFtMin) + heightFtMin
      );
      r = r.toString();
      props.setHeightFtItem(r);
    }
    if (props.heightInItem === "" || props.heightInItem === undefined) {
      let r = Math.floor(Math.random() * 12);
      r = r.toString();
      props.setHeightInItem(r);
    }
  };
  //weight Generate
  const weightGenerate = (weightMax, weightMin) => {
    if (props.weightItem === "" || props.weightItem === undefined) {
      let r = Math.floor(Math.random() * (weightMax - weightMin) + weightMin);
      r = r.toString();
      props.setWeightItem(r);
    }
  };

  //General Number generate
  const numberGenerate = () => {
    if (props.numberItem) {
      for (let i = 0; i < props.numberItem.length; i++) {
        if (props.numberItem[i] === "" || props.numberItem[i] === undefined) {
          let r = Math.floor(
            Math.random() * (props.maxNumber[i] - props.minNumber[i]) +
              props.minNumber[i]
          );
          r = r.toString();
          props.setNumberItem[i](r);
        }
      }
    }
  };

  //Sense Generator
  const senseGenerate = () => {
    if (props.senseItem) {
      for (let i = 0; i < props.senseItem.length; i++) {
        if (props.senseItem[i] === "" || props.senseItem[i] === undefined) {
          let r = Math.floor(
            Math.floor(
              (Math.random() * (props.maxSense[i] - props.minSense[i])) / 5
            ) *
              5 +
              (props.minSense[i] / 5) * 5
          );
          r = r.toString();
          props.setSenseItem[i](r);
        }
      }
    }
  };

  const onGenerate = (e) => {
    dropDownGenerate();
    dataTableGenerate();
    abilityScoreGenerate();
    numberGenerateHP();
    numberGenerateAC();
    randomSpeedIndex(props.speedItem, props.setSpeedItem, 1, 120);
    // numberGenerateSpeed();
    npcNameGenerate();
    numberGenerate();
    monsterNameGenerate();
    senseGenerate();
    pantheonNameGenerate();
  };

  return (
    <>
      <button
        onClick={onGenerate}
        className={style.btnGen}
        title="Generate All Empty Fields"
      >
        Generate
      </button>
    </>
  );
};

export default GenerateButton;
