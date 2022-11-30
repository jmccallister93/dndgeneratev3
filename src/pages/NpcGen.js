import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss";
import styleB from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";

const NpcGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState();
  const [alignOptions, setAlignOptions] = useState();

  const [bond, setBond] = useState("");
  const [bonds, setBonds] = useState();
  const [bondOptions, setBondOptions] = useState();

  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState();
  const [featureOptions, setFeatureOptions] = useState();

  const [interaction, setInteraction] = useState("");
  const [interactions, setInteractions] = useState();
  const [interactionOptions, setInteractionOptions] = useState();

  const [prof, setProf] = useState("");
  const [profs, setProfs] = useState();
  const [profOptions, setProfOptions] = useState();

  const [mannerism, setMannerism] = useState("");
  const [mannerisms, setMannerisms] = useState();
  const [mannerismOptions, setMannerismOptions] = useState();

  const [race, setRace] = useState("");
  const [races, setRaces] = useState();
  const [raceOptions, setRaceOptions] = useState();

  const [sex, setSex] = useState("");
  const [sexes, setSexes] = useState();
  const [sexOptions, setSexOptions] = useState();

  const [talent, setTalent] = useState("");
  const [talents, setTalents] = useState();
  const [talentOptions, setTalentOptions] = useState();

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();

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
      const { data, error } = await supabase.from("bonds").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setBond(null);
        console.log(error);
      }
      if (data) {
        setBonds(data);
        setFetchError(null);
        setBondOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("features").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setFeature(null);
        console.log(error);
      }
      if (data) {
        setFeatures(data);
        setFetchError(null);
        setFeatureOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("interactions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setInteraction(null);
        console.log(error);
      }
      if (data) {
        setInteractions(data);
        setFetchError(null);
        setInteractionOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("mannerisms").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setMannerism(null);
        console.log(error);
      }
      if (data) {
        setMannerisms(data);
        setFetchError(null);
        setMannerismOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("professions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setProf(null);
        console.log(error);
      }
      if (data) {
        setProfs(data);
        setFetchError(null);
        setProfOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("races").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setRaces(null);
        console.log(error);
      }
      if (data) {
        setRaces(data);
        setRaceOptions(data.map((d) => ({ name: d.name, value: d.value })));
        setFetchError(null);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("sexes").select();

      if (error) {
        setFetchError("Could not fetch the data");
        setSex(null);
        console.log(error);
      }
      if (data) {
        setSexes(data);
        setSexOptions(data.map((d) => ({ name: d.name, value: d.value })));
        setFetchError(null);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("talents").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setTalent(null);
        console.log(error);
      }
      if (data) {
        setTalents(data);
        setFetchError(null);
        setTalentOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

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
    { id: 10, name: "wild", value: "Wild" },
    { id: 11, name: "Unusual", value: "Unusual" },
    { id: 12, name: "Bizarre", value: "Bizarre" },
  ];

  //OnChange
  const objectChange = (value, setObject, max, min, floor, objectOptions) => {
    setObject(value);
    if (value === "Random") {
      let r = Math.round(Math.random() * (max - min) + floor);
      setObject(objectOptions[r].name);
    }
  };

  const onRaceChange = (e) => {
    setRace(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (28 - 1) + 1);
      setRace(raceOptions[r].name);
    }
  };

  const onSexChange = (e) => {
    setSex(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (2 - 1) + 1);
      setSex(sexOptions[r].name);
    }
  };

  const onAlignChange = (e) => {
    setAlign(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setAlign(alignOptions[r].name);
    }
  };

  const onProfChange = (e) => {
    setProf(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (49 - 1) + 1);
      setProf(profOptions[r].name);
    }
  };

  const onFeatureChange = (e) => {
    setFeature(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setFeature(featureOptions[r].name);
    }
  };

  const onTalentChange = (e) => {
    setTalent(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setTalent(talentOptions[r].name);
    }
  };
  const onMannerismChange = (e) => {
    setMannerism(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (20 - 1) + 1);
      setMannerism(mannerismOptions[r].name);
    }
  };
  const onInteractionChange = (e) => {
    setInteraction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setInteraction(interactionOptions[r].name);
    }
  };
  const onBondChange = (e) => {
    setBond(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setBond(bondOptions[r].name);
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
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
  // const onStrChange = (e) => {
  //   setStr(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1) + 1);
  //     setStr(abilityScoreValues[r].name);
  //   }
  // };

  // const onDexChange = (e) => {
  //   setDex(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1) + 1);
  //     setDex(abilityScoreValues[r].name);
  //   }
  // };

  // const onConChange = (e) => {
  //   setCon(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1));
  //     setCon(abilityScoreValues[r].name);
  //   }
  // };

  // const onIntChange = (e) => {
  //   setInt(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1) + 1);
  //     setInt(abilityScoreValues[r].name);
  //   }
  // };

  // const onWisChange = (e) => {
  //   setWis(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1) + 1);
  //     setWis(abilityScoreValues[r].name);
  //   }
  // };

  // const onChaChange = (e) => {
  //   setCha(e.value);
  //   if (e.value === "Random") {
  //     let r = Math.round(Math.random() * (8 - 1) + 1);
  //     setCha(abilityScoreValues[r].name);
  //   }
  // };

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

  const npc = {
    Name: name,
    Race: race,
    Sex: sex,
    Alignment: align,
    Profession: prof,
    Feature: feature,
    Talent: talent,
    Mannerism: mannerism,
    Interaction: interaction,
    Bond: bond,
    STR: str,
    DEX: dex,
    CON: con,
    INT: int,
    WIS: wis,
    CHA: cha,
    Hook: hook,
  };

  const onExport = () => {
    const npcExport = Object.entries(npc)
      .map(([name, value]) => `${name}: ${value}`)
      .join("\n");

    // file object
    const file = new Blob([npcExport], { type: "text/plain" });

    // anchor link
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = name + ".txt";

    // simulate link click
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };
  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  //Show Options
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };

  return (
    <div className={styleB.mainWrapper}>
      <Navbar />
      <div className={styleB.topHeader}>
        <h1 className={styleB.mainHeader}>NPC Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={styleB.btnWrapper}>
            <button onClick={onGenerate} className={styleB.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={styleB.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Options */}
      <div className={styleB.body}>
        <div className={styleB.optionsWrapper}>
          <h1>NPC Options</h1>
          <h1 className={styleB.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? styleB.subsection : styleB.hidden}>
            <div>
              <h1>Name</h1>
              <InputText value={name} onChange={onNameChange} />
              <button onClick={onRandomName} className={style.npcgenBtnName}>
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
              <h1>Sex</h1>
              <Dropdown
                optionLabel="name"
                value={sex}
                options={sexOptions}
                onChange={onSexChange}
                placeholder="Choose Sex"
              />
            </div>
            <div>
              <h1>Alignment</h1>
              <Dropdown
                optionLabel="name"
                value={align}
                options={alignOptions}
                onChange={onAlignChange}
                placeholder="Choose Alignment"
              />
            </div>
          </div>
          <h1 className={styleB.subHeader} onClick={showDetails}>
            NPC Details
          </h1>
          <div className={isDetailActive ? styleB.subsection : styleB.hidden}>
            <div>
              <h1>Profession</h1>
              <Dropdown
                optionLabel="name"
                value={prof}
                options={profOptions}
                onChange={onProfChange}
                placeholder="Choose Profession"
              />
            </div>
            <div>
              <h1>Feature</h1>
              <Dropdown
                optionLabel="name"
                value={feature}
                options={featureOptions}
                onChange={onFeatureChange}
                placeholder="Choose Feature"
              />
            </div>
            <div>
              <h1>Talent</h1>
              <Dropdown
                optionLabel="name"
                value={talent}
                options={talentOptions}
                onChange={onTalentChange}
                placeholder="Choose Talent"
              />
            </div>
            <div>
              <h1>Mannerism</h1>
              <Dropdown
                optionLabel="name"
                value={mannerism}
                options={mannerismOptions}
                onChange={onMannerismChange}
                placeholder="Choose Mannerism"
              />
            </div>
            <div>
              <h1>Interaction</h1>
              <Dropdown
                optionLabel="name"
                value={interaction}
                options={interactionOptions}
                onChange={onInteractionChange}
                placeholder="Choose Interaction"
              />
            </div>
            <div>
              <h1>Bond</h1>
              <Dropdown
                optionLabel="name"
                value={bond}
                options={bondOptions}
                onChange={onBondChange}
                placeholder="Choose Bond"
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={styleB.display}>
          <h1>{name}</h1>
          <h2>
            <span className={styleB.minorText2}>
              {race} {sex}, {align}
            </span>
          </h2>
          <hr className={styleB.lineBreak} />
          <h3 className={styleB.abilityScores}>
            <div>
              <h3>STR</h3>
              <div>
                <span className={styleB.minorText2}>
                  {str}
                  {/* ({strMod}){" "} */}
                </span>
              </div>
            </div>
            <div>
              <h3>DEX</h3>
              <div>
                <span className={styleB.minorText2}>
                  {dex}
                  {/* ({dexMod}){" "} */}
                </span>
              </div>
            </div>
            <div>
              <h3>CON</h3>
              <div>
                <span className={styleB.minorText2}>
                  {con}
                  {/* ({conMod}){" "} */}
                </span>
              </div>
            </div>
          </h3>
          <h3 className={styleB.abilityScores}>
            <div>
              <h3>INT</h3>
              <div>
                <span className={styleB.minorText2}>
                  {int}
                  {/* ({intMod}) */}
                </span>
              </div>
            </div>
            <div>
              <h3>WIS</h3>
              <div>
                <span className={styleB.minorText2}>
                  {wis}
                  {/* ({wisMod}) */}
                </span>
              </div>
            </div>
            <div>
              <h3>CHA</h3>
              <div>
                <span className={styleB.minorText2}>
                  {cha}
                  {/* ({chaMod}) */}
                </span>
              </div>
            </div>
          </h3>
          <hr className={styleB.lineBreak} />
          <h2>
            Profession <span className={styleB.minorText2}>{prof}</span>
          </h2>
          <h2>
            Feature <span className={styleB.minorText2}>{feature}</span>
          </h2>
          <h2>
            Talent <span className={styleB.minorText2}>{talent}</span>
          </h2>
          <h2>
            Mannerism <span className={styleB.minorText2}>{mannerism}</span>
          </h2>
          <h2>
            Interaction <span className={styleB.minorText2}>{interaction}</span>
          </h2>
          <h2>
            Bond <span className={styleB.minorText2}>{bond}</span>
          </h2>
          <h1>Plot Hook</h1>
          <hr className={styleB.subLineBreak} />
          <h2>
            Hook <span className={styleB.minorText2}>{hook}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
