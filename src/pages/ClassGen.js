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

const ClassGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);

  const [className, setClassName] = useState("");
  const [classNames, setClassNames] = useState("");
  const [classNameOptions, setClassNameOptions] = useState("");

  const [hitDie, setHitDie] = useState("");
  const [hitDies, setHitDices] = useState("");
  const [diceOptions, setDiceOptions] = useState("");

  const [hpStart, setHpStart] = useState("");
  const [hpStarts, setHpStarts] = useState("");
  const [hpStartOptions, setHpStartOptions] = useState("");

  const [armorProf, setArmorProf] = useState("");
  const [armorProfs, setArmorProfs] = useState("");
  const [armorProfOptions, setArmorProfOptions] = useState("");
  const [armorProfList, setArmorProfList] = useState("");
  const [selectedArmorProf, setSelectedArmorProf] = useState("");

  const [weaponProf, setWeaponProf] = useState("");
  const [weaponProfs, setWeaponProfs] = useState("");
  const [weaponProfOptions, setWeaponProfOptions] = useState("");
  const [weaponProfList, setWeaponProfList] = useState("");
  const [selectedWeaponProf, setSelectedWeaponProf] = useState("");

  const [toolProf, setToolProf] = useState("");
  const [toolProfs, setToolProfs] = useState("");
  const [toolProfOptions, setToolProfOptions] = useState("");
  const [toolProfList, setToolProfList] = useState("");
  const [selectedToolProf, setSelectedToolProf] = useState("");

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
        <h1 className={style.mainHeader}>Class Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Class Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <CustomInputText
              title={"Class Name"}
              input={className}
              setInput={setClassName}
              placeholder={"Set Class Name"}
            />
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Class Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            Details to fill out
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{className}</h1>
          <h2>First thing</h2>
          <span className={style.minorText2}>display selected thing</span>
        </div>
      </div>
    </div>
  );
};

export default ClassGen;
