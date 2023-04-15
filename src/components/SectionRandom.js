import { useEffect } from "react";
import style from "../stylesheets/PageStyle.module.scss";

const SectionRandom = (props) => {
  //---PROPS---
  //options
  //value
  //setValue
  //Useeffect to set height, age, weight
  //   useEffect(() => {
  //     setHeightAgeWeight();
  //   }, [props.generateItems[0]]);
  //   const setHeightAgeWeight = (e) => {
  //     if (props.generateItems[0] === "Aasimar") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Deep Gnome") {
  //       let ageMin = 20;
  //       let ageMax = 500;
  //       let heightFtMin = 3;
  //       let heightFtMax = 4;
  //       let weightMin = 35;
  //       let weightMax = 50;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Dragonborn") {
  //       let ageMin = 15;
  //       let ageMax = 80;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Duergar") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 4;
  //       let heightFtMax = 5;
  //       let weightMin = 150;
  //       let weightMax = 250;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Drow") {
  //       let ageMin = 20;
  //       let ageMax = 750;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Firbolg") {
  //       let ageMin = 20;
  //       let ageMax = 750;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Genasi") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Gnome") {
  //       let ageMin = 20;
  //       let ageMax = 500;
  //       let heightFtMin = 3;
  //       let heightFtMax = 4;
  //       let weightMin = 35;
  //       let weightMax = 50;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Goblin") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 4;
  //       let heightFtMax = 5;
  //       let weightMin = 150;
  //       let weightMax = 250;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Goliath") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMin, ageMax);
  //       heightGenerate(heightFtMin, heightFtMax);
  //       weightGenerate(weightMin, weightMax);
  //     }
  //     if (props.generateItems[0] === "Half-Elf") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Half-Orc") {
  //       let ageMin = 20;
  //       let ageMax = 75;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "High Elf") {
  //       let ageMin = 20;
  //       let ageMax = 750;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Hill Dwarf") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 4;
  //       let heightFtMax = 5;
  //       let weightMin = 150;
  //       let weightMax = 250;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Hobgoblin") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 4;
  //       let heightFtMax = 5;
  //       let weightMin = 120;
  //       let weightMax = 250;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Human") {
  //       let ageMin = 15;
  //       let ageMax = 80;
  //       let heightFtMin = 4;
  //       let heightFtMax = 6;
  //       let weightMin = 110;
  //       let weightMax = 200;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Kenku") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Kobold") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 3;
  //       let heightFtMax = 4;
  //       let weightMin = 35;
  //       let weightMax = 50;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Lightfoot Halfling") {
  //       let ageMin = 20;
  //       let ageMax = 150;
  //       let heightFtMin = 3;
  //       let heightFtMax = 4;
  //       let weightMin = 35;
  //       let weightMax = 50;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Lizardfolk") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Mountain Dwarf") {
  //       let ageMin = 20;
  //       let ageMax = 350;
  //       let heightFtMin = 4;
  //       let heightFtMax = 5;
  //       let weightMin = 150;
  //       let weightMax = 250;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Orc") {
  //       let ageMin = 20;
  //       let ageMax = 75;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Tabaxi") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Tiefling") {
  //       let ageMin = 18;
  //       let ageMax = 100;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Triton") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 6;
  //       let heightFtMax = 7;
  //       let weightMin = 175;
  //       let weightMax = 300;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Stout Halfling") {
  //       let ageMin = 20;
  //       let ageMax = 150;
  //       let heightFtMin = 3;
  //       let heightFtMax = 4;
  //       let weightMin = 35;
  //       let weightMax = 50;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Wood Elf") {
  //       let ageMin = 20;
  //       let ageMax = 750;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //     if (props.generateItems[0] === "Yuan-Ti") {
  //       let ageMin = 20;
  //       let ageMax = 180;
  //       let heightFtMin = 5;
  //       let heightFtMax = 6;
  //       let weightMin = 90;
  //       let weightMax = 150;
  //       ageGenerate(ageMax, ageMin);
  //       heightGenerate(heightFtMax, heightFtMin);
  //       weightGenerate(weightMax, weightMin);
  //     }
  //   };

  const onRandomClickSingle = (e) => {
    if (props.value) {
      for (let i = 0; i < props.value.length; i++) {
        let max = props.valueOptions[i].length - 1;
        let r = Math.floor(Math.random() * (max - 0));
        props.setValue[i](props.valueOptions[i][r].name);
      }
    }
  };

  const onRandomClickMultiple = (e) => {
    if (props.selectedValue) {
      for (let i = 0; i < props.selectedValue.length; i++) {
        props.setSelectedValue[i]([]);
        let n = Math.floor(Math.random() * (6 - 0));
        for (let x = 0; x <= n; x++) {
          let r = Math.floor(
            Math.random() * props.selectedValueOptions[i].length
          );
          props.setSelectedValue[i]((oldArray) => [
            ...oldArray,
            props.selectedValueOptions[i][r],
          ]);
        }
      }
    }
  };

  

  const abilityScoreGenerate = (e) => {
    if (props.statValue) {
      for (let i = 0; i < props.statValue.length; i++) {
        let r = Math.floor(Math.random() * (props.statMax - props.statMin));
        r = r.toString();
        props.setStatValue[i](r);
      }
    }
  };

  //Number Generate General
  const numberGenerate = (e) => {
    if (props.numberItem) {
      for (let i = 0; i < props.numberItem.length; i++) {
        let r = Math.floor(
          Math.random() * (props.numberMax[i] - props.numberMin[i]) +
            props.numberMin[i]
        );
        r = r.toString();
        props.setNumberItem[i](r);
      }
    }
  };
  //Number Generate HP
  const numberGenerateHP = (e) => {
    if (props.hpItem) {
      for (let i = 0; i < props.hpItem.length; i++) {
        let r = Math.floor(
          Math.random() * (props.hpMax[i] - props.hpMin[i]) + props.hpMin[i]
        );
        r = r.toString();
        props.setHpItem[i](r);
      }
    }
  };
  //Number generate AC
  const numberGenerateAC = (e) => {
    if (props.acItem) {
      for (let i = 0; i < props.acItem.length; i++) {
        let r = Math.floor(
          Math.random() * (props.acMax[i] - props.acMin[i]) + props.acMin[i]
        );
        r = r.toString();
        props.setAcItem[i](r);
      }
    }
  };


  //Number Generate Speed randomnly
  const randomSpeedIndex = (speedItem, setSpeedItem, min, max) => {
    if (speedItem) {
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
          const r = Math.floor(Math.random() * (max - min) + min) * 5;
          setSpeedItem[i](r.toString());
        } else {
          setSpeedItem[i]("");
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

  const onRandomClick = (e) => {
    onRandomClickSingle();
    onRandomClickMultiple();
    abilityScoreGenerate();
    numberGenerateHP();
    numberGenerateAC();
    randomSpeedIndex(props.speedItem, props.setSpeedItem, 1, 120);
    // numberGenerateSpeed();
    npcNameGenerate();
    numberGenerate();
  };

  return (
    <>
      <button
        className={style.diceBtn}
        onClick={onRandomClick}
        title="Generate Random Value"
      >
        <span className={style.diceBtnText}>Random</span>
      </button>
    </>
  );
};

export default SectionRandom;
