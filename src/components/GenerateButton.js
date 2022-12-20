import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import supabase from "../config/supabaseClient";
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
  // const [ageMax, setAgeMax] = useState("");
  // const [ageMin, setAgeMin] = useState("");
  // const [heightFtMax, setHeightFtMax] = useState("");
  // const [heightFtMin, setHeightFtMin] = useState("");
  // const [weightMax, setWeightMax] = useState("");
  // const [weightMin, setWeightMin] = useState("");

  //Set Multiple Display State
  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

  useEffect(() => {
    if (props.generateItems[0] === "Aasimar") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Deep Gnome") {
      props.setAgeMin(20);
      props.setAgeMax(500);
      props.setHeightFtMin(3);
      props.setHeightFtMax(4);
      props.setWeightMin(35);
      props.setWeightMax(50);
    }
    if (props.generateItems[0] === "Dragonborn") {
      props.setAgeMin(15);
      props.setAgeMax(80);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Duergar") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(4);
      props.setHeightFtMax(5);
      props.setWeightMin(150);
      props.setWeightMax(250);
    }
    if (props.generateItems[0] === "Drow") {
      props.setAgeMin(20);
      props.setAgeMax(750);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Firbolg") {
      props.setAgeMin(20);
      props.setAgeMax(750);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Genasi") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Gnome") {
      props.setAgeMin(20);
      props.setAgeMax(500);
      props.setHeightFtMin(3);
      props.setHeightFtMax(4);
      props.setWeightMin(35);
      props.setWeightMax(50);
    }
    if (props.generateItems[0] === "Goblin") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(4);
      props.setHeightFtMax(5);
      props.setWeightMin(150);
      props.setWeightMax(250);
    }
    if (props.generateItems[0] === "Goliath") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Half-Elf") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Half-Orc") {
      props.setAgeMin(20);
      props.setAgeMax(75);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "High Elf") {
      props.setAgeMin(20);
      props.setAgeMax(750);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Hill Dwarf") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(4);
      props.setHeightFtMax(5);
      props.setWeightMin(150);
      props.setWeightMax(250);
    }
    if (props.generateItems[0] === "Hobgoblin") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(4);
      props.setHeightFtMax(5);
      props.setWeightMin(120);
      props.setWeightMax(250);
    }
    if (props.generateItems[0] === "Human") {
      props.setAgeMin(15);
      props.setAgeMax(80);
      props.setHeightFtMin(4);
      props.setHeightFtMax(6);
      props.setWeightMin(110);
      props.setWeightMax(200);
    }
    if (props.generateItems[0] === "Kenku") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Kobold") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(3);
      props.setHeightFtMax(4);
      props.setWeightMin(35);
      props.setWeightMax(50);
    }
    if (props.generateItems[0] === "Lightfoot Halfling") {
      props.setAgeMin(20);
      props.setAgeMax(150);
      props.setHeightFtMin(3);
      props.setHeightFtMax(4);
      props.setWeightMin(35);
      props.setWeightMax(50);
    }
    if (props.generateItems[0] === "Lizardfolk") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Mountain Dwarf") {
      props.setAgeMin(20);
      props.setAgeMax(350);
      props.setHeightFtMin(4);
      props.setHeightFtMax(5);
      props.setWeightMin(150);
      props.setWeightMax(250);
    }
    if (props.generateItems[0] === "Orc") {
      props.setAgeMin(20);
      props.setAgeMax(75);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Tabaxi") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Tiefling") {
      props.setAgeMin(18);
      props.setAgeMax(100);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Triton") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(6);
      props.setHeightFtMax(7);
      props.setWeightMin(175);
      props.setWeightMax(300);
    }
    if (props.generateItems[0] === "Stout Halfling") {
      props.setAgeMin(20);
      props.setAgeMax(150);
      props.setHeightFtMin(3);
      props.setHeightFtMax(4);
      props.setWeightMin(35);
      props.setWeightMax(50);
    }
    if (props.generateItems[0] === "Wood Elf") {
      props.setAgeMin(20);
      props.setAgeMax(750);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
    if (props.generateItems[0] === "Yuan-Ti") {
      props.setAgeMin(20);
      props.setAgeMax(180);
      props.setHeightFtMin(5);
      props.setHeightFtMax(6);
      props.setWeightMin(90);
      props.setWeightMax(150);
    }
  }, [props.generateItems[0]]);

  //DropDown Generate
  const dropDownGenerate = (e) => {
    if (props.generateItems) {
      for (let i = 0; i < props.generateItems.length; i++) {
        if (
          props.generateItems[i] === "" ||
          props.generateItems[i] === undefined
        ) {
          let r = Math.floor(Math.random() * props.itemOptions[i].length);
          props.setItem[i](props.itemOptions[i][r].name);
        }
      }
    }
  };
  //Datatable Generate
  const dataTableGenerate = (e) => {
    //----PROPS----
    // selectedItemOptions={[itemOptions]}
    // selectedItems={[selectedItem]}
    // setSelectedItem={[setSelectedItem]}
    if (props.selectedItems) {
      for (let i = 0; i < props.selectedItems.length; i++) {
        if (props.selectedItems[i].length <= 0) {
          let n = Math.floor(Math.random() * (6 - 0));
          for (let x = 0; x <= n; x++) {
            let r = Math.round(
              Math.random() * props.selectedItemOptions[i].length
            );
            if (props.selectedItems[i].length <= 0) {
              props.setSelectedItem[i]((oldArray) => [
                ...oldArray,
                props.selectedItemOptions[i][r],
              ]);
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
  //number Generate Speed
  const numberGenerateSpeed = (e) => {
    if (props.speedItem) {
      for (let i = 0; i < props.speedItem.length; i++) {
        if (props.speedItem[i] === "" || props.speedItem[i] === undefined) {
          //set speed to a random number between the min and max that is a multiple of 5
          let r = Math.floor(
            Math.random() * (props.speedMax - props.speedMin) + props.speedMin
          );
          r = r * 5;
          r = r.toString();
          props.setSpeedItem[i](r);
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
  const setHeightAgeWeight = (e) => {
    let ageMax = 0;
    let ageMin = 0;
    let heightFtMax = 0;
    let heightFtMin = 0;
    let weightMax = 0;
    let weightMin = 0;

    if (props.generateItems[0] === "Aasimar") {
      ageMin = 20;
      ageMax = 180;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Deep Gnome") {
      ageMin = 20;
      ageMax = 500;
      heightFtMin = 3;
      heightFtMax = 4;
      weightMin = 35;
      weightMax = 50;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Dragonborn") {
      ageMin = 15;
      ageMax = 80;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Duergar") {
      ageMin = 20;
      ageMax = 350;
      heightFtMin = 4;
      heightFtMax = 5;
      weightMin = 150;
      weightMax = 250;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Drow") {
      ageMin = 20;
      ageMax = 750;
      heightFtMin = 5;
      heightFtMax = 6;
      weightMin = 90;
      weightMax = 150;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Firbolg") {
      ageMin = 20;
      ageMax = 750;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Genasi") {
      ageMin = 20;
      ageMax = 180;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Gnome") {
      ageMin = 20;
      ageMax = 500;
      heightFtMin = 3;
      heightFtMax = 4;
      weightMin = 35;
      weightMax = 50;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Goblin") {

      ageMin = 20;
      ageMax = 350;
      heightFtMin = 4;
      heightFtMax = 5;
      weightMin = 150;
      weightMax = 250;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Goliath") {
      ageMin = 20;
      ageMax = 180;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate( ageMin, ageMax);
      heightGenerate(heightFtMin, heightFtMax);
      weightGenerate(weightMin, weightMax);
    }
    if (props.generateItems[0] === "Half-Elf") {
      ageMin = 20;
      ageMax = 180;
      heightFtMin = 5;
      heightFtMax = 6;
      weightMin = 90;
      weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Half-Orc") {
      ageMin = 20;
      ageMax = 75;
      heightFtMin = 6;
      heightFtMax = 7;
      weightMin = 175;
      weightMax = 300;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "High Elf") {
      ageMin = 20;
      ageMax = 750;
      heightFtMin = 5;
      heightFtMax = 6;
      weightMin = 90;
      weightMax = 150;
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax, weightMin);
    }
    if (props.generateItems[0] === "Hill Dwarf") {
      ageMin = 20
      ageMax = 350
      heightFtMin = 4
      heightFtMax = 5
      weightMin = 150
      weightMax = 250
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Hobgoblin") {
      ageMin = 20
      ageMax = 350
      heightFtMin = 4
      heightFtMax = 5
      weightMin = 120
      weightMax = 250
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Human") {
      ageMin = 15
      ageMax = 80
      heightFtMin = 4
      heightFtMax = 6
      weightMin = 110
      weightMax = 200
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Kenku") {
      ageMin = 20
      ageMax = 180
      heightFtMin = 5
      heightFtMax = 6
      weightMin = 90
      weightMax = 150
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Kobold") {
      ageMin = 20
      ageMax = 350
      heightFtMin = 3
      heightFtMax = 4
      weightMin = 35
      weightMax = 50
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Lightfoot Halfling") {
      ageMin = 20
      ageMax = 150
      heightFtMin = 3
      heightFtMax = 4
      weightMin = 35
      weightMax = 50
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Lizardfolk") {
      ageMin = 20
      ageMax = 180
      heightFtMin = 6
      heightFtMax = 7
      weightMin = 175
      weightMax = 300
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Mountain Dwarf") {
      ageMin = 20
      ageMax = 350
      heightFtMin = 4
      heightFtMax = 5
      weightMin = 150
      weightMax = 250
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Orc") {
      ageMin = 20
      ageMax = 75
      heightFtMin = 6
      heightFtMax = 7
      weightMin = 175
      weightMax = 300
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Tabaxi") {
      ageMin = 20
      ageMax = 180
      heightFtMin = 5
      heightFtMax = 6
      weightMin = 90
      weightMax = 150
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Tiefling") {
      ageMin = 18
      ageMax = 100
      heightFtMin = 5
      heightFtMax = 6
      weightMin = 90
      weightMax = 150
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Triton") {
      ageMin = 20
      ageMax = 180
      heightFtMin = 6
      heightFtMax = 7
      weightMin = 175
      weightMax = 300
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Stout Halfling") {
      ageMin = 20
      ageMax = 150
      heightFtMin = 3
      heightFtMax = 4
      weightMin = 35
      weightMax = 50
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Wood Elf") {
      ageMin = 20
      ageMax = 750
      heightFtMin = 5
      heightFtMax = 6
      weightMin = 90
      weightMax = 150
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
    if (props.generateItems[0] === "Yuan-Ti") {
      ageMin = 20
      ageMax = 180
      heightFtMin = 5
      heightFtMax = 6
      weightMin = 90
      weightMax = 150
      ageGenerate(ageMax, ageMin);
      heightGenerate(heightFtMax, heightFtMin);
      weightGenerate(weightMax,weightMin);
    }
  };
  //Age Generate
  const ageGenerate = (ageMax, ageMin) => {
    let r = Math.floor(Math.random() * (ageMax - ageMin) + ageMin);
    r = r.toString();
    props.setAgeItem(r);
  };
  //Height Generate
  const heightGenerate = (heightFtMax, heightFtMin) => {
    let r = Math.floor(Math.random() * (heightFtMax - heightFtMin) + heightFtMin);
    r = r.toString();
    props.setHeightFtItem(r);

    let r1 = Math.floor(Math.random() * 12);
    r1 = r1.toString();
    props.setHeightInItem(r1);
  };
  //weight Generate
  const weightGenerate = (weightMax,weightMin) => {
    let r = Math.floor(
      Math.random() * (weightMax - weightMin) + weightMin
    );
    r = r.toString();
    props.setWeightItem(r);
  };

  const onGenerate = (e) => {
    dropDownGenerate();
    dataTableGenerate();
    abilityScoreGenerate();
    numberGenerateHP();
    numberGenerateAC();
    numberGenerateSpeed();
    npcNameGenerate();
    setHeightAgeWeight();

    // ageGenerate();
    // heightGenerate();
    // weightGenerate();
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
