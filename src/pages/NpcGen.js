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

  const [abilities, setAbilities] = useState();
  const [abilitiesOptions, setAbilitiesOptions] = useState();
  const [highAbility, setHighAbility] = useState("");
  const [lowAbility, setLowAbility] = useState("");

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

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("abilities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAbilities(null);
        console.log(error);
      }
      if (data) {
        setAbilities(data);
        setFetchError(null);
        setAbilitiesOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
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

  const onHighAbilityChange = (e) => {
    setHighAbility(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setHighAbility(abilitiesOptions[r].name);
    }
  };
  const onLowAbilityChange = (e) => {
    setLowAbility(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setLowAbility(abilitiesOptions[r].name);
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

    if (highAbility === "") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      setHighAbility(abilitiesOptions[r].name);
    } else {
      setHighAbility(highAbility);
    }

    if (lowAbility === "") {
      let r = Math.round(Math.random() * (6 - 1) + 1);
      console.log(r);
      setLowAbility(abilitiesOptions[r].name);
    } else {
      setLowAbility(lowAbility);
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
  };

  const onClear = (e) => {
    setLowAbility("");
    setHighAbility("");
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
            <h1>High Ability</h1>
            <Dropdown
              optionLabel="name"
              value={highAbility}
              options={abilitiesOptions}
              onChange={onHighAbilityChange}
              placeholder="Choose Ability"
            />
          </div>
          <div>
            <h1>Low Ability</h1>
            <Dropdown
              optionLabel="name"
              value={lowAbility}
              options={abilitiesOptions}
              onChange={onLowAbilityChange}
              placeholder="Choose Ability"
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
        <div className={style.npcgenDisplay}>

          <div className={style.npggenDWrapper}>

            <div className={style.npcgenDesc}>
              <h2 className={style.npcgenDescHeader}>Description</h2>
              <div>
                <div className={style.npcgenDetail}>
                  <h1>Name: </h1>
                  <h1>{name}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Race: </h1>
                  <h1>{race}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Sex: </h1>
                  <h1>{sex}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Alignment: </h1>
                  <h1>{align}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Profession: </h1>
                  <h1>{prof}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Feature: </h1>
                  <h1>{feature}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Talent: </h1>
                  <h1>{talent}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Mannerism: </h1>
                  <h1>{mannerism}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Interaction: </h1>
                  <h1>{interaction}</h1>
                </div>
                <div className={style.npcgenDetail}>
                  <h1>Bond: </h1>
                  <h1>{bond}</h1>
                </div>
                {/* <h1>High Ability: {highAbility}</h1>
                <h1>Low Ability: {lowAbility}</h1> */}
              </div>
            </div>

            <div className={style.npggenStats}>
              <h1 className={style.npcgenDescHeader}>Stats</h1>
              <div>
                <h1>Strength: </h1>
                <h1>Dexterity: </h1>
                <h1>Constitution: </h1>
                <h1>Intellect: </h1>
                <h1>Wisdom: </h1>
                <h1>Charisma: </h1>
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
