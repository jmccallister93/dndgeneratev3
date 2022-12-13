import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e, i } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import Items from "../components/Items";
import { Toast } from "primereact/toast";
import Npcs from "../components/Npcs";
import ClearButton from "../components/ClearButton";
import GenerateButton from "../components/GenerateButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";

const TrapGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [trapName, setTrapName] = useState("");
  const [trapNames, setTrapNames] = useState("");
  const [trapNameOptions, setTrapNameOptions] = useState("");

  const [trapType, setTrapType] = useState("");
  const [trapTypes, setTrapTypes] = useState("");
  const [trapTypeOptions, setTrapTypeOptions] = useState("");

  const [threatLevel, setThreatLevel] = useState("");
  const [threatLevels, setThreatLevels] = useState("");
  const [threatLevelOptions, setThreatLevelOptions] = useState("");

  const [trapEffect, setTrapEffect] = useState("");
  const [trapEffects, setTrapEffects] = useState("");
  const [trapEffectOptions, setTrapEffectOptions] = useState("");
  const [trapEffectList, setTrapEffectList] = useState([]);
  const [selectedTrapEffect, setSelectedTrapEffect] = useState([]);

  const [trapDamage, setTrapDamage] = useState("");
  const [trapDamages, setTrapDamages] = useState("");
  const [trapDamageOptions, setTrapDamageOptions] = useState("");

  const [trapDamageType, setTrapDamageType] = useState("");
  const [trapDamageTypes, setTrapDamageTypes] = useState("");
  const [trapDamageTypeOptions, setTrapDamageTypeOptions] = useState("");


  const [trapRange, setTrapRange] = useState("");
  const [trapRanges, setTrapRanges] = useState("");
  const [trapRangeOptions, setTrapRangeOptions] = useState("");

  const [trapDC, setTrapDC] = useState("");
  const [trapDCs, setTrapDCs] = useState("");
  const [trapDCOptions, setTrapDCOptions] = useState("");

  const [trapDCType, setTrapDCType] = useState("");
  const [trapDCTypes, setTrapDCTypes] = useState("");
  const [trapDCTypeOptions, setTrapDCTypeOptions] = useState("");

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Trap Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingular={[
                setTrapName,
                setTrapType,
                setThreatLevel,
                setTrapEffect,
                setTrapDamage,
                setTrapRange,
                setTrapDC,
                setTrapDCType,
              ]}
              setPlural={[setSelectedTrapEffect]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Trap Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Trap Name"}
                input={trapName}
                setInput={setTrapName}
                placeholder={"Set Trap Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setTrapType}
                setPlural={setTrapTypes}
                setOptions={setTrapTypeOptions}
                h1Title={"Trap Type"}
                placeholder={"Set Trap Type"}
                value={trapType}
                valueOptions={trapTypeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setThreatLevel}
                setPlural={setThreatLevels}
                setOptions={setThreatLevelOptions}
                h1Title={"Threat Level"}
                placeholder={"Set Threat Level"}
                value={threatLevel}
                valueOptions={threatLevelOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Trap Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTrapEffect}
                setPlural={setTrapEffects}
                setOptions={setTrapEffectOptions}
                h1Title={"Trap Effects"}
                dialogHeader={"Set Trap Effect"}
                placeholder={"Set Effect"}
                valueOptions={trapEffectOptions}
                list={trapEffectList}
                setList={setTrapEffectList}
                selectedItem={selectedTrapEffect}
                setSelectedItem={setSelectedTrapEffect}
                options={trapEffectOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setTrapDamage}
                setPlural={setTrapDamages}
                setOptions={setTrapDamageOptions}
                h1Title={"Trap Damage"}
                placeholder={"Set Damage"}
                value={trapDamage}
                valueOptions={trapDamageOptions}
              />
              <CustomDropDown 
                tableName={"itemsTypes"}
                setSingular={setTrapDamageType}
                setPlural={setTrapDamageTypes}
                setOptions={setTrapDamageTypeOptions}
                h1Title={"Damage Type"}
                placeholder={"Set Damage Type"}
                value={trapDamageType}
                valueOptions={trapDamageTypeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setTrapRange}
                setPlural={setTrapRanges}
                setOptions={setTrapRangeOptions}
                h1Title={"Trap Range"}
                placeholder={"Set Range"}
                value={trapRange}
                valueOptions={trapRangeOptions}
              />
              <CustomInputNumber
                setSingular={setTrapDC}
                h1Title={"Trap DC"}
                value={trapDC}
                placeholder={"Set DC"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setTrapDCType}
                setPlural={setTrapDCTypes}
                setOptions={setTrapDCTypeOptions}
                h1Title={"DC Type"}
                placeholder={"Set DC Type"}
                value={trapDCType}
                valueOptions={trapDCTypeOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{trapName}</h1>
          <h2>
            Type <span className={style.minorText2}>{trapType}</span>
          </h2>
          <h2>
            Threat Level{" "}
            <span className={style.minorText2}>{threatLevel}</span>
          </h2>
          <h2>
            Effects{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedTrapEffect} />
            </span>
          </h2>
          <h2>
            Damage <span className={style.minorText2}>{trapDamage}</span>
          </h2>
          <h2>
            Damage Type <span className={style.minorText2}>{trapDamageType}</span>
          </h2>
          <h2>
            Range <span className={style.minorText2}>{trapRange}</span>
          </h2>
          <h2>
            DC <span className={style.minorText2}>{trapDC} {trapDCType}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TrapGen;
