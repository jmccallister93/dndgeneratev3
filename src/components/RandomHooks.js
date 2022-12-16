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

  const [captureOptions, setCaptureOptions] = useState("");
  const [capture, setCapture] = useState([]);

  const [item, setItem] = useState("");
    const [items, setItems] = useState("");
    const [itemOptions, setItemOptions] = useState("");

  const [delivery, setDelivery] = useState("");

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
  //Random Quest
  useEffect(() => {
    //Random Bounty
    if (props.type === "Bounty") {
    onRandomName()
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
        setCapture("Capture the monster " + monster);
      } else {
        setCapture("Capture the NPC " + npcName);
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
    if (props.type === "Escort") {
    }
    if (props.type === "Exploration") {
    }
    if (props.type === "Gather") {
    }
    if (props.type === "Investigate") {
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
