import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";

const BuildingGen = () => {

    const onGenerate = (e) => {}
    const onClear = (e) => {}

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
        <div className={style.body}>
        
        <div className={style.optionsWrapper}></div>
        </div>
     </div>   
    
    );
   
}
 
export default BuildingGen;