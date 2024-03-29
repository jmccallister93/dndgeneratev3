import style from "../stylesheets/PageStyle.module.scss";
import {  useEffect,  useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { supabase,  } from "../config/supabaseClient";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

const Npcs = (props) => {
  const [, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHookActive, setIsHookActive] = useState(false);

  const [align, setAlign] = useState("");
  const [, setAligns] = useState();
  const [alignOptions, setAlignOptions] = useState();

  const [bond, setBond] = useState("");
  const [, setBonds] = useState();
  const [bondOptions, setBondOptions] = useState();

  const [feature, setFeature] = useState("");
  const [, setFeatures] = useState();
  const [featureOptions, setFeatureOptions] = useState();

  const [interaction, setInteraction] = useState("");
  const [, setInteractions] = useState();
  const [interactionOptions, setInteractionOptions] = useState();

  const [prof, setProf] = useState("");
  const [, setProfs] = useState();
  const [profOptions, setProfOptions] = useState();

  const [mannerism, setMannerism] = useState("");
  const [, setMannerisms] = useState();
  const [mannerismOptions, setMannerismOptions] = useState();

  const [race, setRace] = useState("");
  const [, setRaces] = useState();
  const [raceOptions, setRaceOptions] = useState();

  const [sex, setSex] = useState("");
  const [, setSexes] = useState();
  const [sexOptions, setSexOptions] = useState();

  const [talent, setTalent] = useState("");
  const [, setTalents] = useState();
  const [talentOptions, setTalentOptions] = useState();

  const [name, setName] = useState("");
  const [, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();

  const [str, setStr] = useState("");
  const [, setStrMod] = useState("");
  const [dex, setDex] = useState("");
  const [, setDexMod] = useState("");
  const [con, setCon] = useState("");
  const [, setConMod] = useState("");
  const [int, setInt] = useState("");
  const [, setIntMod] = useState("");
  const [wis, setWis] = useState("");
  const [, setWisMod] = useState("");
  const [cha, setCha] = useState("");
  const [, setChaMod] = useState("");

  const [hook, setHook] = useState("");

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
    getData("aligns", setAlign, setAligns, setAlignOptions);
    getData("bonds", setBond, setBonds, setBondOptions);
    getData("features", setFeature, setFeatures, setFeatureOptions);
    getData(
      "interactions",
      setInteraction,
      setInteractions,
      setInteractionOptions
    );
    getData("mannerisms", setMannerism, setMannerisms, setMannerismOptions);
    getData("professions", setProf, setProfs, setProfOptions);
    getData("races", setRace, setRaces, setRaceOptions);
    getData("sexes", setSex, setSexes, setSexOptions);
    getData("talents", setTalent, setTalents, setTalentOptions);
  }, []);
  //Name Data
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("names").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setName(null);
        console.log(error);
      }
      if (data) {
        setNames(data);
        setFetchError(null);
        setNameOptions(
          data.map((r) => ({
            first_name: r.first_name,
            epithet_a: r.epithet_a,
            noun_a: r.noun_a,
            epithet_b: r.epithet_b,
            noun_b: r.noun_b,
          }))
        );
      }
    };
    fetchData();
  }, []);

  const abilityScoreValues = [
    { id: 1, name: "Random", value: "Random" },
    { id: 2, name: "6 (-2)", value: "6 (-2)" },
    { id: 3, name: "8 (-1)", value: "8 (-1)" },
    { id: 4, name: "10 (+0)", value: "10 (+0)" },
    { id: 5, name: "12 (+1)", value: "12 (+1)" },
    { id: 6, name: "14 (+2)", value: "14 (+2)" },
    { id: 7, name: "16 (+3)", value: "16 (+3)" },
    { id: 8, name: "18 (+4)", value: "18 (+4)" },
    { id: 9, name: "20 (+5)", value: "20 (+5)" },
  ];

  //OnChange
  // eslint-disable-next-line 
  const objectChange = (value, setObject, max, min, floor, objectOptions) => {
    setObject(value);
    if (value === "Random") {
      let r = Math.round(Math.random() * (max - min) + floor);
      setObject(objectOptions[r].name);
    }
  };
  useEffect(() => {
    let modifierList = [
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
      "+0",
      "+1",
      "+2",
      "+3",
      "+4",
      "+5",
      "+6",
      "+7",
      "+8",
      "+9",
      "+10",
    ];

    const onAbilityModChange = (abilityType, setAbilityMod) => {
      if (abilityType <= 1) {
        setAbilityMod(modifierList[0]);
      } else if (abilityType <= 3) {
        setAbilityMod(modifierList[0]);
      } else if (abilityType <= 5) {
        setAbilityMod(modifierList[1]);
      } else if (abilityType <= 7) {
        setAbilityMod(modifierList[2]);
      } else if (abilityType <= 9) {
        setAbilityMod(modifierList[3]);
      } else if (abilityType <= 11) {
        setAbilityMod(modifierList[4]);
      } else if (abilityType <= 13) {
        setAbilityMod(modifierList[5]);
      } else if (abilityType <= 15) {
        setAbilityMod(modifierList[6]);
      } else if (abilityType <= 17) {
        setAbilityMod(modifierList[7]);
      } else if (abilityType <= 19) {
        setAbilityMod(modifierList[8]);
      } else if (abilityType <= 21) {
        setAbilityMod(modifierList[9]);
      } else if (abilityType <= 23) {
        setAbilityMod(modifierList[10]);
      } else if (abilityType <= 25) {
        setAbilityMod(modifierList[11]);
      } else if (abilityType <= 27) {
        setAbilityMod(modifierList[12]);
      } else if (abilityType <= 29) {
        setAbilityMod(modifierList[13]);
      } else if (abilityType <= 30) {
        setAbilityMod(modifierList[14]);
      }
    };
    onAbilityModChange(str, setStrMod);
    onAbilityModChange(dex, setDexMod);
    onAbilityModChange(con, setConMod);
    onAbilityModChange(int, setIntMod);
    onAbilityModChange(wis, setWisMod);
    onAbilityModChange(cha, setChaMod);
  }, [str, dex, con, int, wis, cha]);

  //Dropdown Template
  const customDrop = (title, value, options, change, placeholder, onrandom) => (
    <div className={style.dropContainer}>
      <h2 className={style.dropTitle}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
      <Button onClick={onrandom} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //Input Template
  const customTextInput = (title, value, onchange, placeholder, onrandom) => (
    <div className={style.dropContainer}>
      <h2 className={style.dropTitle}>{title}</h2>
      <InputText value={value} onChange={onchange} placeholder={placeholder} />
      <Button onClick={onrandom} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //NPC Name
  const onNameChange = (e) => {
    setName(e.target.value);
    props.onNameChangeProp(e.target.value);
  };
  const onRandomName = (e) => {
    let f = Math.floor(Math.random() * 208);
    let firstName = [nameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 208);
    let epiphet_a = [nameOptions[eA].epithet_a];
    let eB = Math.floor(Math.random() * 208);
    let epiphet_b = [nameOptions[eB].epithet_b];
    let nA = Math.floor(Math.random() * 208);
    let noun_a = [nameOptions[nA].noun_a];
    let nB = Math.floor(Math.random() * 208);
    let noun_b = [nameOptions[nB].noun_b];

    let random = Math.round(Math.random() * 3);

    if (random === 0) {
      setName(firstName + " " + epiphet_a + noun_a);
    } else if (random === 1) {
      setName(firstName + " " + epiphet_a + noun_b);
    } else if (random === 2) {
      setName(firstName + " " + epiphet_b + noun_b);
    } else {
      setName(firstName + " " + epiphet_b + noun_a);
    }
  };
  const nameInput = customTextInput(
    "Name",
    name,
    onNameChange,
    "Set Name",
    onRandomName,
    props.onNameChangeProp(name)
  );
  //NPC Race
  const onRaceChange = (e) => {
    setRace(e.value);
    props.onRaceChangeProp(e.value);
  };
  const onRandomRace = (e) => {
    let r = Math.round(Math.random() * (27 - 0));
    setRace(raceOptions[r].name);
  };
  const raceDropdown = customDrop(
    "Race",
    race,
    raceOptions,
    onRaceChange,
    "Choose Race",
    onRandomRace,
    props.onRaceChangeProp(race)
  );
  //NPC Sex
  const onSexChange = (e) => {
    setSex(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (2 - 1) + 1);
      setSex(sexOptions[r].name);
    }
    props.onSexChangeProp(e.value);
  };
  const onRandomSex = (e) => {
    let r = Math.round(Math.random() * (1 - 0));
    setSex(sexOptions[r].name);
  };
  const sexDropdown = customDrop(
    "Sex",
    sex,
    sexOptions,
    onSexChange,
    "Choose Sex",
    onRandomSex,
    props.onSexChangeProp(sex)
  );
  //NPC Align
  const onAlignChange = (e) => {
    setAlign(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setAlign(alignOptions[r].name);
    }
    props.onAlignChangeProp(e.value);
  };
  const onRandomAlign = (e) => {
    let r = Math.round(Math.random() * (8 - 0));
    setAlign(alignOptions[r].name);
  };
  const alignDropdown = customDrop(
    "Alignment",
    align,
    alignOptions,
    onAlignChange,
    "Choose Alignment",
    onRandomAlign,
    props.onAlignChangeProp(align)
  );
  //NPC Prof
  const onProfChange = (e) => {
    setProf(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (49 - 1) + 1);
      setProf(profOptions[r].name);
    }
    props.onProfChangeProp(e.value);
  };
  const onRandomProf = (e) => {
    let r = Math.round(Math.random() * (48 - 0));
    setProf(profOptions[r].name);
  };
  const profDropdown = customDrop(
    "Profession",
    prof,
    profOptions,
    onProfChange,
    "Choose Profession",
    onRandomProf,
    props.onProfChangeProp(prof)
  );
  //NPC Feature
  const onFeatureChange = (e) => {
    setFeature(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setFeature(featureOptions[r].name);
    }
    props.onFeatureChangeProp(e.value);
  };
  const onRandomFeature = (e) => {
    let r = Math.round(Math.random() * (19 - 0));
    setFeature(featureOptions[r].name);
  };
  const featureDropdown = customDrop(
    "Feature",
    feature,
    featureOptions,
    onFeatureChange,
    "Choose Feature",
    onRandomFeature,
    props.onFeatureChangeProp(feature)
  );
  //NPC Talent
  const onTalentChange = (e) => {
    setTalent(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setTalent(talentOptions[r].name);
    }
    props.onTalentChangeProp(e.value);
  };
  const onRandomTalent = (e) => {
    let r = Math.round(Math.random() * (19 - 0));
    setTalent(talentOptions[r].name);
  };
  const talentDropdown = customDrop(
    "Talent",
    talent,
    talentOptions,
    onTalentChange,
    "Choose Talent",
    onRandomTalent,
    props.onTalentChangeProp(talent)
  );
  //NPC Mannerism
  const onMannerismChange = (e) => {
    setMannerism(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setMannerism(mannerismOptions[r].name);
    }
    props.onMannerismChangeProp(e.value);
  };
  const onRandomMannerism = (e) => {
    let r = Math.round(Math.random() * (19 - 0));
    setMannerism(mannerismOptions[r].name);
  };
  const mannersimDropdown = customDrop(
    "Mannerism",
    mannerism,
    mannerismOptions,
    onMannerismChange,
    "Choose Mannerism",
    onRandomMannerism,
    props.onMannerismChangeProp(mannerism)
  );
  //NPC Interaction
  const onInteractionChange = (e) => {
    setInteraction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setInteraction(interactionOptions[r].name);
    }
    props.onInteractionChangeProp(e.value);
  };
  const onRandomInteraction = (e) => {
    let r = Math.round(Math.random() * (11 - 0));
    setInteraction(interactionOptions[r].name);
  };
  const interactionDropdown = customDrop(
    "Interaction",
    interaction,
    interactionOptions,
    onInteractionChange,
    "Choose Interaction",
    onRandomInteraction,
    props.onInteractionChangeProp(interaction)
  );
  //NPC Bond
  const onBondChange = (e) => {
    setBond(e.value);
    props.onBondChangeProp(e.value);
  };
  const onRandomBond = (e) => {
    let r = Math.round(Math.random() * (8 - 0));
    setBond(bondOptions[r].name);
  };
  const bondDropdown = customDrop(
    "Bond",
    bond,
    bondOptions,
    onBondChange,
    "Choose Bond",
    onRandomBond,
    props.onBondChangeProp(bond)
  );
  //NPC Hook
  const hookVerb = [
    { id: 1, name: "Random", value: "Random" },
    { id: 2, name: "Lost", value: "Lost" },
    { id: 3, name: "Found", value: "Found" },
    { id: 4, name: "Looking for", value: "Looking for" },
    { id: 5, name: "Wants", value: "Wants" },
    { id: 6, name: "Heard", value: "Heard" },
    { id: 7, name: "Needs help with", value: "Needs help with" },
    { id: 8, name: "Saw", value: "Saw" },
    { id: 9, name: "Gained", value: "Gained" },
    { id: 10, name: "Selling", value: "Selling" },
    { id: 11, name: "Escorting", value: "Escorting" },
    { id: 12, name: "Guarding", value: "Guarding" },
  ];

  const hookNoun = [
    { id: 1, name: "Random", value: "Random" },
    { id: 2, name: "Animal", value: "Animal" },
    { id: 3, name: "Trinket", value: "Trinket" },
    { id: 4, name: "Heirloom", value: "Heirloom" },
    { id: 5, name: "Powers", value: "Powers" },
    { id: 6, name: "Vampire", value: "Vampire" },
    { id: 7, name: "Magic", value: "Magic" },
    { id: 8, name: "Werewolf", value: "Werewolf" },
    { id: 9, name: "Food", value: "Food" },
    { id: 10, name: "Book", value: "Book" },
    { id: 11, name: "Weapon", value: "Weapon" },
    { id: 12, name: "Armor", value: "Armor" },
  ];

  const hookAdjective = [
    { id: 1, name: "Random", value: "Random" },
    { id: 2, name: "Pale", value: "Pale" },
    { id: 3, name: "Freezing", value: "Freezing" },
    { id: 4, name: "Condemned", value: "Condemned" },
    { id: 5, name: "Sophisticated", value: "Sophisticated" },
    { id: 6, name: "Demonic", value: "Demonic" },
    { id: 7, name: "Angelic", value: "Angelic" },
    { id: 8, name: "Natural", value: "Natural" },
    { id: 9, name: "Profuse", value: "Profuse" },
    { id: 10, name: "Wild", value: "Wild" },
    { id: 11, name: "Unusual", value: "Unusual" },
    { id: 12, name: "Bizarre", value: "Bizarre" },
  ];
  // useEffect(()=> {
  //   let v = Math.round(Math.random() * (11 - 1) + 1);
  //     let n = Math.round(Math.random() * (11 - 1) + 1);
  //     let a = Math.round(Math.random() * (11 - 1) + 1);

  //     setHook(
  //       hookVerb[v].name + " " + hookAdjective[a].name + " " + hookNoun[n].name
  //     );

  // },[])
  // const onHookChange = (e) => {
  //   setHook(e.value)
  //   props.onHookChangeProp(e.value)
  // }
  // const onRandomHook = (e)=>{
  //   let r = Math.round(Math.random() * (8 - 0));
  //   setHook(hookOptions[r].name);
  // }
  // const hookDropdown = customDrop(
  //   "Hook",
  //   hook,
  //   hookOptions,
  //   onHookChange,
  //   "Choose Hook",
  //   onRandomHook,
  //   props.onHookChangeProp(hook)
  // );

  const onGenerate = (e) => {
    if (bond === "") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setBond(bondOptions[r].name);
    } else {
      setBond(bond);
    }

    if (race === "") {
      let r = Math.round(Math.random() * (28 - 1) + 1);
      setRace(raceOptions[r].name);
    } else {
      setRace(race);
    }

    if (sex === "") {
      let r = Math.round(Math.random() * (2 - 1) + 1);
      setSex(sexOptions[r].name);
      console.log(r);
    } else {
      setSex(sex);
    }

    if (align === "") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setAlign(alignOptions[r].name);
    } else {
      setAlign(align);
    }

    if (prof === "") {
      let r = Math.round(Math.random() * (49 - 1) + 1);
      setProf(profOptions[r].name);
    } else {
      setProf(prof);
    }

    if (feature === "") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setFeature(featureOptions[r].name);
    } else {
      setFeature(feature);
    }

    if (talent === "") {
      let r = Math.round(Math.random() * (20 - 1));
      setTalent(talentOptions[r].name);
    } else {
      setTalent(talent);
    }

    if (mannerism === "") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setMannerism(mannerismOptions[r].name);
    } else {
      setMannerism(mannerism);
    }

    if (interaction === "") {
      let r = Math.round(Math.random() * (12 - 1) + 1);
      setInteraction(interactionOptions[r].name);
    } else {
      setInteraction(interaction);
    }

    if (name === "") {
      let f = Math.floor(Math.random() * 208);
      let firstName = [nameOptions[f].first_name];
      let eA = Math.floor(Math.random() * 208);
      let epiphet_a = [nameOptions[eA].epithet_a];
      let eB = Math.floor(Math.random() * 208);
      let epiphet_b = [nameOptions[eB].epithet_b];
      let nA = Math.floor(Math.random() * 208);
      let noun_a = [nameOptions[nA].noun_a];
      let nB = Math.floor(Math.random() * 208);
      let noun_b = [nameOptions[nB].noun_b];

      let random = Math.round(Math.random() * 3);

      if (random === 0) {
        setName(firstName + " " + epiphet_a + noun_a);
      } else if (random === 1) {
        setName(firstName + " " + epiphet_a + noun_b);
      } else if (random === 2) {
        setName(firstName + " " + epiphet_b + noun_b);
      } else {
        setName(firstName + " " + epiphet_b + noun_a);
      }
    } else {
      setName(name);
    }

    if (str === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setStr(abilityScoreValues[r].name);
    } else {
      setStr(str);
    }
    if (dex === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setDex(abilityScoreValues[r].name);
    } else {
      setDex(dex);
    }
    if (con === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCon(abilityScoreValues[r].name);
    } else {
      setCon(con);
    }
    if (int === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setInt(abilityScoreValues[r].name);
    } else {
      setInt(int);
    }
    if (wis === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setWis(abilityScoreValues[r].name);
    } else {
      setWis(wis);
    }
    if (cha === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCha(abilityScoreValues[r].name);
    } else {
      setCha(cha);
    }

    if (hook === "") {
      let v = Math.round(Math.random() * (11 - 1) + 1);
      let n = Math.round(Math.random() * (11 - 1) + 1);
      let a = Math.round(Math.random() * (11 - 1) + 1);
      setHook(
        hookVerb[v].name + " " + hookAdjective[a].name + " " + hookNoun[n].name
      );
    }
  };

  const onClear = (e) => {
    setName("");
    setAlign("");
    setBond("");
    setFeature("");
    setProf("");
    setName("");
    setTalent("");
    setRace("");
    setSex("");
    setMannerism("");
    setInteraction("");
    setBond("");
    setStr("");
    setDex("");
    setCon("");
    setInt("");
    setWis("");
    setCha("");
    setHook("");
  };

  // useEffect(()=>{
  //   setNpc({name: name, align: align, race:race, sex:sex})
  // },[name, align, race, sex])

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showHook = (e) => {
    setIsHookActive((current) => !current);
  };

  return (
    <>
      {/* Options */}
      <div className={style.optionsWrapper}>
        <h1>NPC Options</h1>
        <h1 className={style.subHeader} onClick={showBasics}>
          NPC Basic Info
        </h1>
        <div className={isBasicActive ? style.subsection : style.hidden}>
          <div>
            {nameInput}
            {raceDropdown}
            {sexDropdown}
            {alignDropdown}
          </div>
        </div>
        <h1 className={style.subHeader} onClick={showDetails}>
          NPC Details
        </h1>
        <div className={isDetailActive ? style.subsection : style.hidden}>
          <div>
            {profDropdown}
            {featureDropdown}
            {talentDropdown}
            {mannersimDropdown}
            {interactionDropdown}
            {bondDropdown}
          </div>
        </div>
        <h1 className={style.subHeader} onClick={showHook}>
          NPC Hook
        </h1>
        <div className={isHookActive ? style.subsection : style.hidden}>{}</div>
      </div>
    </>
  );
};

export default Npcs;
