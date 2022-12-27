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
import SingleDisplayText from "../components/SingleDisplayText";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import ExportButtons from "../components/ExportButtons";
import { jsPDF } from "jspdf";

const CityGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);

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
  const [cultures, setCultures] = useState("");
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
  const [selectedGuild, setSelectedGuild] = useState([]);
  const [guildList, setGuildList] = useState([]);

  const [event, setEvent] = useState("");
  const [events, setEvents] = useState("");
  const [eventOptions, setEventOptions] = useState("");
  const [selectedEvent, setSelectedEvent] = useState([]);
  const [eventList, setEventList] = useState([]);

  const [faction, setFaction] = useState("");
  const [factions, setFactions] = useState("");
  const [factionOptions, setFactionOptions] = useState("");
  const [selectedFaction, setSelectedFaction] = useState([]);
  const [factionList, setFactionList] = useState([]);

  const [npc, setNpc] = useState("");
  const [npcs, setNpcs] = useState("");
  const [npcOptions, setNpcOptions] = useState("");
  const [selectedNpc, setSelectedNpc] = useState([]);
  const [npcList, setNpcList] = useState([]);

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState([]);
  const [buildingList, setBuildingList] = useState([]);

  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState("");
  const [districtOptions, setDistrictOptions] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [districtList, setDistrictList] = useState([]);

  const [numberSize, setNumebrSize] = useState("");

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showFeature = (e) => {
    setIsFeatureActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showLayout = (e) => {
    setIsLayoutActive((current) => !current);
  };


  const onExport = () => {
    var doc = new jsPDF("portrait");
    doc.text(
      20,
      20,
      `Name: ${cityName} 
        Type: ${type} 
        Size: ${size} 
        Population: ${population} 
        Atmosphere: ${atmosphere} 
        Culture: ${culture} 
        Terrain: ${terrain} 
        Landmark: ${landmark} 
        Government: ${govern} 
        Guilds: ${guildList}
        Factions: ${factionList}
        Events: ${eventList}
        NPCs: ${npcList}
        Districts: ${districtList}
        Buildings: ${buildingList} `
    );
    doc.save("Test.pdf");
  };
  

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>City Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[
                type,
                size,
                atmosphere,
                culture,
                terrain,
                landmark,
                govern,
              ]}
              itemOptions={[
                typeOptions,
                sizeOptions,
                atmoshpereOptions,
                cultureOptions,
                terrainOptions,
                landmarkOptions,
                governOptions,
                guildOptions,
                factionOptions,
                eventOptions,
                npcOptions,
                districtOptions,
                buildingOptions,
              ]}
              setItem={[
                setType,
                setSize,
                setAtmoshpere,
                setCulture,
                setTerrain,
                setLandmark,
                setGovern,
              ]}
              selectedItems={[
                selectedGuild,
                selectedFaction,
                selectedEvent,
                selectedNpc,
                selectedDistrict,
                selectedBuilding,
              ]}
              setSelectedItem={[
                setSelectedGuild,
                setSelectedFaction,
                setSelectedEvent,
                setSelectedNpc,
                setSelectedDistrict,
                setSelectedBuilding,
              ]}
              numberItem={[population]}
              setNumberItem={[setPopulation]}
            />
            <ClearButton
              setStringState={[
                setCityName,
                setType,
                setSize,
                setPopulation,
                setAtmoshpere,
                setCulture,
                setTerrain,
                setLandmark,
                setGovern,
              ]}
              setArrayState={[
                setSelectedGuild,
                setSelectedEvent,
                setSelectedFaction,
                setSelectedNpc,
                setSelectedBuilding,
                setSelectedDistrict,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          {/* <ExportButtons
            headersSingular={[
              "City Name",
              "Type",
              "Population",
              "Atmosphere",
              "Terrain",
              "Landmark",
              "Government",
              
            ]}
            headersPlural={[
                "Guilds",
                "Factions",
                "Events",
                "NPCs",
                "Districts",
                "Buildings",
            ]}
            combinedObj={
              { Name: cityName ,
               Type: type,
               Population: population,
               Atmosphere: atmosphere,
               Terrain: terrain,
               Landmark: landmark,
               Government: govern,
               Guilds: selectedGuild,
               Factions: selectedFaction,
               Events: selectedEvent ,
               NPCs: selectedNpc ,
               Districts: selectedDistrict ,
               Buildings: selectedBuilding }
            }
          /> */}
          {/* <div>
            <h1>Export to PDF</h1>
            <button className={style.btnName} onClick={onExport}>
              PDF
            </button>
          </div> */}
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
              <CustomDropDown
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
              <CustomDropDown
                tableName={"citySize"}
                setSingular={setSize}
                setPlural={setSizes}
                setOptions={setSizeOptions}
                options={sizeOptions}
                h1Title={"City Size"}
                placeholder={"Set Size"}
                value={size}
                valueOptions={sizeOptions}
              />
              <CustomInputNumber
                setSingular={setPopulation}
                h1Title={"Population"}
                value={population}
                placeholder={"Set Population"}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showFeature}>
            City Features
          </h1>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setAtmoshpere}
                setPlural={setAtmoshperes}
                setOptions={setAtmoshpereOptions}
                options={atmoshpereOptions}
                h1Title={"City Atmosphere"}
                placeholder={"Set Atmosphere"}
                value={atmosphere}
                valueOptions={atmoshpereOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setCulture}
                setPlural={setCultures}
                setOptions={setCultureOptions}
                options={cultureOptions}
                h1Title={"City Culture"}
                placeholder={"Set Culture"}
                value={culture}
                valueOptions={cultureOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setTerrain}
                setPlural={setTerrains}
                setOptions={setTerrainOptions}
                options={terrainOptions}
                h1Title={"City Terrain"}
                placeholder={"Set Terrain"}
                value={terrain}
                valueOptions={terrainOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setLandmark}
                setPlural={setLandmarks}
                setOptions={setLandmarkOptions}
                options={landmarkOptions}
                h1Title={"City Landmark"}
                placeholder={"Set Landmark"}
                value={landmark}
                valueOptions={landmarkOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            City Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setGovern}
                setPlural={setGoverns}
                setOptions={setGovernOptions}
                options={governOptions}
                h1Title={"City Government"}
                placeholder={"Set Government"}
                value={govern}
                valueOptions={governOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setGuild}
                setPlural={setGuilds}
                setOptions={setGuildOptions}
                h1Title={"Guilds"}
                dialogHeader={"Guilds"}
                selectedItem={selectedGuild}
                setSelectedItem={setSelectedGuild}
                list={guildList}
                setList={setGuildList}
                valueOptions={guildOptions}
              />

              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFaction}
                setPlural={setFactions}
                setOptions={setFactionOptions}
                h1Title={"Factions"}
                dialogHeader={"Factions"}
                selectedItem={selectedFaction}
                setSelectedItem={setSelectedFaction}
                list={factionList}
                setList={setFactionList}
                valueOptions={factionOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setEvent}
                setPlural={setEvents}
                setOptions={setEventOptions}
                h1Title={"Events"}
                dialogHeader={"Events"}
                selectedItem={selectedEvent}
                setSelectedItem={setSelectedEvent}
                list={eventList}
                setList={setEventList}
                valueOptions={eventOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setNpc}
                setPlural={setNpcs}
                setOptions={setNpcOptions}
                h1Title={"NPCs"}
                dialogHeader={"NPCs"}
                selectedItem={selectedNpc}
                setSelectedItem={setSelectedNpc}
                list={npcList}
                setList={setNpcList}
                valueOptions={npcOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showLayout}>
            City Layout
          </h1>
          <div className={isLayoutActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setDistrict}
                setPlural={setDistricts}
                setOptions={setDistrictOptions}
                h1Title={"Districts"}
                dialogHeader={"Districts"}
                selectedItem={selectedDistrict}
                setSelectedItem={setSelectedDistrict}
                list={districtList}
                setList={setDistrictList}
                valueOptions={districtOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setBuilding}
                setPlural={setBuildings}
                setOptions={setBuildingOptions}
                h1Title={"Buildings"}
                dialogHeader={"Buildings"}
                selectedItem={selectedBuilding}
                setSelectedItem={setSelectedBuilding}
                list={buildingList}
                setList={setBuildingList}
                valueOptions={buildingOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div id="mainDisplay" className={style.display}>
          <h1>{cityName}</h1>
          <h2>
            Type <span className={style.minorText2}>{type}</span>
          </h2>
          <h2>
            Size <span className={style.minorText2}>{size}</span>
          </h2>
          <h2>
            Population <span className={style.minorText2}>{population}</span>
          </h2>
          <h2>
            Atmoshpere <span className={style.minorText2}>{atmosphere}</span>
          </h2>
          <h2>
            City Terrain <span className={style.minorText2}>{terrain}</span>
          </h2>
          <h2>
            Landmark <span className={style.minorText2}>{landmark}</span>
          </h2>
          <h2>
            Government <span className={style.minorText2}>{govern}</span>
          </h2>
          <h2>
            Guilds{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedGuild}
                setList={setGuildList}
              />
            </span>
          </h2>
          <h2>
            Factions{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedFaction}
                setList={setFactionList}
              />
            </span>
          </h2>
          <h2>
            Events{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedEvent}
                setList={setEventList}
              />
            </span>
          </h2>
          <h2>
            NPCs{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedNpc}
                setList={setNpcList}
              />
            </span>
          </h2>
          <h2>
            Districts{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedDistrict}
                setList={setDistrictList}
              />
            </span>
          </h2>
          <h2>
            Buildings{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBuilding}
                setList={setBuildingList}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CityGen;