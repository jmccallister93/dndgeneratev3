import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";

const BuildingGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);

  const [buildingName, setBuildingName] = useState("");
  const [buildingNames, setBuildingNames] = useState("");
  const [buildingNameOptions, setBuildingNameOptions] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState("");
  const [buildingTypeOptions, setBuildingTypeOptions] = useState("");
  //Get Data
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

  useEffect(() => {
    getData(
      "buildingsTypes",
      setBuildingType,
      setBuildingTypes,
      setBuildingTypeOptions
    );
  }, []);
  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );

  //onChanges
  const onBuildingNameChange = (e) => {
    setBuildingName(e.target.value);
  };
  const onRandomBuildingName = (e) => {

  }

  //Name Input
  const nameText = customInputText(
    "Building Name",
    buildingName,
    onBuildingNameChange,
    "Set Name",
    onRandomBuildingName
  );


  //Buttons
  const onGenerate = (e) => {};
  const onClear = (e) => {};

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={style.btnWrapper}>
            <button onClick={onGenerate} className={style.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Building Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div
            className={isBasicActive ? style.subsection : style.hidden}
          >
            {nameText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
