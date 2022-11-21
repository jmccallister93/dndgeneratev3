import Navbar from "../components/Navbar";
import style from "../stylesheets/MonsterGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { InputNumber } from "primereact/inputnumber";

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
  const [speedExtras, setSpeedExtras] = useState("");
  const [speedExtraOptions, setSpeedExtraOptions] = useState();

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

  //Import Data
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
  const onNameChange = (e) => {};
  //TODO
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
  const onSpeedTypeChange = (e) => {
    objectChange(e.value, setSpeedType, 6, 1, 1, speedTypeOptions);
  };
  const onSpeedExtraChange = (e) => {
    objectChange(e.value, setSpeedExtra);
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
    // const onSaveChange = (e) => {
    //   setSave(e.value);
    //   if (e.value === "Random") {
    //     let r = Math.round(Math.random() * (28 - 1) +1);
    //     setSave(saveOptions[r].name);
    //   }
    // };
  const onVulnChange = (e) => {
    objectChange(e.value, setVuln, 17, 1, 1, vulnOptions)
  };

  const onSkillChange = (e) => {
    objectChange(e.value, setSkill, 18, 1, 1, skillOptions)
  };

  const onImmuneChange = (e) => {
    objectChange(e.value, setImmune, 17, 1, 1, immuneOptions)
  };

  const onResistChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setResist(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setResist(resistOptions[r].name);
    }
  };

  const onConditionChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setCondition(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (15 - 1) + 1);
      setCondition(conditionOptions[r].name);
    }
  };

  const onSenseChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setSense(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (4 - 1) + 1);
      setSense(senseOptions[r].name);
    }
  };

  const onLangChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setLang(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (16 - 1) + 1);
      setLang(langOptions[r].name);
    }
  };

  const onSpecialChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setSpecial(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (208 - 1) + 1);
      setSpecial(specialOptions[r].name);
    }
  };

  const onActionChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setAction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (292 - 1) + 1);
      setAction(actionOptions[r].name);
    }
  };

  const onReactionChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setReaction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setReaction(reactionOptions[r].name);
    }
  };

  const onLegendChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setLegend(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (35 - 1) + 1);
      setLegend(legendOptions[r].name);
    }
  };

  const onLairChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions)
    setLair(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (39 - 1) + 1);
      setLair(lairOptions[r].name);
    }
  };


  const onRandomHp = (e) => {
    let r = Math.floor(Math.random() * 500);
    setHp(r);
  };
  const onRandomSpeed = (e) => {
    let r = Math.floor(Math.random() * (120 - 0));
    setSpeed(r);
  };
  const onRandomSpeedExtra = (e) => {
    let r = Math.floor(Math.random() * (120 - 0));
    setSpeedExtra(r);
  };
  const onRandomStr = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setStr(r);
  };
  const onRandomDex = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setDex(r);
  };
  const onRandomCon = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setCon(r);
  };
  const onRandomInt = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setInt(r);
  };
  const onRandomWis = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setWis(r);
  };
  const onRandomCha = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setCha(r);
  };





  //TODO
  const onGearChange = (e) => {};

  const onGenerate = (e) => {
    if (size === "") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setSize(sizeOptions[r].name);
    } else {
      setSize(size);
    }
    if (type === "") {
      let r = Math.round(Math.random() * (16 - 1) + 1);
      setType(typeOptions[r].name);
    } else {
      setType(type);
    }
    if (align === "") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setAlign(alignOptions[r].name);
    } else {
      setAlign(align);
    }
    if (ac === "") {
      let r = Math.round(Math.random() * (30 - 1) + 1);
      setAc(acOptions[r].name);
    } else {
      setAc(ac);
    }
    if (armorType === "") {
      let r = Math.round(Math.random() * (5 - 1) + 1);
      setArmorType(armorTypeOptions[r].name);
    } else {
      setArmorType(armorType);
    }
    if (hp === "") {
      let r = Math.floor(Math.random() * 500);
      setHp(r);
    } else {
      setHp(hp);
    }
    if (speed === "") {
      let r = Math.floor(Math.random() * (120 - 0));
      setSpeed(r);
    } else {
      setSpeed(speed);
    }
    if (speedType === "") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setSpeedType(speedTypeOptions[r].name);
    } else {
      setSpeedType(speedType);
    }
    if (speedExtra === "") {
      let r = Math.floor(Math.random() * (120 - 0));
      setSpeedExtra(r);
    } else {
      setSpeedExtra(speedExtra);
    }
    if (str === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setStr(r);
    } else {
      setStr(str);
    }
    if (dex === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setDex(r);
    } else {
      setDex(dex);
    }
    if (con === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setCon(r);
    } else {
      setCon(con);
    }
    if (int === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setInt(r);
    } else {
      setInt(int);
    }
    if (wis === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setWis(r);
    } else {
      setWis(wis);
    }
    if (cha === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setCha(r);
    } else {
      setCha(cha);
    }
    //TODO
    // if(save === "")
    if (vuln === "") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setVuln(vulnOptions[r].name);
    } else {
      setVuln(vuln);
    }
    if (skill === "") {
      let r = Math.round(Math.random() * (18 - 1) + 1);
      setSkill(skillOptions[r].name);
    } else {
      setSkill(skill);
    }
    if (immune === "") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setImmune(immuneOptions[r].name);
    } else {
      setImmune(immune);
    }
    if (resist === "") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setResist(resistOptions[r].name);
    } else {
      setResist(resist);
    }
    if (condition === "") {
      let r = Math.round(Math.random() * (15 - 1) + 1);
      setCondition(conditionOptions[r].name);
    } else {
      setCondition(condition);
    }
    if (sense === "") {
      let r = Math.round(Math.random() * (4 - 1) + 1);
      setSense(senseOptions[r].name);
    } else {
      setSense(sense);
    }
    if (lang === "") {
      let r = Math.round(Math.random() * (16 - 1) + 1);
      setLang(langOptions[r].name);
    } else {
      setLang(lang);
    }
    if (special === "") {
      let r = Math.round(Math.random() * (208 - 1) + 1);
      setSpecial(specialOptions[r].name);
    } else {
      setSpecial(special);
    }
    if (action === "") {
      let r = Math.round(Math.random() * (292 - 1) + 1);
      setAction(actionOptions[r].name);
    } else {
      setAction(action);
    }
    if (reaction === "") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setReaction(reactionOptions[r].name);
    } else {
      setReaction(reaction);
    }
    if (legend === "") {
      let r = Math.round(Math.random() * (35 - 1) + 1);
      setLegend(legendOptions[r].name);
    } else {
      setLegend(legend);
    }
    //TODO
    // if (lair === "") {
    //     let r = Math.round(Math.random() * (39 - 1) + 1);
    //     setLair(lairOptions[r].name);
    // } else {
    //     setLair(lair)
    // }
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
  };

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.monstergenBody}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>
        <div className={style.monstergenOptionsWrapper}>
          <div className={style.monstergenSubsection}>
            <h1>Details</h1>
            <div>
              <h1>Name: </h1>
              <InputText value={name} onChange={onNameChange} />
              <button
                onClick={onRandomName}
                className={style.monstergenBtnName}
              >
                Randomize
              </button>
            </div>
            <div>
              <h1>Size</h1>
              <Dropdown
                optionLabel="name"
                value={size}
                options={sizeOptions}
                onChange={onSizeChange}
                placeholder="Choose Size"
              />
            </div>
            <div>
              <h1>Type</h1>
              <Dropdown
                optionLabel="name"
                value={type}
                options={typeOptions}
                onChange={onTypeChange}
                placeholder="Choose Type"
              />
            </div>
            <div>
              <h1>Align</h1>
              <Dropdown
                optionLabel="name"
                value={align}
                options={alignOptions}
                onChange={onAlignChange}
                placeholder="Choose Alignment"
              />
            </div>
          </div>
          <div className={style.monstergenSubsection}>
            <div>
              <h1>Basic Stats</h1>
              <h1>AC</h1>
              <Dropdown
                optionLabel="name"
                value={ac}
                options={acOptions}
                onChange={onAcChange}
                placeholder="Choose AC"
              />
            </div>
            <div>
              <h1>Armor Type</h1>
              <Dropdown
                optionLabel="name"
                value={armorType}
                options={armorTypeOptions}
                onChange={onArmorTypeChange}
                placeholder="Choose Armor Type"
              />
            </div>
            <div>
              <h1>HP</h1>
              <InputNumber
                value={hp}
                onChange={onHpChange}
                placeholder="Set HP"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomHp} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Speed</h1>
              <InputNumber
                value={speed}
                onChange={onSpeedChange}
                placeholder="Set Speed"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
                step={5}
              />
              <button
                onClick={onRandomSpeed}
                className={style.monstergenBtnName}
              >
                Randomize
              </button>
            </div>
            <div>
              <h1>Additional Movement</h1>
              <Dropdown
                optionLabel="name"
                value={speedType}
                options={speedTypeOptions}
                onChange={onSpeedTypeChange}
                placeholder="Choose Additional Move"
              />
              <InputNumber
                value={speedExtra}
                onChange={onSpeedExtraChange}
                placeholder="Set Speed"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
                step={5}
              />
              <button
                onClick={onRandomSpeedExtra}
                className={style.monstergenBtnName}
              >
                Randomize
              </button>
            </div>
          </div>
          <div className={style.monstergenSubsection}>
            <h1>Ability Scores</h1>
            <div>
              <h1>Strength</h1>
              <InputNumber
                value={str}
                onChange={onStrChange}
                placeholder="Set STR"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomStr} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Dexterity</h1>
              <InputNumber
                value={dex}
                onChange={onDexChange}
                placeholder="Set DEX"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomDex} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Constitution</h1>
              <InputNumber
                value={con}
                onChange={onConChange}
                placeholder="Set CON"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomCon} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Intelligence</h1>
              <InputNumber
                value={int}
                onChange={onIntChange}
                placeholder="Set INT"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomInt} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Wisdom</h1>
              <InputNumber
                value={wis}
                onChange={onWisChange}
                placeholder="Set WIS"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomWis} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Charisma</h1>
              <InputNumber
                value={cha}
                onChange={onChaChange}
                placeholder="Set CHA"
                mode="decimal"
                showButtons
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button onClick={onRandomCha} className={style.monstergenBtnName}>
                Randomize
              </button>
            </div>
          </div>
          <div className={style.monstergenSubsection}>
            <h1>Saves/Skills/Dmgs</h1>
            <div>
              <h1>Saves</h1>
              <Dropdown
                optionLabel="name"
                value={save}
                options={saveOptions}
                //   onChange={onSaveChange}
                placeholder="Choose Save"
              />
            </div>
            <div>
              <h1>Skill</h1>
              <Dropdown
                optionLabel="name"
                value={skill}
                options={skillOptions}
                onChange={onSkillChange}
                placeholder="Choose Skill"
              />
            </div>
            <div>
              <h1>Vulnerabities</h1>
              <Dropdown
                optionLabel="name"
                value={vuln}
                options={vulnOptions}
                onChange={onVulnChange}
                placeholder="Choose Vulnerabities"
              />
            </div>
            <div>
              <h1>Immunities</h1>
              <Dropdown
                optionLabel="name"
                value={immune}
                options={immuneOptions}
                onChange={onImmuneChange}
                placeholder="Choose Immunities"
              />
            </div>
            <div>
              <h1>Resistances</h1>
              <Dropdown
                optionLabel="name"
                value={resist}
                options={resistOptions}
                onChange={onResistChange}
                placeholder="Choose Resistances"
              />
            </div>
            <div>
              <h1>Condition Immunities</h1>
              <Dropdown
                optionLabel="name"
                value={condition}
                options={conditionOptions}
                onChange={onConditionChange}
                placeholder="Choose Condition Immunities"
              />
            </div>
            <div>
              <h1>Senses</h1>
              <Dropdown
                optionLabel="name"
                value={sense}
                options={senseOptions}
                onChange={onSenseChange}
                placeholder="Choose Senses"
              />
            </div>
            <div>
              <h1>Languages</h1>
              <Dropdown
                optionLabel="name"
                value={lang}
                options={langOptions}
                onChange={onLangChange}
                placeholder="Choose Languages"
              />
            </div>
          </div>
          <div>
            <h1>Sepcials</h1>
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
              onChange={onGearChange}
              placeholder="Choose Sear"
            />
          </div>
        </div>

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
