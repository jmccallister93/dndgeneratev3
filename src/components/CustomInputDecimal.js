import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import style from "../stylesheets/BuildingGen.module.scss";
import NumberRandomButton from "./NumberRandomButton";
import SingleRandomButton from "./SingleRandomButton";

const CustomInputDecimal = (props) => {
  //---PROPS---
  //setSingular
  //h1Title
  //value
  //placeholder
  //maxNumber
  //---PROPS---
  const [fetchError, setFetchError] = useState(false);

  //On Change
  const onChange = (e) => {
    //convert e.value to string
    e.value = e.value.toString();
    props.setSingular(e.value);
  };
  const inputNumber = (
    <>
      <h1>{props.h1Title}</h1>
      <InputNumber
        value={props.value}
        placeholder={props.placeholder}
        mode="decimal"
        showButtons
        buttonLayout="currency"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={3}
        min={0}
        max={props.maxNumber}
        onChange={onChange}
      />
    </>
  );
  return (
    <>
      {inputNumber}{" "}
      <NumberRandomButton
        setSingular={props.setSingular}
        maxNumber={props.maxNumber}
      />
    </>
  );
};

export default CustomInputDecimal;
