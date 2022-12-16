import { useEffect, useState } from "react";

const RandomHooks = (props) => {
  //Get data
  const [fetchError, setFetchError] = useState(null);
  const [bountyWanted, setBountyWanted] = useState([]);
  const [bountyCrime, setBountyCrime] = useState([]);
  const [capture, setCapture] = useState([]);

  useEffect(() => {
    if (props.value === "Bounty") {
        setBountyWanted(["Alive", "Dead or Alive"]);
        setBountyCrime([
          "Murder",
          "Theft",
          "Terrorism",
          "Necromancy",
          "Conjuration",
          "Witchcraft",
          "Insurrection",
          "Arson",
          "Assault",
          "Kidnapping",
        ]);
        let bW = Math.floor(Math.random() * bountyWanted.length);
        let bC = Math.floor(Math.random() * bountyCrime.length);
        props.setValue(
          "Wanted: " + bountyWanted[bW] + " for " + bountyCrime[bC]
        );
    }
    if (props.value === "Capture") {
        setCapture(["Monster", "NPC"])
        let r = Math.floor(Math.random() * capture.length)
        props.setValue(
            "Capture " + capture[r]
        )
    }
    if (props.value === "Delivery") {
    }
    if (props.value === "Escort") {
    }
    if (props.value === "Exploration") {
    }
    if (props.value === "Gather") {
    }
    if (props.value === "Investigate") {
    }
    if (props.value === "Kill") {
    }
    if (props.value === "Negotiation") {
    }
    if (props.value === "Protect") {
    }
    if (props.value === "Rescue") {
    }
    if (props.value === "Custom") {
    }
  }, [props.value]);

  return <>{props.value} </>;
};

export default RandomHooks;
