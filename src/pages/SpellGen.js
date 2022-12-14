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
import CustomDataTable from "../components/CustomDataTable";

const SpellGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [spellName, setSpellName] = useState("");
  const [spellNames, setSpellNames] = useState("");
  const [spellNameOptions, setSpellNameOptions] = useState("");

  const [preset, setPreset] = useState("");
  const [presets, setPresets] = useState("");
  const [presetOptions, setPresetOptions] = useState("");
  const [presetList, setPresetList] = useState([]);
  const [selectedPreset, setSelectedPreset] = useState([]);

  const [level, setLevel] = useState("");
  const [levels, setLevels] = useState("");
  const [levelOptions, setLevelOptions] = useState("");

  const [school, setSchool] = useState("");
  const [schools, setSchools] = useState("");
  const [schoolOptions, setSchoolOptions] = useState("");

  const [castingTime, setCastingTime] = useState("");
  const [castingTimes, setCastingTimes] = useState("");
  const [castingTimeOptions, setCastingTimeOptions] = useState("");

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState("");

  const [components, setComponents] = useState("");
  const [componentss, setComponentss] = useState("");
  const [componentsOptions, setComponentsOptions] = useState("");

  const [range, setRange] = useState("");
  const [ranges, setRanges] = useState("");
  const [rangeOptions, setRangeOptions] = useState("");

  const [area, setArea] = useState("");
  const [areas, setAreas] = useState("");
  const [areaOptions, setAreaOptions] = useState("");

  const [durationType, setDurationType] = useState("");
  const [durationTypes, setDurationTypes] = useState("");
  const [durationTypeOptions, setDurationTypeOptions] = useState("");

  const [duration, setDuration] = useState("");
  const [durations, setDurations] = useState("");
  const [durationOptions, setDurationOptions] = useState("");

  const [description, setDescription] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [descriptionOptions, setDescriptionOptions] = useState("");

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
        <h1 className={style.mainHeader}>Spell Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingular={[
                setLevel,
                setSchool,
                setCastingTime,
                setAction,
                setComponents,
                setRange,
                setArea,
                setDurationType,
                setDuration,
                setDescription,
              ]}
              setPlural={[setSelectedPreset]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Spell Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Spell Name"}
                input={spellName}
                setInput={setSpellName}
                placeholder={"Set Spell Name"}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPreset}
                setPlural={setPresets}
                setOptions={setPresetOptions}
                h1Title={"Presets"}
                dialogHeader={"Set Preset"}
                placeholder={"Set Preset"}
                valueOptions={presetOptions}
                list={presetList}
                setList={setPresetList}
                selectedItem={selectedPreset}
                setSelectedItem={setSelectedPreset}
                options={presets}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setLevel}
                setPlural={setLevels}
                setOptions={setLevelOptions}
                h1Title={"Level"}
                placeholder={"Set Level"}
                value={level}
                valueOptions={levelOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setSchool}
                setPlural={setSchools}
                setOptions={setSchoolOptions}
                h1Title={"School"}
                placeholder={"Set School"}
                value={school}
                valueOptions={schoolOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Spell Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setCastingTime}
                setPlural={setCastingTimes}
                setOptions={setCastingTimeOptions}
                h1Title={"Casting Time"}
                placeholder={"Set Casting Time"}
                value={castingTime}
                valueOptions={castingTimeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setAction}
                setPlural={setActions}
                setOptions={setActionOptions}
                h1Title={"Action"}
                placeholder={"Set Action"}
                value={action}
                valueOptions={actionOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setComponents}
                setPlural={setComponentss}
                setOptions={setComponentsOptions}
                h1Title={"Components"}
                placeholder={"Set Components"}
                value={components}
                valueOptions={componentsOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setRange}
                setPlural={setRanges}
                setOptions={setRangeOptions}
                h1Title={"Range"}
                placeholder={"Set Range"}
                value={range}
                valueOptions={rangeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setArea}
                setPlural={setAreas}
                setOptions={setAreaOptions}
                h1Title={"Area"}
                placeholder={"Set Area"}
                value={area}
                valueOptions={areaOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDurationType}
                setPlural={setDurationTypes}
                setOptions={setDurationTypeOptions}
                h1Title={"Duration Type"}
                placeholder={"Set Duration Type"}
                value={durationType}
                valueOptions={durationTypeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDuration}
                setPlural={setDurations}
                setOptions={setDurationOptions}
                h1Title={"Duration"}
                placeholder={"Set Duration"}
                value={duration}
                valueOptions={durationOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDescription}
                setPlural={setDescriptions}
                setOptions={setDescriptionOptions}
                h1Title={"Description"}
                placeholder={"Set Description"}
                value={description}
                valueOptions={descriptionOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{spellName}</h1>
          <h2>
            Level <span className={style.minorText2}>{level}</span>
          </h2>
          <h2>
            School <span className={style.minorText2}>{school}</span>
          </h2>
          <h2>
            Casting Time <span className={style.minorText2}>{castingTime}</span>
          </h2>
          <h2>
            Action <span className={style.minorText2}>{action}</span>
          </h2>
          <h2>
            Components <span className={style.minorText2}>{components}</span>
          </h2>
          <h2>
            Range <span className={style.minorText2}>{range}</span>
          </h2>
          <h2>
            Area <span className={style.minorText2}>{area}</span>
          </h2>
          <h2>
            Duration Type <span className={style.minorText2}>{durationType}</span>
          </h2>
          <h2>
            Duration <span className={style.minorText2}>{duration}</span>
          </h2>
          <h2>
            Description <span className={style.minorText2}>{description}</span>
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default SpellGen;
