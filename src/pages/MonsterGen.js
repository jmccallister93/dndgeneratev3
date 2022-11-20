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

//Set States
  const [fetchError, setFetchError] = useState()

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();

  const [race, setRace] = useState("");
  const [races, setRaces] = useState();
  const [raceOptions, setRaceOptions] = useState();

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
  const [hps, setHps] = useState("");
  const [hpOptions, setHpOptions] = useState();

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

//TODO Names
useEffect(() => {})

useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("races").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setRace(null);
        console.log(error);
      }
      if (data) {
        setRaces(data);
        setFetchError(null);
        setRaceOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);  
  
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("sizes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSize(null);
        console.log(error);
      }
      if (data) {
        setSizes(data);
        setFetchError(null);
        setSizeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
    
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setType(null);
        console.log(error);
      }
      if (data) {
        setTypes(data);
        setFetchError(null);
        setTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
    
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("aligns").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAlign(null);
        console.log(error);
      }
      if (data) {
        setAligns(data);
        setFetchError(null);
        setAlignOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("acs").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAc(null);
        console.log(error);
      }
      if (data) {
        setAcs(data);
        setFetchError(null);
        setAcOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArmor").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArmorType(null);
        console.log(error);
      }
      if (data) {
        setArmorTypes(data);
        setFetchError(null);
        setArmorTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("movement").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSpeedType(null);
        console.log(error);
      }
      if (data) {
        setSpeedTypes(data);
        setFetchError(null);
        setSpeedTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArmor").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArmorType(null);
        console.log(error);
      }
      if (data) {
        setArmorTypes(data);
        setFetchError(null);
        setArmorTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("abilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAbility(null);
        console.log(error);
      }
      if (data) {
        setAbilities(data);
        setFetchError(null);
        setAbilityOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("abilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSave(null);
        console.log(error);
      }
      if (data) {
        setSaves(data);
        setFetchError(null);
        setSaveOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);


//OnChanges
  const onNameChange = (e) => {};

  const onRandomName = (e) => {};

  const onRaceChange = (e) => {};

  const onSizeChange = (e) => {};

  const onTypeChange = (e) => {};

  const onAlignChange = (e) => {};

  const onAcChange = (e) => {};

  const onArmorTypeChange = (e) => {};

  const onHpChange = (e) => {};

  const onSpeedChange = (e) => {};

  const onSpeedTypeChange = (e) => {};

  const onSpeedExtraChange = (e) => {};

  const onAbilityChange = (e) => {};

  const onSaveChange = (e) => {};

  const onVulnChange = (e) => {};

  const onSkillChange = (e) => {};

  const onImmuneChange = (e) => {};

  const onResistChange = (e) => {};

  const onConditionChange = (e) => {};

  const onSenseChange = (e) => {};

  const onLangChange = (e) => {};

  const onSpecialChange = (e) => {};

  const onActionChange = (e) => {};

  const onLegendChange = (e) => {};

  const onLairChange = (e) => {};

  const onGearChange = (e) => {};

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.monstergenBody}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>
        <div className={style.monstergenOptionsWrapper}>
          <div>
            <h1>Name: </h1>
            <InputText value={name} onChange={onNameChange} />
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
          <div>
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
            <Dropdown
              optionLabel="name"
              value={hp}
              options={hpOptions}
              onChange={onHpChange}
              placeholder="Choose HP"
            />
          </div>
          <div>
            <h1>Speed</h1>
            <Dropdown
              optionLabel="name"
              value={speed}
              options={speedOptions}
              onChange={onSpeedChange}
              placeholder="Choose Speed"
            />
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
          </div>
          <div>
            <h1>Additional Move Speed</h1>
            <Dropdown
              optionLabel="name"
              value={speedExtra}
              options={speedExtraOptions}
              onChange={onSpeedExtraChange}
              placeholder="Choose Additional Speed"
            />
          </div>
          <div>
            <h1>Abilities</h1>
            <Dropdown
              optionLabel="name"
              value={ability}
              options={abilityOptions}
              onChange={onAbilityChange}
              placeholder="Choose Ability"
            />
          </div>
          <div>
            <h1>Saves</h1>
            <Dropdown
              optionLabel="name"
              value={save}
              options={saveOptions}
              onChange={onSaveChange}
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
      </div>
    </div>
  );
};

export default MonsterGen;
