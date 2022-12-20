import { useState } from "react";

const AgeHeightWeight = (props) => {
    const [ageMin, setAgeMin] = useState(0);
    const [ageMax, setAgeMax] = useState(0);
    const [heightFtMin, setHeightFtMin] = useState(0);
    const [heightFtMax, setHeightFtMax] = useState(0);

    const [weightMin, setWeightMin] = useState(0);
    const [weightMax, setWeightMax] = useState(0);


    if (props.generateItems[0]) {
      //props.itemOptions[0][i].name  this is list of all names in array 
      //props.generateItems[0] this is name of generated props.generateItems[0]
  
          if (props.generateItems[0] === "Aasimar") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Deep Gnome") {
            setAgeMin(20);
            setAgeMax(500);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.generateItems[0] === "Dragonborn") {
            setAgeMin(15);
            setAgeMax(80);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Duergr") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.generateItems[0] === "Drow") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Firbolg") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Genasi") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Gnome") {
            setAgeMin(20);
            setAgeMax(500);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.generateItems[0] === "Goblin") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.generateItems[0] === "Goliath") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Half-Elf") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Half-Orc") {
            setAgeMin(20);
            setAgeMax(75);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "High Elf") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Hill Dwarf") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.generateItems[0] === "Hobgoblin") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(120);
            setWeightMax(250);
          }
          if (props.generateItems[0] === "Human") {
            setAgeMin(15);
            setAgeMax(80);
            setHeightFtMin(4);
            setHeightFtMax(6);
            setWeightMin(110);
            setWeightMax(200);
          }
          if (props.generateItems[0] === "Kenku") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Kobold") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.generateItems[0] === "Lightfoot Halfling") {
            setAgeMin(20);
            setAgeMax(150);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.generateItems[0] === "Lizardfolk") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Mountain Dwarf") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.generateItems[0] === "Orc") {
            setAgeMin(20);
            setAgeMax(75);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Tabaxi") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Tiefling") {
            setAgeMin(18);
            setAgeMax(100);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Triton") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.generateItems[0] === "Stout Halfling") {
            setAgeMin(20);
            setAgeMax(150);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.generateItems[0] === "Wood Elf") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.generateItems[0] === "Yuan-Ti") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
      }
    return ( <></> );
}
 
export default AgeHeightWeight;