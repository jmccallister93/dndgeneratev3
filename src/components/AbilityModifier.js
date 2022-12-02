import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import style from "../stylesheets/BuildingGen.module.scss";

const AbilityModifier = (props) => {
  const [str, setStr] = useState("");
  const [strMod, setStrMod] = useState("");
  const [dex, setDex] = useState("");
  const [dexMod, setDexMod] = useState("");
  const [con, setCon] = useState("");
  const [conMod, setConMod] = useState("");
  const [int, setInt] = useState("");
  const [intMod, setIntMod] = useState("");
  const [wis, setWis] = useState("");
  const [wisMod, setWisMod] = useState("");
  const [cha, setCha] = useState("");
  const [chaMod, setChaMod] = useState("");
  const [isAbilityActive, setIsAbilityActive] = useState(false);

  //On Change function
  const objectChange = (value, setObject, max, min, floor, objectOptions) => {
    setObject(value);
    if (value === "Random") {
      let r = Math.round(Math.random() * (max - min) + floor);
      setObject(objectOptions[r].name);
    }
  };
  const onStrChange = (e) => {
    objectChange(e.value, setStr);
    props.onStrChangeProp(str)
  };

  const onDexChange = (e) => {
    objectChange(e.value, setDex);
  };
  const onConChange = (e) => {
    objectChange(e.value, setCon);
  };
  const onIntChange = (e) => {
    objectChange(e.value, setInt);
  };
  const onWisChange = (e) => {
    objectChange(e.value, setWis);
  };
  const onChaChange = (e) => {
    objectChange(e.value, setCha);
  };

  //Custom Input
  const customInputNumber = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.dropTitle}>{title}</h2>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        mode="decimal"
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
        min={0}
        max={30}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //Random Button
  const randomButton = (setObject, max, min) => {
    let r = Math.floor(Math.random() * (max - min));
    setObject(r);
  };
  //OnRandoms
  const onRandomStr = (e) => {
    randomButton(setStr, 30, 0);
  };
  const onRandomDex = (e) => {
    randomButton(setDex, 30, 0);
  };
  const onRandomCon = (e) => {
    randomButton(setCon, 30, 0);
  };
  const onRandomInt = (e) => {
    randomButton(setInt, 30, 0);
  };
  const onRandomWis = (e) => {
    randomButton(setWis, 30, 0);
  };
  const onRandomCha = (e) => {
    randomButton(setCha, 30, 0);
  };

  //Setup Inputs
  const strInput = customInputNumber(
    "Strength",
    str,
    onStrChange,
    "Set STR",
    onRandomStr
  );
  const dexInput = customInputNumber(
    "Dexterity",
    dex,
    onDexChange,
    "Set DEX",
    onRandomDex
  );
  const conInput = customInputNumber(
    "Constituion",
    con,
    onConChange,
    "Set CON",
    onRandomCon
  );
  const intInput = customInputNumber(
    "Intelligence",
    int,
    onIntChange,
    "Set INT",
    onRandomInt
  );
  const wisInput = customInputNumber(
    "Wisdom",
    wis,
    onWisChange,
    "Set WIS",
    onRandomWis
  );
  const chaInput = customInputNumber(
    "Charisma",
    cha,
    onChaChange,
    "Set CHA",
    onRandomCha
  );

  //Setup show
  const showAbility = (e) => {
    setIsAbilityActive((current) => !current);
  };

  return (
    <>
      <h1 className={style.subHeader} onClick={showAbility}>
        Ability Scores
      </h1>
      <div
        className={isAbilityActive ? style.genSubsection : style.hidden}
      >
        {strInput}
        {dexInput}
        {conInput}
        {intInput}
        {wisInput}
        {chaInput}
      </div>
    </>
  );
};

export default AbilityModifier;
