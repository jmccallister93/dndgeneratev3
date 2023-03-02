import Navbar from "../../components/Navbar";
import style from "../../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../../config/supabaseClient";
import { Button } from "primereact/button";
import { e, i, number } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import Items from "../../components/Items";
import { Toast } from "primereact/toast";
import Npcs from "../../components/Npcs";
import GenerateButton from "../../components/GenerateButton";
import ClearButton from "../../components/ClearButton";
import CustomInputText from "../../components/CustomInputText";
import SingleDisplayText from "../../components/SingleDisplayText";
import CustomDropDown from "../../components/CustomDropDown";
import CustomInputNumber from "../../components/CustomInputNumber";
import CustomDataTable from "../../components/CustomDataTable";
import MultipleDisplay from "../../components/MultipleDisplay";
import ExportButtons from "../../components/ExportButtons";
import { jsPDF } from "jspdf";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../../components/InfoModal";
import SectionRandom from "../../components/SectionRandom";
import CustomName from "../../components/CustomName";
import NameDisplay from "../../components/NameDisplay";
import SingleDisplayNumber from "../../components/SingleDisplayNumber";
import ns from "../../stylesheets/Note.module.scss";

const LocationCreate = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

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

  const [atmosphere, setAtmosphere] = useState("");
  const [atmospheres, setAtmospheres] = useState("");
  const [atmosphereOptions, setAtmosphereOptions] = useState("");

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

  const divRef = useRef(null);

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
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate NPCs for your games.</p>
      <p>
        You can use the Generate button in the top left to randomly set all
        fields to random values.
      </p>
      <p>
        You can also use the Generate button in each section to randomly set the
        fields in that section.
      </p>
      <p>You can also manually set the fields to whatever you want.</p>
      <p>
        Once a value has been set you can click on the field in the display to
        edit it.
      </p>
      <p>
        Once you have set all the fields to your liking, you can click the
        Export button to export the NPC to file of your choice.
      </p>
    </div>
  );

  return (
    <div className={ns.mainWrapper}>
      <div className={style.topHeader}>
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
                atmosphereOptions,
                cultureOptions,
                terrainOptions,
                landmarkOptions,
                governOptions,
              ]}
              setItem={[
                setType,
                setSize,
                setAtmosphere,
                setCulture,
                setTerrain,
                setLandmark,
                setGovern,
              ]}
              selectedItemOptions={[
                guildOptions,
                factionOptions,
                eventOptions,
                npcOptions,
                districtOptions,
                buildingOptions,
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
              maxNumber={[100000]}
              minNumber={[100]}
            />
            <ClearButton
              setStringState={[
                setCityName,
                setType,
                setSize,
                setPopulation,
                setAtmosphere,
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
            {/* Export Btns */}
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={npc} />
              </div>
            </h1>
            {/* ToolTip */}
            <div className={style.infoCircle}>
              <i className="pi pi-info-circle" onClick={showInfo}>
                <Tooltip
                  target=".pi-info-circle"
                  position="bottom"
                  content="How To Use Guide"
                />
                <InfoModal
                  header={"NPC Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Location Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[type, size]}
              valueOptions={[typeOptions, sizeOptions]}
              setValue={[setType, setSize]}
              numberItem={[population]}
              setNumberItem={[setPopulation]}
              numberMax={[100000]}
              numberMin={[100]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={cityName}
                setName={setCityName}
                setNames={setCityNames}
                setNameOptions={setCityNameOptions}
                nameOptions={cityNameOptions}
                title={"Name"}
                placeholder={"Set Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setType}
                setPlural={setTypes}
                setOptions={setTypeOptions}
                options={typeOptions}
                h1Title={"Type"}
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
                h1Title={"Size"}
                placeholder={"Set Size"}
                value={size}
                valueOptions={sizeOptions}
              />
              <CustomInputNumber
                setSingular={setPopulation}
                value={population}
                placeholder={"Set Population"}
                maxNumber={100000}
                minNumber={100}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showFeature}>
              Features{" "}
              {isFeatureActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[atmosphere, culture, terrain, landmark]}
              valueOptions={[
                atmosphereOptions,
                cultureOptions,
                terrainOptions,
                landmarkOptions,
                
              ]}
              setValue={[
                setAtmosphere,
                setCulture,
                setTerrain,
                setLandmark,
                
              ]}
            />
          </div>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setAtmosphere}
                setPlural={setAtmospheres}
                setOptions={setAtmosphereOptions}
                options={atmosphereOptions}
                h1Title={"Atmosphere"}
                placeholder={"Set Atmosphere"}
                value={atmosphere}
                valueOptions={atmosphereOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setCulture}
                setPlural={setCultures}
                setOptions={setCultureOptions}
                options={cultureOptions}
                h1Title={"Culture"}
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
                h1Title={"Terrain"}
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
                h1Title={"Landmark"}
                placeholder={"Set Landmark"}
                value={landmark}
                valueOptions={landmarkOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showDetails}>
              Details{" "}
              {isDetailActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[govern]}
              valueOptions={[governOptions]}
              setValue={[setGovern]}
              selectedValue={[
                selectedGuild,
                selectedFaction,
                selectedEvent,
                selectedNpc,
              ]}
              setSelectedValue={[
                setSelectedGuild,
                setSelectedFaction,
                setSelectedEvent,
                setSelectedNpc,
              ]}
              selectedValueOptions={[
                guildOptions,
                factionOptions,
                eventOptions,
                npcOptions,
              ]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setGovern}
                setPlural={setGoverns}
                setOptions={setGovernOptions}
                options={governOptions}
                h1Title={"Government"}
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
          <div className={style.sectionOption}>
          <h1 className={style.subHeader} onClick={showLayout}>
            Layout{" "}
            {isBasicActive ? (
              <i className="pi pi-chevron-down"></i>
            ) : (
              <i className="pi pi-chevron-right"></i>
            )}
          </h1>
          <SectionRandom
            selectedValue={[
              selectedDistrict,
              selectedBuilding,
            ]}
            setSelectedValue={[
              setSelectedDistrict,
              setSelectedBuilding,
            ]}
            selectedValueOptions={[
              districtOptions,
              buildingOptions,
            ]}
          />
        </div>
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
        <div ref={divRef} className={style.display}>
          <NameDisplay value={cityName} setNewValue={setCityName} />
          <h2>
            Type{" "}
            <SingleDisplayText
              value={type}
              setNewValue={setType}
            />
          </h2>
          <h2>
            Size{" "}
            <SingleDisplayText
              value={size}
              setNewValue={setSize}
            />
          </h2>
          <h2>
            Population{" "}
            <SingleDisplayNumber
              value={population}
              setNewValue={setPopulation}
            />
          </h2>
          <hr className={ns.lineBreak}/>
          <h2>
            Atmosphere{" "}
            <SingleDisplayText
              value={atmosphere}
              setNewValue={setAtmosphere}
            />
          </h2>
          <h2>
            Culture{" "}
            <SingleDisplayText
              value={culture}
              setNewValue={setCulture}
            />
          </h2>
          <h2>
            Terrain{" "}
            <SingleDisplayText
              value={terrain}
              setNewValue={setTerrain}
            />
          </h2>
          <h2>
            Landmark{" "}
            <SingleDisplayText
              value={landmark}
              setNewValue={setLandmark}
            />
          </h2>
          <hr className={ns.lineBreak}/>
          <h2>
            Government{" "}
            <SingleDisplayText
              value={govern}
              setNewValue={setGoverns}
            />
          </h2>
          <h2>
            Guilds{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedGuild}
                list={guildList}
                setList={setGuildList}
              />
            </span>
          </h2>
          <h2>
            Factions{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedFaction}
                list={factionList}
                setList={setFactionList}
              />
            </span>
          </h2>
          <h2>
            Events{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedEvent}
                list={eventList}
                setList={setEventList}
              />
            </span>
          </h2>
          <h2>
            NPCs{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedNpc}
                list={npcList}
                setList={setNpcList}
              />
            </span>
          </h2>
          <hr className={ns.lineBreak}/>
          <h2>
            Districts{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedDistrict}
                list={districtList}
                setList={setDistrictList}
              />
            </span>
          </h2>
          <h2>
            Buildings{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBuilding}
                list={buildingList}
                setList={setBuildingList}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LocationCreate;
