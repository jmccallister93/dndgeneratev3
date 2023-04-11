import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { supabase, auth } from "../config/supabaseClient";
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

  const [fetchError, setFetchError] = useState(null);

  //Name Data
  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, []);

  const onRandomName = (e) => {
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
  };

  const onNameChange = (e) => {
    props.setName(e.target.value);
  };

  const customInputName = (
    <div>
      <h2 className={style.titles}>{props.title}</h2>
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
