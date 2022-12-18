import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import supabase from "../config/supabaseClient";
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

  useEffect(() => {
    if (props.selectedItem === undefined) {
    } else if (props.selectedItem.length >= 0) {
      setMultipleDisplay(props.selectedItem);
    }
  }, [props.selectedItem]);

  const onGenerate = (e) => {
    //DropDown Generate
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
    //----FOUND ERROR----
    // if (props.itemOptions[i][r] === undefined) {
    //   console.log(props.itemOptions[i])
    //   console.log(r)
    // }

    //DataTable generate
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

    //Number generate stats
    if (props.statsItem) {
      for (let i = 0; i < props.statsItem.length; i++) {
        if (props.statsItem[i] === "" || props.statsItem[i] === undefined) {
          let r = Math.floor(Math.random() * (props.statsMax - props.statsMin));
          r = r.toString();
          props.setStatsItem[i](r);
        }
      }
    }
    //Number generate Age
    if (props.ageItem) {
      for (let i = 0; i < props.ageItem.length; i++) {
        if (props.ageItem[i] === "" || props.ageItem[i] === undefined) {
          let r = Math.floor(Math.random() * (props.ageMax - props.ageMin));
          r = r.toString();
          props.setAgeItem[i](r);
        }
      }
    }
    //Number generate Height
    if (props.heightItem) {
      for (let i = 0; i < props.heightItem.length; i++) {
        if (props.heightItem[i] === "" || props.heightItem[i] === undefined) {
          let r = Math.floor(
            Math.random() * (props.heightMax - props.heightMin)
          );
          r = r.toString();
          props.setHeightItem[i](r);
        }
      }
    }
    //Number generate Weight
    if (props.weightItem) {
      for (let i = 0; i < props.weightItem.length; i++) {
        if (props.weightItem[i] === "" || props.weightItem[i] === undefined) {
          let r = Math.floor(
            Math.random() * (props.weightMax - props.weightMin)
          );
          r = r.toString();
          props.setWeightItem[i](r);
        }
      }
    }

    //Number generate HP
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
    //Number generate AC
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
    //Number generate Speed
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

  return (
    <>
      <button onClick={onGenerate} className={style.btnGen}>
        Generate
      </button>
    </>
  );
};

export default GenerateButton;
