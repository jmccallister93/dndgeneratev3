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

const PuzzleGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [puzzleName, setPuzzleName] = useState("");
  const [puzzleNames, setPuzzleNames] = useState("");
  const [puzzleNameOptions, setPuzzleNameOptions] = useState("");

  const [type, setType] = useState("");
  const [types, setTypes] = useState("");
  const [typeOptions, setTypeOptions] = useState("");

  const [difficulty, setDifficulty] = useState("");
  const [difficulties, setDifficulties] = useState("");
  const [difficultyOptions, setDifficultyOptions] = useState("");

  const [description, setDescription] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [descriptionOptions, setDescriptionOptions] = useState("");

  const [solution, setSolution] = useState("");
  const [solutions, setSolutions] = useState("");
  const [solutionOptions, setSolutionOptions] = useState("");

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
        <h1 className={style.mainHeader}>Puzzle Generator</h1>
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
          <h1>Puzzle Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Puzzle Name"}
                input={puzzleName}
                setInput={setPuzzleName}
                placeholder={"Set Puzzle Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setType}
                setPlural={setTypes}
                setOptions={setTypeOptions}
                h1Title={"Type"}
                placeholder={"Set Type"}
                value={type}
                valueOptions={typeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDifficulty}
                setPlural={setDifficulties}
                setOptions={setDifficultyOptions}
                h1Title={"Difficulty"}
                placeholder={"Set Difficulty"}
                value={difficulty}
                valueOptions={difficultyOptions}
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
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setSolution}
                setPlural={setSolutions}
                setOptions={setSolutionOptions}
                h1Title={"Solution"}
                placeholder={"Set Solution"}
                value={solution}
                valueOptions={solutionOptions}
              />
            </div>
          </div>
          {/* <h1 className={style.subHeader} onClick={showDetails}>
            Building Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            Details to fill out
          </div> */}
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{puzzleName}</h1>
          <h2>Type {" "}
          <span className={style.minorText2}>{type}</span>
          </h2>
          <h2>Difficulty {" "}
          <span className={style.minorText2}>{difficulty}</span>
          </h2>
          <h2>Description {" "}
          <span className={style.minorText2}>{description}</span>
          </h2>
          <h2>Solution {" "}
          <span className={style.minorText2}>{solution}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PuzzleGen;
