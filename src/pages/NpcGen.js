import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const NpcGen = () => {
  const [race, setRace] = useState(null);
  const [sex, setSex] = useState(null);
  const [align, setAlign] = useState(null);

  const races = [
    {name: "Random", value: "random"},
    { name: "Aasimar", value: "aasimar" },
    { name: "Deep Gnome", value: "deep gnome" },
    { name: "Dragonborn", value: "dragonborn" },
    { name: "Duergar", value: "duergar" },
    { name: "Drow", value: "drow" },
    { name: "Firbolg", value: "firbolg" },
    { name: "Genasi", value: "genasi" },
    { name: "Gnome", value: "gnome" },
    { name: "Golbin", value: "goblin" },
    { name: "Goliath", value: "goliath" },
    { name: "Half-Elf", value: "half-elf" },
    { name: "Half-Orc", value: "half-orc" },
    { name: "High Elf", value: "high elf" },
    { name: "Hill Dwarf", value: "hill dwarf" },
    { name: "Hobgoblin ", value: "stout halfling" },
    { name: "Human", value: "human" },
    { name: "Kenku", value: "kenku" },
    { name: "Kobold", value: "kobold" },
    { name: "Lightfoot Halfling", value: "lightfoot halfling" },
    { name: "Lizardfolk", value: "Lizardfolk" },
    { name: "Mountain Dwarf", value: "mountain dwarf" },
    { name: "Orc", value: "orc" },
    { name: "Tabaxi", value: "tabaxi" },
    { name: "Tiefling", value: "tiefling" },
    { name: "Triton", value: "triton" },
    { name: "Stout Halfling", value: "stout halfling" },
    { name: "Wood Elf", value: "wood elf" },
    { name: "Yuan-Ti", value: "yuan-ti" },
  ];

  const sexes = [
    {name: "Random", value: "random"},
    {name: "Male", value: "male"},
    {name:"Female", value: "female"}
  ]

  const aligns =[
    {name: "Random", value: "random"},
    {name: "Good", value: "good"},
    {name: "Neutral", value: "neutral"},
    {name: "Evil", value: "evil"},
  ]

  const onRaceChange = (e) => {
    setRace(e.value);
  };
  
  const onSexChange = (e) => {
    setSex(e.value);
  };

  const onAlignChange = (e) => {
    setAlign(e.value);
  };

  return (
    <div className={style.npcgenWrapper}>
      <Navbar />
      <h1>Race</h1>
      <Dropdown
        optionLabel="name"
        value={race}
        options={races}
        onChange={onRaceChange}
        placeholder="Random"
      />
      <h1>Sex</h1>
      <Dropdown
        optionLabel="name"
        value={sex}
        options={sexes}
        onChange={onSexChange}
        placeholder="Random"
      />
      <h1>Alignment</h1>
      <Dropdown
        optionLabel="name"
        value={align}
        options={aligns}
        onChange={onAlignChange}
        placeholder="Random"
      />
    </div>
  );
};

export default NpcGen;
