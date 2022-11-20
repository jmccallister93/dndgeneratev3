import Navbar from "../components/Navbar";
import style from "../stylesheets/MonsterGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { e } from "mathjs";

const MonsterGen = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState();
    const [nameOptions, setNameOptions] = useState()

    const [race, setRace] = useState("");
    const [races, setRaces] = useState()
    const [raceOptions, setRaceOptions] = useState()

    const [size, setSize] = useState("")
    const [sizes, setSizes] = useState()
    const [sizeOptions, setSizeOptions] = useState()

    const [type, setType] = useState("")
    const [types, setTypes] = useState()
    const [typeOptions, setTypeOptions] = useState()

    const [align, setAlign] = useState("")
    const [aligns, setAligns] = useState()
    const [alignOptions, setAlignOptions] = useState()

    const [ac, setAc] = useState("")
    const [acs, setAcs] = useState("")
    const [acOptions, setAcOptions] = useState()

    const [armorType, setArmorType] = useState("")
    const [armorTypes, setArmorTypes] = useState()
    const [armorTypeOptions, setArmorTypeOptions] = useState()

    const [hp, setHp] = useState("")
    const [hps, setHps] = useState("")
    const [hpOptions, setHpOptions] = useState()

    const [speed, setSpeed] = useState("")
    const [speeds, setSpeeds] = useState("")
    const [speedOptions, setSpeedOptions] = useState()

    const [speedType, setSpeedType] = useState("")
    const [speedTypes, setSpeedTypes] = useState("")
    const [speedTypeOptions, setSpeedTypeOptions] = useState()

    const [speedExtra, setSpeedExtra] = useState("")
    const [speedExtras, setSpeedExtras] = useState("")
    const [speedExtraOptions, setSpeedExtraOptions] = useState()

    const [ability, setAbility] = useState("")
    const [abilities, setAbilities] = useState("")
    const [abilityOptions, setAbilityOptions] = useState()

    const [save, setSave] = useState("")
    const [saves, setSaves] = useState("")
    const [saveOptions, setSaveOptions] = useState()

    const [skill, setSkill] = useState("")
    const [skills, setSkills] = useState("")
    const [skillOptions, setSkillOptions] = useState()

    const [immune, setImmune] = useState("")
    const [immunes, setImmunes] = useState("")
    const [immuneOptions, setImmuneOptions] = useState()

    const [resist, setResist] = useState("")
    const [resists, setResists] = useState("")
    const [resistOptions, setResistOptions] = useState()

    const [condition, setCondition] = useState("")
    const [conditions, setConditions] = useState("")
    const [conditionOptions, setConditionOptions] = useState()

    const [sense, setSense] = useState("")
    const [senses, setSenses] = useState("")
    const [senseOptions, setSenseOptions] = useState()

    const [lang, setLang] = useState("")
    const [langs, setLangs] = useState("")
    const [langOptions, setLangOptions] = useState()

    const [special, setSpecial] = useState("")
    const [Specials, setSpecials] = useState("")
    const [specialOptions, setSpecialOptions] = useState()

    const [action, setAction] = useState("")
    const [actions, setActions] = useState("")
    const [actionOptions, setActionOptions] = useState()

    const [legend, setLegend] = useState("")
    const [legends, setLegends] = useState("")
    const [legnedOptions, setLegendOptions] = useState()

    const [lair, setLair] = useState("")
    const [Lairs, setLairs] = useState("")
    const [lairOptions, setLairOptions] = useState()


    const onNameChange = (e) => {

    }

    const onRandomName = (e) => {

    }

    const onRaceChange = (e) => {

    }

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.monstergenBody}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>
        <div className={style.monstergenOptionsWrapper}>
            <div>
                <h1>Name: </h1>
                <InputText value={name} onChange={onNameChange}/>
                <button onClick={onRandomName} className={style.monstergenBtnName}>
                    Randomize
                </button>
            </div>
            <div>
            <h1>Race</h1>
            <Dropdown
              optionLabel="name"
              value={race}
              options={raceOptions}
              onChange={onRaceChange}
              placeholder="Choose Race"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterGen;
