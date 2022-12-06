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
import SingleDisplay from "../components/SingleDisplay";
import CustomDropdown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";

const CityGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [cityName, setCityName] = useState("");
  const [cityNames, setCityNames] = useState("");
  const [cityNameOptions, setCityNameOptions] = useState("");

  const [type, setType] = useState("");
  const [types, setTypes] = useState("");
  const [typeOptions, setTypeOptions] = useState("");

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState("");
  const [sizeOptions, setSizeOptions] = useState("");

  const [population, setPopulation] = useState("");
  const [populations, setPopulations] = useState("");
  const [populationOptions, setPopulationOptions] = useState("");

  const [atmosphere, setAtmoshpere] = useState("");
  const [atmoshperes, setAtmoshperes] = useState("");
  const [atmoshpereOptions, setAtmoshpereOptions] = useState("");

  const [culture, setCulture] = useState("");
  const [cultures, setCultres] = useState("");
  const [cultureOptions, setCultureOptions] = useState("");

  const [terrain, setTerrain] = useState("");
  const [terrains, setTerrains] = useState("");
  const [terrainOptions, setTerrainOptions] = useState("");

  const [landmark, setLandmark] = useState("");
  const [landmarks, setLandmarks] = useState("");
  const [landmarkOptions, setLandmarkOptions] = useState("");

  const [govern, setGovern] = useState("");
  const [governs, setGoverns] = useState("");
  const [governOptions, setGovernOptions] = useState("");

  const [guild, setGuild] = useState("");
  const [guilds, setGuilds] = useState("");
  const [guildOptions, setGuildOptions] = useState("");

  const [event, setEvent] = useState("");
  const [events, setEvents] = useState("");
  const [eventOptions, setEventOptions] = useState("");

  const [faction, setFaction] = useState("");
  const [factions, setFactions] = useState("");
  const [factionOptions, setFactionOptions] = useState("");

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");

  const [district, setDistrict] = useState("");
  const [districts, setDistrics] = useState("");
  const [districtOptions, setDistrictOptions] = useState("");

  const [npc, setNpc] = useState("");
  const [npcs, setNpcs] = useState("");
  const [npcOptions, setNpcOptions] = useState("");

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
        <h1 className={style.mainHeader}>City Generator</h1>
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
          <h1>City Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"City Name"}
                input={cityName}
                setInput={setCityName}
                placeholder={"Set City Name"}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setType}
                setPlural={setTypes}
                setOptions={setTypeOptions}
                options={typeOptions}
                h1Title={"City Type"}
                placeholder={"Set Type"}
                value={type}
                valueOptions={typeOptions}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setSize}
                setPlural={setSizes}
                setOptions={setSizeOptions}
                h1Title={"City Size"}
                placeholder={"Set Size"}
                value={size}
                valueOptions={sizeOptions}
              />
              <CustomInputNumber
                // tablename
                setSingular ={setPopulation}
                // setPlural
                // setOptions
                h1Title={"Population"}
                value={population}
                placeholder={"Set Population"}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            City Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            Details to fill out
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{cityName}</h1>
          <h2>
            City Type <span className={style.minorText2}>{type}</span>
          </h2>
          <h2>
            City Population <span className={style.minorText2}>{population}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CityGen;
