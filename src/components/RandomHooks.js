import { useEffect, useState } from "react";
import SingleDisplayText from "./SingleDisplayText";
import { supabase, auth } from "../config/supabaseClient";
import CustomName from "./CustomName";
import { prodDependencies } from "mathjs";
import NameGenerator from "./NameGenerator";
import NameDisplay from "./NameDisplay";

const RandomHooks = (props) => {
  //Get data
  const [fetchError, setFetchError] = useState(null);

  const [bountyWanted, setBountyWanted] = useState("");
  const [bountyWanteds, setBountyWanteds] = useState("");
  const [bountyWantedOptions, setBountyWantedOptions] = useState("");

  const [bountyCrime, setBountyCrime] = useState("");
  const [bountyCrimes, setBountyCrimes] = useState("");
  const [bountyCrimeOptions, setBountyCrimeOptions] = useState("");

  const [monster, setMonster] = useState("");
  const [monsters, setMonsters] = useState("");
  const [monsterOptions, setMonsterOptions] = useState("");

  const [npcName, setNpcName] = useState("");
  const [npcNames, setNpcNames] = useState("");
  const [npcNameOptions, setNpcNameOptions] = useState("");

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");

  const [vowel, setVowel] = useState(["a", "e", "i", "o", "u", "y"]);
  const [consonant, setConsonant] = useState([
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]);

  const [exploreLocation, setExploreLocation] = useState("");
  const [exploreLocations, setExploreLocations] = useState("");
  const [exploreLocationOptions, setExploreLocationOptions] = useState("");

  const [material, setMaterial] = useState("");
  const [materials, setMaterials] = useState("");
  const [materialOptions, setMaterialOptions] = useState("");

  const [faction, setFaction] = useState("");
  const [factions, setFactions] = useState("");
  const [factionOptions, setFactionOptions] = useState("");

  const [nameA, setNameA] = useState("");
  const [namesA, setNamesA] = useState([]);
  const [nameAOptions, setNameAOptions] = useState([]);
  const [nameB, setNameB] = useState("");
  const [namesB, setNamesB] = useState([]);
  const [nameBOptions, setNameBOptions] = useState([]);
  const [nameC, setNameC] = useState("");
  const [namesC, setNamesC] = useState([]);
  const [nameCOptions, setNameCOptions] = useState([]);
  const [nameD, setNameD] = useState("");
  const [namesD, setNamesD] = useState([]);
  const [nameDOptions, setNameDOptions] = useState([]);
  const [factionName, setFactionName] = useState("");
  const [factionNames, setFactionNames] = useState([]);
  const [factionNamesOptions, setFactionNamesOptions] = useState([]);

  //Get Data from supabase
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
        setOptions(dataName.map((r) => ({ name: r.name })));
      }
    };
    fetchData();
  };
  useEffect(() => {
    getData(
      "questsBounty",
      setBountyCrime,
      setBountyCrimes,
      setBountyCrimeOptions
    );
    setBountyWantedOptions(["Alive", "Dead or Alive"]);
    getData("monsters", setMonster, setMonsters, setMonsterOptions);
    getData("itemsMagicAll", setItem, setItems, setItemOptions);
    getData("buildingAll", setBuilding, setBuildings, setBuildingOptions);
    getData(
      "questsExplore",
      setExploreLocation,
      setExploreLocations,
      setExploreLocationOptions
    );
    getData("questsGather", setMaterial, setMaterials, setMaterialOptions);
    getData("namesA", setNameA, setNamesA, setNameAOptions);
    getData("namesB", setNameB, setNamesB, setNameBOptions);
    getData("namesC", setNameC, setNamesC, setNameCOptions);
    getData("namesD", setNameD, setNamesD, setNameDOptions);
  }, []);

  //set quest name to quest
  useEffect(() => {
    if(props.setNameValue){
      props.setNameValue(props.value)
    }
  }, [props])

  //NPC names
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("names").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setNpcName(null);
        console.log(error);
      }
      if (data) {
        setNpcNames(data);
        setFetchError(null);
        setNpcNameOptions(
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
  //Random NPC name
  const onRandomName = (e) => {
    let f = Math.floor(Math.random() * 208);
    let firstName = [npcNameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 208);
    let epiphet_a = [npcNameOptions[eA].epithet_a];
    let eB = Math.floor(Math.random() * 208);
    let epiphet_b = [npcNameOptions[eB].epithet_b];
    let nA = Math.floor(Math.random() * 208);
    let noun_a = [npcNameOptions[nA].noun_a];
    let nB = Math.floor(Math.random() * 208);
    let noun_b = [npcNameOptions[nB].noun_b];

    let random = Math.round(Math.random() * 3);

    if (random === 0) {
      return firstName + " " + epiphet_a + noun_a;
    } else if (random === 1) {
      return firstName + " " + epiphet_a + noun_b;
    } else if (random === 2) {
      return firstName + " " + epiphet_b + noun_b;
    } else {
      return firstName + " " + epiphet_b + noun_a;
    }
  };
  //Random Monster
  const onRandomMonster = (e) => {
    let r = Math.floor(Math.random() * monsterOptions.length);
    return monsterOptions[r].name;
  };
  //Random Item
  const onRandomItem = (e) => {
    let r = Math.floor(Math.random() * itemOptions.length);
    return itemOptions[r].name;
  };
  //Random Building
  const onRandomBuilding = (e) => {
    let r = Math.floor(Math.random() * buildingOptions.length);
    return buildingOptions[r].name;
  };
  //Random Location
  const onRandomWord = (e) => {
    //create random location name using vowel and consonant arrays
    let v = Math.floor(Math.random() * 6);
    let c = Math.floor(Math.random() * 21);
    let v2 = Math.floor(Math.random() * 6);
    let c2 = Math.floor(Math.random() * 21);
    let v3 = Math.floor(Math.random() * 6);
    let c3 = Math.floor(Math.random() * 21);
    let v4 = Math.floor(Math.random() * 6);
    let c4 = Math.floor(Math.random() * 21);
    let v5 = Math.floor(Math.random() * 6);
    let c5 = Math.floor(Math.random() * 21);
    let v6 = Math.floor(Math.random() * 6);
    let c6 = Math.floor(Math.random() * 21);
    //set location name based on random values
    let x = Math.round(Math.random() * 3);
    if (x === 0) {
      return (
        vowel[v3].toUpperCase() +
        consonant[c] +
        vowel[v2] +
        consonant[c3] +
        consonant[c4] +
        vowel[v5] +
        consonant[c5] +
        vowel[v6]
      );
    } else if (x === 1) {
      return (
        consonant[c].toUpperCase() +
        vowel[v2] +
        consonant[c3] +
        vowel[v5] +
        consonant[c4] +
        consonant[c5] +
        vowel[v6]
      );
    } else if (x === 2) {
      return (
        vowel[v].toUpperCase() +
        consonant[c] +
        consonant[c3] +
        vowel[v2] +
        consonant[c4] +
        vowel[v5] +
        vowel[v6] +
        consonant[c6] +
        consonant[c5] 
      );
    } else {
      return (
        consonant[c].toUpperCase() +
        vowel[v2] +
        consonant[c3] +
        vowel[v5] +
        consonant[c4] +
        consonant[c5] +
        vowel[v6] +
        consonant[c6] +
        vowel[v]
      );
    }
  };

  //Random Explore Location
  const onRandomExploreLocation = (e) => {
    let r = Math.floor(Math.random() * exploreLocationOptions.length);
    return exploreLocationOptions[r].name;
  };
  //Random Material
  const onRandomMaterial = (e) => {
    let r = Math.floor(Math.random() * materialOptions.length);
    return materialOptions[r].name;
  };

  //Random Faction Name
  const onRandomFactionName = (e) => {
    let rA = Math.floor(Math.random() * nameAOptions.length);
    let rB = Math.floor(Math.random() * nameBOptions.length);
    let rC = Math.floor(Math.random() * nameCOptions.length);
    let rD = Math.floor(Math.random() * nameDOptions.length);
    setNameA(nameAOptions[rA].name);
    setNameB(nameBOptions[rB].name);
    setNameC(nameCOptions[rC].name);
    setNameD(nameDOptions[rD].name);
    if (nameA && nameB && nameC && nameD) {
      return (
        nameAOptions[rA].name +
        " " +
        nameBOptions[rB].name +
        " " +
        nameCOptions[rC].name +
        " " +
        nameDOptions[rD].name
      );
    }
  };

  //Random Quest
  useEffect(() => {
    if (props.type === "") {
    } else {
      //Random Bounty
      if (props.type === "Bounty") {
        let bW = Math.floor(Math.random() * bountyWantedOptions.length);
        let bC = Math.floor(Math.random() * bountyCrimeOptions.length);
        props.setValue(
          onRandomName() +
            ", Wanted " +
            bountyWantedOptions[bW] +
            " for: " +
            bountyCrimeOptions[bC].name
        );
      }
      //Random Capture
      if (props.type === "Capture") {
        let r = Math.floor(Math.random() * 2);
        if (r === 0) {
          props.setValue("Capture the monster: " + onRandomMonster());
        } else {
          props.setValue("Capture the NPC: " + onRandomName());
        }
      }
      //Random Delivery
      if (props.type === "Delivery") {
        props.setValue(
          "Deliver the " + onRandomItem() + " to " + onRandomFactionName()
        );
      }
      //Random Escort
      if (props.type === "Escort") {
        props.setValue(
          "Escort " +
            onRandomName() +
            " to " +
            onRandomBuilding() +
            " in " +
            onRandomWord()
        );
      }
      //Random Exploration
      if (props.type === "Exploration") {
        let r = Math.floor(Math.random() * 4);
        if (r === 0) {
          props.setValue(
            "Explore " + onRandomExploreLocation() + " to the North"
          );
        } else if (r === 1) {
          props.setValue(
            "Explore " + onRandomExploreLocation() + " to the East"
          );
        } else if (r === 2) {
          props.setValue(
            "Explore " + onRandomExploreLocation() + " to the South"
          );
        } else {
          props.setValue(
            "Explore " + onRandomExploreLocation() + " to the West"
          );
        }
      }
      //Random Gather
      if (props.type === "Gather") {
        let r = Math.floor(Math.random() * 5) + 1;
        props.setValue("Gather " + r + " " + onRandomMaterial());
      }
      //Random Investigation
      if (props.type === "Investigate") {
        let r = Math.floor(Math.random() * 4);
        if (r === 0) {
          props.setValue("Investigate NPC: " + onRandomName());
        } else if (r === 1) {
          props.setValue("Investigate the Guild: " + onRandomFactionName());
        } else if (r === 2) {
          props.setValue("Investigate the Cult: "+ onRandomFactionName());
        } else {
          props.setValue("Investigate the Faction: "+ onRandomFactionName());
        }
      }
      if (props.type === "Kill") {
        props.setValue("Kill: " + onRandomName());
      }
      if (props.type === "Negotiation") {
        let r = Math.floor(Math.random() * 4);
        if (r === 0) {
          props.setValue("Negotiate with NPC: " + onRandomName());
        } else if (r === 1) {
          props.setValue("Negotiate with Faction: " + onRandomFactionName());
        } else if (r === 2) {
          props.setValue("Negotiate with Cult: " + onRandomFactionName());
        } else {
          props.setValue("Negotiate with Guild: " + onRandomFactionName());
        }
      }
      if (props.type === "Protect") {
        props.setValue("Protect: " + onRandomName());
      }
      if (props.type === "Rescue") {
        props.setValue("Rescue: " + onRandomName());
      } else {
      }
    }
  }, [props.type]);

  return (
    <>
       <NameDisplay value={props.value} setNewValue={props.setValue} />
    </>
  );
};

export default RandomHooks;
