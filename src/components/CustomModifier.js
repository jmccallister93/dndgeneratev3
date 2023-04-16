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

  const handleModifierChange = (index, value) => {
    // Get the corresponding setMod function using the index
    const setModFunction = props.setMod[index];

    // // Call the setMod function with the new value
    setModFunction(value);

    // // Update the value in the props.value array
    const newValue = [...props.value];
    newValue[index].modifier = value;
    props.setValue(newValue);
  };

  useEffect(() => {
    setSaves(
      props.value.map((save, index) => ({
        name: save.name,
        modifier: save.modifier,
        index: index,
      }))
    );
  }, [props.value]);


  useEffect(() => {
    if (props.value !== undefined) {
      setSaves(
        props.value.map((save, index) => (
          <div className={style.modLayout} key={index}>
            <span className={style.modText}>
              {save.name}{" "}
              <span>
                <InputNumber
                  value={save.modifier}
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
                  onChange={(e) => handleModifierChange(index, e.value)}
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
