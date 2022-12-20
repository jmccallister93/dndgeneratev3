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
  const [ageMax, setAgeMax] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [heightFtMax, setHeightFtMax] = useState("");
  const [heightFtMin, setHeightFtMin] = useState("");
  const [weightMax, setWeightMax] = useState("");
  const [weightMin, setWeightMin] = useState("");

  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

  //TRY IT HERE MAYBE?
  const testFunc = (testVar) => {
    let testAge = 999
    setAgeMax(999)
    return console.log(testVar)
  }

 //DropDown Generate
 const dropDownGenerate = (e) => {
  if (props.generateItems) {
    for (let i = 0; i < props.generateItems.length; i++) {
      if (
        props.generateItems[i] === "" ||
        props.generateItems[i] === undefined
      ) {
        let r = Math.floor(Math.random() * props.itemOptions[i].length);
        return props.setItem[i](props.itemOptions[i][r].name);
      }
    }
  }
  testFunc(props.generateItems[0])
}
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
}
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
}
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
}
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
}
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
}
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
}

  
const onGenerate = (e) => {
    dropDownGenerate()
    dataTableGenerate()
    abilityScoreGenerate()
    numberGenerateHP()
    numberGenerateAC()
    numberGenerateSpeed()
    npcNameGenerate()


    if (props.generateItems[0] !== undefined) {
      for (let i = 0; i < props.itemOptions[0].length; i++) {
        if (props.generateItems[0] === "Aasimar") {
          props.setAgeMin(20);
          props.setAgeMax(180);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Aasimar");
        }
        if (props.generateItems[0] === "Deep Gnome") {
          props.setAgeMin(20);
          props.setAgeMax(500);
          props.setHeightFtMin(3);
          props.setHeightFtMax(4);
          props.setWeightMin(35);
          props.setWeightMax(50);
          console.log("Deep Gnome");
        }
        if (props.generateItems[0] === "Dragonborn") {
          props.setAgeMin(15);
          props.setAgeMax(80);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Dragonborn");
        }
        if (props.generateItems[0] === "Duergar") {
          props.setAgeMin(20);
          props.setAgeMax(350);
          props.setHeightFtMin(4);
          props.setHeightFtMax(5);
          props.setWeightMin(150);
          props.setWeightMax(250);
          console.log("Duergar");
        }
        if (props.generateItems[0] === "Drow") {
          props.setAgeMin(20);
          props.setAgeMax(750);
          props.setHeightFtMin(5);
          props.setHeightFtMax(6);
          props.setWeightMin(90);
          props.setWeightMax(150);
          console.log("Drow");
        }
        if (props.generateItems[0] === "Firbolg") {
          props.setAgeMin(20);
          props.setAgeMax(750);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Firbolg");
        }
        if (props.generateItems[0] === "Genasi") {
          props.setAgeMin(20);
          props.setAgeMax(180);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Genasi");
        }
        if (props.generateItems[0] === "Gnome") {
          props.setAgeMin(20);
          props.setAgeMax(500);
          props.setHeightFtMin(3);
          props.setHeightFtMax(4);
          props.setWeightMin(35);
          props.setWeightMax(50);
          console.log("Gnome");
        }
        if (props.generateItems[0] === "Goblin") {
          props.setAgeMin(20);
          props.setAgeMax(350);
          props.setHeightFtMin(4);
          props.setHeightFtMax(5);
          props.setWeightMin(150);
          props.setWeightMax(250);
          console.log("Goblin");
        }
        if (props.generateItems[0] === "Goliath") {
          props.setAgeMin(20);
          props.setAgeMax(180);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Goliath");
        }
        if (props.generateItems[0] === "Half-Elf") {
          props.setAgeMin(20);
          props.setAgeMax(180);
          props.setHeightFtMin(5);
          props.setHeightFtMax(6);
          props.setWeightMin(90);
          props.setWeightMax(150);
          console.log("Half-Elf");
        }
        if (props.generateItems[0] === "Half-Orc") {
          props.setAgeMin(20);
          props.setAgeMax(75);
          props.setHeightFtMin(6);
          props.setHeightFtMax(7);
          props.setWeightMin(175);
          props.setWeightMax(300);
          console.log("Half-Orc");
        }
        if (props.generateItems[0] === "High Elf") {
          props.setAgeMin(20);
          props.setAgeMax(750);
          props.setHeightFtMin(5);
          props.setHeightFtMax(6);
          props.setWeightMin(90);
          props.setWeightMax(150);
          console.log("High Elf");
        }
        if (props.generateItems[0] === "Hill Dwarf") {
          props.setAgeMin(20);
          props.setAgeMax(350);
          props.setHeightFtMin(4);
          props.setHeightFtMax(5);
          props.setWeightMin(150);
          props.setWeightMax(250);
          console.log("Hill Dwarf");
        }
        if (props.generateItems[0] === "Hobgoblin") {
          props.setAgeMin(20);
          props.setAgeMax(350);
          props.setHeightFtMin(4);
          props.setHeightFtMax(5);
          props.setWeightMin(120);
          props.setWeightMax(250);
          console.log("Hobgoblin");
        }
        if (props.generateItems[0] === "Human") {
          props.setAgeMin(15);
          props.setAgeMax(80);
          props.setHeightFtMin(4);
          props.setHeightFtMax(6);
          props.setWeightMin(110);
          props.setWeightMax(200);
          console.log("Human");
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
          return (
            setAgeMin(20),
            setAgeMax(150),
            setHeightFtMin(3),
            setHeightFtMax(4),
            setWeightMin(35),
            setWeightMax(50)
          );
          // props.setAgeMin(20);
          // props.setAgeMax(150);
          // props.setHeightFtMin(3);
          // props.setHeightFtMax(4);
          // props.setWeightMin(35);
          // props.setWeightMax(50);
        }
        if (props.generateItems[0] === "Wood Elf") {
          return (
            setAgeMin(20),
            setAgeMax(750),
            setHeightFtMin(5),
            setHeightFtMax(6),
            setWeightMin(90),
            setWeightMax(50)
          );
          // props.setAgeMin(20);
          // props.setAgeMax(750);
          // props.setHeightFtMin(5);
          // props.setHeightFtMax(6);
          // props.setWeightMin(90);
          // props.setWeightMax(150);
        }
        if (props.generateItems[0] === "Yuan-Ti") {
          setAgeMin(20);
          setAgeMax(180);
          setHeightFtMin(5);
          setHeightFtMax(6);
          setWeightMin(90);
          setWeightMax(150);
          // console.log(weightMax)
          // props.setAgeMin(20);
          // props.setAgeMax(180);
          // props.setHeightFtMin(5);
          // props.setHeightFtMax(6);
          // props.setWeightMin(90);
          // props.setWeightMax(150);
        }
      }
    }

    if (props.ageItem === "" || props.ageItem === undefined) {
      let r = Math.floor(Math.random() * (ageMax - ageMin) + ageMin);
      r = r.toString();
      props.setAgeItem(r);
    }
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
    if (props.weightItem === "" || props.weightItem === undefined) {
      let r = Math.floor(Math.random() * (weightMax - weightMin) + weightMin);
      r = r.toString();
      props.setWeightItem(r);
    }
    
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
