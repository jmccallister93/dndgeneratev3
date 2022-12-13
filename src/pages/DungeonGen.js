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
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import ConstrainedDataTable from "../components/ConstrainedDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import CustomDropDown from "../components/CustomDropDown";

const DungeonGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isEncounterActive, setIsEncounterActive] = useState(false);
  const [isSettingActive, setIsSettingActive] = useState(false);

  const [dungeonName, setDungeonName] = useState("");
  const [dungeonNames, setDungeonNames] = useState("");
  const [dungeonNameOptions, setDungeonNameOptions] = useState("");

  const [enteranceCount, setEnteranceCount] = useState("");
  const [enteranceCounts, setEnteranceCounts] = useState("");
  const [enteranceCountOptions, setEnteranceCountOptions] = useState("");

  const [enteranceType, setEnteranceType] = useState("");
  const [enteranceTypes, setEnteranceTypes] = useState("");
  const [enteranceTypeOptions, setEnteranceTypeOptions] = useState("");
  const [enteranceTypeList, setEnteranceTypeList] = useState([]);
  const [selectedEnteranceType, setSelectedEnteranceType] = useState([]);

  const [roomCount, setRoomCount] = useState("");
  const [roomCounts, setRoomCounts] = useState("");
  const [roomCountOptions, setRoomCountOptions] = useState("");

  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState("");
  const [roomTypeOptions, setRoomTypeOptions] = useState("");
  const [roomTypeList, setRoomTypeList] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState([]);

  const [floorCount, setFloorCount] = useState("");
  const [floorCounts, setFloorCounts] = useState("");
  const [floorCountOptions, setFloorCountOptions] = useState("");

  const [lootCount, setLootCount] = useState("");
  const [lootCounts, setLootCounts] = useState("");
  const [lootCountOptions, setLootCountOptions] = useState("");

  const [lootType, setLootType] = useState("");
  const [lootTypes, setLootTypes] = useState("");
  const [lootTypeOptions, setLootTypeOptions] = useState("");
  const [lootTypeList, setLootTypeList] = useState([]);
  const [selectedLootType, setSelectedLootType] = useState([]);

  const [npcCount, setNpcCount] = useState("");
  const [npcCounts, setNpcCounts] = useState("");
  const [npcCountOptions, setNpcCountOptions] = useState("");

  const [npcType, setNpcType] = useState("");
  const [npcTypes, setNpcTypes] = useState("");
  const [npcTypeOptions, setNpcTypeOptions] = useState("");
  const [npcTypeList, setNpcTypeList] = useState([]);
  const [selectedNpcType, setSelectedNpcType] = useState([]);

  const [monsterCount, setMonsterCount] = useState("");
  const [monsterCounts, setMonsterCounts] = useState("");
  const [monsterCountOptions, setMonsterCountOptions] = useState("");

  const [monsterType, setMonsterType] = useState("");
  const [monsterTypes, setMonsterTypes] = useState("");
  const [monsterTypeOptions, setMonsterTypeOptions] = useState("");
  const [monsterTypeList, setMonsterTypeList] = useState([]);
  const [selectedMonsterType, setSelectedMonsterType] = useState([]);

  const [trapCount, setTrapCount] = useState("");
  const [trapCounts, setTrapCounts] = useState("");
  const [trapCountOptions, setTrapCountOptions] = useState("");

  const [trapType, setTrapType] = useState("");
  const [trapTypes, setTrapTypes] = useState("");
  const [trapTypeOptions, setTrapTypeOptions] = useState("");
  const [trapTypeList, setTrapTypeList] = useState([]);
  const [selectedTrapType, setSelectedTrapType] = useState([]);

  const [puzzleCount, setPuzzleCount] = useState("");
  const [puzzleCounts, setPuzzleCounts] = useState("");
  const [puzzleCountOptions, setPuzzleCountOptions] = useState("");

  const [puzzleType, setPuzzleType] = useState("");
  const [puzzleTypes, setPuzzleTypes] = useState("");
  const [puzzleTypeOptions, setPuzzleTypeOptions] = useState("");
  const [puzzleTypeList, setPuzzleTypeList] = useState([]);
  const [selectedPuzzleType, setSelectedPuzzleType] = useState([]);

  const [terrainType, setTerrainType] = useState("");
  const [terrainTypes, setTerrainTypes] = useState("");
  const [terrainTypeOptions, setTerrainTypeOptions] = useState("");

  const [atmosphereType, setAtmosphereType] = useState("");
  const [atmosphereTypes, setAtmosphereTypes] = useState("");
  const [atmosphereTypeOptions, setAtmosphereTypeOptions] = useState("");

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showEncounters = (e) => {
    setIsEncounterActive((current) => !current);
  };
  const showSetting = (e) => {
    setIsSettingActive((current) => !current);
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Dungeon Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setStringState={[
                setDungeonName,
                setEnteranceCount,
                setFloorCount,
                setRoomCount,
                setLootCount,
                setNpcCount,
                setMonsterCount,
                setTrapCount,
                setPuzzleCount,
                setTerrainType,
                setAtmosphereType,
              ]}
              setArrayState={[
                setSelectedEnteranceType,
                setSelectedRoomType,
                setSelectedLootType,
                setSelectedNpcType,
                setSelectedMonsterType,
                setSelectedTrapType,
                setSelectedPuzzleType,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Dungeon Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <CustomInputText
              title={"Dungeon Name"}
              input={dungeonName}
              setInput={setDungeonName}
              placeholder={"Set Dungeon Name"}
            />
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Dungeon Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setEnteranceCount}
                h1Title={"Enterance Count"}
                value={enteranceCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setEnteranceType}
                setPlural={setEnteranceTypes}
                setOptions={setEnteranceTypeOptions}
                h1Title={"Enterance Type"}
                dialogHeader={"Enteracne Type"}
                selectedItem={selectedEnteranceType}
                setSelectedItem={setSelectedEnteranceType}
                list={enteranceTypeList}
                setList={setEnteranceTypeList}
                valueOptions={enteranceTypeOptions}
                constrainedValue={enteranceCount}
              />
              <CustomInputNumber
                setSingular={setRoomCount}
                h1Title={"Room Count"}
                value={roomCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setRoomType}
                setPlural={setRoomTypes}
                setOptions={setRoomTypeOptions}
                h1Title={"Room Type"}
                dialogHeader={"Room Type"}
                selectedItem={selectedRoomType}
                setSelectedItem={setSelectedRoomType}
                list={roomTypeList}
                setList={setRoomTypeList}
                valueOptions={roomTypeOptions}
                constrainedValue={roomCount}
              />
              <CustomInputNumber
                setSingular={setFloorCount}
                h1Title={"Floor Count"}
                value={floorCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <CustomInputNumber
                setSingular={setLootCount}
                h1Title={"Loot Count"}
                value={lootCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setLootType}
                setPlural={setLootTypes}
                setOptions={setLootTypeOptions}
                h1Title={"Loot Type"}
                dialogHeader={"Loot Type"}
                selectedItem={selectedLootType}
                setSelectedItem={setSelectedLootType}
                list={lootTypeList}
                setList={setLootTypeList}
                valueOptions={lootTypeOptions}
                constrainedValue={lootCount}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showEncounters}>
            Dungeon Encounters
          </h1>
          <div className={isEncounterActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setNpcCount}
                h1Title={"NPC Count"}
                value={npcCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setNpcType}
                setPlural={setNpcTypes}
                setOptions={setNpcTypeOptions}
                h1Title={"NPC Type"}
                dialogHeader={"NPC Type"}
                selectedItem={selectedNpcType}
                setSelectedItem={setSelectedNpcType}
                list={npcTypeList}
                setList={setNpcTypeList}
                valueOptions={npcTypeOptions}
                constrainedValue={npcCount}
              />
              <CustomInputNumber
                setSingular={setMonsterCount}
                h1Title={"Monster Count"}
                value={monsterCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setMonsterType}
                setPlural={setMonsterTypes}
                setOptions={setMonsterTypeOptions}
                h1Title={"Monster Type"}
                dialogHeader={"Monster Type"}
                selectedItem={selectedMonsterType}
                setSelectedItem={setSelectedMonsterType}
                list={monsterTypeList}
                setList={setMonsterTypeList}
                valueOptions={monsterTypeOptions}
                constrainedValue={monsterCount}
              />
              <CustomInputNumber
                setSingular={setTrapCount}
                h1Title={"Trap Count"}
                value={trapCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setTrapType}
                setPlural={setTrapTypes}
                setOptions={setTrapTypeOptions}
                h1Title={"Trap Type"}
                dialogHeader={"Trap Type"}
                selectedItem={selectedTrapType}
                setSelectedItem={setSelectedTrapType}
                list={trapTypeList}
                setList={setTrapTypeList}
                valueOptions={trapTypeOptions}
                constrainedValue={trapCount}
              />
              <CustomInputNumber
                setSingular={setPuzzleCount}
                h1Title={"Puzzle Count"}
                value={puzzleCount}
                placeholder={"Set Count"}
                maxNumber={5}
              />
              <ConstrainedDataTable
                tableName={"itemsTypes"}
                setSingular={setPuzzleType}
                setPlural={setPuzzleTypes}
                setOptions={setPuzzleTypeOptions}
                h1Title={"Puzzle Type"}
                dialogHeader={"Puzzle Type"}
                selectedItem={selectedPuzzleType}
                setSelectedItem={setSelectedPuzzleType}
                list={puzzleTypeList}
                setList={setPuzzleTypeList}
                valueOptions={puzzleTypeOptions}
                constrainedValue={puzzleCount}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showSetting}>
            Dungeon Setting
          </h1>
          <div className={isSettingActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
              tableName={"itemsTypes"}
                setSingular={setAtmosphereType}
                h1Title={"Atmosphere Type"}
                value={atmosphereType}
                valueOptions={atmosphereTypeOptions}
              />
              <CustomDropDown
              tableName={"itemsTypes"}
                setSingular={setTerrainType}
                h1Title={"Terrain Type"}
                value={terrainType}
                valueOptions={terrainTypeOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{dungeonName}</h1>
          <h2>
            Enterances{" "}
            <span className={style.minorText2}>{enteranceCount}</span>
          </h2>
          <h2>
            Enterance Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={enteranceTypeList}
                selectedItem={selectedEnteranceType}
              />
            </span>
          </h2>
          <h2>
            Rooms <span className={style.minorText2}>{roomCount}</span>
          </h2>
          <h2>
            Room Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={roomTypeList}
                selectedItem={selectedRoomType}
              />
            </span>
          </h2>
          <h2>
            Floors <span className={style.minorText2}>{floorCount}</span>
          </h2>
          <h2>
            Loot <span className={style.minorText2}>{lootCount}</span>
          </h2>
          <h2>
            Loot Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={lootTypeList}
                selectedItem={selectedLootType}
              />
            </span>
          </h2>
          <h2>
            NPC Count <span className={style.minorText2}>{npcCount}</span>
          </h2>
          <h2>
            NPC Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay list={npcTypeList} selectedItem={selectedNpcType} />
            </span>
          </h2>
          <h2>
            Monster Count <span className={style.minorText2}>{monsterCount}</span>
          </h2>
          <h2>
            Monster Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={monsterTypeList}
                selectedItem={selectedMonsterType}
              />
            </span>
          </h2>
          <h2>
            Trap Count <span className={style.minorText2}>{trapCount}</span>
          </h2>
          <h2>
            Trap Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={trapTypeList}
                selectedItem={selectedTrapType}
              />
            </span>
          </h2>
          <h2>
            Puzzle Count <span className={style.minorText2}>{puzzleCount}</span>
          </h2>
          <h2>
            Puzzle Types{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                list={puzzleTypeList}
                selectedItem={selectedPuzzleType}
              />
            </span>
          </h2>
          <h2>
            Atmosphere Type{" "}
            <span className={style.minorText2}>{atmosphereType}</span>
          </h2>
          <h2>
            Terrain Type <span className={style.minorText2}>{terrainType}</span>
          </h2>

        </div>
      </div>
    </div>
  );
};

export default DungeonGen;
