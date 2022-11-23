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
  const [saveList, setSaveList] = useState([])
  const [saveExtra, setSaveExtra] = useState("");
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

  const [vuln, setVuln] = useState("");
  const [vulns, setVulns] = useState("");
  const [vulnOptions, setVulnOptions] = useState();

  const [immune, setImmune] = useState("");
  const [immunes, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();

  const [resist, setResist] = useState("");
  const [resists, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();

  const [condition, setCondition] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();

  const [sense, setSense] = useState("");
  const [senses, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();

  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();

  const [special, setSpecial] = useState("");
  const [Specials, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();

  const [reaction, setReaction] = useState("");
  const [reactions, setReactions] = useState("");
  const [reactionOptions, setReactionOptions] = useState();

  const [legend, setLegend] = useState("");
  const [legends, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();

  const [lair, setLair] = useState("");
  const [Lairs, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();

  const [gear, setGear] = useState("");
  const [gears, setGears] = useState("");
  const [gearOptions, setGearOptions] = useState();

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
  const onSaveChange = (e) => {};
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
  const skillDrop = customDrop(
    "Skills",
    skill,
    skillOptions,
    onSkillChange,
    "Choose Skill"
  );
  const vulnDrop = customDrop(
    "Vulnerabities",
    vuln,
    vulnOptions,
    onVulnChange,
    "Choose Vulnerabities"
  );
  const immuneDrop = customDrop(
    "Immunities",
    immune,
    immuneOptions,
    onImmuneChange,
    "Choose Immunities"
  );
  const resistDrop = customDrop(
    "Resistances",
    resist,
    resistOptions,
    onResistChange,
    "Choose Resist"
  );
  const conditionDrop = customDrop(
    "Condition Immunities",
    condition,
    conditionOptions,
    onConditionChange,
    "Choose Condition"
  );
  const senseDrop = customDrop(
    "Senses",
    sense,
    senseOptions,
    onSenseChange,
    "Choose Senses"
  );
  const langDrop = customDrop(
    "Languages",
    save,
    langOptions,
    onLangChange,
    "Choose Languages"
  );

  //Additonal SPEED
  const openDialogSpeed = () => {
    setDialogVisibleSpeed(true);
  };
  const closeDialogSpeed = () => {
    setDialogVisibleSpeed(false);

    for (let i = 0; i < selectedItemsSpeed.length; i++) {
      if (speedExtraList.includes(selectedItemsSpeed[i])) {
      } else {
        setSpeedExtraList((speedArray) => [...speedArray, selectedItemsSpeed[i]]);
      }
    }
  };
  const dialogFooterSpeed = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSpeed} />;
  };
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
  useEffect(() => {
    setSelectedItemsSpeed(speedExtraList);
  }, [speedExtraList]);

  const onRemoveCustom = (list, name) => {
    setSpeedExtraList(list.filter((value) => value.name !== name));
  };

  const onRemoveBurrow = (e) => onRemoveCustom(speedExtraList,"Burrow");
  const onRemoveClimb = (e) => onRemoveCustom(speedExtraList,"Climb");
  const onRemoveHover = (e) => onRemoveCustom(speedExtraList,"Hover");
  const onRemoveFly = (e) => onRemoveCustom(speedExtraList,"Fly");
  const onRemoveSwim = (e) => onRemoveCustom(speedExtraList,"Swim");

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

  //TODO Saves
  const openDialogSave = () => {
    setDialogVisibleSave(true);
  };
  const closeDialogSave = () => {
    setDialogVisibleSave(false);
    for (let i = 0; i < selectedItemsSave.length; i++) {
      if (speedExtraList.includes(selectedItemsSave[i])) {
      } else {
        setSpeedExtraList((speedArray) => [...speedArray, selectedItemsSave[i]]);
      }
    }
  };
  const dialogFooterSave = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSave} />;
  };
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
  useEffect(() => {
    setSelectedItemsSave(saveList);
  }, [saveList]);

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
            {skillDrop}
            {vulnDrop}
            {immuneDrop}
            {resistDrop}
            {conditionDrop}
            {senseDrop}
            {langDrop}
          </div>
          <h1 className={style.monstergenSubHeader}>Actions / Abilities</h1>
          <div className={style.monstergenSubsection}>
            <div>
              <h1>Specials</h1>
              <Dropdown
                optionLabel="name"
                value={special}
                options={specialOptions}
                onChange={onSpecialChange}
                placeholder="Choose Specials"
              />
            </div>
            <div>
              <h1>Actions</h1>
              <Dropdown
                optionLabel="name"
                value={action}
                options={actionOptions}
                onChange={onActionChange}
                placeholder="Choose Actions"
              />
            </div>
            <div>
              <h1>Reactions</h1>
              <Dropdown
                optionLabel="name"
                value={reaction}
                options={reactionOptions}
                onChange={onReactionChange}
                placeholder="Choose Reactions"
              />
            </div>
            <div>
              <h1>Legendary Actions</h1>
              <Dropdown
                optionLabel="name"
                value={legend}
                options={legendOptions}
                onChange={onLegendChange}
                placeholder="Choose Legendary Actions"
              />
            </div>
            <div>
              <h1>Lair</h1>
              <Dropdown
                optionLabel="name"
                value={lair}
                options={lairOptions}
                onChange={onLairChange}
                placeholder="Choose Lair Actions"
              />
            </div>
            <div>
              <h1>Gear</h1>
              <Dropdown
                optionLabel="name"
                value={gear}
                options={gearOptions}
                //   onChange={onGearChange}
                placeholder="Choose Sear"
              />
            </div>
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
