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
import ExportButtons from "../components/ExportButtons";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import CustomName from "../components/CustomName";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";

const BuildingGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isRoomActive, setIsRoomActive] = useState(false);
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);

  const [buildingName, setBuildingName] = useState("");
  const [buildingNames, setBuildingNames] = useState("");
  const [buildingNameOptions, setBuildingNameOptions] = useState("");

  const [buildingCategory, setBuildingCategory] = useState("");
  const [buildingCategorys, setBuildingCategorys] = useState("");
  const [buildingCategoryOptions, setBuildingCategoryOptions] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState("");
  const [buildingTypeOptions, setBuildingTypeOptions] = useState("");
  const [buildingTypeCategory, setBuildingTypeCategory] = useState();
  const [buildingList, setBuildingList] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState(null);
  const [dialogVisibleBuildingType, setDialogVisibleBuildingType] =
    useState(false);

  const [buildingColor, setBuildingColor] = useState("");
  const [buildingColors, setBuildingColors] = useState("");
  const [buildingColorOptions, setBuildingColorOptions] = useState("");
  const [selectedBuildingColor, setSelectedBuildingColor] = useState(null);
  const [dialogVisibleBuildingColor, setDialogVisibleBuildingColor] =
    useState(false);

  const [buildingSound, setBuildingSound] = useState("");
  const [buildingSounds, setBuildingSounds] = useState("");
  const [buildingSoundOptions, setBuildingSoundOptions] = useState("");
  const [selectedBuildingSound, setSelectedBuildingSound] = useState(null);
  const [dialogVisibleBuildingSound, setDialogVisibleBuildingSound] =
    useState(false);

  const [buildingSmell, setBuildingSmell] = useState("");
  const [buildingSmells, setBuildingSmells] = useState("");
  const [buildingSmellOptions, setBuildingSmellOptions] = useState("");
  const [selectedBuildingSmell, setSelectedBuildingSmell] = useState(null);
  const [dialogVisibleBuildingSmell, setDialogVisibleBuildingSmell] =
    useState(false);

  const [buildingStyle, setBuildingStyle] = useState("");
  const [buildingStyles, setBuildingStyles] = useState("");
  const [buildingStyleOptions, setBuildingStyleOptions] = useState("");
  const [selectedBuildingStyle, setSelectedBuildingStyle] = useState(null);
  const [dialogVisibleBuildingStyle, setDialogVisibleBuildingStyle] =
    useState(false);

  const [buildingEnterance, setBuildingEnterance] = useState("");
  const [buildingEnterances, setBuildingEnterances] = useState("");
  const [buildingEnteranceOptions, setBuildingEnteranceOptions] = useState("");

  const [buildingRoomCount, setBuildingRoomCount] = useState("");
  const [buildingRoomCounts, setBuildingRoomCounts] = useState("");
  const [buildingRoomCountOptions, setBuildingCountOptions] = useState("");

  const [buildingWindow, setBuildingWindow] = useState("");
  const [buildingWindows, setBuildingWindows] = useState("");
  const [buildingWindowOptions, setBuildingWindowOptions] = useState("");

  const [buildingFloor, setBuildingFloor] = useState("");
  const [buildingFloors, setBuildingFloors] = useState("");
  const [buildingFloorOptions, setBuildingFloorOptions] = useState("");

  const [buildingRoom, setBuildingRoom] = useState("");
  const [buildingRooms, setBuildingRooms] = useState("");
  const [buildingRoomOptions, setBuildingRoomOptions] = useState("");
  const [selectedBuildingRoom, setSelectedBuildingRoom] = useState(null);
  const [dialogVisibleBuildingRoom, setDialogVisibleBuildingRoom] =
    useState(false);

  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState("");
  const [roomTypeOptions, setRoomTypeOptions] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [dialogVisibleRoomType, setDialogVisibleRoomType] = useState(false);
  const [roomTypeList, setRoomTypeList] = useState([]);

  const [roomCount, setRoomCount] = useState("");

  const [npc, setNpc] = useState("");
  const [npcs, setNpcs] = useState("");
  const [npcOptions, setNpcOptions] = useState([]);
  const [selectedNpc, setSelectedNpc] = useState(null);
  const [dialogVisibleNpc, setDialogVisibleNpc] = useState(false);
  const [npcList, setNpcList] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [dialogVisibleItem, setDialogVisibleItem] = useState(false);
  const [itemList, setItemList] = useState([]);
  //   const [itemDisplay, setItemDisplay] = useState();

  const [housingOptions, setHousingOptions] = useState("");
  const [tradeOptions, setTradeOptions] = useState("");
  const [religiousOptions, setReligiousOptions] = useState("");
  const [farmOptions, setFarmOptions] = useState("");
  const [recreationalOptions, setRecreationalOptions] = useState("");
  const [educationOptions, setEducationOptions] = useState("");
  const [militaryOptions, setMilitaryOptions] = useState("");
  const [institutionalOptions, setInstitutionalOptions] = useState("");
  const [mineOptions, setMineOptions] = useState("");
  const [agricultureOptions, setAgricultureOptions] = useState("");

  const [align, setAlign] = useState("");
  const [bond, setBond] = useState("");
  const [feature, setFeature] = useState("");
  const [interaction, setInteraction] = useState("");
  const [prof, setProf] = useState("");
  const [mannerism, setMannerism] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [talent, setTalent] = useState("");
  const [name, setName] = useState("");
  const [str, setStr] = useState("");
  const [strMod, setStrMod] = useState("");
  const [dex, setDex] = useState("");
  const [dexMod, setDexMod] = useState("");
  const [con, setCon] = useState("");
  const [conMod, setConMod] = useState("");
  const [int, setInt] = useState("");
  const [intMod, setIntMod] = useState("");
  const [wis, setWis] = useState("");
  const [wisMod, setWisMod] = useState("");
  const [cha, setCha] = useState("");
  const [chaMod, setChaMod] = useState("");
  const [hook, setHook] = useState("");
  const [desc, setDesc] = useState("");

  const [isInfoActive, setIsInfoActive] = useState(false);
  const divRef = useRef(null);

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showLayout = (e) => {
    setIsLayoutActive((current) => !current);
  };
  
  const showRooms = (e) => {
    setIsRoomActive((current) => !current);
  };
  const showNpcs = (e) => {
    setIsNpcActive((current) => !current);
  };
  const showItems = (e) => {
    setIsItemActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

   //Info content
   const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Buildings for your games.</p>
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
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            <GenerateButton 
            generateItems={[

            ]}
            itemOptions={[

            ]}
            setItem={[

            ]}
            selectedItemOptions={[

            ]}
            selectedItems={[

            ]}
            setSelectedItems={[

            ]}
            />
            <ClearButton 
            setStringState={[
            ]}
            setArrayState={[
            ]}
            />
            <h1>
              Export
              <div>
                <ExportButtons div={divRef} />
              </div>
            </h1>
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
          <h1>Building Options</h1>
          <div className={style.sectionOption}>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
          </h1>
          <SectionRandom />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
              tableName={"names"}
              name={buildingName}
              setName={setBuildingName}
              setNames={setBuildingNames}
              setNameOptions={setBuildingNameOptions}
              nameOptions={buildingNameOptions}
              title={"Building Name"}
              placeholder={"Set Name"} 
              />
              <CustomDropDown
               tableName={"buildingCategory"}
               setSingular={setBuildingCategory}
               setPlural={setBuildingCategorys}
               setOptions={setBuildingCategoryOptions}
               options={buildingCategoryOptions}
               h1Title={"Category"}
               placeholder={"Set Category"}
               value={buildingCategory}
               valueOptions={buildingCategoryOptions}
             />
            <CustomDropDown
              tableName={"buildingType"}
              setSingular={setBuildingType}
              setPlural={setBuildingTypes}
              setOptions={setBuildingTypeOptions}
              options={buildingTypeOptions}
              h1Title={"Type"}
              placeholder={"Set Type"}
              value={buildingType}
              valueOptions={buildingTypeOptions}
            />
            </div>
          </div>
          <div className={style.sectionOption}>
          <h1 className={style.subHeader} onClick={showLayout}>
            Building Layout
          </h1>
          <SectionRandom />
          </div>
          <div className={isLayoutActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
               setSingular={setBuildingFloor}
               value={buildingFloor}
               placeholder={"Set Count"}
               maxNumber={10000}
               minNumber={0}
               />
              <CustomInputNumber
                setSingular={setBuildingEnterance}
                value={buildingEnterance}
                placeholder={"Set Count"}
                maxNumber={10000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setBuildingWindow}
                value={buildingWindow}
                placeholder={"Set Count"}
                maxNumber={10000}
                minNumber={0}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Building Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            {buildingStyleDrop}
            {buildingColorDrop}
            {buildingSoundDrop}
          </div>
          <h1 className={style.subHeader} onClick={showRooms}>
            Rooms
          </h1>
          <div className={isRoomActive ? style.subsection : style.hidden}>
            {roomNumber}
            {roomTypeDialog}
          </div>
          <h1 className={style.subHeader} onClick={showNpcs}>
            NPCs
          </h1>
          <div className={isNpcActive ? style.subsection : style.hidden}>
            <Npcs
              onNameChangeProp={nameChangeProp}
              onRaceChangeProp={raceChangeProp}
              onSexChangeProp={sexChangeProp}
              onAlignChangeProp={alignChangeProp}
              onProfChangeProp={profChangeProp}
              onFeatureChangeProp={featureChangeProp}
              onTalentChangeProp={talentChangeProp}
              onMannerismChangeProp={mannerismChangeProp}
              onInteractionChangeProp={interactionChangeProp}
              onBondChangeProp={bondChangeProp}
              onDescChangeProp={descChangeProp}
            />
          </div>
          <h1 className={style.subHeader} onClick={showItems}>
            Items
          </h1>
          <div className={isItemActive ? style.subsection : style.hidden}>
            <Items
              h1Title={"Items"}
              dialogHeader={"Items"}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              header={header}
              itemList={itemList}
              setItemList={setItemList}
              valueOptions={itemOptions}
              options={itemOptions}
            ></Items>
          </div>
        </div>
        {/* Main Display */}
        <div className={style.display}>
          <h1>{buildingName}</h1>
          <h2>
            Category{" "}
            <span className={style.minorText2}>{buildingCategory}</span>
          </h2>
          <h2>
            Type <span className={style.minorText2}>{buildingType}</span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Floors{" "}
            <span className={style.minorText2}>{buildingFloor}</span>
          </h2>
          <h2>
            Building Enterances{" "}
            <span className={style.minorText2}>{buildingEnterance}</span>
          </h2>
          <h2>
            Building Windows{" "}
            <span className={style.minorText2}>{buildingWindow}</span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Style{" "}
            <span className={style.minorText2}>{buildingStyle}</span>
          </h2>
          <h2>
            Building Color{" "}
            <span className={style.minorText2}>{buildingColor}</span>
          </h2>
          <h2>
            Building Ambiance{" "}
            <span className={style.minorText2}>{buildingSound}</span>
          </h2>

          <hr className={style.lineBreak} />
          <h2>
            Room Count <span className={style.minorText2}>{buildingRoom}</span>
          </h2>
          <h2>
            Specific Rooms{" "}
            <div className={style.detesContainer}>{roomTypeDisplay}</div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            NPCs <div className={style.detesContainer}>{npcDisplay}</div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Items <span className={style.minorText2}>{itemDisplay}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
