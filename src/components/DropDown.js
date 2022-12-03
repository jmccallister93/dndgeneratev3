import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import supabase from "../config/supabaseClient";
import style from "../stylesheets/BuildingGen.module.scss"

const DropDown = (props) => {
  //Set States
  const [fetchError, setFetchError] = useState(null);
  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();
  const [showTypeInput, setShowTypeInput] = useState(false);

  //Template for get Data
  //Get Data function
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(dataName.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  };

  //Use GetData function
  useEffect(()=>{
    getData("itemsTypes",setType, setTypes, setTypeOptions)
  },[])

  //Template for Dropdown
  const templateDropdown = (
    h1Title,
    showCustomInput,
    onCustomInputChange,
    placeholder,
    value,
    valueOptions,
    onValueChange
  ) => {
    <div>
      <h1>{h1Title}</h1>
      {showCustomInput ? (
        <InputText onChange={onCustomInputChange} placeholder={placeholder} />
      ) : null}
      <Dropdown
        optionLabel="name"
        value={value}
        options={valueOptions}
        onChange={onValueChange}
        placeholder={showCustomInput ? "Custom" : "Choose Type"}
      />
    </div>;
  };

  const onTypeCustom = (e) => {
    setType(e.target.value);
  };

  const onTypeChange = (e) => {
    setType(e.value);
    setShowTypeInput(false);
    if (e.value === "Custom") {
      setShowTypeInput(true);
    }
  };

  const typeDropdown = templateDropdown(
    "Type",
    showTypeInput,
    onTypeCustom,
    "Type",
    type,
    typeOptions,
    onTypeChange
  );

  return <>{typeDropdown}</>;
};

export default DropDown;
