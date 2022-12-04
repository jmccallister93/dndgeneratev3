import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import style from "../stylesheets/BuildingGen.module.scss";

const CustomInputNumber = (props) => {
   const [fetchError, setFetchError] = useState(false) 
  //Get Data from supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        props.setSingular(null);
      }
      if (dataName) {
        props.setPlural(dataName);
        setFetchError(null);
        props.setOptions(
          dataName.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);
  //On Change
  const onChange = (e) => {
    props.setSingular(e.value);
  };
  const inputNumber = (
    <div>
      <h1>{props.h1Title}</h1>
      <InputNumber
        style={{ display: "flex" }}
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
        maxFractionDigits={2}
        min={0}
        onChange={onChange}
      />
    </div>
  );
  return <>{inputNumber}</>;
};

export default CustomInputNumber;
