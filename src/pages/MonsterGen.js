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
  //   objectChange(e.value, setSave, 17, 1, 1, saveOptions)
  // };
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
  const onRandomSpeedExtra = (e) => {
    randomButton(setSpeedExtra, 120, 0);
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

  const onGenerate = (e) => {
    const ifBlank = (value, setValue, options, max, min) => {
      if (value === "") {
        let r = Math.round(Math.random() * (max - min) + 1);
        setValue(options[r].name);
      }
    };
    ifBlank(size, setSize, sizeOptions, 6, 1)
    ifBlank(type, setType, typeOptions, 16, 1)
    ifBlank(align, setAlign, alignOptions, 9, 1)
    ifBlank(ac, setAc, acOptions, 30, 1)
    ifBlank(armorType, setArmorType, armorTypeOptions, 5, 1)
    ifBlank(speedType, setSpeedType, speedTypeOptions, 6, 1)
    ifBlank(vuln, setVuln, vulnOptions, 17, 1)
    ifBlank(skill, setSkill, skillOptions, 18, 1)
    ifBlank(immune, setImmune, immuneOptions, 17, 1)
    ifBlank(resist, setResist, resistOptions, 17, 1)
    ifBlank(condition, setCondition, conditionOptions, 15, 1)
    ifBlank(sense, setSense, senseOptions, 4, 1)
    ifBlank(lang, setLang, langOptions, 16, 1)
    ifBlank(special, setSpecial, specialOptions, 208, 1)
    ifBlank(action, setAction, actionOptions, 292, 1)
    ifBlank(reaction, setReaction, reactionOptions, 11, 1)
    //TODO
    // if(save === "")
    if (hp === "") {
      let r = Math.floor(Math.random() * 500);
      setHp(r);
    }
    if (speed === "") {
      let r = Math.floor(Math.random() * (120 - 0));
      setSpeed(r);
    }
    if (speedExtra === "") {
      let r = Math.floor(Math.random() * (120 - 0));
      setSpeedExtra(r);
    }
    if (str === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setStr(r);
    }
    if (dex === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setDex(r);
    }
    if (con === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setCon(r);
    }
    if (int === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setInt(r);
    }
    if (wis === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setWis(r);
    }
    if (cha === "") {
      let r = Math.floor(Math.random() * (30 - 0));
      setCha(r);
    }
    
    if (legend === "") {
      let r = Math.round(Math.random() * (35 - 1) + 1);
      setLegend(legendOptions[r].name);
    } else {
      setSize(size);
      setType(type);
      setAlign(align);
      setAc(ac);
      setArmorType(armorType);
      setHp(hp);
      setSpeed(speed);
      setSpeedType(speedType);
      setSpeedExtra(speedExtra);
      setStr(str);
      setDex(dex);
      setCon(con);
      setInt(int);
      setWis(wis);
      setCha(cha);
      setVuln(vuln);
      setSkill(skill);
      setImmune(immune);
      setResist(resist);
      setCondition(condition);
      setSense(sense);
      setLang(lang);
      setSpecial(special);
      setAction(action);
      setLegend(legend);
      setReaction(reaction);
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
              //   onChange={onGearChange}
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
