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

  //TODO Names
  useEffect(() => {});

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
        setArmorTypeOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
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
        setSpeedTypeOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
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
        setArmorTypeOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
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

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("skills").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSkill(null);
        console.log(error);
      }
      if (data) {
        setSkills(data);
        setFetchError(null);
        setSkillOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setVuln(null);
        console.log(error);
      }
      if (data) {
        setVulns(data);
        setFetchError(null);
        setVulnOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setImmune(null);
        console.log(error);
      }
      if (data) {
        setImmunes(data);
        setFetchError(null);
        setImmuneOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("damageTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setResist(null);
        console.log(error);
      }
      if (data) {
        setResists(data);
        setFetchError(null);
        setResistOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("conditions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setCondition(null);
        console.log(error);
      }
      if (data) {
        setConditions(data);
        setFetchError(null);
        setConditionOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("senses").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSense(null);
        console.log(error);
      }
      if (data) {
        setSenses(data);
        setFetchError(null);
        setSenseOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("languages").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLang(null);
        console.log(error);
      }
      if (data) {
        setLangs(data);
        setFetchError(null);
        setLangOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersAbilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setSpecial(null);
        console.log(error);
      }
      if (data) {
        setSpecials(data);
        setFetchError(null);
        setSpecialOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersActions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAction(null);
        console.log(error);
      }
      if (data) {
        setActions(data);
        setFetchError(null);
        setActionOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("monstersReactions").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setReaction(null);
        console.log(error);
      }
      if (data) {
        setReactions(data);
        setFetchError(null);
        setReactionOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("monstersLegendaryActions")
        .select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLegend(null);
        console.log(error);
      }
      if (data) {
        setLegends(data);
        setFetchError(null);
        setLegendOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("monstersLairActions")
        .select();
      if (error) {
        setFetchError("Could not fetch the data");
        setLair(null);
        console.log(error);
      }
      //   if (data) {
      //     setLairs(data);
      //     setFetchError(null);
      //     setLairOptions(data.map((r) => ({ name: r.name, value: r.value })));
      //   }
    };
    fetchData();
  }, []);

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

  const onSizeChange = (e) => {
    setSize(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setSize(sizeOptions[r].name);
    }
  };

  const onTypeChange = (e) => {
    setType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (16 - 1) + 1);
      setType(typeOptions[r].name);
    }
  };

  const onAlignChange = (e) => {
    setAlign(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (9 - 1) + 1);
      setAlign(alignOptions[r].name);
    }
  };

  const onAcChange = (e) => {
    setAc(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (30 - 1) + 1);
      setAc(acOptions[r].name);
    }
  };

  const onArmorTypeChange = (e) => {
    setArmorType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (5 - 1) + 1);
      setArmorType(armorTypeOptions[r].name);
    }
  };

  const onHpChange = (e) => {
    setHp(e.value);
  };

  const onRandomHp = (e) => {
    let r = Math.floor(Math.random() * 500);
    setHp(r);
  };

  const onSpeedChange = (e) => {
    setSpeed(e.value);
  };
  const onRandomSpeed = (e) => {
    let r = Math.floor(Math.random() * (120 - 0));
    setSpeed(r);
  };

  const onSpeedTypeChange = (e) => {
    setSpeedType(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setSpeedType(speedTypeOptions[r].name);
    }
  };

  //TODO List of Speeds
  const onSpeedExtraChange = (e) => {
    setSpeedExtra(e.value);
  };
  const onRandomSpeedExtra = (e) => {
    let r = Math.floor(Math.random() * (120 - 0));
    setSpeedExtra(r);
  };

  //TODO
  const onStrChange = (e) => {
    setStr(e.value);
  };
  const onRandomStr = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setStr(r);
  };
  const onDexChange = (e) => {
    setDex(e.value);
  };
  const onRandomDex = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setDex(r);
  };
  const onConChange = (e) => {
    setCon(e.value);
  };
  const onRandomCon = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setCon(r);
  };
  const onIntChange = (e) => {
    setInt(e.value);
  };
  const onRandomInt = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setInt(r);
  };
  const onWisChange = (e) => {
    setWis(e.value);
  };
  const onRandomWis = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setWis(r);
  };
  const onChaChange = (e) => {
    setCha(e.value);
  };
  const onRandomCha = (e) => {
    let r = Math.floor(Math.random() * (30 - 0));
    setCha(r);
  };

  //   const onSaveChange = (e) => {
  //     setSave(e.value);
  //     if (e.value === "Random") {
  //       let r = Math.round(Math.random() * (28 - 1) +1);
  //       setSave(saveOptions[r].name);
  //     }
  //   };

  const onVulnChange = (e) => {
    setVuln(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setVuln(vulnOptions[r].name);
    }
  };

  const onSkillChange = (e) => {
    setSkill(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (18 - 1) + 1);
      setSkill(skillOptions[r].name);
    }
  };

  const onImmuneChange = (e) => {
    setImmune(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setImmune(immuneOptions[r].name);
    }
  };

  const onResistChange = (e) => {
    setResist(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (17 - 1) + 1);
      setResist(resistOptions[r].name);
    }
  };

  const onConditionChange = (e) => {
    setCondition(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (15 - 1) + 1);
      setCondition(conditionOptions[r].name);
    }
  };

  const onSenseChange = (e) => {
    setSense(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (4 - 1) + 1);
      setSense(senseOptions[r].name);
    }
  };

  const onLangChange = (e) => {
    setLang(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (16 - 1) + 1);
      setLang(langOptions[r].name);
    }
  };

  const onSpecialChange = (e) => {
    setSpecial(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (208 - 1) + 1);
      setSpecial(specialOptions[r].name);
    }
  };

  const onActionChange = (e) => {
    setAction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (292 - 1) + 1);
      setAction(actionOptions[r].name);
    }
  };

  const onReactionChange = (e) => {
    setReaction(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setReaction(reactionOptions[r].name);
    }
  };

  const onLegendChange = (e) => {
    setLegend(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (35 - 1) + 1);
      setLegend(legendOptions[r].name);
    }
  };

  const onLairChange = (e) => {
    setLair(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (39 - 1) + 1);
      setLair(lairOptions[r].name);
    }
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
