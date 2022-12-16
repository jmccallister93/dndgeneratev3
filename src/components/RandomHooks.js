import { useEffect, useState } from "react";
import SingleDisplayText from "./SingleDisplayText";
import supabase from "../config/supabaseClient";
import CustomName from "./CustomName";

const RandomHooks = (props) => {
  //Get data
  const [fetchError, setFetchError] = useState(null);

  const [bountyWanted, setBountyWanted] = useState("");
  const [bountyWanteds, setBountyWanteds] = useState("");
  const [bountyWantedOptions, setBountyWantedOptions] = useState("");

  const [bountyCrime, setBountyCrime] = useState("");
  const [bountyCrimes, setBountyCrimes] = useState("");
  const [bountyCrimeOptions, setBountyCrimeOptions] = useState("");

  const [bounty, setBounty] = useState("");

  const [monster, setMonster] = useState("");
  const [monsters, setMonsters] = useState("");
  const [monsterOptions, setMonsterOptions] = useState("");

  const [npcName, setNpcName] = useState("");
  const [npcNames, setNpcNames] = useState("");
  const [npcNameOptions, setNpcNameOptions] = useState("");

  const [capture, setCapture] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");

  const [delivery, setDelivery] = useState("");

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");

  const [escort, setEscort] = useState("");

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

  const [location, setLocation] = useState("");

  const [exploreLocation, setExploreLocation] = useState("");
  const [exploreLocations, setExploreLocations] = useState("");
  const [exploreLocationOptions, setExploreLocationOptions] = useState("");

  const [exploration, setExploration] = useState("");

  const [material, setMaterial] = useState("");
  const [materials, setMaterials] = useState("");
  const [materialOptions, setMaterialOptions] = useState("");

  const [gather, setGather] = useState("");

  const [investigate, setInvestigate] = useState("");

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
  }, []);

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
      setNpcName(firstName + " " + epiphet_a + noun_a);
    } else if (random === 1) {
      setNpcName(firstName + " " + epiphet_a + noun_b);
    } else if (random === 2) {
      setNpcName(firstName + " " + epiphet_b + noun_b);
    } else {
      setNpcName(firstName + " " + epiphet_b + noun_a);
    }
  };
  //Random Monster
  const onRandomMonster = (e) => {
    let r = Math.floor(Math.random() * monsterOptions.length);
    setMonster(monsterOptions[r].name);
  };
  //Random Item
  const onRandomItem = (e) => {
    let r = Math.floor(Math.random() * itemOptions.length);
    setItem(itemOptions[r].name);
  };
  //Random Building
  const onRandomBuilding = (e) => {
    let r = Math.floor(Math.random() * buildingOptions.length);
    setBuilding(buildingOptions[r].name);
  };
  //Random Location
  const onRandomLocation = (e) => {
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
    setLocation(
      vowel[v].toUpperCase() +
        consonant[c] +
        vowel[v2] +
        consonant[c3] +
        consonant[c4] +
        vowel[v5] +
        consonant[c5] +
        vowel[v6]
    );
  };
  //Random Explore Location
  const onRandomExploreLocation = (e) => {
    let r = Math.floor(Math.random() * exploreLocationOptions.length);
    setExploreLocation(exploreLocationOptions[r].name);
  };

  //Random Material
  const onRandomMaterial = (e) => {
    let r = Math.floor(Math.random() * materialOptions.length);
    setMaterial(materialOptions[r].name);
  };

  //Random Quest
  useEffect(() => {
    //Random Bounty
    if (props.type === "Bounty") {
      onRandomName();
      let bW = Math.floor(Math.random() * bountyWantedOptions.length);
      let bC = Math.floor(Math.random() * bountyCrimeOptions.length);
      setBounty(
        npcName +
          ", Wanted " +
          bountyWantedOptions[bW] +
          " for " +
          bountyCrimeOptions[bC].name
      );
      props.setValue(bounty);
    }
    //Random Capture
    if (props.type === "Capture") {
      onRandomName();
      onRandomMonster();
      let r = Math.floor(Math.random() * 2);
      if (r === 0) {
        setCapture("Capture the monster; " + monster);
      } else {
        setCapture("Capture the NPC; " + npcName);
      }
      props.setValue(capture);
    }
    //Random Delivery
    if (props.type === "Delivery") {
      onRandomItem();
      onRandomName();
      setDelivery("Deliver the " + item + " to " + npcName);
      props.setValue(delivery);
    }
    //Random Escort
    if (props.type === "Escort") {
      onRandomLocation();
      onRandomName();
      onRandomBuilding();
      setEscort("Escort " + npcName + " to " + building + " in " + location);
      props.setValue(escort);
    }
    //Random Exploration
    if (props.type === "Exploration") {
      onRandomExploreLocation();
      //choose random direction
      let r = Math.floor(Math.random() * 4);
      if (r === 0) {
        setExploration("Explore " + exploreLocation + " to the North");
      } else if (r === 1) {
        setExploration("Explore " + exploreLocation + " to the East");
      } else if (r === 2) {
        setExploration("Explore " + exploreLocation + " to the South");
      } else {
        setExploration("Explore " + exploreLocation + " to the West");
      }
      props.setValue(exploration);
    }
    //Random Gather
    if (props.type === "Gather") {
      onRandomMaterial();
      //randomly choose between 1 and 5
      let r = Math.floor(Math.random() * 5) + 1;
      setGather("Gather " + r + " " + material);
      props.setValue(gather);
    }
    //Random Investigation
    if (props.type === "Investigate") {
        onRandomLocation();
        let r = Math.floor(Math.random() * 4);
        if (r === 0) {
            onRandomName();
            setInvestigate("Investigate NPC: " + npcName);
        } else if (r === 1) {
            setInvestigate("Investigate the Guild: " + location );
        } else if (r === 2) {
            setInvestigate("Investigate the Cult: " + location);
        } else {
            setInvestigate("Investigate the Faction: " + location);
        }
        props.setValue(investigate);
    }
    if (props.type === "Kill") {
    }
    if (props.type === "Negotiation") {
    }
    if (props.type === "Protect") {
    }
    if (props.type === "Rescue") {
    }
    if (props.type === "Custom") {
    }
  }, [props.type]);

  return (
    <>
      <SingleDisplayText value={props.value} setNewValue={props.setValue} />
    </>
  );
};

export default RandomHooks;
