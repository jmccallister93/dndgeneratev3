import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e, i, number } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import Items from "../components/Items";
import { Toast } from "primereact/toast";
import Npcs from "../components/Npcs";
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomInputText from "../components/CustomInputText";
import SingleDisplay from "../components/SingleDisplay";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import ExportButtons from "../components/ExportButtons";
import { jsPDF } from "jspdf";

const EncounterGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isPartyActive, setIsPartyActive] = useState(false);

  const [encounterName, setEncounterName] = useState("");
  const [encounterNames, setEncounterNames] = useState("");
  const [encounterNameOptions, setEncounterNameOptions] = useState("");

  const [enviroment, setEnviroment] = useState("");
  const [enviroments, setEnviroments] = useState("");
  const [enviromentOptions, setEnviromentOptions] = useState("");

  const [encounterLevel, setEncounterLevel] = useState("");
  const [encounterLevels, setEncounterLevels] = useState("");
  const [encounterLevelOptions, setEncounterLevelOptions] = useState("");

  const [partySize, setPartySize] = useState("");
  const [partySizes, setPartySizes] = useState("");
  const [partySizeOptions, setPartySizeOptions] = useState("");

  const [partyLevel, setPartyLevel] = useState("");
  const [partyLevels, setPartyLevels] = useState("");
  const [partyLevelOptions, setPartyLevelOptions] = useState("");

  const [partyClass, setPartyClass] = useState("");
  const [partyClasses, setPartyClasses] = useState("");
  const [partyClassOptions, setPartyClassOptions] = useState("");
  const [partyClassList, setPartyClassList] = useState([]);
  const [selectedPartyClass, setSelectedPartyClass] = useState([]);

  const [monster, setMonster] = useState("");
  const [monsters, setMonsters] = useState("");
  const [monsterOptions, setMonsterOptions] = useState("");
  const [monsterList, setMonsterList] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState([]);

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showParty = (e) => {
    setIsPartyActive((current) => !current);
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Encounter Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingular={[
                setEncounterName,
                setEnviroment,
                setEncounterLevel,
                setPartySize,
                setPartyLevel,
                setPartyClass,
                setMonster,
              ]}
              setPlural={[setSelectedMonster, setSelectedPartyClass]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Encounter Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Encounter Name"}
                input={encounterName}
                setInput={setEncounterName}
                placeholder={"Set City Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setEncounterLevel}
                setPlural={setEncounterLevels}
                setOptions={setEncounterLevelOptions}
                options={encounterLevelOptions}
                h1Title={"Encounter Level"}
                placeholder={"Select Encounter Level"}
                value={encounterLevel}
                valueOptions={encounterLevels}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Encounter Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setEnviroment}
                setPlural={setEnviroments}
                setOptions={setEnviromentOptions}
                options={enviromentOptions}
                h1Title={"Enviroment"}
                placeholder={"Select Enviroment"}
                value={enviroment}
                valueOptions={enviroments}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingluar={setMonster}
                setPlural={setMonsters}
                setOptions={setMonsterOptions}
                options={monsterOptions}
                h1Title={"Monsters"}
                dialogHeader={"Monsters"}
                placeholder={"Select Monsters"}
                value={monster}
                valueOptions={monsterOptions}
                list={monsterList}
                setList={setMonsterList}
                selectedItem={selectedMonster}
                setSelectedItem={setSelectedMonster}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showParty}>
            Party Makeup
          </h1>
          <div className={isPartyActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setPartySize}
                setPlural={setPartySizes}
                setOptions={setPartySizeOptions}
                options={partySizeOptions}
                h1Title={"Party Size"}
                placeholder={"Set Size"}
                value={partySize}
                valueOptions={partySizes}
              />
              <CustomInputNumber
                setSingular={setPartyLevel}
                setPlural={setPartyLevels}
                setOptions={setPartyLevelOptions}
                options={partyLevelOptions}
                h1Title={"Party Level"}
                placeholder={"Set Level"}
                value={partyLevel}
                valueOptions={partyLevels}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingluar={setPartyClass}
                setPlural={setPartyClasses}
                setOptions={setPartyClassOptions}
                options={partyClassOptions}
                h1Title={"Party Classes"}
                dialogHeader={"Party Classes"}
                placeholder={"Select Party Classes"}
                value={partyClass}
                valueOptions={partyClassOptions}
                list={partyClassList}
                setList={setPartyClassList}
                selectedItem={selectedPartyClass}
                setSelectedItem={setSelectedPartyClass}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{encounterName}</h1>
          <h2>
            Encounter Level{" "}
            <span className={style.minorText2}>{encounterLevel}</span>
          </h2>
          <h2>
            Enviroment <span className={style.minorText2}>{enviroment}</span>
          </h2>
          <h2>
            Monsters {" "}
            <span className={style.minorText2}>
              <MultipleDisplay 
              selectedItem={selectedMonster}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EncounterGen;
