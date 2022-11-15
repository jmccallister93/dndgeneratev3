import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";

const NpcGen = () => {
  const [fetchError, setFetchError] = useState(null);

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
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");

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

  const onRaceChange = (e) => {
    setRace(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (29 - 1));
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
      let r = Math.round(Math.random() * (50 - 1) + 1);
      setProf(profOptions[r].name);
    }
  };

  const onFeatureChange = (e) => {
    setFeature(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (21 - 1) + 1);
      setFeature(featureOptions[r].name);
    }
  };

  const onTalentChange = (e) => {
    setTalent(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (21 - 1) + 1);
      setTalent(talentOptions[r].name);
    }
  };
  const onMannerismChange = (e) => {
    setMannerism(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
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
      let r = Math.round(Math.random() * (11 - 1));
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

  const onStrChange = (e) => {
    setStr(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setStr(abilityScoreValues[r].name);
    }
  };

  const onDexChange = (e) => {
    setDex(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setDex(abilityScoreValues[r].name);
    }
  };

  const onConChange = (e) => {
    setCon(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCon(abilityScoreValues[r].name);
    }
  };

  const onIntChange = (e) => {
    setInt(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setInt(abilityScoreValues[r].name);
    }
  };

  const onWisChange = (e) => {
    setWis(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setWis(abilityScoreValues[r].name);
    }
  };

  const onChaChange = (e) => {
    setCha(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCha(abilityScoreValues[r].name);
    }
  };

  const onGenerate = (e) => {
    if (bond === "") {
      let r = Math.round(Math.random() * (11 - 1));
      setBond(bondOptions[r].name);
    } else {
      setBond(bond);
    }

    if (race === "") {
      let r = Math.round(Math.random() * (29 - 1));
      setRace(raceOptions[r].name);
    } else {
      setRace(race);
    }

    if (sex === "") {
      let r = Math.round(Math.random() * (2 - 1) + 1);
      setSex(sexOptions[r].name);
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
      let r = Math.round(Math.random() * (50 - 1) + 1);
      setProf(profOptions[r].name);
    } else {
      setProf(prof);
    }

    if (feature === "") {
      let r = Math.round(Math.random() * (21 - 1) + 1);
      setFeature(featureOptions[r].name);
    } else {
      setFeature(feature);
    }

    if (talent === "") {
      let r = Math.round(Math.random() * (21 - 1) + 1);
      setTalent(talentOptions[r].name);
    } else {
      setTalent(talent);
    }

    if (mannerism === "") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
      setMannerism(mannerismOptions[r].name);
    } else {
      setMannerism(mannerism);
    }

    if (interaction === "") {
      let r = Math.round(Math.random() * (11 - 1) + 1);
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
    setStr("")
    setDex("")
    setCon("")
    setInt("")
    setWis("")
    setCha("")
  };

  return (
    <div className={style.npcgenWrapper}>
      <Navbar />
      <div className={style.npcgenBody}>
        <h1 className={style.npcgenHeader}>NPC Generator</h1>
        <div className={style.npcgenOptionsWrapper}>
          <div>
            <h1>Name</h1>
            <InputText value={name} onChange={onNameChange} />
            <Button
              label="Random?"
              className={style.npcgenBtnName}
              onClick={onRandomName}
            />
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
        <div>
          <div className={style.npcgenBtnWrapper}>
            <Button
              label="Generate"
              className={style.npcgenBtnGen}
              onClick={onGenerate}
            />
            <Button
              label="Clear Fields"
              className={style.npcgenBtn}
              onClick={onClear}
            />
          </div>
        </div>
        {/* Main Display */}
        <div className={style.npcgenDisplay}>
          {/* Display Wrapper */}
          <div className={style.npggenDescWrapper}>
            {/* Display Desc  */}
            <div className={style.npcgenDesc}>
              <h2 className={style.npcgenDescHeader}>Description</h2>
              <div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Name: </h1>
                  <h1 className={style.npcgenDetailOutput}>{name}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Race: </h1>
                  <h1 className={style.npcgenDetailOutput}>{race}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Sex: </h1>
                  <h1 className={style.npcgenDetailOutput}>{sex}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Alignment: </h1>
                  <h1 className={style.npcgenDetailOutput}>{align}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Profession: </h1>
                  <h1 className={style.npcgenDetailOutput}>{prof}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Feature: </h1>
                  <h1 className={style.npcgenDetailOutput}>{feature}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Talent: </h1>
                  <h1 className={style.npcgenDetailOutput}>{talent}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Mannerism: </h1>
                  <h1 className={style.npcgenDetailOutput}>{mannerism}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Interaction: </h1>
                  <h1 className={style.npcgenDetailOutput}>{interaction}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>Bond: </h1>
                  <h1 className={style.npcgenDetailOutput}>{bond}</h1>
                </div>
                {/* <h1>High Ability: {highAbility}</h1>
                <h1>Low Ability: {lowAbility}</h1> */}
              </div>
            </div>

            <div className={style.npcgenStats}>
              <h1 className={style.npcgenDescHeader}>Stats</h1>
              <div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>STR: </h1>
                  <h1 className={style.npcgenDetailOutput}>{str}</h1>
                  <Dropdown
                    optionLabel="name"
                    value={str}
                    options={abilityScoreValues}
                    onChange={onStrChange}
                    placeholder="Choose Score"
                  />
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>DEX: </h1>
                  <h1 className={style.npcgenDetailOutput}>{dex}</h1>
                  <Dropdown
                    optionLabel="name"
                    value={dex}
                    options={abilityScoreValues}
                    onChange={onDexChange}
                    placeholder="Choose Score"
                  />
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>CON: </h1>
                  <h1 className={style.npcgenDetailOutput}>{con}</h1>
                    <Dropdown
                      optionLabel="name"
                      value={con}
                      options={abilityScoreValues}
                      onChange={onConChange}
                      placeholder="Choose Score"
                    />
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>INT: </h1>
                  <h1 className={style.npcgenDetailOutput}>{int}</h1>
                    <Dropdown
                      optionLabel="name"
                      value={int}
                      options={abilityScoreValues}
                      onChange={onIntChange}
                      placeholder="Choose Score"
                    />
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>WIS: </h1>
                  <h1 className={style.npcgenDetailOutput}>{wis}</h1>
                    <Dropdown
                      optionLabel="name"
                      value={wis}
                      options={abilityScoreValues}
                      onChange={onWisChange}
                      placeholder="Choose Score"
                    />
                </div>
                <div className={style.npcgenDetail}>
                  <h1 className={style.npcgenDetailTitle}>CHA: </h1>
                  <h1 className={style.npcgenDetailOutput}>{cha}</h1>
                    <Dropdown
                      optionLabel="name"
                      value={cha}
                      options={abilityScoreValues}
                      onChange={onChaChange}
                      placeholder="Choose Score"
                    />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button
              label="Clear Fields"
              className={style.npcgenBtn}
              onClick={onClear}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
