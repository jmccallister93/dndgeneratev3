import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { supabase, auth } from "../config/supabaseClient";
import style from "../stylesheets/PageStyle.module.scss";
import SingleRandomButton from "./SingleRandomButton";

const CustomDropDown = (props) => {
  //---PROPS ---
  // tableName={"itemsTypes"}
  //  setSingular={setType}
  //  setPlural={setTypes}
  //  setOptions={setTypeOptions}
  //  h1Title={"Type"}
  //  placeholder={"Set Type"}
  //  value={type}
  //  valueOptions={typeOptions}

  //Set States
  const [fetchError, setFetchError] = useState(null);
  const [showCustomInput, setShowCustomInput] = useState(false);

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

  //On Custom Change
  const onChangeCustom = (e) => {
    props.setSingular(e.target.value);
  };
  //On Change
  const onChange = (e) => {
    props.setSingular(e.value);
    setShowCustomInput(false);
    if (e.value === "Custom") {
      setShowCustomInput(true);
    }
  };
  //JSX Dropdown template
  const templateDropdown = (
    <>
      <h1>{props.h1Title}</h1>
      {showCustomInput ? (
        <InputText onChange={onChangeCustom} placeholder={props.placeholder} />
      ) : null}
      <Dropdown
        optionLabel="name"
        value={props.value}
        options={props.valueOptions}
        onChange={onChange}
        placeholder={showCustomInput ? "Custom" : props.placeholder}
      />
    </>
  );

  return (
    <>
      {templateDropdown}
      <SingleRandomButton
        valueOptions={props.valueOptions}
        setSingular={props.setSingular}
      />
    </>
  );
};

export default CustomDropDown;
