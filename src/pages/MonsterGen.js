import Navbar from "../components/Navbar";
import style from "../stylesheets/MonsterGen.module.scss";
import styled from "../stylesheets/styledComponents.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
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

const MonsterGen = () => {
  const [monster, setMonster] = useState({ size: "", type: "" });

  //Set States
  const [fetchError, setFetchError] = useState();

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();

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
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");

  const [save, setSave] = useState("");
  const [saves, setSaves] = useState("");
  const [saveOptions, setSaveOptions] = useState();
  const [saveList, setSaveList] = useState([]);
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
  const [dialogVisibleVuln, setDialogVisibleVuln] = useState(false);
  const [selectedItemsVuln, setSelectedItemsVuln] = useState(null);

  const [immune, setImmune] = useState("");
  const [immunes, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();
  const [immuneList, setImmuneList] = useState([]);
  const [dialogVisibleImmune, setDialogVisibleImmune] = useState(false);
  const [selectedItemsImmune, setSelectedItemsImmune] = useState(null);

  const [resist, setResist] = useState("");
  const [resists, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();
  const [resistList, setResistList] = useState([]);
  const [dialogVisibleResist, setDialogVisibleResist] = useState(false);
  const [selectedItemsResist, setSelectedItemsResist] = useState(null);

  const [condition, setCondition] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();
  const [conditionList, setConditionList] = useState([]);
  const [dialogVisibleCondition, setDialogVisibleCondition] = useState(false);
  const [selectedItemsCondition, setSelectedItemsCondition] = useState(null);

  const [sense, setSense] = useState("");
  const [senses, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();
  const [senseList, setSenseList] = useState([]);
  const [dialogVisibleSense, setDialogVisibleSense] = useState(false);
  const [selectedItemsSense, setSelectedItemsSense] = useState(null);

  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();
  const [langList, setLangList] = useState([]);
  const [dialogVisibleLang, setDialogVisibleLang] = useState(false);
  const [selectedItemsLang, setSelectedItemsLang] = useState(null);

  const [special, setSpecial] = useState("");
  const [Specials, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();
  const [specialList, setSpecialList] = useState([]);
  const [dialogVisibleSpecial, setDialogVisibleSpecial] = useState(false);
  const [selectedItemsSpecial, setSelectedItemsSpecial] = useState(null);

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();
  const [actionList, setActionList] = useState([]);
  const [dialogVisibleAction, setDialogVisibleAction] = useState(false);
  const [selectedItemsAction, setSelectedItemsAction] = useState(null);

  const [reaction, setReaction] = useState("");
  const [reactions, setReactions] = useState("");
  const [reactionOptions, setReactionOptions] = useState();
  const [reactionList, setReactionList] = useState([]);
  const [dialogVisibleReaction, setDialogVisibleReaction] = useState(false);
  const [selectedItemsReaction, setSelectedItemsReaction] = useState(null);

  const [legend, setLegend] = useState("");
  const [legends, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();
  const [legendList, setLegendList] = useState([]);
  const [dialogVisibleLegend, setDialogVisibleLegend] = useState(false);
  const [selectedItemsLegend, setSelectedItemsLegend] = useState(null);

  const [lair, setLair] = useState("");
  const [Lairs, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();
  const [lairList, setLairList] = useState([]);
  const [dialogVisibleLair, setDialogVisibleLair] = useState(false);
  const [selectedItemsLair, setSelectedItemsLair] = useState(null);

  const [gear, setGear] = useState("");
  const [gears, setGears] = useState("");
  const [gearOptions, setGearOptions] = useState();
  const [gearList, setGearList] = useState([]);
  const [dialogVisibleGear, setDialogVisibleGear] = useState(false);
  const [selectedItemsGear, setSelectedItemsGear] = useState(null);

  //Datatable
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search mr-2" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );

  //Get Data function
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(dataName.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  };
  //Import data via getData
  useEffect(() => {
    //TODO Names
    // getData("names", setName, setNames, setNameOptions)
    getData("sizes", setSize, setSizes, setSizeOptions);
    getData("monstersTypes", setType, setTypes, setTypeOptions);
    getData("aligns", setAlign, setAligns, setAlignOptions);
    getData("acs", setAc, setAcs, setAcOptions);
    getData("itemsArmor", setArmorType, setArmorTypes, setArmorTypeOptions);
    getData("movement", setSpeedType, setSpeedTypes, setSpeedTypeOptions);
    getData("itemsArmor", setArmorType, setArmorTypes, setArmorTypeOptions);
    getData("abilities", setAbility, setAbilities, setAbilityOptions);
    getData("abilities", setSave, setSaves, setSaveOptions);
    getData("skills", setSkill, setSkills, setSkillOptions);
    getData("damageTypes", setVuln, setVulns, setVulnOptions);
    getData("damageTypes", setImmune, setImmunes, setImmuneOptions);
    getData("damageTypes", setResist, setResists, setResistOptions);
    getData("conditions", setCondition, setConditions, setConditionOptions);
    getData("senses", setSense, setSenses, setSenseOptions);
    getData("languages", setLang, setLangs, setLangOptions);
    getData("monstersAbilities", setSpecial, setSpecials, setSpecialOptions);
    getData("monstersActions", setAction, setActions, setActionOptions);
    getData("monstersReactions", setReaction, setReactions, setReactionOptions);
    getData(
      "monstersLegendaryActions",
      setLegend,
      setLegends,
      setLegendOptions
    );
    getData("monstersLairActions", setLair, setLairs, setLairOptions);
  }, []);

  //TODO Monster Object
  useEffect(() => {
    setMonster((monster) => ({ ...monster, size: size, type: type }));
  }, [size, type]);

  //TODO
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data, error } = await supabase.from("itemsAll").select();
  //       if (error) {
  //         setFetchError("Could not fetch the data");
  //         setGear(null);
  //         console.log(error);
  //       }
  //       if (data) {
  //         setGears(data);
  //         setFetchError(null);
  //         setGearOptions(data.map((r) => ({ name: r.name, value: r.value })));
  //       }
  //     };
  //     fetchData();
  //   }, []);

  //OnChanges
  //TODO
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onRandomName = (e) => {};

  //On Change function
  const objectChange = (value, setObject, max, min, floor, objectOptions) => {
    setObject(value);
    if (value === "Random") {
      let r = Math.round(Math.random() * (max - min) + floor);
      setObject(objectOptions[r].name);
    }
  };
  //Set onChange Variables
  const onSizeChange = (e) => {
    objectChange(e.value, setSize, 6, 1, 1, sizeOptions);
  };
  const onTypeChange = (e) => {
    objectChange(e.value, setType, 16, 1, 1, typeOptions);
  };
  const onAlignChange = (e) => {
    objectChange(e.value, setAlign, 9, 1, 1, alignOptions);
  };
  const onAcChange = (e) => {
    objectChange(e.value, setAc, 30, 1, 1, acOptions);
  };
  const onArmorTypeChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions);
  };
  const onHpChange = (e) => {
    objectChange(e.value, setHp);
  };
  const onSpeedChange = (e) => {
    objectChange(e.value, setSpeed);
  };
  const onStrChange = (e) => {
    objectChange(e.value, setStr);
  };
  const onDexChange = (e) => {
    objectChange(e.value, setDex);
  };
  const onConChange = (e) => {
    objectChange(e.value, setCon);
  };
  const onIntChange = (e) => {
    objectChange(e.value, setInt);
  };
  const onWisChange = (e) => {
    objectChange(e.value, setWis);
  };
  const onChaChange = (e) => {
    objectChange(e.value, setCha);
  };
  //TODO
  //   const onGearChange = (e) => {}
  //   objectChange(e.value, setGear, 17, 1, 1, gearOptions)
  // };
  const onVulnChange = (e) => {
    objectChange(e.value, setVuln, 17, 1, 1, vulnOptions);
  };
  const onSkillChange = (e) => {
    objectChange(e.value, setSkill, 18, 1, 1, skillOptions);
  };
  const onImmuneChange = (e) => {
    objectChange(e.value, setImmune, 17, 1, 1, immuneOptions);
  };
  const onResistChange = (e) => {
    objectChange(e.value, setResist, 17, 1, 1, resistOptions);
  };
  const onConditionChange = (e) => {
    objectChange(e.value, setCondition, 15, 1, 1, conditionOptions);
  };
  const onSenseChange = (e) => {
    objectChange(e.value, setSense, 4, 1, 1, senseOptions);
  };
  const onLangChange = (e) => {
    objectChange(e.value, setLang, 16, 1, 1, langOptions);
  };
  const onSpecialChange = (e) => {
    objectChange(e.value, setSpecial, 208, 1, 1, specialOptions);
  };
  const onActionChange = (e) => {
    objectChange(e.value, setAction, 292, 1, 1, actionOptions);
  };
  const onReactionChange = (e) => {
    objectChange(e.value, setReaction, 11, 1, 1, reactionOptions);
  };
  const onLegendChange = (e) => {
    objectChange(e.value, setLegend, 35, 1, 1, legendOptions);
  };
  const onLairChange = (e) => {
    objectChange(e.value, setLair, 39, 1, 1, lairOptions);
  };

  //Random Number Button
  const randomButton = (setObject, max, min) => {
    let r = Math.floor(Math.random() * (max - min));
    setObject(r);
  };
  const onRandomHp = (e) => {
    randomButton(setHp, 500, 0);
  };
  const onRandomSpeed = (e) => {
    randomButton(setSpeed, 120, 0);
  };
  const onRandomStr = (e) => {
    randomButton(setStr, 30, 0);
  };
  const onRandomDex = (e) => {
    randomButton(setDex, 30, 0);
  };
  const onRandomCon = (e) => {
    randomButton(setCon, 30, 0);
  };
  const onRandomInt = (e) => {
    randomButton(setInt, 30, 0);
  };
  const onRandomWis = (e) => {
    randomButton(setWis, 30, 0);
  };
  const onRandomCha = (e) => {
    randomButton(setCha, 30, 0);
  };

  //DISPLAY ELEMNTS

  //DropDowns
  const customDrop = (title, value, options, change, placeholder) => (
    <div className={style.dropContainer}>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
    </div>
  );

  const sizeDrop = customDrop(
    "Size",
    size,
    sizeOptions,
    onSizeChange,
    "Choose Size"
  );
  const typeDrop = customDrop(
    "Type",
    type,
    typeOptions,
    onTypeChange,
    "Choose Type"
  );
  const alignDrop = customDrop(
    "Alignment",
    align,
    alignOptions,
    onAlignChange,
    "Choose Alignment"
  );
  const acDrop = customDrop("AC", ac, acOptions, onAcChange, "Choose AC");
  const armorTypeDrop = customDrop(
    "Armor Type",
    armorType,
    armorTypeOptions,
    onArmorTypeChange,
    "Choose Armor Type"
  );

  //List setups
  //Open Dialogs
  const openDialogSpeed = () => {
    setDialogVisibleSpeed(true);
  };
  const openDialogSave = () => {
    setDialogVisibleSave(true);
  };
  const openDialogSkill = () => {
    setDialogVisibleSkill(true);
  };
  const openDialogVuln = () => {
    setDialogVisibleVuln(true);
  };
  const openDialogImmune = () => {
    setDialogVisibleImmune(true);
  };
  const openDialogResist = () => {
    setDialogVisibleResist(true);
  };
  const openDialogCondition = () => {
    setDialogVisibleCondition(true);
  };
  const openDialogSense = () => {
    setDialogVisibleSense(true);
  };
  const openDialogLang = () => {
    setDialogVisibleLang(true);
  };
  const openDialogSpecial = () => {
    setDialogVisibleSpecial(true);
  };
  const openDialogAction = () => {
    setDialogVisibleAction(true);
  };
  const openDialogReaction = () => {
    setDialogVisibleReaction(true);
  };
  const openDialogLegend = () => {
    setDialogVisibleLegend(true);
  };
  const openDialogLair = () => {
    setDialogVisibleLair(true);
  };
  const openDialogGear = () => {
    setDialogVisibleGear(true);
  };
  //Close dialogs
  const closeDialogSpeed = () => {
    setDialogVisibleSpeed(false);
    for (let i = 0; i < selectedItemsSpeed.length; i++) {
      if (speedExtraList.includes(selectedItemsSpeed[i])) {
      } else {
        setSpeedExtraList((oldArray) => [...oldArray, selectedItemsSpeed[i]]);
      }
    }
  };
  const closeDialogSave = () => {
    setDialogVisibleSave(false);
    for (let i = 0; i < selectedItemsSave.length; i++) {
      if (saveList.includes(selectedItemsSave[i])) {
      } else {
        setSaveList((saveArray) => [...saveArray, selectedItemsSave[i]]);
      }
    }
  };
  const closeDialogSkill = () => {
    setDialogVisibleSkill(false);
    for (let i = 0; i < selectedItemsSkill.length; i++) {
      if (skillList.includes(selectedItemsSkill[i])) {
      } else {
        setSkillList((oldArray) => [...oldArray, selectedItemsSkill[i]]);
      }
    }
  };
  const closeDialogVuln = () => {
    setDialogVisibleVuln(false);
    for (let i = 0; i < selectedItemsVuln.length; i++) {
      if (vulnList.includes(selectedItemsVuln[i])) {
      } else {
        setVulnList((oldArray) => [...oldArray, selectedItemsVuln[i]]);
      }
    }
  };
  const closeDialogImmune = () => {
    setDialogVisibleImmune(false);
    for (let i = 0; i < selectedItemsImmune.length; i++) {
      if (immuneList.includes(selectedItemsImmune[i])) {
      } else {
        setImmuneList((oldArray) => [...oldArray, selectedItemsImmune[i]]);
      }
    }
  };
  const closeDialogResist = () => {
    setDialogVisibleResist(false);
    for (let i = 0; i < selectedItemsResist.length; i++) {
      if (resistList.includes(selectedItemsResist[i])) {
      } else {
        setResistList((oldArray) => [...oldArray, selectedItemsResist[i]]);
      }
    }
  };
  const closeDialogCondition = () => {
    setDialogVisibleCondition(false);
    for (let i = 0; i < selectedItemsCondition.length; i++) {
      if (conditionList.includes(selectedItemsCondition[i])) {
      } else {
        setConditionList((oldArray) => [
          ...oldArray,
          selectedItemsCondition[i],
        ]);
      }
    }
  };
  const closeDialogSense = () => {
    setDialogVisibleSense(false);
    for (let i = 0; i < selectedItemsSense.length; i++) {
      if (senseList.includes(selectedItemsSense[i])) {
      } else {
        setSenseList((oldArray) => [...oldArray, selectedItemsSense[i]]);
      }
    }
  };
  const closeDialogLang = () => {
    setDialogVisibleLang(false);
    for (let i = 0; i < selectedItemsLang.length; i++) {
      if (langList.includes(selectedItemsLang[i])) {
      } else {
        setLangList((oldArray) => [...oldArray, selectedItemsLang[i]]);
      }
    }
  };
  const closeDialogSpecial = () => {
    setDialogVisibleSpecial(false);
    for (let i = 0; i < selectedItemsSpecial.length; i++) {
      if (specialList.includes(selectedItemsSpecial[i])) {
      } else {
        setSpecialList((oldArray) => [...oldArray, selectedItemsSpecial[i]]);
      }
    }
  };
  const closeDialogAction = () => {
    setDialogVisibleAction(false);
    for (let i = 0; i < selectedItemsAction.length; i++) {
      if (actionList.includes(selectedItemsAction[i])) {
      } else {
        setActionList((oldArray) => [...oldArray, selectedItemsAction[i]]);
      }
    }
  };
  const closeDialogReaction = () => {
    setDialogVisibleReaction(false);
    for (let i = 0; i < selectedItemsReaction.length; i++) {
      if (reactionList.includes(selectedItemsReaction[i])) {
      } else {
        setReactionList((oldArray) => [...oldArray, selectedItemsReaction[i]]);
      }
    }
  };
  const closeDialogLegend = () => {
    setDialogVisibleLegend(false);
    for (let i = 0; i < selectedItemsLegend.length; i++) {
      if (legendList.includes(selectedItemsLegend[i])) {
      } else {
        setLegendList((oldArray) => [...oldArray, selectedItemsLegend[i]]);
      }
    }
  };
  const closeDialogLair = () => {
    setDialogVisibleLair(false);
    for (let i = 0; i < selectedItemsLair.length; i++) {
      if (lairList.includes(selectedItemsLair[i])) {
      } else {
        setLairList((oldArray) => [...oldArray, selectedItemsLair[i]]);
      }
    }
  };
  const closeDialogGear = () => {
    setDialogVisibleGear(false);
    for (let i = 0; i < selectedItemsGear.length; i++) {
      if (gearList.includes(selectedItemsGear[i])) {
      } else {
        setGearList((oldArray) => [...oldArray, selectedItemsGear[i]]);
      }
    }
  };
  //Dialog Footer
  const dialogFooterSpeed = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSpeed} />;
  };
  const dialogFooterSave = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSave} />;
  };
  const dialogFooterSkill = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSkill} />;
  };
  const dialogFooterVuln = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogVuln} />;
  };
  const dialogFooterImmune = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogImmune} />;
  };
  const dialogFooterResist = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogResist} />;
  };
  const dialogFooterCondition = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogCondition} />
    );
  };
  const dialogFooterSense = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSense} />;
  };
  const dialogFooterLang = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLang} />;
  };
  const dialogFooterSpecial = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogSpecial} />
    );
  };
  const dialogFooterAction = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogAction} />;
  };
  const dialogFooterReaction = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogReaction} />
    );
  };
  const dialogFooterLegend = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLegend} />;
  };
  const dialogFooterLair = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLair} />;
  };
  const dialogFooterGear = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogGear} />;
  };

  //On Change
  const onBurrowChange = (e) => {
    objectChange(e.value, setBurrow);
  };
  const onClimbChange = (e) => {
    objectChange(e.value, setClimb);
  };
  const onFlyChange = (e) => {
    objectChange(e.value, setFly);
  };
  const onHoverChange = (e) => {
    objectChange(e.value, setHover);
  };
  const onSwimChange = (e) => {
    objectChange(e.value, setSwim);
  };
  //UseEffect Real time update
  useEffect(() => {
    setSelectedItemsSpeed(speedExtraList);
  }, [speedExtraList]);
  useEffect(() => {
    setSelectedItemsSave(saveList);
  }, [saveList]);
  useEffect(() => {
    setSelectedItemsSkill(skillList);
  }, [skillList]);
  useEffect(() => {
    setSelectedItemsVuln(vulnList);
  }, [vulnList]);
  useEffect(() => {
    setSelectedItemsImmune(immuneList);
  }, [immuneList]);
  useEffect(() => {
    setSelectedItemsResist(resistList);
  }, [resistList]);
  useEffect(() => {
    setSelectedItemsCondition(conditionList);
  }, [conditionList]);
  useEffect(() => {
    setSelectedItemsSense(senseList);
  }, [senseList]);
  useEffect(() => {
    setSelectedItemsLang(langList);
  }, [langList]);
  useEffect(() => {
    setSelectedItemsSpecial(specialList);
  }, [specialList]);
  useEffect(() => {
    setSelectedItemsAction(actionList);
  }, [actionList]);
  useEffect(() => {
    setSelectedItemsReaction(reactionList);
  }, [reactionList]);
  useEffect(() => {
    setSelectedItemsLegend(legendList);
  }, [legendList]);
  useEffect(() => {
    setSelectedItemsLair(lairList);
  }, [lairList]);
  useEffect(() => {
    setSelectedItemsGear(gearList);
  }, [gearList]);

  //Remove from list
  const onRemoveCustom = (setlist, list, name) => {
    setlist(list.filter((value) => value.name !== name));
  };

  const onRemoveBurrow = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Burrow");
  const onRemoveClimb = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Climb");
  const onRemoveHover = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Hover");
  const onRemoveFly = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Fly");
  const onRemoveSwim = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Swim");

  const customSpeedInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        mode="decimal"
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRandomBurrow = (e) => {
    randomButton(setBurrow, 120, 0);
  };
  const onRandomClimb = (e) => {
    randomButton(setClimb, 120, 0);
  };
  const onRandomFly = (e) => {
    randomButton(setFly, 120, 0);
  };
  const onRandomHover = (e) => {
    randomButton(setHover, 120, 0);
  };
  const onRandomSwim = (e) => {
    randomButton(setSwim, 120, 0);
  };
  const burrowInput = customSpeedInput(
    burrow,
    onBurrowChange,
    "Burrow Speed",
    onRandomBurrow,
    onRemoveBurrow
  );
  const climbInput = customSpeedInput(
    climb,
    onClimbChange,
    "Climb Speed",
    onRandomClimb,
    onRemoveClimb
  );
  const flyInput = customSpeedInput(
    fly,
    onFlyChange,
    "Fly Speed",
    onRandomFly,
    onRemoveFly
  );
  const hoverInput = customSpeedInput(
    hover,
    onHoverChange,
    "Hover Speed",
    onRandomHover,
    onRemoveHover
  );
  const swimInput = customSpeedInput(
    swim,
    onSwimChange,
    "Swim Speed",
    onRandomSwim,
    onRemoveSwim
  );
  //Speed
  const extraSpeedDispaly = speedExtraList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Burrow"
            ? burrowInput
            : i.name === "Climb"
            ? climbInput
            : i.name === "Fly"
            ? flyInput
            : i.name === "Hover"
            ? hoverInput
            : i.name === "Swim"
            ? swimInput
            : null}
        </h3>
      </div>
    );
  });

  const moveDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Addtional Movement</h2>
      <Button onClick={openDialogSpeed} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Additional Movement"
        visible={dialogVisibleSpeed}
        maximizable
        modal
        onHide={closeDialogSpeed}
        footer={dialogFooterSpeed}
      >
        <DataTable
          value={speedTypeOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSpeed}
          onSelectionChange={(e) => setSelectedItemsSpeed(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );

  //Saves
  const onSaveStrChange = (e) => {
    objectChange(e.value, setSaveStr);
  };
  const onSaveDexChange = (e) => {
    objectChange(e.value, setSaveDex);
  };
  const onSaveConChange = (e) => {
    objectChange(e.value, setSaveCon);
  };
  const onSaveIntChange = (e) => {
    objectChange(e.value, setSaveInt);
  };
  const onSaveWisChange = (e) => {
    objectChange(e.value, setSaveWis);
  };
  const onSaveChaChange = (e) => {
    objectChange(e.value, setSaveCha);
  };

  const onRemoveSaveStr = (e) =>
    onRemoveCustom(setSaveList, saveList, "Strength");
  const onRemoveSaveDex = (e) =>
    onRemoveCustom(setSaveList, saveList, "Dexterity");
  const onRemoveSaveCon = (e) =>
    onRemoveCustom(setSaveList, saveList, "Constitution");
  const onRemoveSaveInt = (e) =>
    onRemoveCustom(setSaveList, saveList, "Intelligence");
  const onRemoveSaveWis = (e) =>
    onRemoveCustom(setSaveList, saveList, "Wisdom");
  const onRemoveSaveCha = (e) =>
    onRemoveCustom(setSaveList, saveList, "Charisma");

  const customSaveInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        mode="decimal"
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRandomSaveStr = (e) => {
    randomButton(setSaveStr, 15, 0);
  };
  const onRandomSaveDex = (e) => {
    randomButton(setSaveDex, 15, 0);
  };
  const onRandomSaveCon = (e) => {
    randomButton(setSaveCon, 15, 0);
  };
  const onRandomSaveInt = (e) => {
    randomButton(setSaveInt, 15, 0);
  };
  const onRandomSaveWis = (e) => {
    randomButton(setSaveWis, 15, 0);
  };
  const onRandomSaveCha = (e) => {
    randomButton(setSaveCha, 15, 0);
  };
  const saveStrInput = customSaveInput(
    saveStr,
    onSaveStrChange,
    "STR Modifier",
    onRandomSaveStr,
    onRemoveSaveStr
  );
  const saveDexInput = customSaveInput(
    saveDex,
    onSaveDexChange,
    "DEX Modifier",
    onRandomSaveDex,
    onRemoveSaveDex
  );
  const saveConInput = customSaveInput(
    saveCon,
    onSaveConChange,
    "CON Modifier",
    onRandomSaveCon,
    onRemoveSaveCon
  );
  const saveIntInput = customSaveInput(
    saveInt,
    onSaveIntChange,
    "INT Modifier",
    onRandomSaveInt,
    onRemoveSaveInt
  );
  const saveWisInput = customSaveInput(
    saveWis,
    onSaveWisChange,
    "WIS Modifier",
    onRandomSaveWis,
    onRemoveSaveWis
  );
  const saveChaInput = customSaveInput(
    saveCha,
    onSaveChaChange,
    "CHA Modifier",
    onRandomSaveCha,
    onRemoveSaveCha
  );
  const saveDisplay = saveList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Strength"
            ? saveStrInput
            : i.name === "Dexterity"
            ? saveDexInput
            : i.name === "Constitution"
            ? saveConInput
            : i.name === "Intelligence"
            ? saveIntInput
            : i.name === "Wisdom"
            ? saveWisInput
            : i.name === "Charisma"
            ? saveChaInput
            : null}
        </h3>
      </div>
    );
  });
  const saveDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Saving Throws</h2>
      <Button onClick={openDialogSave} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Saving Throws"
        visible={dialogVisibleSave}
        maximizable
        modal
        onHide={closeDialogSave}
        footer={dialogFooterSave}
      >
        <DataTable
          value={saveOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSave}
          onSelectionChange={(e) => setSelectedItemsSave(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Skills
  const onSkillAcrobaticsChange = (e) => {
    objectChange(e.value, setSkillAcrobatics);
  };
  const onSkillAnimalChange = (e) => {
    objectChange(e.value, setSkillAnimal);
  };
  const onSkillArcanaChange = (e) => {
    objectChange(e.value, setSkillArcana);
  };
  const onSkillAthleticsChange = (e) => {
    objectChange(e.value, setSkillAthletics);
  };
  const onSkillDeceptionChange = (e) => {
    objectChange(e.value, setSkillDeception);
  };
  const onSkillHistoryChange = (e) => {
    objectChange(e.value, setSkillHistory);
  };
  const onSkillInsightChange = (e) => {
    objectChange(e.value, setSkillInsight);
  };
  const onSkillIntimidationChange = (e) => {
    objectChange(e.value, setSkillIntimidation);
  };
  const onSkillInvestigationChange = (e) => {
    objectChange(e.value, setSkillInvestigation);
  };
  const onSkillMedicineChange = (e) => {
    objectChange(e.value, setSkillMedicine);
  };
  const onSkillNatureChange = (e) => {
    objectChange(e.value, setSkillNature);
  };
  const onSkillPerceptionChange = (e) => {
    objectChange(e.value, setSkillPerception);
  };
  const onSkillPerformanceChange = (e) => {
    objectChange(e.value, setSkillPerformance);
  };
  const onSkillPersuasionChange = (e) => {
    objectChange(e.value, setSkillPersuasion);
  };
  const onSkillReligionChange = (e) => {
    objectChange(e.value, setSkillReligion);
  };
  const onSkillSleightChange = (e) => {
    objectChange(e.value, setSkillSleight);
  };
  const onSkillStealthChange = (e) => {
    objectChange(e.value, setSkillStealth);
  };
  const onSkillSurvivalChange = (e) => {
    objectChange(e.value, setSkillSurvival);
  };
  const customSkillInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        mode="decimal"
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRemoveSkillAcrobatics = (e) =>
    onRemoveCustom(setSkillList, skillList, "Acrobatics");
  const onRemoveSkillAnimal = (e) =>
    onRemoveCustom(setSkillList, skillList, "Animal Handling");
  const onRemoveSkillArcana = (e) =>
    onRemoveCustom(setSkillList, skillList, "Arcana");
  const onRemoveSkillAthletics = (e) =>
    onRemoveCustom(setSkillList, skillList, "Athletics");
  const onRemoveSkillDeception = (e) =>
    onRemoveCustom(setSkillList, skillList, "Deception");
  const onRemoveSkillHistory = (e) =>
    onRemoveCustom(setSkillList, skillList, "History");
  const onRemoveSkillInsight = (e) =>
    onRemoveCustom(setSkillList, skillList, "Insight");
  const onRemoveSkillIntimidation = (e) =>
    onRemoveCustom(setSkillList, skillList, "Intimidation");
  const onRemoveSkillInvestigation = (e) =>
    onRemoveCustom(setSkillList, skillList, "Investigation");
  const onRemoveSkillMedicine = (e) =>
    onRemoveCustom(setSkillList, skillList, "Medicine");
  const onRemoveSkillNature = (e) =>
    onRemoveCustom(setSkillList, skillList, "Nature");
  const onRemoveSkillPerception = (e) =>
    onRemoveCustom(setSkillList, skillList, "Perception");
  const onRemoveSkillPerformance = (e) =>
    onRemoveCustom(setSkillList, skillList, "Performance");
  const onRemoveSkillPersuasion = (e) =>
    onRemoveCustom(setSkillList, skillList, "Persuasion");
  const onRemoveSkillReligion = (e) =>
    onRemoveCustom(setSkillList, skillList, "Religion");
  const onRemoveSkillSleight = (e) =>
    onRemoveCustom(setSkillList, skillList, "Sleight of Hand");
  const onRemoveSkillStealth = (e) =>
    onRemoveCustom(setSkillList, skillList, "Stealth");
  const onRemoveSkillSurvival = (e) =>
    onRemoveCustom(setSkillList, skillList, "Survival");

  const onRandomSkillAcrobatics = (e) => {
    randomButton(setSkillAcrobatics, 15, 0);
  };
  const onRandomSkillAnimal = (e) => {
    randomButton(setSkillAnimal, 15, 0);
  };
  const onRandomSkillArcana = (e) => {
    randomButton(setSkillArcana, 15, 0);
  };
  const onRandomSkillAthletics = (e) => {
    randomButton(setSkillAthletics, 15, 0);
  };
  const onRandomSkillDeception = (e) => {
    randomButton(setSkillDeception, 15, 0);
  };
  const onRandomSkillHistory = (e) => {
    randomButton(setSkillHistory, 15, 0);
  };
  const onRandomSkillInsight = (e) => {
    randomButton(setSkillInsight, 15, 0);
  };
  const onRandomSkillIntimidation = (e) => {
    randomButton(setSkillIntimidation, 15, 0);
  };
  const onRandomSkillInvestigation = (e) => {
    randomButton(setSkillInvestigation, 15, 0);
  };
  const onRandomSkillMedicine = (e) => {
    randomButton(setSkillMedicine, 15, 0);
  };
  const onRandomSkillNature = (e) => {
    randomButton(setSkillNature, 15, 0);
  };
  const onRandomSkillPerception = (e) => {
    randomButton(setSkillPerception, 15, 0);
  };
  const onRandomSkillPerformance = (e) => {
    randomButton(setSkillPerformance)
  }
  const onRandomSkillPersuasion = (e) => {
    randomButton(setSkillPersuasion, 15, 0);
  };
  const onRandomSkillReligion = (e) => {
    randomButton(setSkillReligion, 15, 0);
  };
  const onRandomSkillSleight = (e) => {
    randomButton(setSkillSleight, 15, 0);
  };
  const onRandomSkillStealth = (e) => {
    randomButton(setSkillStealth, 15, 0);
  };
  const onRandomSkillSurvival = (e) => {
    randomButton(setSkillSurvival, 15, 0);
  };
  const skillAcrobaticsInput = customSkillInput(
    skillAcrobatics,
    onSkillAcrobaticsChange,
    "Modifier",
    onRandomSkillAcrobatics,
    onRemoveSkillAcrobatics
  );
  const skillAnimalInput = customSkillInput(
    skillAnimal,
    onSkillAnimalChange,
    "Modifier",
    onRandomSkillAnimal,
    onRemoveSkillAnimal
  );
  const skillArcanaInput = customSkillInput(
    skillArcana,
    onSkillArcanaChange,
    "Modifier",
    onRandomSkillArcana,
    onRemoveSkillArcana
  );
  const skillAthleticsInput = customSkillInput(
    skillAthletics,
    onSkillAthleticsChange,
    "Modifier",
    onRandomSkillAthletics,
    onRemoveSkillAthletics
  );
  const skillDeceptionInput = customSkillInput(
    skillDeception,
    onSkillDeceptionChange,
    "Modifier",
    onRandomSkillDeception,
    onRemoveSkillDeception
  );
  const skillHistoryInput = customSkillInput(
    skillHistory,
    onSkillHistoryChange,
    "Modifier",
    onRandomSkillHistory,
    onRemoveSkillHistory
  );
  const skillInsightInput = customSkillInput(
    skillInsight,
    onSkillInsightChange,
    "Modifier",
    onRandomSkillInsight,
    onRemoveSkillInsight
  );
  const skillIntimidationInput = customSkillInput(
    skillIntimidation,
    onSkillIntimidationChange,
    "Modifier",
    onRandomSkillIntimidation,
    onRemoveSkillIntimidation
  );
  const skillInvestigationInput = customSkillInput(
    skillInvestigation,
    onSkillInvestigationChange,
    "Modifier",
    onRandomSkillInvestigation,
    onRemoveSkillInvestigation
  );
  const skillMedicineInput = customSkillInput(
    skillMedicine,
    onSkillMedicineChange,
    "Modifier",
    onRandomSkillMedicine,
    onRemoveSkillMedicine
  );
  const skillNatureInput = customSkillInput(
    skillNature,
    onSkillNatureChange,
    "Modifier",
    onRandomSkillNature,
    onRemoveSkillNature
  );
  const skillPerceptionInput = customSkillInput(
    skillPerception,
    onSkillPerceptionChange,
    "Modifier",
    onRandomSkillPerception,
    onRemoveSkillPerception
  );
  const skillPerformanceInput = customSkillInput(
    skillPerformance,
    onSkillPerformanceChange,
    "Modifier",
    onRandomSkillPerformance,
    onRemoveSkillPerformance
  );
  const skillPersuasionInput = customSkillInput(
    skillPersuasion,
    onSkillPersuasionChange,
    "Modifier",
    onRandomSkillPersuasion,
    onRemoveSkillPersuasion
  );
  const skillReligionInput = customSkillInput(
    skillReligion,
    onSkillReligionChange,
    "Modifier",
    onRandomSkillReligion,
    onRemoveSkillReligion
  );
  const skillSleightInput = customSkillInput(
    skillSleight,
    onSkillSleightChange,
    "Modifier",
    onRandomSkillSleight,
    onRemoveSkillSleight
  );
  const skillStealthInput = customSkillInput(
    skillStealth,
    onSkillStealthChange,
    "Modifier",
    onRandomSkillStealth,
    onRemoveSkillStealth
  );
  const skillSurvivalInput = customSkillInput(
    skillSurvival,
    onSkillSurvivalChange,
    "Modifier",
    onRandomSkillSurvival,
    onRemoveSkillSurvival
  );
  const skillDisplay = skillList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Acrobatics"
            ? skillAcrobaticsInput
            : i.name === "Animal Handling"
            ? skillAnimalInput
            : i.name === "Arcana"
            ? skillArcanaInput
            : i.name === "Athletics"
            ? skillAthleticsInput
            : i.name === "Deception"
            ? skillDeceptionInput
            : i.name === "History"
            ? skillHistoryInput
            : i.name === "Insight"
            ? skillInsightInput
            : i.name === "Intimidation"
            ? skillIntimidationInput
            : i.name === "Investigation"
            ? skillInvestigationInput
            : i.name === "Medicine"
            ? skillMedicineInput
            : i.name === "Nature"
            ? skillNatureInput
            : i.name === "Perception"
            ? skillPerceptionInput
            : i.name === "Performance"
            ? skillPerformanceInput
            : i.name === "Persuasion"
            ? skillPersuasionInput
            : i.name === "Religion"
            ? skillReligionInput
            : i.name === "Sleight of Hand"
            ? skillSleightInput
            : i.name === "Stealth"
            ? skillStealthInput
            : i.name === "Survival"
            ? skillSurvivalInput
            : null}
        </h3>
      </div>
    );
  });
  const skillDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Skills</h2>
      <Button onClick={openDialogSkill} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Skills"
        visible={dialogVisibleSkill}
        maximizable
        modal
        onHide={closeDialogSkill}
        footer={dialogFooterSkill}
      >
        <DataTable
          value={skillOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSkill}
          onSelectionChange={(e) => setSelectedItemsSkill(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Vuln
  const vulnDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Vulnerabilities</h2>
      <Button onClick={openDialogVuln} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Vulnerabilities"
        visible={dialogVisibleVuln}
        maximizable
        modal
        onHide={closeDialogVuln}
        footer={dialogFooterVuln}
      >
        <DataTable
          value={vulnOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsVuln}
          onSelectionChange={(e) => setSelectedItemsVuln(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Immune
  const immuneDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Immunities</h2>
      <Button onClick={openDialogImmune} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Immunities"
        visible={dialogVisibleImmune}
        maximizable
        modal
        onHide={closeDialogImmune}
        footer={dialogFooterImmune}
      >
        <DataTable
          value={immuneOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsImmune}
          onSelectionChange={(e) => setSelectedItemsImmune(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Resist
  const resistDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Resistances</h2>
      <Button onClick={openDialogResist} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Resistances"
        visible={dialogVisibleResist}
        maximizable
        modal
        onHide={closeDialogResist}
        footer={dialogFooterResist}
      >
        <DataTable
          value={resistOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsResist}
          onSelectionChange={(e) => setSelectedItemsResist(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Condition
  const conditionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Conditions</h2>
      <Button onClick={openDialogCondition} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Conditions"
        visible={dialogVisibleCondition}
        maximizable
        modal
        onHide={closeDialogCondition}
        footer={dialogFooterCondition}
      >
        <DataTable
          value={conditionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsCondition}
          onSelectionChange={(e) => setSelectedItemsCondition(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Sense
  const senseDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Senses</h2>
      <Button onClick={openDialogSense} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Senses"
        visible={dialogVisibleSense}
        maximizable
        modal
        onHide={closeDialogSense}
        footer={dialogFooterSense}
      >
        <DataTable
          value={senseOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSense}
          onSelectionChange={(e) => setSelectedItemsSense(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Languages
  const langDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Languages</h2>
      <Button onClick={openDialogLang} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Languages"
        visible={dialogVisibleLang}
        maximizable
        modal
        onHide={closeDialogLang}
        footer={dialogFooterLang}
      >
        <DataTable
          value={langOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLang}
          onSelectionChange={(e) => setSelectedItemsLang(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Special
  const specialDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Special Abilities</h2>
      <Button onClick={openDialogSpecial} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Special Abilities"
        visible={dialogVisibleSpecial}
        maximizable
        modal
        onHide={closeDialogSpecial}
        footer={dialogFooterSpecial}
      >
        <DataTable
          value={specialOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSpecial}
          onSelectionChange={(e) => setSelectedItemsSpecial(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Action
  const actionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Actions</h2>
      <Button onClick={openDialogAction} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Actions"
        visible={dialogVisibleAction}
        maximizable
        modal
        onHide={closeDialogAction}
        footer={dialogFooterAction}
      >
        <DataTable
          value={actionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsAction}
          onSelectionChange={(e) => setSelectedItemsAction(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Reaction
  const reactionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Reactions</h2>
      <Button onClick={openDialogReaction} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Reactions"
        visible={dialogVisibleReaction}
        maximizable
        modal
        onHide={closeDialogReaction}
        footer={dialogFooterReaction}
      >
        <DataTable
          value={reactionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsReaction}
          onSelectionChange={(e) => setSelectedItemsReaction(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Legendary
  const legendDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Legendary Actions</h2>
      <Button onClick={openDialogLegend} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Legendary Actions"
        visible={dialogVisibleLegend}
        maximizable
        modal
        onHide={closeDialogLegend}
        footer={dialogFooterLegend}
      >
        <DataTable
          value={legendOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLegend}
          onSelectionChange={(e) => setSelectedItemsLegend(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Lair
  const lairDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Lair Actions</h2>
      <Button onClick={openDialogLair} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Lair Actions"
        visible={dialogVisibleLair}
        maximizable
        modal
        onHide={closeDialogLair}
        footer={dialogFooterLair}
      >
        <DataTable
          //   value={lairOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLair}
          onSelectionChange={(e) => setSelectedItemsLair(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Gear
  const gearDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Gear</h2>
      <Button onClick={openDialogGear} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Gear"
        visible={dialogVisibleGear}
        maximizable
        modal
        onHide={closeDialogGear}
        footer={dialogFooterGear}
      >
        <DataTable
          value={gearOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsGear}
          onSelectionChange={(e) => setSelectedItemsGear(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.monstergenBtnName}>
        Random
      </Button>
    </div>
  );
  const nameText = customInputText(
    "Monster Name",
    name,
    onNameChange,
    "Set Name",
    onRandomName
  );

  //InputNumbers
  const customInputNumber = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        mode="decimal"
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <Button onClick={click} className={style.monstergenBtnName}>
        Random
      </Button>
    </div>
  );

  const hpInput = customInputNumber("HP", hp, onHpChange, "Set HP", onRandomHp);
  const speedInput = customInputNumber(
    "Speed",
    speed,
    onSpeedChange,
    "Set Speed",
    onRandomSpeed
  );
  const strInput = customInputNumber(
    "Strength",
    str,
    onStrChange,
    "Set STR",
    onRandomStr
  );
  const dexInput = customInputNumber(
    "Dexterity",
    dex,
    onDexChange,
    "Set DEX",
    onRandomDex
  );
  const conInput = customInputNumber(
    "Constituion",
    con,
    onConChange,
    "Set CON",
    onRandomCon
  );
  const intInput = customInputNumber(
    "Intelligence",
    int,
    onIntChange,
    "Set INT",
    onRandomInt
  );
  const wisInput = customInputNumber(
    "Wisdom",
    wis,
    onWisChange,
    "Set WIS",
    onRandomWis
  );
  const chaInput = customInputNumber(
    "Charisma",
    cha,
    onChaChange,
    "Set CHA",
    onRandomCha
  );

  //Generate and Clear
  const onGenerate = (e) => {
    const ifBlank = (value, setValue, options, max, min) => {
      if (value === "") {
        let r = Math.round(Math.random() * (max - min) + 1);
        setValue(options[r].name);
      } else {
        setValue(value);
      }
    };
    ifBlank(size, setSize, sizeOptions, 6, 1);
    ifBlank(type, setType, typeOptions, 16, 1);
    ifBlank(align, setAlign, alignOptions, 9, 1);
    ifBlank(ac, setAc, acOptions, 30, 1);
    ifBlank(armorType, setArmorType, armorTypeOptions, 5, 1);
    ifBlank(speedType, setSpeedType, speedTypeOptions, 6, 1);
    ifBlank(vuln, setVuln, vulnOptions, 17, 1);
    ifBlank(skill, setSkill, skillOptions, 18, 1);
    ifBlank(immune, setImmune, immuneOptions, 17, 1);
    ifBlank(resist, setResist, resistOptions, 17, 1);
    ifBlank(condition, setCondition, conditionOptions, 15, 1);
    ifBlank(sense, setSense, senseOptions, 4, 1);
    ifBlank(lang, setLang, langOptions, 16, 1);
    ifBlank(special, setSpecial, specialOptions, 208, 1);
    ifBlank(action, setAction, actionOptions, 292, 1);
    ifBlank(reaction, setReaction, reactionOptions, 11, 1);
    ifBlank(legend, setLegend, legendOptions, 35, 1);

    // ifBlank(lair, setLair, lairOptions, 39, 1)
    //TODO
    // ifBlank(save, setSave, saveOptions, 11, 1)

    const ifBlank2 = (value, setValue, max, min) => {
      if (value === "") {
        let r = Math.round(Math.random() * (max - min) + 1);
        setValue(r);
      } else {
        setValue(value);
      }
    };
    ifBlank2(hp, setHp, 500, 0);
    ifBlank2(speed, setSpeed, 120, 0);
    ifBlank2(speedExtra, setSpeedExtra, 120, 0);
    ifBlank2(str, setStr, 30, 0);
    ifBlank2(dex, setDex, 30, 0);
    ifBlank2(con, setCon, 30, 0);
    ifBlank2(int, setInt, 30, 0);
    ifBlank2(wis, setWis, 30, 0);
    ifBlank2(cha, setCha, 30, 0);

    // const ifBlank3 = (value, setValue, options, max, min) => {
    //   if (value === []) {
    //     let r = Math.round(Math.random() * (max - min) + 1);
    //     setValue(options[r]);
    //   } else {
    //     setValue(value);
    //   }
    // };

    // ifBlank3(speedExtraList, setSpeedExtraList, speedTypeOptions, 5, 1);

    if (speedExtraList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSpeedExtraList((speedArray) => [...speedArray, speedTypeOptions[r]]);
      }
    }
    if (speedExtraList.length > 0) {
      let y = Math.round(Math.random() * (120 - 5));
      setBurrow(y);
      setClimb(y);
      setHover(y);
      setFly(y);
      setSwim(y);
    }
    if (saveList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSaveList((saveArray) => [...saveArray, saveOptions[r]]);
      }
    }
    if (skillList.length === 0) {
        let x = Math.round(Math.random() * (1 - 0));
        if (x === 1) {
          let r = Math.round(Math.random() * (4 - 0));
          setSkillList((saveArray) => [...saveArray, skillOptions[r]]);
        }
      }
  };

  const onClear = (e) => {
    setName("");
    setSize("");
    setType("");
    setAlign("");
    setAc("");
    setArmorType("");
    setHp("");
    setSpeed("");
    setSpeedType("");
    setSpeedExtra("");
    setStr("");
    setDex("");
    setCon("");
    setInt("");
    setWis("");
    setCha("");
    setSave("");
    setSkill("");
    setVuln("");
    setImmune("");
    setResist("");
    setCondition("");
    setSense("");
    setLang("");
    setSpecial("");
    setAction("");
    setReaction("");
    setLegend("");
    setLair("");
    setGear("");
    setSpeedExtraList([]);
    setBurrow("");
    setClimb("");
    setHover("");
    setFly("");
    setSwim("");
    setSaveList([]);
    setSaveStr("");
    setSaveDex("");
    setSaveCon("");
    setSaveInt("");
    setSaveWis("");
    setSaveCha("");
    setSkillList([])
    setSkillAcrobatics("")
    setSkillAnimal("")
    setSkillArcana("")
    setSkillAthletics("")
    setSkillDeception("")
    setSkillHistory("")
    setSkillInsight("")
    setSkillIntimidation("")
    setSkillInvestigation("")
    setSkillMedicine("")
    setSkillNature("")
    setSkillPerception("")
    setSkillPerformance("")
    setSkillPersuasion("")
    setSkillReligion("")
    setSkillSleight("")
    setSkillStealth("")
    setSkillSurvival("")
  };

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>

        {/* Generate Btns */}
        <div>
          <div className={style.monstergenBtnWrapper}>
            <button onClick={onGenerate} className={style.monstergenBtnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.monstergenBtnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className={style.monstergenBody}>
        {/* Options */}
        <div className={style.monstergenOptionsWrapper}>
          <h1 className={style.monstergenSubHeader}>Basic Info</h1>
          <div className={style.monstergenSubsection}>
            {nameText}
            {sizeDrop}
            {typeDrop}
            {alignDrop}
            {acDrop}
            {armorTypeDrop}
          </div>
          <div className={style.monstergenSubsection}>
            {hpInput}
            {speedInput}
            {moveDialog}
            <div className={style.speedContainer}>{extraSpeedDispaly}</div>
          </div>
          <h1 className={style.monstergenSubHeader}>Ability Scores</h1>
          <div className={style.monstergenSubsection}>
            {strInput}
            {dexInput}
            {conInput}
            {intInput}
            {wisInput}
            {chaInput}
          </div>
          <h1 className={style.monstergenSubHeader}>Saves/Skills/Dmgs</h1>
          <div className={style.monstergenSubsection}>
            {saveDialog}
            <div className={style.speedContainer}>{saveDisplay}</div>
            {skillDialog}
            <div className={style.speedContainer}>{skillDisplay}</div>
            {vulnDialog}
            {immuneDialog}
            {resistDialog}
            {conditionDialog}
            {senseDialog}
            {langDialog}
          </div>
          <h1 className={style.monstergenSubHeader}>Actions / Abilities</h1>
          <div className={style.monstergenSubsection}>
            {specialDialog}
            {actionDialog}
            {reactionDialog}
            {legendDialog}
            {lairDialog}
            {gearDialog}
          </div>
        </div>

        <div className={style.monstergenColumns}>
          {/* Main Display */}
          <div className={style.monstergenDisplay}>
            {/* Display Wrapper */}
            <div className={style.npggenDescWrapper}>
              {/* Display Desc  */}
              <div className={style.monstergenDesc}>
                <h2 className={style.monstergenDescHeader}>Details</h2>
                <div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>Name: </h1>
                    <h1 className={style.monstergenDetailOutput}>{name}</h1>
                  </div>

                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>Size: </h1>
                    <h1 className={style.monstergenDetailOutput}>{size}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>Type: </h1>
                    <h1 className={style.monstergenDetailOutput}>{type}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>Alignment: </h1>
                    <h1 className={style.monstergenDetailOutput}>{align}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>AC: </h1>
                    <h1 className={style.monstergenDetailOutput}>{ac}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>
                      Armor Type:{" "}
                    </h1>
                    <h1 className={style.monstergenDetailOutput}>
                      {armorType}
                    </h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>HP: </h1>
                    <h1 className={style.monstergenDetailOutput}>{hp}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>Speed: </h1>
                    <h1 className={style.monstergenDetailOutput}>{speed}</h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>
                      Movement Type:{" "}
                    </h1>
                    <h1 className={style.monstergenDetailOutput}>
                      {speedType}
                    </h1>
                  </div>
                  <div className={style.monstergenDetail}>
                    <h1 className={style.monstergenDetailTitle}>
                      Extra Movement:{" "}
                    </h1>
                    <h1 className={style.monstergenDetailOutput}>
                      {speedExtra}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            {/* End first Column */}
          </div>
          {/* Second column */}
          <div className={style.monstergenDisplay}>
            <div className={style.npggenDescWrapper}>
              <div className={style.monstergenDesc}>
                <h2 className={style.monstergenDescHeader}>Stats</h2>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>STR: </h1>
                  <h1 className={style.monstergenDetailOutput}>{str}</h1>
                </div>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>DEX: </h1>
                  <h1 className={style.monstergenDetailOutput}>{dex}</h1>
                </div>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>CON: </h1>
                  <h1 className={style.monstergenDetailOutput}>{con}</h1>
                </div>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>INT: </h1>
                  <h1 className={style.monstergenDetailOutput}>{int}</h1>
                </div>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>WIS: </h1>
                  <h1 className={style.monstergenDetailOutput}>{wis}</h1>
                </div>
                <div className={style.monstergenDetail}>
                  <h1 className={style.monstergenDetailTitle}>CHA: </h1>
                  <h1 className={style.monstergenDetailOutput}>{cha}</h1>
                </div>
              </div>
            </div>
          </div>
          {/* end second column */}
          {/* Second column */}
          <div className={style.monstergenDisplay}>
            <div className={style.npggenDescWrapper}>
              <div className={style.monstergenDesc}>
                <h2 className={style.monstergenDescHeader}>Actions</h2>
              </div>
            </div>
          </div>
          {/* end second column */}
        </div>

        {/* End full column wrapper */}
      </div>
    </div>
  );
};

export default MonsterGen;
