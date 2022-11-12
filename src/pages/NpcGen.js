import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const NpcGen = () => {
  const [race, setRace] = useState("Random");
  const [sex, setSex] = useState("Random");
  const [align, setAlign] = useState("Random");

  const races = [
    { name: "Random", value: "Random" },
    { name: "Aasimar", value: "Aasimar" },
    { name: "Deep Gnome", value: "Deep Gnome" },
    { name: "Dragonborn", value: "Dragonborn" },
    { name: "Duergar", value: "Duergar" },
    { name: "Drow", value: "Drow" },
    { name: "Firbolg", value: "Firbolg" },
    { name: "Genasi", value: "Genasi" },
    { name: "Gnome", value: "Gnome" },
    { name: "Golbin", value: "Goblin" },
    { name: "Goliath", value: "Goliath" },
    { name: "Half-Elf", value: "Half-Elf" },
    { name: "Half-Orc", value: "Half-Orc" },
    { name: "High Elf", value: "High Elf" },
    { name: "Hill Dwarf", value: "Hill Dwarf" },
    { name: "Hobgoblin ", value: "Stout Halfling" },
    { name: "Human", value: "Human" },
    { name: "Kenku", value: "Kenku" },
    { name: "Kobold", value: "Kobold" },
    { name: "Lightfoot Halfling", value: "Lightfoot Halfling" },
    { name: "Lizardfolk", value: "Lizardfolk" },
    { name: "Mountain Dwarf", value: "Mountain Dwarf" },
    { name: "Orc", value: "Orc" },
    { name: "Tabaxi", value: "Tabaxi" },
    { name: "Tiefling", value: "Tiefling" },
    { name: "Triton", value: "Triton" },
    { name: "Stout Halfling", value: "Stout Halfling" },
    { name: "Wood Elf", value: "Wood Elf" },
    { name: "Yuan-Ti", value: "Yuan-Ti" },
  ];

  const sexes = [
    { name: "Random", value: "Random" },
    { name: "Male", value: "Male" },
    { name: "Female", value: "Female" },
  ];

  const aligns = [
    { name: "Random", value: "Random" },
    { name: "Good", value: "Good" },
    { name: "Neutral", value: "Neutral" },
    { name: "Evil", value: "Evil" },
  ];

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
      <div className={style.npcgenBody}>
        <div className={style.npcgenOptionsWrapper}>
          <div>
            <h1>Race</h1>
            <Dropdown
              optionLabel="name"
              value={race}
              options={races}
              onChange={onRaceChange}
              placeholder="Random"
            />
          </div>
          <div>
            <h1>Sex</h1>
            <Dropdown
              optionLabel="name"
              value={sex}
              options={sexes}
              onChange={onSexChange}
              placeholder="Random"
            />
          </div>
          <div>
            <h1>Alignment</h1>
            <Dropdown
              optionLabel="name"
              value={align}
              options={aligns}
              onChange={onAlignChange}
              placeholder="Random"
            />
          </div>
        </div>
        <div className={style.npcgenDisplay}>
          <h1>{race}</h1>
          <h1>{sex}</h1>
          <h1>{align}</h1>
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
