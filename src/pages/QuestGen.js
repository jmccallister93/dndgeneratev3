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

const QuestGen = () => {
    const [isBasicActive, setIsBasicActive] = useState(false);
    const [isDetailActive, setIsDetailActive] = useState(false);

    const [questName, setQuestName] = useState("");
  const [questNames, setQuestNames] = useState("");
  const [questNameOptions, setQuestNameOptions] = useState("");
  
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
          <h1 className={style.mainHeader}>Quest Generator</h1>
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
            <h1>Quest Options</h1>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info
            </h1>
            <div className={isBasicActive ? style.subsection : style.hidden}>
            <CustomInputText 
           title={"Quest Name"}
           input={questName}
           setInput={setQuestName}
           placeholder={"Set Quest Name"}
           />
            </div>
            <h1 className={style.subHeader} onClick={showDetails}>
              Building Features
            </h1>
            <div className={isDetailActive ? style.subsection : style.hidden}>
              Details to fill out
            </div>
          </div>
  
          {/* Main Display */}
          <div className={style.display}>
            <h1>{questName}</h1>
            <h2>First thing</h2>
            <span className={style.minorText2}>display selected thing</span>
          </div>
        </div>
      </div>
    );
}
 
export default QuestGen;