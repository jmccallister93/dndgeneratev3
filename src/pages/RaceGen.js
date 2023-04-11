import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
import MultipleDisplay from "../components/MultipleDisplay";
import CustomInputNumber from "../components/CustomInputNumber";
const RaceGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [raceName, setRaceName] = useState("");
  const [raceNames, setRaceNames] = useState("");
  const [raceNameOptions, setRaceNameOptions] = useState("");

  const [skinType, setSkinType] = useState("");
  const [skinTypes, setSkinTypes] = useState("");
  const [skinTypeOptions, setSkinTypeOptions] = useState("");

  const [skinColor, setSkinColor] = useState("");
  const [skinColors, setSkinColors] = useState("");
  const [skinColorOptions, setSkinColorOptions] = useState("");
  const [skinColorList, setSkinColorList] = useState([]);
  const [selectedSkinColor, setSelectedSkinColor] = useState([]);

  const [hairType, setHairType] = useState("");
  const [hairTypes, setHairTypes] = useState("");
  const [hairTypeOptions, setHairTypeOptions] = useState("");

  const [hairColor, setHairColor] = useState("");
  const [hairColors, setHairColors] = useState("");
  const [hairColorOptions, setHairColorOptions] = useState("");
  const [hairColorList, setHairColorList] = useState([]);
  const [selectedHairColor, setSelectedHairColor] = useState([]);

  const [eyeColor, setEyeColor] = useState("");
  const [eyeColors, setEyeColors] = useState("");
  const [eyeColorOptions, setEyeColorOptions] = useState("");
  const [eyeColorList, setEyeColorList] = useState([]);
  const [selectedEyeColor, setSelectedEyeColor] = useState([]);

  const [eyeType, setEyeType] = useState("");
  const [eyeTypes, setEyeTypes] = useState("");
  const [eyeTypeOptions, setEyeTypeOptions] = useState("");
  const [eyeTypeList, setEyeTypeList] = useState([]);
  const [selectedEyeType, setSelectedEyeType] = useState([]);

  const [heightMin, setHeightMin] = useState("");
  const [heightMins, setHeightMins] = useState("");
  const [heightMinOptions, setHeightMinOptions] = useState("");

  const [heightMax, setHeightMax] = useState("");
  const [heightMaxs, setHeightMaxs] = useState("");
  const [heightMaxOptions, setHeightMaxOptions] = useState("");

  const [weightMin, setWeightMin] = useState("");
  const [weightMins, setWeightMins] = useState("");
  const [weightMinOptions, setWeightMinOptions] = useState("");

  const [weightMax, setWeightMax] = useState("");
  const [weightMaxs, setWeightMaxs] = useState("");
  const [weightMaxOptions, setWeightMaxOptions] = useState("");

  const [trait, setTrait] = useState("");
  const [traits, setTraits] = useState("");
  const [traitOptions, setTraitOptions] = useState("");
  const [traitList, setTraitList] = useState([]);
  const [selectedTrait, setSelectedTrait] = useState([]);

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
        <h1 className={style.mainHeader}>Race Generator</h1>
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
          <h1>Race Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Race Name"}
                input={raceName}
                setInput={setRaceName}
                placeholder={"Set Race Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setSkinType}
                setPlural={setSkinTypes}
                setOptions={setSkinTypeOptions}
                h1Title={"Skin Type"}
                placeholder={"Set Type"}
                value={skinType}
                valueOptions={skinTypeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSkinColor}
                setPlural={setSkinColors}
                setOptions={setSkinColorOptions}
                h1Title={"Skin Color"}
                dialogHeader={"Set Skin Color"}
                placeholder={"Set Skin Color"}
                valueOptions={skinColorOptions}
                list={skinColorList}
                setList={setSkinColorList}
                selectedItem={selectedSkinColor}
                setSelectedItem={setSelectedSkinColor}
                options={skinColorOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setHairType}
                setPlural={setHairTypes}
                setOptions={setHairTypeOptions}
                h1Title={"Hair Type"}
                placeholder={"Set Type"}
                value={hairType}
                valueOptions={hairTypeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setHairColor}
                setPlural={setHairColors}
                setOptions={setHairColorOptions}
                h1Title={"Hair Color"}
                dialogHeader={"Set Hair Color"}
                placeholder={"Set Hair Color"}
                valueOptions={hairColorOptions}
                list={hairColorList}
                setList={setHairColorList}
                selectedItem={selectedHairColor}
                setSelectedItem={setSelectedHairColor}
                options={hairColorOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setEyeType}
                setPlural={setEyeTypes}
                setOptions={setEyeTypeOptions}
                h1Title={"Eye Type"}
                placeholder={"Set Type"}
                value={eyeType}
                valueOptions={eyeTypeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setEyeColor}
                setPlural={setEyeColors}
                setOptions={setEyeColorOptions}
                h1Title={"Eye Color"}
                dialogHeader={"Set Eye Color"}
                placeholder={"Set Eye Color"}
                valueOptions={eyeColorOptions}
                list={eyeColorList}
                setList={setEyeColorList}
                selectedItem={selectedEyeColor}
                setSelectedItem={setSelectedEyeColor}
                options={eyeColorOptions}
              />
              <CustomInputNumber
                setSingular={setHeightMin}
                h1Title={"Height Min"}
                value={heightMin}
                placeholder={"Min"}
              />
              <CustomInputNumber
                setSingular={setHeightMax}
                h1Title={"Height Max"}
                value={heightMax}
                placeholder={"Max"}
              />
              <CustomInputNumber
                setSingular={setWeightMin}
                h1Title={"Weight Min"}
                value={weightMin}
                placeholder={"Min"}
              />
              <CustomInputNumber
                setSingular={setWeightMax}
                h1Title={"Weight Max"}
                value={weightMax}
                placeholder={"Max"}
              />
              
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Race Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTrait}
                setPlural={setTraits}
                setOptions={setTraitOptions}
                h1Title={"Traits"}
                dialogHeader={"Set Traits"}
                placeholder={"Set Traits"}
                valueOptions={traitOptions}
                list={traitList}
                setList={setTraitList}
                selectedItem={selectedTrait}
                setSelectedItem={setSelectedTrait}
                options={traitOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{raceName}</h1>
          <h2>
            Skin Type <span className={style.minorText2}>{skinType}</span>
          </h2>
          <h2>
            Skin Color{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedSkinColor} />
            </span>
          </h2>
          <h2>
            Hair Type <span className={style.minorText2}>{hairType}</span>
          </h2>
          <h2>
            Hair Color{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedHairColor} />
            </span>
          </h2>
          <h2>
            Eye Type <span className={style.minorText2}>{eyeType}</span>
          </h2>
          <h2>
            Eye Color{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedEyeColor} />
            </span>
          </h2>
          <h2>
            Height
            <span className={style.minorText2}>
              {heightMin}ft to {heightMax}ft
            </span>
          </h2>
          <h2>
            Weight
            <span className={style.minorText2}>
              {weightMin}lbs to {weightMax}lbs
            </span>
          </h2>
          <h2>
            Traits{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedTrait} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RaceGen;
