import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import style from "../stylesheets/PageStyle.module.scss";

const CustomName = (props) => {
  //----PROPS NEEDED----
  //tableName
  //name
  //setName
  //setNames
  //setNameOptions
  //nameOptions
  //title
  //placeholder

  const [, setFetchError] = useState(null);

  //Name Data
  useEffect(() => {
    const fetchData = async () => {
      if (props.tableName === "names") {
        const { data, error } = await supabase.from(props.tableName).select();
        if (error) {
          setFetchError("Could not fetch the data");
          props.setName(null);
          console.log(error);
        }
        if (data) {
          props.setNames(data);
          setFetchError(null);
          props.setNameOptions(
            data.map((r) => ({
              first_name: r.first_name,
              epithet_a: r.epithet_a,
              noun_a: r.noun_a,
              epithet_b: r.epithet_b,
              noun_b: r.noun_b,
            }))
          );
        }
      }
      if (props.tableName === "monsterNames") {
        const { data, error } = await supabase.from(props.tableName).select();
        if (error) {
          setFetchError("Could not fetch the data");
          props.setName(null);
          console.log(error);
        }
        if (data) {
          props.setNames(data);
          setFetchError(null);
          props.setNameOptions(
            data.map((r) => ({
              adjective: r.adjective,
              animal: r.animal,
              noun: r.noun,
            }))
          );
        }
      }
      if (props.tableName === "pantheonNames") {
        const { data, error } = await supabase.from(props.tableName).select();
        if (error) {
          setFetchError("Could not fetch the data");
          props.setName(null);
          console.log(error);
        }
        if (data) {
          props.setNames(data);
          setFetchError(null);
          props.setNameOptions(
            data.map((r) => ({
              adjective: r.adjective,
              noun: r.noun,
            }))
          );
        }
      }
      if (props.tableName === "factionNames") {
        const { data, error } = await supabase.from(props.tableName).select();
        if (error) {
          setFetchError("Could not fetch the data");
          props.setName(null);
          console.log(error);
        }
        if (data) {
          props.setNames(data);
          setFetchError(null);
          props.setNameOptions(
            data.map((r) => ({
              first_name: r.first_name,
              epithet_a: r.epithet_a,
              noun_a: r.noun_a,
              noun_b: r.noun_b,
            }))
          );
        }
      }

      if (props.tableName === "locationNames") {
        const { data, error } = await supabase.from(props.tableName).select();
        if (error) {
          setFetchError("Could not fetch the data");
          props.setName(null);
          console.log(error);
        }
        if (data) {
          props.setNames(data);
          setFetchError(null);
          props.setNameOptions(
            data.map((r) => ({
              first_name: r.first_name,
              epithet_a: r.epithet_a,
              noun_a: r.noun_a,
              epithet_b: r.epithet_b,
              noun_b: r.noun_b,
            }))
          );
        }
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  const onRandomName = (e) => {
    //NPC Name
    if (props.tableName === "names") {
      
      let f = Math.floor(Math.random() * 208);
      let firstName = [props.nameOptions[f].first_name];
      let eA = Math.floor(Math.random() * 208);
      let epiphet_a = [props.nameOptions[eA].epithet_a];
      let eB = Math.floor(Math.random() * 208);
      let epiphet_b = [props.nameOptions[eB].epithet_b];
      let nA = Math.floor(Math.random() * 208);
      let noun_a = [props.nameOptions[nA].noun_a];
      let nB = Math.floor(Math.random() * 208);
      let noun_b = [props.nameOptions[nB].noun_b];

      let random = Math.round(Math.random() * 3);

      if (random === 0) {
        props.setName(firstName + " " + epiphet_a + noun_a);
      } else if (random === 1) {
        props.setName(firstName + " " + epiphet_a + noun_b);
      } else if (random === 2) {
        props.setName(firstName + " " + epiphet_b + noun_b);
      } else {
        props.setName(firstName + " " + epiphet_b + noun_a);
      }
    }
    //Monster Name
    if (props.tableName === "monsterNames") {
      let a = Math.floor(Math.random() * 83);
      let adjective = [props.nameOptions[a].adjective];
      let n = Math.floor(Math.random() * 69);
      let noun = [props.nameOptions[n].noun];
      let an = Math.floor(Math.random() * 100);
      let animal = [props.nameOptions[an].animal];

      let random = Math.round(Math.random() * 2);

      if (random === 0) {
        props.setName(
          adjective.toString().charAt(0).toUpperCase() +
            adjective.toString().slice(1) +
            " " +
            noun.toString().charAt(0).toUpperCase() +
            noun.toString().slice(1)
        );
      } else if (random === 1) {
        props.setName(
          adjective.toString().charAt(0).toUpperCase() +
            adjective.toString().slice(1) +
            " " +
            animal
        );
      } else {
        props.setName(
          adjective.toString().charAt(0).toUpperCase() +
            adjective.toString().slice(1) +
            " " +
            noun.toString().charAt(0).toUpperCase() +
            noun.toString().slice(1) +
            " " +
            animal
        );
      }
    }

    //Pantheon Name
    if (props.tableName === "pantheonNames") {
      let a = Math.floor(Math.random() * 25);
      let adjective = [props.nameOptions[a].adjective];
      let n = Math.floor(Math.random() * 25);
      let noun = [props.nameOptions[n].noun];
      let a2 = Math.floor(Math.random() * 25);
      let adjective2 = [props.nameOptions[a2].adjective];

      let random = Math.round(Math.random() * 2);

      if (random === 0) {
        props.setName(adjective + " " + noun);
      } else if (random === 1) {
        props.setName(adjective + " " + adjective2 + " " + noun);
      } else {
        props.setName(adjective + " " + noun + " " + adjective2);
      }
    }

    //Faction Name
    if (props.tableName === "factionNames") {
      let f = Math.floor(Math.random() * 33);
      let first_name = [props.nameOptions[f].first_name];
      let e = Math.floor(Math.random() * 10);
      let epithet_a = [props.nameOptions[e].epithet_a];
      let na = Math.floor(Math.random() * 125);
      let noun_a = [props.nameOptions[na].noun_a];
      let nb = Math.floor(Math.random() * 185);
      let noun_b = [props.nameOptions[nb].noun_b];

      let random = Math.round(Math.random() * 4);

      if (random === 0) {
        props.setName(
          first_name + " " + epithet_a + " " + noun_a + " " + noun_b
        );
      } else if (random === 1) {
        props.setName(first_name + " " + epithet_a + " " + noun_b);
      } else if (random === 2) {
        props.setName(first_name + " " + noun_b);
      } else if (random === 3) {
        props.setName(noun_a + " " + noun_b);
      } else {
        props.setName(noun_b + " " + epithet_a + " " + noun_a);
      }
    }

    //LocationNames
    if (props.tableName === "locationNames") {
      let f = Math.floor(Math.random() * 60);
      let firstName = [props.nameOptions[f].first_name];
      let eA = Math.floor(Math.random() * 60);
      let epiphet_a = [props.nameOptions[eA].epithet_a];
      let nA = Math.floor(Math.random() * 60);
      let noun_a = [props.nameOptions[nA].noun_a];
      let nB = Math.floor(Math.random() * 60);
      let noun_b = [props.nameOptions[nB].noun_b];

      let random = Math.round(Math.random() * 6);

      if (random === 0) {
        props.setName(firstName + " " + noun_a);
      } else if (random === 1) {
        props.setName(firstName+ " " + noun_b);
      } else if (random === 2) {
        props.setName(firstName + " "  + noun_a + " " + noun_b);
      } else if (random === 3) {
        props.setName(epiphet_a + " "  + noun_a);
      } else if (random === 4) {
        props.setName(epiphet_a + " " + noun_a + " " + noun_b);
      } else if (random === 5) {
        props.setName(epiphet_a + " " + firstName);
      } else if(random === 6) {
        props.setName(noun_a + " " + noun_b);
      }
    }
  };

  const onNameChange = (e) => {
    props.setName(e.target.value);
  };

  const customInputName = (
    <div>
      <h1 className={style.titles}>{props.title}</h1>
      <InputText
        value={props.name}
        onChange={onNameChange}
        placeholder={props.placeholder}
      />
      <button
        onClick={onRandomName}
        className={style.diceBtn}
        title="Generate Random Name"
      >
        <span className={style.diceBtnText}>Random</span>
      </button>
    </div>
  );
  return <>{customInputName}</>;
};

export default CustomName;
