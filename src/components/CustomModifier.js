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
  const [saveName, setSaveName] = useState("");

useEffect(() => {
  for(let i = 0; i < props.value.length; i++) {
  // let saveName = "";
  props.value.map((save, index) => (
    setSaveName(save.name)
  ))
}
console.log(saveName)
}, [props.value])
  

  useEffect(() => {
    if (props.value !== undefined) {
      setSaves(
        props.value.map((save, index) => (
          <div className={style.modLayout} key={index}>
            <span className={style.modText}>
              {save.name}{" "}
              <span>
                <InputNumber
                  value={modifier[save.name] || ""}
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
                    setModifier({
                      ...modifier,
                      [save.name]: e.value,
                    })
                  }
                />
              </span>
              <NumberRandomButton
                 setSingular={(value) =>
                  setModifier({
                    ...modifier,
                    [save.name]: value,
                  })
                }
                maxNumber={30}
              />
            </span>
          </div>
        ))
      );
    }
  }, [props.value]);

  return <>{saves}</>;
};

export default CustomModifier;
