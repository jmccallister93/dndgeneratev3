import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import styled from "../stylesheets/styledComponents.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Tooltip } from "primereact/tooltip";
import { Document, Page } from "react-pdf";
import AbilityModifier from "../components/AbilityModifier";
import ClearButton from "../components/ClearButton";
import GenerateButton from "../components/GenerateButton";
import ExportButtons from "../components/ExportButtons";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import CustomName from "../components/CustomName";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import Items from "../components/Items";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import MultipleDisplay from "../components/MultipleDisplay";
import NameDisplay from "../components/NameDisplay";

const MonsterGen = () => {
  //Set States
  const [fetchError, setFetchError] = useState();

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();
  const [nameAnimal, setNameAnimal] = useState();
  const [nameAdejctive, setNameAdjective] = useState();
  const [nameNoun, setNameNoun] = useState();

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState();
  const [sizeOptions, setSizeOptions] = useState();

  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState();
  const [alignOptions, setAlignOptions] = useState();

  const [ac, setAc] = useState("");
  const [acs, setAcs] = useState("");
  const [acOptions, setAcOptions] = useState();

  const [armorType, setArmorType] = useState("");
  const [armorTypes, setArmorTypes] = useState();
  const [armorTypeOptions, setArmorTypeOptions] = useState();

  const [hp, setHp] = useState("");

  const [speed, setSpeed] = useState("");
  const [speeds, setSpeeds] = useState("");
  const [speedOptions, setSpeedOptions] = useState();

  const [speedType, setSpeedType] = useState("");
  const [speedTypes, setSpeedTypes] = useState("");
  const [speedTypeOptions, setSpeedTypeOptions] = useState();

  const [speedExtra, setSpeedExtra] = useState("");
  const [speedExtraList, setSpeedExtraList] = useState([]);
  const [burrow, setBurrow] = useState("");
  const [climb, setClimb] = useState("");
  const [fly, setFly] = useState("");
  const [hover, setHover] = useState("");
  const [swim, setSwim] = useState("");
  const [dialogVisibleSpeed, setDialogVisibleSpeed] = useState(false);
  const [selectedItemsSpeed, setSelectedItemsSpeed] = useState(null);

  const [ability, setAbility] = useState("");
  const [abilities, setAbilities] = useState("");
  const [abilityOptions, setAbilityOptions] = useState();

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

  const [save, setSave] = useState("");
  const [saves, setSaves] = useState("");
  const [saveOptions, setSaveOptions] = useState();
  const [saveList, setSaveList] = useState([]);
  const [selectedSave, setSelectedSave] = useState([]);
  const [saveStr, setSaveStr] = useState("");
  const [saveDex, setSaveDex] = useState("");
  const [saveCon, setSaveCon] = useState("");
  const [saveInt, setSaveInt] = useState("");
  const [saveWis, setSaveWis] = useState("");
  const [saveCha, setSaveCha] = useState("");
  const [dialogVisibleSave, setDialogVisibleSave] = useState(false);
  const [selectedItemsSave, setSelectedItemsSave] = useState(null);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");
  const [skillOptions, setSkillOptions] = useState();
  const [skillList, setSkillList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [dialogVisibleSkill, setDialogVisibleSkill] = useState(false);
  const [selectedItemsSkill, setSelectedItemsSkill] = useState(null);
  const [skillAcrobatics, setSkillAcrobatics] = useState("");
  const [skillAnimal, setSkillAnimal] = useState("");
  const [skillArcana, setSkillArcana] = useState("");
  const [skillAthletics, setSkillAthletics] = useState("");
  const [skillDeception, setSkillDeception] = useState("");
  const [skillHistory, setSkillHistory] = useState("");
  const [skillInsight, setSkillInsight] = useState("");
  const [skillIntimidation, setSkillIntimidation] = useState("");
  const [skillInvestigation, setSkillInvestigation] = useState("");
  const [skillMedicine, setSkillMedicine] = useState("");
  const [skillNature, setSkillNature] = useState("");
  const [skillPerception, setSkillPerception] = useState("");
  const [skillPerformance, setSkillPerformance] = useState("");
  const [skillPersuasion, setSkillPersuasion] = useState("");
  const [skillReligion, setSkillReligion] = useState("");
  const [skillSleight, setSkillSleight] = useState("");
  const [skillStealth, setSkillStealth] = useState("");
  const [skillSurvival, setSkillSurvival] = useState("");

  const [vuln, setVuln] = useState("");
  const [vulns, setVulns] = useState("");
  const [vulnOptions, setVulnOptions] = useState();
  const [vulnList, setVulnList] = useState([]);
  const [selectedVuln, setSelectedVuln] = useState([]);

  const [immune, setImmune] = useState("");
  const [immunes, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();
  const [immuneList, setImmuneList] = useState([]);
  const [selectedImmune, setSelectedImmune] = useState([]);


  const [resist, setResist] = useState("");
  const [resists, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();
  const [resistList, setResistList] = useState([]);
  const [selectedResist, setSelectedResist] = useState([]);


  const [condition, setCondition] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();
  const [conditionList, setConditionList] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);

  const [sense, setSense] = useState("");
  const [senses, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();
  const [senseList, setSenseList] = useState([]);
  const [selectedSense, setSelectedSense] = useState([]);

  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();
  const [langList, setLangList] = useState([]);
  const [selectedLang, setSelectedLang] = useState([]);

  const [special, setSpecial] = useState("");
  const [Specials, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();
  const [specialList, setSpecialList] = useState([]);
  const [selectedSpecial, setSelectedSpecial] = useState([]);

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();
  const [actionList, setActionList] = useState([]);
  const [selectedAction, setSelectedAction] = useState([]);

  const [reaction, setReaction] = useState("");
  const [reactions, setReactions] = useState("");
  const [reactionOptions, setReactionOptions] = useState();
  const [reactionList, setReactionList] = useState([]);
  const [selectedReaction, setSelectedReaction] = useState([]);

  const [legend, setLegend] = useState("");
  const [legends, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();
  const [legendList, setLegendList] = useState([]);
  const [selectedLegend, setSelectedLegend] = useState([]);

  const [lair, setLair] = useState("");
  const [Lairs, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();
  const [lairList, setLairList] = useState([]);
  const [selectedLair, setSelectedLair] = useState([]);

  const [gear, setGear] = useState("");
  const [gears, setGears] = useState("");
  const [gearOptions, setGearOptions] = useState();
  const [gearList, setGearList] = useState([]);
  const [selectedGear, setSelectedGear] = useState([]);

  const [isAAActive, setIsAAActive] = useState(false);
  const [isAbilityActive, setIsAbilityActive] = useState(false);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isSSDActive, setIsSSDActive] = useState(false);
  const [isDTActive, setIsDTActive] = useState(false);
  const [isGearActive, setIsGearActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  

  //OnChanges
  const onNameChange = (e) => {
    // setMonster((prev) => {
    //   return {...prev,name: e.target.value}
    // });
    setName(e.target.value);
  };
  const onRandomName = (e) => {
    const a = Math.round(Math.random() * (139 - 0));
    const ad = Math.round(Math.random() * (83 - 0));
    const n = Math.round(Math.random() * (69 - 0));
    const x = Math.round(Math.random() * (4 - 0));
    if (x === 0) {
      setName(
        nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1) +
          " " +
          nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 1) {
      setName(
        nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 2) {
      setName(
        nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 3) {
      setName(
        nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1)
      );
    }
    if (x === 4) {
      setName(
        nameOptions[a].animal +
          " " +
          nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1)
      );
    }
  };

  //Showoptions
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showAbility = (e) => {
    setIsAbilityActive((current) => !current);
  };
  const showSSD = (e) => {
    setIsSSDActive((current) => !current);
  };
  const showAA = (e) => {
    setIsAAActive((current) => !current);
  };
  const showDT = (e) => {
    setIsDTActive((current) => !current);
  };
  const showGear = (e) => {
    setIsGearActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
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

  //*****Added new stuff
  const divRef = useRef();
  const genItem = "";
  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Monsters for your games.</p>
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
        <h1 className={style.mainHeader}>Monster Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* Generate Btns */}
            <GenerateButton />
            <ClearButton
              setStringState={[
                setName,
                setSize,
                setType,
                setAlign,
                setAc,
                setArmorType,
                setHp,
                setSpeed,
                setSpeedType,
                setSpeedExtra,
                setStr,
                setDex,
                setCon,
                setInt,
                setWis,
                setCha,
                setSave,
                setSkill,
                setVuln,
                setImmune,
                setResist,
                setCondition,
                setSense,
                setLang,
                setSpecial,
                setAction,
                setReaction,
                setLegend,
                setLair,
                setGear,
                setBurrow,
                setClimb,
                setHover,
                setFly,
                setSwim,
                setSaveStr,
                setSaveDex,
                setSaveCon,
                setSaveInt,
                setSaveWis,
                setSaveCha,
                setSkillAcrobatics,
                setSkillAnimal,
                setSkillArcana,
                setSkillAthletics,
                setSkillDeception,
                setSkillHistory,
                setSkillInsight,
                setSkillIntimidation,
                setSkillInvestigation,
                setSkillMedicine,
                setSkillNature,
                setSkillPerception,
                setSkillPerformance,
                setSkillPersuasion,
                setSkillReligion,
                setSkillSleight,
                setSkillStealth,
                setSkillSurvival,
              ]}
              setArrayState={[
                setSpeedExtraList,
                setSaveList,
                setSkillList,
                setVulnList,
                setImmuneList,
                setResistList,
                setConditionList,
                setSenseList,
                setLangList,
                setSpecialList,
                setActionList,
                setReactionList,
                setLegendList,
                setLairList,
                setGearList,
              ]}
            />
            {/* Export Btns */}
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={genItem} />
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
                  header={"Monster Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>
      {/* Main Options Display */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Monster Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            {/* Baby come  back */}
            <SectionRandom 
              value={[
                size,
                type,
                align,
                armorType,
              ]}
              setValue={[
                setSize,
                setType,
                setAlign,
                setArmorType,
              ]}
              valueOptions={[
                sizeOptions,
                typeOptions,
                alignOptions,
                armorTypeOptions,
              ]}
              numberItem={[
                ac,
                hp,
                speed,
              ]}
              setNumberItem={[
                setAc,
                setHp,
                setSpeed,
              ]}
              maxNumber={[
                30,
                500,
                120,
              ]}
              minNumber={[
                1,
                1,
                1
              ]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
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
              tableName={"sizes"}
              setSingular={setSize}
              setPlural={setSizes}
              setOptions={setSizeOptions}
              h1Title={"Type"}
              placeholder={"Set Type"}
              value={size}
              valueOptions={sizeOptions}
            />
            <CustomDropDown
              tableName={"monstersTypes"}
              setSingular={setType}
              setPlural={setTypes}
              setOptions={setTypeOptions}
              h1Title={"Type"}
              placeholder={"Set Type"}
              value={type}
              valueOptions={typeOptions}
            />
            <CustomDropDown
              tableName={"aligs"}
              setSingular={setAlign}
              setPlural={setAligns}
              setOptions={setAlignOptions}
              h1Title={"Alignment"}
              placeholder={"Set Alignment"}
              value={align}
              valueOptions={alignOptions}
            />
            <CustomInputNumber
              setSingular={setAc}
              value={ac}
              placeholder={"Set AC"}
              maxNumber={30}
              minNumber={1}
            />
            <CustomDropDown
              tableName={"armorTypes"}
              setSingular={setArmorType}
              setPlural={setArmorTypes}
              setOptions={setArmorTypeOptions}
              h1Title={"Armor Type"}
              placeholder={"Set Armor Type"}
              value={armorType}
              valueOptions={armorTypeOptions}
            />
            <CustomInputNumber
              setSingular={setHp}
              value={hp}
              placeholder={"Set HP"}
              maxNumber={1000}
              minNumber={1}
            />
            <CustomInputNumber
              setSingular={setSpeed}
              value={speed}
              placeholder={"Set Speed"}
              maxNumber={1000}
              minNumber={1}
            />
            Extra Speed
          </div>
          <div className={style.sectionOption}> 
            <h1 className={style.subHeader} onClick={showAbility}>
              Ability Scores{" "}
              {isAbilityActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              statValue={[str, dex, con, int, wis, cha]}
              statMax={30}
              statMin={1}
              setStatValue={[setStr, setDex, setCon, setInt, setWis, setCha]}
            />
            <div className={isAbilityActive ? style.subsection : style.hidden}>
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
          <h1 className={style.subHeader} onClick={showSSD}>
            Saves & Skills
          </h1>
          <SectionRandom
          selectedValue={[ selectedSave, selectedSkill, selectedSense, selectedLang]}
          selectedValueOptions={[saveOptions, skillOptions, senseOptions, langOptions]}
          setSelectedValue={[setSelectedSave, setSelectedSkill, setSelectedSense, setSelectedLang]}
          selectedValueList={[saveList, skillList, senseList, langList]}
          setSelectedValueList={[setSaveList, setSkillList, setSenseList, setLangList]}
          />
          <div className={isSSDActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
              tableName={"abilities"}
              setSingular={setSave}
              setPlural={setSaves}
              setOptions={setSaveOptions}
              h1Title={"Saves"}
              dialogHeader={"Saves"}
              selectedItem={selectedSave}
              setSelectedItem={setSelectedSave}
              list={saveList}
              setList={setSaveList}
              valueOptions={saveOptions}
              />
              <CustomDataTable
              tableName={"skills"}
              setSingular={setSkill}
              setPlural={setSkills}
              setOptions={setSkillOptions}
              h1Title={"Skills"}
              dialogHeader={"Skills"}
              selectedItem={selectedSkill}
              setSelectedItem={setSelectedSkill}
              list={skillList}
              setList={setSkillList}
              valueOptions={skillOptions}
              />
              <CustomDataTable
              tableName={"senses"}
              setSingular={setSense}
              setPlural={setSenses}
              setOptions={setSenseOptions}
              h1Title={"Senses"}
              dialogHeader={"Senses"}
              selectedItem={selectedSense}
              setSelectedItem={setSelectedSense}
              list={senseList}
              setList={setSenseList}
              valueOptions={senseOptions}
              />
              <CustomDataTable
              tableName={"languages"}
              setSingular={setLang}
              setPlural={setLangs}
              setOptions={setLangOptions}
              h1Title={"Languages"}
              dialogHeader={"Languages"}
              selectedItem={selectedLang}
              setSelectedItem={setSelectedLang}
              list={langList}
              setList={setLangList}
              valueOptions={langOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDT}>
            Damage Types{" "}
            {isDTActive ? (
              <i className="pi pi-chevron-down"></i>
            ) : (
              <i className="pi pi-chevron-right"></i>
            )}
          </h1>
          <SectionRandom
          selectedValue={[ selectedVuln, selectedImmune, selectedResist, selectedCondition]}
          selectedValueOptions={[vulnOptions, immuneOptions, resistOptions, conditionOptions]}
          setSelectedValue={[setSelectedVuln, setSelectedImmune, setSelectedResist, setSelectedCondition]}
          selectedValueList={[vulnList, immuneList, resistList, conditionList]}
          setSelectedValueList={[setVulnList, setImmuneList, setResistList, setConditionList]}
          />
          <div className={isDTActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
              tableName={"damageTypes"}
              setSingular={setVuln}
              setPlural={setVulns}
              setOptions={setVulnOptions}
              h1Title={"Vulnerabilities"}
              dialogHeader={"Vulnerabilities"}
              selectedItem={selectedVuln}
              setSelectedItem={setSelectedVuln}
              list={vulnList}
              setList={setVulnList}
              valueOptions={vulnOptions}
              />
              <CustomDataTable
              tableName={"damageTypes"}
              setSingular={setImmune}
              setPlural={setImmunes}
              setOptions={setImmuneOptions}
              h1Title={"Immunities"}
              dialogHeader={"Immunities"}
              selectedItem={selectedImmune}
              setSelectedItem={setSelectedImmune}
              list={immuneList}
              setList={setImmuneList}
              valueOptions={immuneOptions}
              />
              <CustomDataTable
              tableName={"damageTypes"}
              setSingular={setResist}
              setPlural={setResists}
              setOptions={setResistOptions}
              h1Title={"Resistances"}
              dialogHeader={"Resistances"}
              selectedItem={selectedResist}
              setSelectedItem={setSelectedResist}
              list={resistList}
              setList={setResistList}
              valueOptions={resistOptions}
              />
              <CustomDataTable
              tableName={"conditions"}
              setSingular={setCondition}
              setPlural={setConditions}
              setOptions={setConditionOptions}
              h1Title={"Conditions"}
              dialogHeader={"Conditions"}
              selectedItem={selectedCondition}
              setSelectedItem={setSelectedCondition}
              list={conditionList}
              setList={setConditionList}
              valueOptions={conditionOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showAA}>
            Actions / Abilities{" "}
            {isAAActive ? (
              <i className="pi pi-chevron-down"></i>
            ) : (
              <i className="pi pi-chevron-right"></i>
            )}
          </h1>
          <SectionRandom
          selectedValue={[ selectedSpecial, selectedAction, selectedReaction, selectedLegend, selectedLair]}
          selectedValueOptions={[specialOptions, actionOptions, reactionOptions, legendOptions, lairOptions]}
          setSelectedValue={[setSelectedSpecial, setSelectedAction, setSelectedReaction, setSelectedLegend, setSelectedLair]}
          selectedValueList={[specialList, actionList, reactionList, legendList, lairList]}
          setSelectedValueList={[setSpecialList, setActionList, setReactionList, setLegendList, setLairList]}
          />
          <div className={isAAActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
              tableName={"monstersAbilities"}
              setSingular={setSpecial}
              setPlural={setSpecials}
              setOptions={setSpecialOptions}
              h1Title={"Special Abilities"}
              dialogHeader={"Special Abilities"}
              selectedItem={selectedSpecial}
              setSelectedItem={setSelectedSpecial}
              list={specialList}
              setList={setSpecialList}
              valueOptions={specialOptions}
              />
              <CustomDataTable
              tableName={"monstersActions"}
              setSingular={setAction}
              setPlural={setActions}
              setOptions={setActionOptions}
              h1Title={"Actions"}
              dialogHeader={"Actions"}
              selectedItem={selectedAction}
              setSelectedItem={setSelectedAction}
              list={actionList}
              setList={setActionList}
              valueOptions={actionOptions}
              />
              <CustomDataTable
              tableName={"monstersLegendaryActions"}
              setSingular={setLegend}
              setPlural={setLegends}
              setOptions={setLegendOptions}
              h1Title={"Legendary Actions"}
              dialogHeader={"Legendary Actions"}
              selectedItem={selectedLegend}
              setSelectedItem={setSelectedLegend}
              list={legendList}
              setList={setLegendList}
              valueOptions={legendOptions}
              />
              <CustomDataTable
              tableName={"monstersLairActions"}
              setSingular={setLair}
              setPlural={setLairs}
              setOptions={setLairOptions}
              h1Title={"Lair Actions"}
              dialogHeader={"Lair Actions"}
              selectedItem={selectedLair}
              setSelectedItem={setSelectedLair}
              list={lairList}
              setList={setLairList}
              valueOptions={lairOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showGear}>
            Equipment
          </h1>
          <div className={isGearActive ? style.subsection : style.hidden}>
            <Items
             h1Title={"Inventory"}
             dialogHeader={"Items"}
             selectedItem={selectedGear}
             setSelectedItem={setSelectedGear}
             itemList={gearList}
             setItemList={setGearList}
             valueOptions={gearOptions}
             setItemOptions={setGearOptions}
             options={gearOptions}
             />
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
        <NameDisplay value={name} setNewValue={setName} />
    <h2>
      <SingleDisplayText value={size} setNewValue={setSize} />{" "}
      <SingleDisplayText value={type} setNewValue={setType} />,{" "}
      <SingleDisplayText value={align} setNewValue={setAlign} />
    </h2>
          <hr className={style.lineBreak} />
          <h2>
          Armor Class{" "}
            <SingleDisplayNumber value={ac} setNewValue={setAc} /> {" "}
            <SingleDisplayText value={armorType} setNewValue={setArmorType} />
          </h2>
          <h2>
            Hit Points{" "}
            <SingleDisplayNumber value={hp} setNewValue={setHp} />
          </h2>
          <h2>
            Speed{" "}
            <SingleDisplayNumber value={speed} setNewValue={setSpeed} />
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
          {saveList.length === 0 ? null : (
            <>
              <h2>
                Saving Throws{" "}
                <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedSave} />
                </span>
              </h2>
            </>
          )}

          {skillList.length === 0 ? null : (
            <>
              <h2>
                Skills <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedSkill} />
                </span>
              </h2>
            </>
          )}

          {vulnList.length === 0 ? null : (
            <>
              <h2>
                Damage Vulnerabilities{" "}
                <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedVuln} />
                </span>
              </h2>
            </>
          )}

          {immuneList.length === 0 ? null : (
            <>
              <h2>
                Damage Immunities{" "}
                <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedImmune} />
                </span>
              </h2>
            </>
          )}

          {resistList.length === 0 ? null : (
            <>
              <h2>
                Damage Resistances{" "}
                <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedResist} />
                </span>
              </h2>
            </>
          )}
          {conditionList.length === 0 ? null : (
            <>
              <h2>
                Condition Immunities{" "}
                <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedCondition} />
                </span>
              </h2>
            </>
          )}
          {senseList.length === 0 ? null : (
            <>
              <h2>
                Senses <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedSense} />
                </span>
              </h2>
            </>
          )}
          <h2>
            Languages{" "}
            {langList.length === 0 ? (
              "--"
            ) : (
              <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedLang} />
              </span>
            )}
          </h2>
          <hr className={style.lineBreak} />
         <MultipleDisplay selectedItem={selectedSpecial} />
          <h1>Actions</h1>
          <hr className={style.subLineBreak} />
          <h2>
            <MultipleDisplay selectedItem={selectedAction} />
          </h2>
          {legendList.length === 0 ? null : (
            <>
              <h1>Legendary Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>
                <MultipleDisplay selectedItem={selectedLegend} />
              </h2>
            </>
          )}
          {lairList.length === 0 ? null : (
            <>
              <h1>Lair Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>
                <MultipleDisplay selectedItem={selectedLair} />
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MonsterGen;
