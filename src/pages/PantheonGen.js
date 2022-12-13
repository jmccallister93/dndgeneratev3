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
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";

const PantheonGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [pantheonName, setPantheonName] = useState("");
  const [pantheonNames, setPantheonNames] = useState("");
  const [pantheonNameOptions, setPantheonNameOptions] = useState("");

  const [deityType, setDeityType] = useState("");
  const [deityTypes, setDeityTypes] = useState("");
  const [deityTypeOptions, setDeityTypeOptions] = useState("");

  const [alignment, setAlignment] = useState("");
  const [alignments, setAlignments] = useState("");
  const [alignmentOptions, setAlignmentOptions] = useState("");

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState("");
  const [sizeOptions, setSizeOptions] = useState("");

  const [plane, setPlane] = useState("");
  const [planes, setPlanes] = useState("");
  const [planeOptions, setPlaneOptions] = useState("");

  const [domain, setDomain] = useState("");
  const [domains, setDomains] = useState("");
  const [domainOptions, setDomainOptions] = useState("");

  const [symbol, setSymbol] = useState("");
  const [symbols, setSymbols] = useState("");
  const [symbolOptions, setSymbolOptions] = useState("");

  const [attribute, setAttribute] = useState("");
  const [attributes, setAttributes] = useState("");
  const [attributeOptions, setAttributeOptions] = useState("");

  const [history, setHistory] = useState("");
  const [histories, setHistories] = useState("");
  const [historyOptions, setHistoryOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [motiveList, setMotiveList] = useState([]);
  const [selectedMotive, setSelectedMotive] = useState([]);

  const [provided, setProvided] = useState("");
  const [provideds, setProvideds] = useState("");
  const [providedOptions, setProvidedOptions] = useState("");
  const [providedList, setProvidedList] = useState([]);
  const [selectedProvided, setSelectedProvided] = useState([]);

  const [artifact, setArtifact] = useState("");
  const [artifacts, setArtifacts] = useState("");
  const [artifactOptions, setArtifactOptions] = useState("");
  const [artifactList, setArtifactList] = useState([]);
  const [selectedArtifact, setSelectedArtifact] = useState([]);

  const [shrine, setShrine] = useState("");
  const [shrines, setShrines] = useState("");
  const [shrineOptions, setShrineOptions] = useState("");
  const [shrineList, setShrineList] = useState([]);
  const [selectedShrine, setSelectedShrine] = useState([]);

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
        <h1 className={style.mainHeader}>Pantheon Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingular={[
                setPantheonName,
                setDeityType,
                setAlignment,
                setSize,
                setPlane,
                setDomain,
                setSymbol,
                setAttribute,
                setHistory,
                setMotive,
                setProvided,
                setArtifact,
                setShrine,
              ]}
              setPlural={[
                setMotiveList,
                setProvidedList,
                setArtifactList,
                setShrineList,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Pantheon Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Pantheon Name"}
                input={pantheonName}
                setInput={setPantheonName}
                placeholder={"Set Pantheon Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDeityType}
                setPlural={setDeityTypes}
                setOptions={setDeityTypeOptions}
                h1Title={"Deity Type"}
                placeholder={"Set Type"}
                value={deityType}
                valueOptions={deityTypeOptions}
              />
              <CustomDropDown 
                tableName={"itemsTypes"}
                setSingular={setAlignment}
                setPlural={setAlignments}
                setOptions={setAlignmentOptions}
                h1Title={"Alignment"}
                placeholder={"Set Alignment"}
                value={alignment}
                valueOptions={alignmentOptions}
              />
              
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Patheon Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            Details to fill out
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{pantheonName}</h1>
          <h2>First thing</h2>
          <span className={style.minorText2}>display selected thing</span>
        </div>
      </div>
    </div>
  );
};

export default PantheonGen;
