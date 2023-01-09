import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import ClearButton from "../components/ClearButton";
import Npcs from "../components/Npcs";
import GenerateButton from "../components/GenerateButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import CustomName from "../components/CustomName";
import EditText from "../components/EditText";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import RandomHooks from "../components/RandomHooks";
import ExportButtons from "../components/ExportButtons";
import { useRef } from "react";
import jsPDF from "jspdf";
import { Html2CanvasOptions } from "jspdf";
import CustomInputDecimal from "../components/CustomInputDecimal";
import Items from "../components/Items";
import { Tooltip } from "primereact/tooltip";
import ToolTip from "../components/ToolTip";
import InfoModal from "../components/InfoModal";
import NameGenerator from "../components/NameGenerator";
import AgeHeightWeight from "../components/AgeHeightWeight";
import SectionRandom from "../components/SectionRandom";

const NpcGen = () => {
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHookActive, setIsHookActive] = useState(false);
  const [isStatsActive, setIsStatsActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [isFeaturesActive, setIsFeaturesActive] = useState(false);
  const [isScoresActive, setIsScoresActive] = useState(false);

  const [fetchError, setFetchError] = useState(false);

  const [name, setName] = useState("");
  const [names, setNames] = useState("");
  const [nameOptions, setNameOptions] = useState("");

  const [race, setRace] = useState("");
  const [races, setRaces] = useState("");
  const [raceOptions, setRaceOptions] = useState("");

  const [sex, setSex] = useState("");
  const [sexs, setSexs] = useState("");
  const [sexOptions, setSexOptions] = useState("");

  const [age, setAge] = useState("");
  const [ages, setAges] = useState("");
  const [ageOptions, setAgeOptions] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");

  const [heightFt, setHeightFt] = useState("");
  const [heightFts, setHeightFts] = useState("");
  const [heightFtOptions, setHeightFtOptions] = useState("");
  const [heightFtMin, setHeightFtMin] = useState("");
  const [heightFtMax, setHeightFtMax] = useState("");

  const [heightIn, setHeightIn] = useState("");
  const [heightIns, setHeightIns] = useState("");
  const [heightInOptions, setHeightInOptions] = useState("");
  const [heightInMin, setHeightInMin] = useState("");
  const [heightInMax, setHeightInMax] = useState("");

  const [weight, setWeight] = useState("");
  const [weights, setWeights] = useState("");
  const [weightOptions, setWeightOptions] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState("");
  const [alignOptions, setAlignOptions] = useState("");

  const [hairColor, setHairColor] = useState("");
  const [hairColors, setHairColors] = useState("");
  const [hairColorOptions, setHairColorOptions] = useState("");

  const [hairType, setHairType] = useState("");
  const [hairTypes, setHairTypes] = useState("");
  const [hairTypeOptions, setHairTypeOptions] = useState("");

  const [hairStyle, setHairStyle] = useState("");
  const [hairStyles, setHairStyles] = useState("");
  const [hairStyleOptions, setHairStyleOptions] = useState("");

  const [beardStyle, setBeardStyle] = useState("");
  const [beardStyles, setBeardStyles] = useState("");
  const [beardStyleOptions, setBeardStyleOptions] = useState("");

  const [eyeColor, setEyeColor] = useState("");
  const [eyeColors, setEyeColors] = useState("");
  const [eyeColorOptions, setEyeColorOptions] = useState("");

  const [skinColor, setSkinColor] = useState("");
  const [skinColors, setSkinColors] = useState("");
  const [skinColorOptions, setSkinColorOptions] = useState("");

  const [bond, setBond] = useState("");
  const [bonds, setBonds] = useState("");
  const [bondOptions, setBondOptions] = useState("");

  const [feature, setFeature] = useState("");
  const [features, setFeatures] = useState("");
  const [featureOptions, setFeatureOptions] = useState("");

  const [prof, setProf] = useState("");
  const [profs, setProfs] = useState("");
  const [profOptions, setProfOptions] = useState("");

  const [talent, setTalent] = useState("");
  const [talents, setTalents] = useState("");
  const [talentOptions, setTalentOptions] = useState("");

  const [mannerism, setMannerism] = useState("");
  const [mannerisms, setMannerisms] = useState("");
  const [mannerismOptions, setMannerismOptions] = useState("");

  const [interaction, setInteraction] = useState("");
  const [interactions, setInteractions] = useState("");
  const [interactionOptions, setInteractionOptions] = useState("");

  const [hp, setHp] = useState("");
  const [hps, setHps] = useState("");
  const [hpOptions, setHpOptions] = useState("");

  const [ac, setAc] = useState("");
  const [acs, setAcs] = useState("");
  const [acOptions, setAcOptions] = useState("");

  const [speed, setSpeed] = useState("");
  const [speeds, setSpeeds] = useState("");
  const [speedOptions, setSpeedOptions] = useState("");

  const [str, setStr] = useState("");
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");

  const [desc, setDesc] = useState("");

  const [questType, setQuestType] = useState("");
  const [questTypes, setQuestTypes] = useState("");
  const [questTypeOptions, setQuestTypeOptions] = useState("");

  const [hook, setHook] = useState("");
  const [hooks, setHooks] = useState("");
  const [hookOptions, setHookOptions] = useState("");

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState("");

  const [weapon, setWeapon] = useState("");
  const [weapons, setWeapons] = useState("");
  const [weaponOptions, setWeaponOptions] = useState("");

  const [weaponDamage, setWeaponDamage] = useState("");
  const [weaponProperties, setWeaponProperties] = useState("");
  const [weaponBonus, setWeaponBonus] = useState("");

  const [npc, setNpc] = useState("");

  const divRef = useRef(null);
  const [isExported, setIsExported] = useState(false);
  const [doc, setDoc] = useState(null);

  const [isInfoActive, setIsInfoActive] = useState(false);

  // useEffect((tableName, setSingular, setPlural, setOptions) => {
  //   const fetchData = async () => {
  //     const { data: dataName, error: errorName } = await supabase
  //       .from(tableName)
  //       .select();
  //     if (errorName) {
  //       setFetchError("Could not fetch the data");
  //       console.log(errorName);
  //       setSingular(null);
  //     }
  //     if (dataName) {
  //       setPlural(dataName);
  //       setFetchError(null);
  //       setOptions(
  //         dataName.map((r) => ({ name: r.name, value: r.value }))
  //       );
  //     }
  //   };
  //   fetchData();
  // }, []);

  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showFeatures = (e) => {
    setIsFeaturesActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showHook = (e) => {
    setIsHookActive((current) => !current);
  };
  const showStats = (e) => {
    setIsStatsActive((current) => !current);
  };
  const showScores = (e) => {
    setIsScoresActive((current) => !current);
  };
  const showItems = (e) => {
    setIsItemActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  //Function to set ability modifier based on ability score
  const setMod = (score) => {
    if (score === "0" || score === "1") {
      return "(-5)";
    } else if (score === "2" || score === "3") {
      return "(-4)";
    } else if (score === "4" || score === "5") {
      return "(-3)";
    } else if (score === "6" || score === "7") {
      return "(-2)";
    } else if (score === "8" || score === "9") {
      return "(-1)";
    } else if (score === "10" || score === "11") {
      return "(+0)";
    } else if (score === "12" || score === "13") {
      return "(+1)";
    } else if (score === "14" || score === "15") {
      return "(+2)";
    } else if (score === "16" || score === "17") {
      return "(+3)";
    } else if (score === "18" || score === "19") {
      return "(+4)";
    } else if (score === "20" || score === "21") {
      return "(+5)";
    } else if (score === "22" || score === "23") {
      return "(+6)";
    } else if (score === "24" || score === "25") {
      return "(+7)";
    } else if (score === "26" || score === "27") {
      return "(+8)";
    } else if (score === "28" || score === "29") {
      return "(+9)";
    } else if (score === "30") {
      return "(+10)";
    }
  };

  //Create npc object to be exported
  useEffect(() => {
    const npc = {
      name: name,
      race: race,
      sex: sex,
      age: age,
      height: (heightFt + " " + heightIn),
      weight: weight,
      align: align,
      prof: prof,
      feature: feature,
      talent: talent,
      mannerism: mannerism,
      interaction: interaction,
      bond: bond,
      questType: questType,
      hook: hook,
      str: str,
      dex: dex,
      con: con,
      int: int,
      wis: wis,
      cha: cha,
    };
    setNpc(npc);
  }, [
    name,
    race,
    sex,
    align,
    prof,
    feature,
    talent,
    mannerism,
    interaction,
    bond,
    questType,
    hook,
    str,
    dex,
    con,
    int,
    wis,
    cha,
  ]);

  //Pull damage field from itemsWeapons table in database
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("itemsWeapons")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setWeapons(null);
      }
      if (dataName) {
        setWeapons(dataName);
        setFetchError(null);
        setWeaponOptions(
          dataName.map((r) => ({
            name: r.name,
            value: r.damage,
            type: r.type,
            properties: r.properties,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Match action name to weapon damage
  useEffect(() => {
    if (action !== "") {
      const matchWeapon = (action) => {
        const weapon = weapons.find((w) => w.name === action);
        if (weapon) {
          return weapon.damage;
        }
      };
      const matchProperties = (action) => {
        const weapon = weapons.find((w) => w.name === action);
        if (weapon) {
          return weapon.properties;
        }
      };
      const matchBonus = (action) => {
        const weapon = weapons.find((w) => w.name === action);
        if (weapon) {
          //If weapon type contains "melee" return str mod else return dex mod
          if (weapon.type.includes("Melee")) {
            return setMod(str);
          }
          if (weapon.type.includes("Ranged")) {
            return setMod(dex);
          }
        }
      };
      setWeaponDamage(matchWeapon(action));
      setWeaponProperties(matchProperties(action));
      setWeaponBonus(matchBonus(action));
    }
  }, [action]);

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate NPCs for your games.</p>
      <p>
        You can use the Generate button in the top left to randomly set all
        fields to random values.
      </p>
      <p>
        You can also use the Generate button in each section to randomly set the
        fields in that section.
      </p>
      <p>You can also manually set the fields to whatever you want.</p>
      <p>
        Once a value has been set you can click on the field in the display to
        edit it.
      </p>
      <p>
        Once you have set all the fields to your liking, you can click the
        Export button to export the NPC to file of your choice.
      </p>
    </div>
  );

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}> 
        <h1 className={style.mainHeader}>NPC Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* Generate Clear Btns */}
            <GenerateButton
              generateItems={[
                race,
                sex,
                align,
                hairColor,
                hairType,
                hairStyle,
                beardStyle,
                eyeColor,
                skinColor,
                prof,
                feature,
                talent,
                mannerism,
                interaction,
                bond,
                questType,
                action,
              ]}
              itemOptions={[
                raceOptions,
                sexOptions,
                alignOptions,
                hairColorOptions,
                hairTypeOptions,
                hairStyleOptions,
                beardStyleOptions,
                eyeColorOptions,
                skinColorOptions,
                profOptions,
                featureOptions,
                talentOptions,
                mannerismOptions,
                interactionOptions,
                bondOptions,
                questTypeOptions,
                actionOptions,
              ]}
              setItem={[
                setRace,
                setSex,
                setAlign,
                setHairColor,
                setHairType,
                setHairStyle,
                setBeardStyle,
                setEyeColor,
                setSkinColor,
                setProf,
                setFeature,
                setTalent,
                setMannerism,
                setInteraction,
                setBond,
                setQuestType,
                setAction,
              ]}
              nameItem={[name]}
              nameItemOptions={[nameOptions]}
              setNameItem={[setName]}
              statsItem={[str, dex, con, int, wis, cha]}
              setStatsItem={[setStr, setDex, setCon, setInt, setWis, setCha]}
              statsMax={30}
              statsMin={0}
              race={race}
              setRace={setRace}
              raceOptions={raceOptions}
              ageItem={age}
              setAgeItem={setAge}
              ageMax={ageMax}
              setAgeMax={setAgeMax}
              ageMin={ageMin}
              setAgeMin={setAgeMin}
              heightFtItem={heightFt}
              setHeightFtItem={setHeightFt}
              heightFtMax={heightFtMax}
              setHeightFtMax={setHeightFtMax}
              heightFtMin={heightFtMin}
              setHeightFtMin={setHeightFtMin}
              heightInItem={heightIn}
              setHeightInItem={setHeightIn}
              weightItem={weight}
              setWeightItem={setWeight}
              weightMax={weightMax}
              setWeightMax={setWeightMax}
              weightMin={weightMin}
              setWeightMin={setWeightMin}
              hpItem={[hp]}
              setHpItem={[setHp]}
              hpMax={150}
              hpMin={5}
              acItem={[ac]}
              setAcItem={[setAc]}
              acMax={30}
              acMin={5}
              speedItem={[speed]}
              setSpeedItem={[setSpeed]}
              speedMax={12}
              speedMin={6}
              selectedItemOptions={[itemOptions]}
              selectedItems={[selectedItem]}
              setSelectedItem={[setSelectedItem]}
            />
            <ClearButton
              setStringState={[
                setAlign,
                setAge,
                setBond,
                setFeature,
                setInt,
                setInteraction,
                setMannerism,
                setName,
                setProf,
                setFeature,
                setRace,
                setSex,
                setTalent,
                setCha,
                setCon,
                setDex,
                setInt,
                setWis,
                setStr,
                setQuestType,
                setHook,
                setHeightFt,
                setHeightIn,
                setWeight,
                setAc,
                setHp,
                setSpeed,
                setHairColor,
                setHairStyle,
                setEyeColor,
                setSkinColor,
                setHairType,
                setBeardStyle,
                setAction,
                setWeapon,
                setWeaponDamage,
                setWeaponProperties,
                setWeaponBonus,
                setHeightFtMax,
                setHeightFtMin,
                setHeightInMax,
                setHeightInMin,
                setWeightMax,
                setWeightMin,
              ]}
              setArrayState={[setSelectedItem]}
            />
            {/* Export Btns */}
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={npc} tableName={"test"}/>
              </div>
            </h1>
            {/* ToolTip */}
            <div className={style.infoCircle}>
              <i className="pi pi-info-circle" onClick={showInfo}>
                <Tooltip
                  target=".pi-info-circle"
                  position="bottom"
                  content="How To Use Guide"
                />
                <InfoModal
                  header={"NPC Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>NPC Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[
                race, 
                sex, 
                align, 
                // age, 
                // heightFt, 
                // heightIn, 
                // weight
              ]}
              valueOptions={[
                raceOptions,
                sexOptions,
                alignOptions,
                // ageOptions,
                // heightFtOptions,
                // heightInOptions,
                // weightOptions,
              ]}
              setValue={[
                setRace,
                setSex,
                setAlign,
                // setAge,
                // setHeightFt,
                // setHeightIn,
                // setWeight,
              ]}
              nameItem={[name]}
              nameItemOptions={[nameOptions]}
              setNameItem={[setName]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={name}
                setName={setName}
                setNames={setNames}
                setNameOptions={setNameOptions}
                nameOptions={nameOptions}
                title={"Name"}
                placeholder={"Set Name"}
              />
              <CustomDropDown
                tableName={"races"}
                setSingular={setRace}
                setPlural={setRaces}
                setOptions={setRaceOptions}
                options={raceOptions}
                h1Title={"Race"}
                placeholder={"Set Race"}
                value={race}
                valueOptions={raceOptions}
              />
              <CustomDropDown
                tableName={"sexes"}
                setSingular={setSex}
                setPlural={setSexs}
                setOptions={setSexOptions}
                options={sexOptions}
                h1Title={"Sex"}
                placeholder={"Set Sex"}
                value={sex}
                valueOptions={sexOptions}
              />
              <CustomInputNumber
                setSingular={setAge}
                h1Title={"Age"}
                value={age}
                placeholder={"Set Age"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setHeightFt}
                h1Title={"Height"}
                value={heightFt}
                placeholder={"Set Ft."}
                maxNumber={12}
                minNumber={1}
              />
              <CustomInputNumber
                setSingular={setHeightIn}
                value={heightIn}
                placeholder={"Set In."}
                maxNumber={12}
                minNumber={1}
              />
              <CustomInputNumber
                setSingular={setWeight}
                h1Title={"Weight"}
                value={weight}
                placeholder={"Set Weight"}
                maxNumber={300}
                minNumber={1}
              />
              <CustomDropDown
                tableName={"aligns"}
                setSingular={setAlign}
                setPlural={setAligns}
                setOptions={setAlignOptions}
                options={alignOptions}
                h1Title={"Alignment"}
                placeholder={"Set Alignment"}
                value={align}
                valueOptions={alignOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showFeatures}>
              Features{" "}
              {isFeaturesActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[
                hairColor,
                hairType,
                eyeColor,
                skinColor,
                beardStyle,
                hairStyle,
              ]}
              valueOptions={[
                hairColorOptions,
                hairTypeOptions,
                eyeColorOptions,
                skinColorOptions,
                beardStyleOptions,
                hairStyleOptions,
              ]}
              setValue={[
                setHairColor,
                setHairType,
                setEyeColor,
                setSkinColor,
                setBeardStyle,
                setHairStyle,
              ]}
            />
          </div>
          <div className={isFeaturesActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"colors"}
                setSingular={setHairColor}
                setPlural={setHairColors}
                setOptions={setHairColorOptions}
                options={hairColorOptions}
                h1Title={"Hair"}
                placeholder={"Set Color"}
                value={hairColor}
                valueOptions={hairColorOptions}
              />
              <CustomDropDown
                tableName={"hairType"}
                setSingular={setHairType}
                setPlural={setHairTypes}
                setOptions={setHairTypeOptions}
                options={hairTypeOptions}
                // h1Title={"Hair Type"}
                placeholder={"Set Type"}
                value={hairType}
                valueOptions={hairTypeOptions}
              />
              <CustomDropDown
                tableName={"hairStyle"}
                setSingular={setHairStyle}
                setPlural={setHairStyles}
                setOptions={setHairStyleOptions}
                options={hairStyleOptions}
                // h1Title={"Hair Style"}
                placeholder={"Set Style"}
                value={hairStyle}
                valueOptions={hairStyleOptions}
              />
              <CustomDropDown
                tableName={"beardStyle"}
                setSingular={setBeardStyle}
                setPlural={setBeardStyles}
                setOptions={setBeardStyleOptions}
                options={beardStyleOptions}
                h1Title={"Beard Style"}
                placeholder={"Set Style"}
                value={beardStyle}
                valueOptions={beardStyleOptions}
              />
              <CustomDropDown
                tableName={"eyeColor"}
                setSingular={setEyeColor}
                setPlural={setEyeColors}
                setOptions={setEyeColorOptions}
                options={eyeColorOptions}
                h1Title={"Eye Color"}
                placeholder={"Set Eye Color"}
                value={eyeColor}
                valueOptions={eyeColorOptions}
              />
              <CustomDropDown
                tableName={"colors"}
                setSingular={setSkinColor}
                setPlural={setSkinColors}
                setOptions={setSkinColorOptions}
                options={skinColorOptions}
                h1Title={"Skin Color"}
                placeholder={"Set Skin Color"}
                value={skinColor}
                valueOptions={skinColorOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showDetails}>
              Details{" "}
              {isDetailActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[prof, feature, talent, mannerism, interaction, bond]}
              valueOptions={[
                profOptions,
                featureOptions,
                talentOptions,
                mannerismOptions,
                interactionOptions,
                bondOptions,
              ]}
              setValue={[
                setProf,
                setFeature,
                setTalent,
                setMannerism,
                setInteraction,
                setBond,
              ]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"professions"}
                setSingular={setProf}
                setPlural={setProfs}
                setOptions={setProfOptions}
                options={profOptions}
                h1Title={"Profession"}
                placeholder={"Set Profession"}
                value={prof}
                valueOptions={profOptions}
              />
              <CustomDropDown
                tableName={"features"}
                setSingular={setFeature}
                setPlural={setFeatures}
                setOptions={setFeatureOptions}
                options={featureOptions}
                h1Title={"Unique Feature"}
                placeholder={"Set Features"}
                value={feature}
                valueOptions={featureOptions}
              />
              <CustomDropDown
                tableName={"talents"}
                setSingular={setTalent}
                setPlural={setTalents}
                setOptions={setTalentOptions}
                options={talentOptions}
                h1Title={"Talent"}
                placeholder={"Set Talent"}
                value={talent}
                valueOptions={talentOptions}
              />
              <CustomDropDown
                tableName={"mannerisms"}
                setSingular={setMannerism}
                setPlural={setMannerisms}
                setOptions={setMannerismOptions}
                options={mannerismOptions}
                h1Title={"Mannerism"}
                placeholder={"Set Mannerism"}
                value={mannerism}
                valueOptions={mannerismOptions}
              />
              <CustomDropDown
                tableName={"interactions"}
                setSingular={setInteraction}
                setPlural={setInteractions}
                setOptions={setInteractionOptions}
                options={interactionOptions}
                h1Title={"Interaction"}
                placeholder={"Set Interaction"}
                value={interaction}
                valueOptions={interactionOptions}
              />
              <CustomDropDown
                tableName={"bonds"}
                setSingular={setBond}
                setPlural={setBonds}
                setOptions={setBondOptions}
                options={bondOptions}
                h1Title={"Bond"}
                placeholder={"Set Bond"}
                value={bond}
                valueOptions={bondOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showHook}>
              Hook{" "}
              {isHookActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[questType]}
              valueOptions={[questTypeOptions]}
              setValue={[setQuestType]}
            />
          </div>
          <div className={isHookActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"questTypes"}
                setSingular={setQuestType}
                setPlural={setQuestTypes}
                setOptions={setQuestTypeOptions}
                options={questTypeOptions}
                h1Title={"Quest Type"}
                placeholder={"Set Quest Type"}
                value={questType}
                valueOptions={questTypeOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showStats}>
              Stats{" "}
              {isStatsActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              hpItem={[hp]}
              setHpItem={[setHp]}
              hpMax={150}
              hpMin={5}
              acItem={[ac]}
              setAcItem={[setAc]}
              acMax={30}
              acMin={5}
              speedItem={[speed]}
              setSpeedItem={[setSpeed]}
              speedMax={12}
              speedMin={6}
            />
          </div>
          <div className={isStatsActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setHp}
                h1Title={"Hit Points"}
                value={hp}
                placeholder={"Set HP"}
                maxNumber={300}
              />
              <CustomInputNumber
                setSingular={setAc}
                h1Title={"Armor Class"}
                value={ac}
                placeholder={"Set AC"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setSpeed}
                h1Title={"Speed"}
                value={speed}
                placeholder={"Set Speed"}
                maxNumber={300}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showScores}>
              Ability Scores{" "}
              {isScoresActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              statValue={[str, dex, con, int, wis, cha]}
              statMax={30}
              statMin={1}
              setStatValue={[setStr, setDex, setCon, setInt, setWis, setCha]}
            />
          </div>
          <div className={isScoresActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setStr}
                h1Title={"Strength"}
                value={str}
                placeholder={"Set STR"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setDex}
                h1Title={"Dexterity"}
                value={dex}
                placeholder={"Set DEX"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setCon}
                h1Title={"Constitution"}
                value={con}
                placeholder={"Set CON"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setInt}
                h1Title={"Intelligence"}
                value={int}
                placeholder={"Set INT"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setWis}
                h1Title={"Wisdom"}
                value={wis}
                placeholder={"Set WIS"}
                maxNumber={30}
              />
              <CustomInputNumber
                setSingular={setCha}
                h1Title={"Charisma"}
                value={cha}
                placeholder={"Set CHA"}
                maxNumber={30}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showItems}>
              Items{" "}
              {isItemActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[action]}
              valueOptions={[actionOptions]}
              setValue={[setAction]}
              selectedValue={[selectedItem]} 
              selectedValueOptions={[itemOptions]}
              setSelectedValue={[setSelectedItem]}
              selectedValueList={[itemList]}
              setSelectedValueList={[setItemList]}
            />
          </div>
          <div className={isItemActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsWeapons"}
                setSingular={setAction}
                setPlural={setActions}
                setOptions={setActionOptions}
                options={actionOptions}
                h1Title={"Weapon Aciton"}
                placeholder={"Set Weapon"}
                value={action}
                valueOptions={actionOptions}
              />
              <Items
                h1Title={"Inventory"}
                dialogHeader={"Items"}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                itemList={itemList}
                setItemList={setItemList}
                valueOptions={itemOptions}
                setItemOptions={setItemOptions}
                options={itemOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
          <NameDisplay value={name} setNewValue={setName} />
          <NameGenerator />
          <h2>
            <SingleDisplayText value={race} setNewValue={setRace} />{" "}
            <SingleDisplayText value={sex} setNewValue={setSex} />
            {race === "" && sex === "" ? (
              ""
            ) : (
              <span className={style.minorText2}>{", "}</span>
            )}
            <SingleDisplayText value={align} setNewValue={setAlign} />
            <div>
              <SingleDisplayText value={age} setNewValue={setAge} />
              {age === "" ? (
                ""
              ) : (
                <span className={style.minorText2}>{" years old, "}</span>
              )}
              <SingleDisplayText value={heightFt} setNewValue={setHeightFt} />
              {heightFt === "" ? (
                ""
              ) : (
                <span className={style.minorText2}>{"ft. "}</span>
              )}
              <SingleDisplayText value={heightIn} setNewValue={setHeightIn} />
              {heightIn === "" ? (
                ""
              ) : (
                <span className={style.minorText2}>{"in. "}</span>
              )}
              <SingleDisplayText value={weight} setNewValue={setWeight} />
              {weight === "" ? (
                ""
              ) : (
                <span className={style.minorText2}>{" lbs."}</span>
              )}
            </div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Hair{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={hairColor} setNewValue={setHairColor} />
              {hairColor === "" ? "" : ", "}
              <SingleDisplayText value={hairType} setNewValue={setHairType} />
              {hairType === "" ? "" : ", "}
              <SingleDisplayText value={hairStyle} setNewValue={setHairStyle} />
            </span>
          </h2>
          <h2>
            Beard{" "}
            <span className={style.minorText2}>
              {sex === "Female" ? (
                "None"
              ) : (
                <SingleDisplayText
                  value={beardStyle}
                  setNewValue={setBeardStyle}
                />
              )}
            </span>
          </h2>
          <h2>
            Eyes{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={eyeColor} setNewValue={setEyeColor} />
            </span>
          </h2>
          <h2>
            Skin{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={skinColor} setNewValue={setSkinColor} />
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Profession{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={prof} setNewValue={setProf} />
            </span>
          </h2>
          <h2>
            Unique Feature{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={feature} setNewValue={setFeature} />
            </span>
          </h2>
          <h2>
            Talent{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={talent} setNewValue={setTalent} />
            </span>
          </h2>
          <h2>
            Mannerism{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={mannerism} setNewValue={setMannerism} />
            </span>
          </h2>
          <h2>
            Interaction{" "}
            <span className={style.minorText2}>
              <SingleDisplayText
                value={interaction}
                setNewValue={setInteraction}
              />
            </span>
          </h2>
          <h2>
            Bond{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={bond} setNewValue={setBond} />
            </span>
          </h2>
          <h2>
            Hook{" "}
            <span className={style.minorText2}>
              <RandomHooks type={questType} value={hook} setValue={setHook} />
              {/* <SingleDisplayText value={hook} setNewValue={setHook} /> */}
            </span>
          </h2>
          <h1>Stats</h1>
          <hr className={style.subLineBreak} />
          <h2>
            HP{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={hp} setNewValue={setHp} />
            </span>
          </h2>
          <h2>
            AC{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={ac} setNewValue={setAc} />
            </span>
          </h2>
          <h2>
            Speed{" "}
            <span className={style.minorText2}>
              <SingleDisplayText value={speed} setNewValue={setSpeed} />
              {speed === "" ? "" : " ft."}
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h3 className={style.abilityScores}>
            <div>
              <h3>STR</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={str}
                    setNewValue={setStr}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(str)}
                </span>
              </div>
            </div>
            <div>
              <h3>DEX</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={dex}
                    setNewValue={setDex}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(dex)}
                </span>
              </div>
            </div>
            <div>
              <h3>CON</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={con}
                    setNewValue={setCon}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(con)}
                </span>
              </div>
            </div>
          </h3>
          <h3 className={style.abilityScores}>
            <div>
              <h3>INT</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={int}
                    setNewValue={setInt}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(int)}
                </span>
              </div>
            </div>
            <div>
              <h3>WIS</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={wis}
                    setNewValue={setWis}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(wis)}
                </span>
              </div>
            </div>
            <div>
              <h3>CHA</h3>
              <div>
                <span className={style.minorText2}>
                  <SingleDisplayNumber
                    value={cha}
                    setNewValue={setCha}
                    min={0}
                    max={30}
                  />{" "}
                  {setMod(cha)}
                </span>
              </div>
            </div>
          </h3>
          <hr className={style.lineBreak} />
          <h2>Action </h2>
          <h2 className={style.abilityScores}>
            <div>
              <span className={style.minorText2}>
                <SingleDisplayText value={action} setNewValue={setAction} />{" "}
                {weaponBonus}
                {weaponBonus === "" ? "" : " to hit"}
              </span>
            </div>
            <div>
              <span className={style.minorText2}>
                <SingleDisplayText
                  value={weaponDamage}
                  setNewValue={setWeaponDamage}
                />{" "}
              </span>
            </div>
            <div>
              <span className={style.minorText2}>
                <SingleDisplayText
                  value={weaponProperties}
                  setNewValue={setWeaponProperties}
                />{" "}
              </span>
            </div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Inventory{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedItem} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default NpcGen;
