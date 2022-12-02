import styleB from "../stylesheets/BuildingGen.module.scss";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";

const Npcs = (props) => {
  const [fetchError, setFetchError] = useState();

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

  const [abilityMod, setAbilityMod] = useState();
  const [abilityMods, setAbilityMods] = useState();
  const [abilityModOption, setAbilityModOption] = useState();

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

  const [npcOptions, setNpcOptions] = useState("");
  const [npcList, setNpcList] = useState("");

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
  },[]);

  //name get data
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
  //AbilityScore
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("abilitiesModifiers")
        .select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAbilityMod(null);
        console.log(error);
      }
      if (data) {
        setAbilityMods(data);
        setFetchError(null);
        setAbilityModOption(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            modifier: r.modifier,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Manual Data
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
  //Random values
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
  //   console.log(nameOptions)

  //Generation
  const onGenerate = (e) => {
    if (align === "") {
        let r = Math.round(Math.random() * (9 - 1) + 1);
        setAlign(alignOptions[r].name);
      } else {
        setAlign(align);
      }
    if (name === "") {
      onRandomName();
    }
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
      setStr(abilityModOption[r].name);
    } else {
      setStr(str);
    }
    if (dex === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setDex(abilityModOption[r].name);
    } else {
      setDex(dex);
    }
    if (con === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCon(abilityModOption[r].name);
    } else {
      setCon(con);
    }
    if (int === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setInt(abilityModOption[r].name);
    } else {
      setInt(int);
    }
    if (wis === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setWis(abilityModOption[r].name);
    } else {
      setWis(wis);
    }
    if (cha === "") {
      let r = Math.round(Math.random() * (8 - 1) + 1);
      setCha(abilityModOption[r].name);
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
  }
  //   ISSUES ARE HERE
  // ON GEN CANNOT RUN BECAUSE OPTIONS ARE NOT YET SET

//   useEffect(() => {
//     setNpcOptions(npc)
//     setNpcOptions((prevState) => [...prevState, npc]
//   }, []);

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
  console.log(npc)
  const onBtnClick = (e)=>{ 
    props.openDialogNpc()
    for(let i =0; i < 5; i++){
        onGenerate()
    }
    // setNpcOptions(npc)
};

  return (
    <>
      <div>
        <Button onClick={onBtnClick} className={styleB.btnAddRemove}>
          Add / Remove
        </Button>
        <Dialog
          header="NPCs"
          visible={props.dialogVisibleNpc}
          maximizable
          modal
          onHide={props.closeDialogNpc}
          footer={props.dialogFooterNpc}
          transitionOptions
        >
          <DataTable
            value={npcOptions}
            scrollable
            scrollHeight="60vh"
            rows={20}
            dataKey="name"
            selection={props.selectedNpc}
            onSelectionChange={(e) => {
              props.setSelectedNpc(e.value);
            }}
            //   filters={filters}
            filterDisplay="row"
            responsiveLayout="scroll"
            globalFilterFields={["name"]}
            header={props.header}
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
            <Column
              field="type"
              header="Type"
              sortable
              filter
              filterPlaceholder="Search"
            ></Column>
          </DataTable>
        </Dialog>
      </div>
    </>
  );
};

export default Npcs;
