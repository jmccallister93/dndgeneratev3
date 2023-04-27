import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import { InputNumber } from "primereact/inputnumber";

const CustomModifier = (props) => {
  const [saves, setSaves] = useState([]);

  const handleModifierChange = (index, value) => {
    const setModFunction = props.setMod ? props.setMod[index] : props.setSense[index]; 
    setModFunction(value);
    const newValue = [...props.value];
    newValue[index].modifier = value;
    props.setValue(newValue);
  };

  const onRandomClick = (index) => {
    let r = props.setMod
      ? Math.floor(Math.random() * (props.maxNumber - 0))
      : Math.floor(Math.random() * (props.senseMax - 5) / 5) * 5 + 5;
    handleModifierChange(index, r);
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
                  max={props.setMod ? 30 : 120}
                  step={props.sense ? 5 : 1}
                  onChange={(e) => handleModifierChange(index, e.value)}
                />
                 {props.setMod || !props.setSense ? (
                  <button
                    className={style.diceBtn}
                    onClick={() => onRandomClick(index)}
                    title="Generate Random Value"
                  >
                    <span className={style.diceBtnText}>Random</span>
                  </button>
                ) : null}
              </span>
            </span>
          </div>
        ))
      );
    }
    // eslint-disable-next-line 
  }, [props.value]);

  return <>{saves}</>;
};

export default CustomModifier;
