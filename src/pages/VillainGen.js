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
import CustomDataTable from "../components/CustomDataTable";
import CustomDropDown from "../components/CustomDropDown";
import MultipleDisplay from "../components/MultipleDisplay";

const VillainGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [villainName, setVillainName] = useState("");
  const [villainNames, setVillainNames] = useState("");
  const [villainNameOptions, setVillainNameOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [motiveList, setMotiveList] = useState([]);
  const [selectedMotive, setSelectedMotive] = useState([]);

  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState("");
  const [goalOptions, setGoalOptions] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState([]);

  const [affliation, setAffliation] = useState("");
  const [affliations, setAffliations] = useState("");
  const [affliationOptions, setAffliationOptions] = useState("");
  const [affliationList, setAffliationList] = useState([]);
  const [selectedAffliation, setSelectedAffliation] = useState([]);

  const [weakness, setWeakness] = useState("");
  const [weaknesses, setWeaknesses] = useState("");
  const [weaknessOptions, setWeaknessOptions] = useState("");
  const [weaknessList, setWeaknessList] = useState([]);
  const [selectedWeakness, setSelectedWeakness] = useState([]);

  const [powerSource, setPowerSource] = useState("");
  const [powerSources, setPowerSources] = useState("");
  const [powerSourceOptions, setPowerSourceOptions] = useState("");
  const [powerSourceList, setPowerSourceList] = useState([]);
  const [selectedPowerSource, setSelectedPowerSource] = useState([]);

  const [minion, setMinion] = useState("");
  const [minions, setMinions] = useState("");
  const [minionOptions, setMinionOptions] = useState("");
  const [minionList, setMinionList] = useState([]);
  const [selectedMinion, setSelectedMinion] = useState([]);

  const [stronghold, setStronghold] = useState("");
  const [strongholds, setStrongholds] = useState("");
  const [strongholdOptions, setStrongholdOptions] = useState("");

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");
  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

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
        <h1 className={style.mainHeader}>Villain Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingular={[setStronghold]}
              setPlural={[
                setSelectedAffliation,
                setSelectedGoal,
                setSelectedMotive,
                setSelectedPowerSource,
                setSelectedWeakness,
                setSelectedMinion,
                setSelectedItem,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Villain Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Villain Name"}
                input={villainName}
                setInput={setVillainName}
                placeholder={"Set Villain Name"}
              />
              <h1>NPC components</h1>
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Villian Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMotive}
                setPlural={setMotives}
                setOptions={setMotiveOptions}
                h1Title={"Motives"}
                dialogHeader={"Motives"}
                placeholder={"Set Motives"}
                valueOptions={motiveOptions}
                list={motiveList}
                setList={setMotiveList}
                selectedItem={selectedMotive}
                setSelectedItem={setSelectedMotive}
                options={motiveOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setGoal}
                setPlural={setGoals}
                setOptions={setGoalOptions}
                h1Title={"Goals"}
                dialogHeader={"Goals"}
                placeholder={"Set Goals"}
                valueOptions={goalOptions}
                list={goalList}
                setList={setGoalList}
                selectedItem={selectedGoal}
                setSelectedItem={setSelectedGoal}
                options={goalOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setAffliation}
                setPlural={setAffliations}
                setOptions={setAffliationOptions}
                h1Title={"Affliations"}
                dialogHeader={"Affliations"}
                placeholder={"Set Affliations"}
                valueOptions={affliationOptions}
                list={affliationList}
                setList={setAffliationList}
                selectedItem={selectedAffliation}
                setSelectedItem={setSelectedAffliation}
                options={affliationOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setWeakness}
                setPlural={setWeaknesses}
                setOptions={setWeaknessOptions}
                h1Title={"Weaknesses"}
                dialogHeader={"Weaknesses"}
                placeholder={"Set Weaknesses"}
                valueOptions={weaknessOptions}
                list={weaknessList}
                setList={setWeaknessList}
                selectedItem={selectedWeakness}
                setSelectedItem={setSelectedWeakness}
                options={weaknessOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPowerSource}
                setPlural={setPowerSources}
                setOptions={setPowerSourceOptions}
                h1Title={"Power Sources"}
                dialogHeader={"Power Sources"}
                placeholder={"Set Power Sources"}
                valueOptions={powerSourceOptions}
                list={powerSourceList}
                setList={setPowerSourceList}
                selectedItem={selectedPowerSource}
                setSelectedItem={setSelectedPowerSource}
                options={powerSourceOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMinion}
                setPlural={setMinions}
                setOptions={setMinionOptions}
                h1Title={"Minions"}
                dialogHeader={"Minions"}
                placeholder={"Set Minions"}
                valueOptions={minionOptions}
                list={minionList}
                setList={setMinionList}
                selectedItem={selectedMinion}
                setSelectedItem={setSelectedMinion}
                options={minionOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setStronghold}
                setPlural={setStrongholds}
                setOptions={setStrongholdOptions}
                h1Title={"Stronghold"}
                placeholder={"Set Stronghold"}
                value={stronghold}
                valueOptions={strongholdOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setItem}
                setPlural={setItems}
                setOptions={setItemOptions}
                h1Title={"Items"}
                dialogHeader={"Items"}
                placeholder={"Set Items"}
                valueOptions={itemOptions}
                list={itemList}
                setList={setItemList}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                options={itemOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{villainName}</h1>
          <h2>
            NPC Details{" "}
            <span className={style.minorText2}>display details</span>
          </h2>
          <h2>
            Motives{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedMotive} />
            </span>
          </h2>
          <h2>
            Goals{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedGoal} />
            </span>
          </h2>
          <h2>
            Affliations{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedAffliation} />
            </span>
          </h2>
          <h2>
            Weaknesses{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedWeakness} />
            </span>
          </h2>
          <h2>
            Power Sources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedPowerSource} />
            </span>
          </h2>
          <h2>
            Minions{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedMinion} />
            </span>
          </h2>
          <h2>
            Stronghold <span className={style.minorText2}>{stronghold}</span>
          </h2>
          <h2>
            Item{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedItem} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default VillainGen;