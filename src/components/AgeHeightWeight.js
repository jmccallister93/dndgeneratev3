import { useState } from "react";

const AgeHeightWeight = (props) => {
    const [ageMin, setAgeMin] = useState(0);
    const [ageMax, setAgeMax] = useState(0);
    const [heightFtMin, setHeightFtMin] = useState(0);
    const [heightFtMax, setHeightFtMax] = useState(0);
    const [weightMin, setWeightMin] = useState(0);
    const [weightMax, setWeightMax] = useState(0);


    if (props.race) {
      //props.itemOptions[0][i].name  this is list of all names in array 
      //props.race this is name of generated race
  
          if (props.race === "Aasimar") {
            // console.log("Aasimar");
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Deep Gnome") {
            console.log("Deep Gnome");
            setAgeMin(20);
            setAgeMax(500);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.race === "Dragonborn") {
            setAgeMin(15);
            setAgeMax(80);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Duergr") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.race === "Drow") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Firbolg") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Genasi") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Gnome") {
            setAgeMin(20);
            setAgeMax(500);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.race === "Goblin") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.race === "Goliath") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Half-Elf") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Half-Orc") {
            setAgeMin(20);
            setAgeMax(75);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "High Elf") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Hill Dwarf") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.race === "Hobgoblin") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(120);
            setWeightMax(250);
          }
          if (props.race === "Human") {
            setAgeMin(15);
            setAgeMax(80);
            setHeightFtMin(4);
            setHeightFtMax(6);
            setWeightMin(110);
            setWeightMax(200);
          }
          if (props.race === "Kenku") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Kobold") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.race === "Lightfoot Halfling") {
            setAgeMin(20);
            setAgeMax(150);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.race === "Lizardfolk") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Mountain Dwarf") {
            setAgeMin(20);
            setAgeMax(350);
            setHeightFtMin(4);
            setHeightFtMax(5);
            setWeightMin(150);
            setWeightMax(250);
          }
          if (props.race === "Orc") {
            setAgeMin(20);
            setAgeMax(75);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Tabaxi") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Tiefling") {
            setAgeMin(18);
            setAgeMax(100);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Triton") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(6);
            setHeightFtMax(7);
            setWeightMin(175);
            setWeightMax(300);
          }
          if (props.race === "Stout Halfling") {
            setAgeMin(20);
            setAgeMax(150);
            setHeightFtMin(3);
            setHeightFtMax(4);
            setWeightMin(35);
            setWeightMax(50);
          }
          if (props.race === "Wood Elf") {
            setAgeMin(20);
            setAgeMax(750);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          if (props.race === "Yuan-Ti") {
            setAgeMin(20);
            setAgeMax(180);
            setHeightFtMin(5);
            setHeightFtMax(6);
            setWeightMin(90);
            setWeightMax(150);
          }
          console.log(props.race)
        
      }
    return ( <></> );
}
 
export default AgeHeightWeight;