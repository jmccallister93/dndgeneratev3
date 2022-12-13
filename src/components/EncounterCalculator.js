import { useEffect, useState } from "react";

const EncounterCalculator = (props) => {
  const [encounter, setEncounter] = useState([]);

  //take list of props.partyclasses and map through them to get the values
  const partyClasses = props.partyClasses.map((partyClass) => partyClass.value);

//assign values to each class
  const paladin = 13;
  const cleric = 12;
  const fighter = 11;
  const sorcerer = 10;
  const druid = 9;
  const wizard = 8;
  const ranger = 7;
  const barbarian = 6;
  const warlock = 5;
  const monk = 4;
  const rogue = 3;
  const artificer = 2;
  const bard = 1;

  //total props.partyClasses based on assigned value
  const totalPartyClasses = props.partyClasses.reduce((a, b) => a + b, 0);

  //Take all the given party classes and their values, add them together, and divide by the total number of party classes
  
  const averageClassLevel = props.partyClasses.reduce((a, b) => a + b, 0) / totalPartyClasses;

  //take the average party level and multiply it by props.partyLevel
  const encounterLevel = averageClassLevel * props.partyLevel;

  //Will need party size, class rating, and party level and create a custom CR for the total party


  return <></>;
};

export default EncounterCalculator;
