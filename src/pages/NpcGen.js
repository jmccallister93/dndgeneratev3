import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss"
import { Dropdown } from 'primereact/dropdown';

const NpcGen = () => {
    const options = {
        url: ''
    }

    const fieldsRace = [
        {label: 'Aasimar', value: 'aasimar'},
        {label: 'Deep Gnome', value: 'deep gnome'},
        {label: 'Dragonborn', value: 'dragonborn'},
        {label: 'Duergar', value: 'duergar'},
        {label: 'Drow', value: 'drow'},
        {label: 'Firbolg', value: 'firbolg'},
        {label: 'Genasi', value: 'genasi'},
        {label: 'Gnome', value: 'gnome'},
        {label: 'Golbin', value: 'goblin'},
        {label: 'Goliath', value: 'goliath'},
        {label: 'Half-Elf', value: 'half-elf'},
        {label: 'Half-Orc', value: 'half-orc'},
        {label: 'High Elf', value: 'high elf'},
        {label: 'Hill Dwarf', value: 'hill dwarf'},
        {label: 'Hobgoblin ', value: 'stout halfling'},       
        {label: 'Human', value: 'human'},
        {label: 'Kenku', value: 'kenku'},
        {label: 'Kobold', value: 'kobold'},
        {label: 'Lightfoot Halfling', value: 'lightfoot halfling'},
        {label: 'Lizardfolk', value: 'Lizardfolk'},
        {label: 'Mountain Dwarf', value: 'mountain dwarf'},
        {label: 'Orc', value: 'orc'},
        {label: 'Tabaxi', value: 'tabaxi'},
        {label: 'Tiefling', value: 'tiefling'},
        {label: 'Triton', value: 'triton'},
        {label: 'Stout Halfling', value: 'stout halfling'},
        {label: 'Wood Elf', value: 'wood elf'},
        {label: 'Yuan-Ti', value: 'yuan-ti'},
    ]
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <div className={style.npcgenWrapper}>
      <Navbar />
      <h1>Race</h1>
      <Dropdown label="Race" options={fieldsRace} placeholder="Select Race"/>
    </div>
  );
};

export default NpcGen;
