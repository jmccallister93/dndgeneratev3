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

  useEffect(() => {
    console.log(props.value);
  }, [props.value]);

  useEffect(() => {
    const names = props.value.map((save) => save.name);
    setSaveName(names);
    if (saveName.length > 0) {
      saveName.forEach((name, index) => {
        // console.log(index)
        if (name === "Strength") {
          setSaves(name + " " + modifier[index]);
        } else if (name === "Dexterity") {
          setSaves(saveName[index]);
        } else if (name === "Constitution") {
          setSaves(saveName[index]);
        } else if (name === "Intelligence") {
          setSaves(saveName[index]);
        } else if (name === "Wisdom") {
          setSaves(saveName[index]);
        } else if (name === "Charisma") {
          setSaves(saveName[index]);
        }
      });
    }
  }, [props.value, props.mod, modifier]);

  useEffect(() => {
    if (props.value !== undefined) {
      setSaves(
        props.value.map((save, index) => (
          <div className={style.modLayout} key={index}>
            <span className={style.modText}>
              {save.name}{" "}
              <span>
                <InputNumber
                  value={modifier[index]}
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
                  // onChange={(e) => {
                  //   const newModifier = [...modifier]; // make a copy of the modifier array
                  //   dex] = e.value; // set the new value for the current index
                  //   setModifier(newModifier); // update the modifier state
                  // }}
                />
              </span>
            </span>
          </div>
        ))
      );
    }
  }, [props.value]);

  return <>{saves}</>;
};

export default CustomModifier;
