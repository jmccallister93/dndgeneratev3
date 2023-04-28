import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import NameDisplay from "./NameDisplay";

const RandomHooks = (props) => {
  //Get data
  const [, setFetchError] = useState(null);

  const [bountyWantedOptions, setBountyWantedOptions] = useState("");

  const [, setBountyCrime] = useState("");
  const [, setBountyCrimes] = useState("");
  const [bountyCrimeOptions, setBountyCrimeOptions] = useState("");

  const [, setMonster] = useState("");
  const [, setMonsters] = useState("");
  const [monsterOptions, setMonsterOptions] = useState("");

  const [, setNpcName] = useState("");
  const [, setNpcNames] = useState("");
  const [npcNameOptions, setNpcNameOptions] = useState("");

  const [, setItem] = useState("");
  const [, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");

  const [, setBuilding] = useState("");
  const [, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");

  const [vowel] = useState(["a", "e", "i", "o", "u", "y"]);
  const [consonant] = useState([
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

  const [, setExploreLocation] = useState("");
  const [, setExploreLocations] = useState("");
  const [exploreLocationOptions, setExploreLocationOptions] = useState("");

  const [, setMaterial] = useState("");
  const [, setMaterials] = useState("");
  const [materialOptions, setMaterialOptions] = useState("");

  const [nameA, setNameA] = useState("");
  const [, setNamesA] = useState([]);
  const [nameAOptions, setNameAOptions] = useState([]);
  const [nameB, setNameB] = useState("");
  const [, setNamesB] = useState([]);
  const [nameBOptions, setNameBOptions] = useState([]);
  const [nameC, setNameC] = useState("");
  const [, setNamesC] = useState([]);
  const [nameCOptions, setNameCOptions] = useState([]);
  const [nameD, setNameD] = useState("");
  const [, setNamesD] = useState([]);
  const [nameDOptions, setNameDOptions] = useState([]);

  const [locationNameOptions, setLocationNameOptions] = useState([]);

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
    if (props.setNameValue) {
      props.setNameValue(props.value);
    }
  }, [props]);

  //Random NPC name
  const onRandomName = (e) => {
    let f = Math.floor(Math.random() * 207);
    let firstName = [props.npcNameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 207);
    let epiphet_a = [props.npcNameOptions[eA].epithet_a];
    let eB = Math.floor(Math.random() * 207);
    let epiphet_b = [props.npcNameOptions[eB].epithet_b];
    let nA = Math.floor(Math.random() * 207);
    let noun_a = [props.npcNameOptions[nA].noun_a];
    let nB = Math.floor(Math.random() * 207);
    let noun_b = [props.npcNameOptions[nB].noun_b];

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
    let f = Math.floor(Math.random() * 59);
    let firstName = [props.locationNameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 59);
    let epiphet_a = [props.locationNameOptions[eA].epithet_a];
    let nA = Math.floor(Math.random() * 59);
    let noun_a = [props.locationNameOptions[nA].noun_a];
    let nB = Math.floor(Math.random() * 59);
    let noun_b = [props.locationNameOptions[nB].noun_b];

    let random = Math.round(Math.random() * 6);

    if (random === 0) {
      return firstName + " " + noun_a;
    } else if (random === 1) {
      return firstName + " " + noun_b;
    } else if (random === 2) {
      return firstName + " " + noun_a + " " + noun_b;
    } else if (random === 3) {
      return epiphet_a + " " + noun_a;
    } else if (random === 4) {
      return epiphet_a + " " + noun_a + " " + noun_b;
    } else if (random === 5) {
      return epiphet_a + " " + firstName;
    } else if (random === 6) {
      return noun_a + " " + noun_b;
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
    let f = Math.floor(Math.random() * 32);
    let first_name = [props.factionNameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 9);
    let epithet_a = [props.factionNameOptions[eA].epithet_a];
    let na = Math.floor(Math.random() * 124);
    let noun_a = [props.factionNameOptions[na].noun_a];
    let nb = Math.floor(Math.random() * 184);
    let noun_b = [props.factionNameOptions[nb].noun_b];

    let random = Math.round(Math.random() * 4);

    if (random === 0) {
      return first_name + " " + epithet_a + " " + noun_a + " " + noun_b;
    } else if (random === 1) {
      return first_name + " " + epithet_a + " " + noun_b;
    } else if (random === 2) {
      return first_name + " " + noun_b;
    } else if (random === 3) {
      return noun_a + " " + noun_b;
    } else {
      return noun_b + " " + epithet_a + " " + noun_a;
    }
  };

  // useEffect(() => {
  //   onRandomName()
  //   onRandomMonster()
  //   onRandomItem()
  //   onRandomBuilding()
  //   onRandomWord()
  //   onRandomExploreLocation()
  //   onRandomMaterial()
  //   onRandomFactionName()
  // }, [])

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
          props.setValue("Investigate the Cult: " + onRandomFactionName());
        } else {
          props.setValue("Investigate the Faction: " + onRandomFactionName());
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
    // eslint-disable-next-line
  }, [props.type]);

  return (
    <>
      <NameDisplay value={props.value} setNewValue={props.setValue} />
    </>
  );
};

export default RandomHooks;
