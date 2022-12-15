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

const NpcGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(true);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHookActive, setIsHookActive] = useState(false);
  const [isStatsActive, setIsStatsActive] = useState(false);

  const [name, setName] = useState("");
  const [names, setNames] = useState("");
  const [nameOptions, setNameOptions] = useState("");

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState("");
  const [alignOptions, setAlignOptions] = useState("");

  const [race, setRace] = useState("");
  const [races, setRaces] = useState("");
  const [raceOptions, setRaceOptions] = useState("");

  const [bond, setBond] = useState("");
  const [bonds, setBonds] = useState("");
  const [bondOptions, setBondOptions] = useState("");
  const [bondList, setBondList] = useState("");
  const [selectedBond, setSelectedBond] = useState("");

  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState("");
  const [featureOptions, setFeatureOptions] = useState("");
  const [featureList, setFeatureList] = useState("");
  const [selectedFeature, setSelectedFeature] = useState("");

  const [interaction, setInteraction] = useState("");
  const [interactions, setInteractions] = useState("");
  const [interactionOptions, setInteractionOptions] = useState("");

  const [prof, setProf] = useState("");
  const [profs, setProfs] = useState("");
  const [profOptions, setProfOptions] = useState("");

  const [mannerism, setMannerism] = useState("");
  const [mannerisms, setMannerisms] = useState("");
  const [mannerismOptions, setMannerismOptions] = useState("");

  const [sex, setSex] = useState("");
  const [sexs, setSexs] = useState("");
  const [sexOptions, setSexOptions] = useState("");

  const [talent, setTalent] = useState("");
  const [talents, setTalents] = useState("");
  const [talentOptions, setTalentOptions] = useState("");

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
    if (score === 0 || score === 1) {
      return "(-5)";
    } else if (score === 2 || score === 3) {
      return "(-4)";
    } else if (score === 4 || score === 5) {
      return "(-3)";
    } else if (score === 6 || score === 7) {
      return "(-2)";
    } else if (score === 8 || score === 9) {
      return "(-1)";
    } else if (score === 10 || score === 11) {
      return "(+0)";
    } else if (score === 12 || score === 13) {
      return "(+1)";
    } else if (score === 14 || score === 15) {
      return "(+2)";
    } else if (score === 16 || score === 17) {
      return "(+3)";
    } else if (score === 18 || score === 19) {
      return "(+4)";
    } else if (score === 20 || score === 21) {
      return "(+5)";
    } else if (score === 22 || score === 23) {
      return "(+6)";
    } else if (score === 24 || score === 25) {
      return "(+7)";
    } else if (score === 26 || score === 27) {
      return "(+8)";
    } else if (score === 28 || score === 29) {
      return "(+9)";
    } else if (score === 30) {
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
                name,
                race,
                align,
                prof,
                feature,
                talent,
                mannerism,
                interaction,
                bond,
              ]}
              setItem={[
                setName,
                setRace,
                setAlign,
                setProf,
                setFeature,
                setTalent,
                setMannerism,
                setInteraction,
                setBond,
              ]}
              numberItem={[ 
                setStr,
                setDex,
                setCon,
                setInt,
                setWis,
                setCha,
              ]}
              maxNumber={30}
              itemOptions={[
                sexOptions,
                raceOptions,
                alignOptions,
                profOptions,
                featureOptions,
                talentOptions,
                mannerismOptions,
                interactionOptions,
                bondOptions,
              ]}
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
                setStr,
                setTalent,
                setWis,
              ]}
              setArrayState={[setSelectedBond, setSelectedFeature]}
              setNumberState={[
                setCha,
                setCon,
                setDex,
                setInt,
                setWis,
              ]}
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
              <CustomInputText
                title={"Name"}
                input={name}
                setInput={setName}
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
            <div></div>
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
          <h1>{name}</h1>
          <h2>
            <span className={style.minorText2}>
              {race} {sex}, {align}
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h3 className={style.abilityScores}>
            <div>
              <h3>STR</h3>
              <div>
                <span className={style.minorText2}>
                  {str} {setMod(str)}
                </span>
              </div>
            </div>
            <div>
              <h3>DEX</h3>
              <div>
              <span className={style.minorText2}>
                  {dex} {setMod(dex)}
                </span>
              </div>
            </div>
            <div>
              <h3>CON</h3>
              <div>
              <span className={style.minorText2}>
                  {con} {setMod(con)}
                </span>
              </div>
            </div>
          </h3>
          <h3 className={style.abilityScores}>
            <div>
              <h3>INT</h3>
              <div>
              <span className={style.minorText2}>
                  {int} {setMod(int)}
                </span>
              </div>
            </div>
            <div>
              <h3>WIS</h3>
              <div>
              <span className={style.minorText2}>
                  {wis} {setMod(wis)}
                </span>
              </div>
            </div>
            <div>
              <h3>CHA</h3>
              <div>
              <span className={style.minorText2}>
                  {cha} {setMod(cha)}
                </span>
              </div>
            </div>
          </h3>
          <hr className={style.lineBreak} />
          <h2>
            Profession <span className={style.minorText2}>{prof}</span>
          </h2>
          <h2>
            Feature <span className={style.minorText2}>{feature}</span>
          </h2>
          <h2>
            Talent <span className={style.minorText2}>{talent}</span>
          </h2>
          <h2>
            Mannerism <span className={style.minorText2}>{mannerism}</span>
          </h2>
          <h2>
            Interaction <span className={style.minorText2}>{interaction}</span>
          </h2>
          <h2>
            Bond <span className={style.minorText2}>{bond}</span>
          </h2>
          <h1>Plot Hook</h1>
          <hr className={style.subLineBreak} />
          <h2>
            Hook <span className={style.minorText2}>{hook}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
