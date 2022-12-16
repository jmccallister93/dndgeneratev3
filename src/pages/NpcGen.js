import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import ClearButton from "../components/ClearButton";
import Npcs from "../components/Npcs";
import GenerateButton from "../components/GenerateButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import CustomName from "../components/CustomName";
import EditText from "../components/EditText";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import RandomHooks from "../components/RandomHooks";

const NpcGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(true);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHookActive, setIsHookActive] = useState(false);
  const [isStatsActive, setIsStatsActive] = useState(false);

  const [fetchError, setFetchError] = useState(false);

  const [name, setName] = useState("");
  const [names, setNames] = useState("");
  const [nameOptions, setNameOptions] = useState("");

  const [race, setRace] = useState("");
  const [races, setRaces] = useState("");
  const [raceOptions, setRaceOptions] = useState("");

  const [sex, setSex] = useState("");
  const [sexs, setSexs] = useState("");
  const [sexOptions, setSexOptions] = useState("");

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState("");
  const [alignOptions, setAlignOptions] = useState("");

  const [bond, setBond] = useState("");
  const [bonds, setBonds] = useState("");
  const [bondOptions, setBondOptions] = useState("");

  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState("");
  const [featureOptions, setFeatureOptions] = useState("");
  const [featureList, setFeatureList] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);

  const [prof, setProf] = useState("");
  const [profs, setProfs] = useState("");
  const [profOptions, setProfOptions] = useState("");

  const [talent, setTalent] = useState("");
  const [talents, setTalents] = useState("");
  const [talentOptions, setTalentOptions] = useState("");

  const [mannerism, setMannerism] = useState("");
  const [mannerisms, setMannerisms] = useState("");
  const [mannerismOptions, setMannerismOptions] = useState("");

  const [interaction, setInteraction] = useState("");
  const [interactions, setInteractions] = useState("");
  const [interactionOptions, setInteractionOptions] = useState("");

  const [str, setStr] = useState("");
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");
  const [hook, setHook] = useState("");
  const [desc, setDesc] = useState("");

  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showHook = (e) => {
    setIsHookActive((current) => !current);
  };
  const showStats = (e) => {
    setIsStatsActive((current) => !current);
  };

  //Function to set ability modifier based on ability score
  const setMod = (score) => {
    if (score === "0" || score === "1") {
      return "(-5)";
    } else if (score === "2" || score === "3") {
      return "(-4)";
    } else if (score === "4" || score === "5") {
      return "(-3)";
    } else if (score === "6" || score === "7") {
      return "(-2)";
    } else if (score === "8" || score === "9") {
      return "(-1)";
    } else if (score === "10" || score === "11") {
      return "(+0)";
    } else if (score === "12" || score === "13") {
      return "(+1)";
    } else if (score === "14" || score === "15") {
      return "(+2)";
    } else if (score === "16" || score === "17") {
      return "(+3)";
    } else if (score === "18" || score === "19") {
      return "(+4)";
    } else if (score === "20" || score === "21") {
      return "(+5)";
    } else if (score === "22" || score === "23") {
      return "(+6)";
    } else if (score === "24" || score === "25") {
      return "(+7)";
    } else if (score === "26" || score === "27") {
      return "(+8)";
    } else if (score === "28" || score === "29") {
      return "(+9)";
    } else if (score === "30") {
      return "(+10)";
    }
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>NPC Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[
                race,
                sex,
                align,
                prof,
                talent,
                mannerism,
                interaction,
                bond,
              ]}
              itemOptions={[
                raceOptions,
                sexOptions,
                alignOptions,
                profOptions,
                talentOptions,
                mannerismOptions,
                interactionOptions,
                bondOptions,
              ]}
              setItem={[
                setRace,
                setSex,
                setAlign,
                setProf,
                setTalent,
                setMannerism,
                setInteraction,
                setBond,
              ]}
              selectItemOptions={[featureOptions]}
              selectedItems={[selectedFeature]}
              setSelectedItem={[setSelectedFeature]}
              numberItem={[str, dex, con, int, wis, cha]}
              setNumberItem={[setStr, setDex, setCon, setInt, setWis, setCha]}
              maxNumber={30}
              minNumber={0}
              nameItem={[name]}
              nameItemOptions={[nameOptions]}
              setNameItem={[setName]}
            />
            <ClearButton
              setStringState={[
                setAlign,
                setBond,
                setCha,
                setCon,
                setDesc,
                setDex,
                setFeature,
                setHook,
                setInt,
                setInteraction,
                setMannerism,
                setName,
                setProf,
                setRace,
                setSex,
                setTalent,
                setCha,
                setCon,
                setDex,
                setInt,
                setWis,
                setStr,
              ]}
              setArrayState={[setSelectedFeature]}
              setNumberState={[setCha, setCon, setDex, setInt, setWis, setStr]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>NPC Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            NPC Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={name}
                setName={setName}
                setNames={setNames}
                setNameOptions={setNameOptions}
                nameOptions={nameOptions}
                title={"Name"}
                placeholder={"Set Name"}
              />
              <CustomDropDown
                tableName={"races"}
                setSingular={setRace}
                setPlural={setRaces}
                setOptions={setRaceOptions}
                options={raceOptions}
                h1Title={"Race"}
                placeholder={"Set Race"}
                value={race}
                valueOptions={raceOptions}
              />
              <CustomDropDown
                tableName={"sexes"}
                setSingular={setSex}
                setPlural={setSexs}
                setOptions={setSexOptions}
                options={sexOptions}
                h1Title={"Sex"}
                placeholder={"Set Sex"}
                value={sex}
                valueOptions={sexOptions}
              />
              <CustomDropDown
                tableName={"aligns"}
                setSingular={setAlign}
                setPlural={setAligns}
                setOptions={setAlignOptions}
                options={alignOptions}
                h1Title={"Alignment"}
                placeholder={"Set Alignment"}
                value={align}
                valueOptions={alignOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showStats}>
            NPC Stats
          </h1>
          <div className={isStatsActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setStr}
                h1Title={"Strength"}
                value={str}
                placeholder={"Set STR"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setDex}
                h1Title={"Dexterity"}
                value={dex}
                placeholder={"Set DEX"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setCon}
                h1Title={"Constitution"}
                value={con}
                placeholder={"Set CON"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setInt}
                h1Title={"Intelligence"}
                value={int}
                placeholder={"Set INT"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setWis}
                h1Title={"Wisdom"}
                value={wis}
                placeholder={"Set WIS"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setCha}
                h1Title={"Charisma"}
                value={cha}
                placeholder={"Set CHA"}
                maxNumber={30}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            NPC Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"professions"}
                setSingular={setProf}
                setPlural={setProfs}
                setOptions={setProfOptions}
                options={profOptions}
                h1Title={"Profession"}
                placeholder={"Set Profession"}
                value={prof}
                valueOptions={profOptions}
              />
              <CustomDataTable
                tableName={"features"}
                setSingular={setFeature}
                setPlural={setFeatures}
                setOptions={setFeatureOptions}
                h1Title={"Features"}
                dialogHeader={"Set Features"}
                selectedItem={selectedFeature}
                setSelectedItem={setSelectedFeature}
                list={featureList}
                setList={setFeatureList}
                valueOptions={featureOptions}
                // options={featureOptions}
              />

              <CustomDropDown
                tableName={"talents"}
                setSingular={setTalent}
                setPlural={setTalents}
                setOptions={setTalentOptions}
                options={talentOptions}
                h1Title={"Talent"}
                placeholder={"Set Talent"}
                value={talent}
                valueOptions={talentOptions}
              />
              <CustomDropDown
                tableName={"mannerisms"}
                setSingular={setMannerism}
                setPlural={setMannerisms}
                setOptions={setMannerismOptions}
                options={mannerismOptions}
                h1Title={"Mannerism"}
                placeholder={"Set Mannerism"}
                value={mannerism}
                valueOptions={mannerismOptions}
              />
              <CustomDropDown
                tableName={"interactions"}
                setSingular={setInteraction}
                setPlural={setInteractions}
                setOptions={setInteractionOptions}
                options={interactionOptions}
                h1Title={"Interaction"}
                placeholder={"Set Interaction"}
                value={interaction}
                valueOptions={interactionOptions}
              />
              <CustomDropDown
                tableName={"bonds"}
                setSingular={setBond}
                setPlural={setBonds}
                setOptions={setBondOptions}
                options={bondOptions}
                h1Title={"Bond"}
                placeholder={"Set Bond"}
                value={bond}
                valueOptions={bondOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showHook}>
            NPC Hook
          </h1>
          <div className={isHookActive ? style.subsection : style.hidden}>
            {}
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <NameDisplay value={name} setNewValue={setName} />
          <h2>
            <SingleDisplayText value={race} setNewValue={setRace} />{" "}
            <SingleDisplayText value={sex} setNewValue={setSex} />
            {", "}
            <SingleDisplayText value={align} setNewValue={setAlign} />
          </h2>
          <hr className={style.lineBreak} />
          <h3 className={style.abilityScores}>
            <div>
              <h3>STR</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={str}
                    setNewValue={setStr}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(str)}
                </span>
              </div>
            </div>
            <div>
              <h3>DEX</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={dex}
                    setNewValue={setDex}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(dex)}
                </span>
              </div>
            </div>
            <div>
              <h3>CON</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={con}
                    setNewValue={setCon}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(con)}
                </span>
              </div>
            </div>
          </h3>
          <h3 className={style.abilityScores}>
            <div>
              <h3>INT</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={int}
                    setNewValue={setInt}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(int)}
                </span>
              </div>
            </div>
            <div>
              <h3>WIS</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={wis}
                    setNewValue={setWis}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(wis)}
                </span>
              </div>
            </div>
            <div>
              <h3>CHA</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={cha}
                    setNewValue={setCha}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(cha)}
                </span>
              </div>
            </div>
          </h3>
          <hr className={style.lineBreak} />
          <h2>
            Profession{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={prof} setNewValue={setProf} />
            </span>
          </h2>
          <h2>
            Feature{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedFeature}
                setList={setFeatureList}
              />
            </span>
          </h2>
          <h2>
            Talent{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={talent} setNewValue={setTalent} />
            </span>
          </h2>
          <h2>
            Mannerism{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={mannerism} setNewValue={setMannerism} />
            </span>
          </h2>
          <h2>
            Interaction{" "}
            <span className={style.minorText2}>
              <SingleDisplayText
                value={interaction}
                setNewValue={setInteraction}
              />
            </span>
          </h2>
          <h2>
            Bond{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={bond} setNewValue={setBond} />
            </span>
          </h2>
          <h1>Plot Hook</h1>
          <hr className={style.subLineBreak} />
          <h2>
            Hook{" "}
            <RandomHooks />
            <span className={style.minorText2}>
              
              {/* <SingleDisplayText value={hook} setNewValue={setHook} /> */}
            </span>
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
