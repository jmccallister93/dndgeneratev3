import { forEach } from "mathjs";
import { useEffect, useState } from "react";
import CustomInputDecimal from "./CustomInputDecimal";
import CustomInputNumber from "./CustomInputNumber";
import style from "../stylesheets/PageStyle.module.scss";
import { InputNumber } from "primereact/inputnumber";
import NumberRandomButton from "./NumberRandomButton";

const CustomModifier = (props) => {
  const [modifier, setModifier] = useState([]);
  const [saves, setSaves] = useState([]);
  const [saveName, setSaveName] = useState([]);

     // const saveSetters = {
    //   Strength: props.setMod[0],
    //   Dexterity: props.setMod[1],
    //   Constitution: props.setMod[2],
    //   Intelligence: props.setMod[3],
    //   Wisdom: props.setMod[4],
    //   Charisma: props.setMod[5]
    // };

  useEffect(() => {
    const names = props.value.map((save) => save.name);
    setSaveName(names);
  }, [props.value]);

  //ISSUE THAT THIS FIRES EVERYTIME ONE OF THESE IS CORRECT
  //NEED TO ADJUST IT SO THAT IT ONLY FIRES WHEN THE CORRECT ONE IS CHANGED
  useEffect(() => {
    if (saveName.length > 0) {
      for (let i = 0; i < saveName.length; i++) {
        if (saveName[i] === "Strength") {
          props.setMod[0](modifier);
        } else if (saveName[i] === "Dexterity") {
          props.setMod[1](modifier);
        } else if (saveName[i] === "Constitution") {
          props.setMod[2](modifier);
        } else if (saveName[i] === "Intelligence") {
          props.setMod[3](modifier);
        } else if (saveName[i] === "Wisdom") {
          props.setMod[4](modifier);
        } else if (saveName[i] === "Charisma") {
          props.setMod[5](modifier);
        }
      }
    }
  }, [modifier,saveName,props.setMod]);

  // useEffect(() => {
  //   console.log(modifier)
  // }, [modifier])

  // useEffect(() => {
  //   if (saveName.length > 0) {
  //     saveName.forEach((name) => {
  //       if (props.setMod[name.toLowerCase()]) {
  //         setModifier((prevState) => ({
  //           ...prevState,
  //           [name]: props.setMod[name.toLowerCase()]
  //         }));
  //       }
  //     });
  //   }
  // }, [props.setMod, saveName]);

  useEffect(() => {
    if (props.value !== undefined) {
      setSaves(
        props.value.map((save, index) => (
          <div className={style.modLayout} key={index}>
            <span className={style.modText}>
              {save.name}{" "}
              <span>
                <InputNumber
                  // value={modifier}
                  placeholder={"Set Modifier"}
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  minFractionDigits={0}
                  maxFractionDigits={2}
                  min={0}
                  max={30}
                  onChange={(e) =>
                    setModifier(e.value)
                  }
                />
              </span>
              {/* <NumberRandomButton
                setSingular={(value) =>
                  setModifier({
                    ...modifier,
                    [save.name]: value,
                  })
                }
                maxNumber={30}
              /> */}
            </span>
          </div>
        ))
      );
    }
  }, [props.value]);

  return <>{saves}</>;
};

export default CustomModifier;
