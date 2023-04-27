import style from "../stylesheets/PageStyle.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomDataTable from "../components/CustomDataTable";
import CustomDropDown from "../components/CustomDropDown";
import MultipleDisplay from "../components/MultipleDisplay";
import InfoModal from "../components/InfoModal";
import { Tooltip } from "primereact/tooltip";
import ExportButtons from "../components/ExportButtons";
import SectionRandom from "../components/SectionRandom";
import { SessionContext } from "../config/SessionContext";
import CustomName from "../components/CustomName";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomModifier from "../components/CustomModifier";
import CustomDataTableMod from "../components/CustomDataTableMod";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import MultipleDisplayMod from "../components/MultipleDisplayMod";
import MultipleDisplayChunks from "../components/MultipleDisplayChunks";
import MultipleDisplayDesc from "../components/MultipleDisplayDesc";

const VillainGen = () => {
  const session = useContext(SessionContext);
  sessionStorage.setItem("lastUrl", window.location.href);
  const lastUrl = localStorage.getItem("lastUrl");
if (lastUrl) {
  window.location.href = lastUrl;
}

  const [villainName, setVillainName] = useState("");
  const [, setVillainNames] = useState("");
  const [villainNameOptions, setVillainNameOptions] = useState("");

  const [race, setRace] = useState("");
  const [, setRaces] = useState("");
  const [raceOptions, setRaceOptions] = useState("");

  const [sex, setSex] = useState("");
  const [, setSexs] = useState("");
  const [sexOptions, setSexOptions] = useState("");

  const [age, setAge] = useState("");
  const [ageMin, setAgeMin] = useState("");
  const [ageMax, setAgeMax] = useState("");

  const [heightFt, setHeightFt] = useState("");
  const [heightFtMin, setHeightFtMin] = useState("");
  const [heightFtMax, setHeightFtMax] = useState("");

  const [heightIn, setHeightIn] = useState("");
  const [, setHeightInMin] = useState("");
  const [, setHeightInMax] = useState("");

  const [weight, setWeight] = useState("");
  const [weightMin, setWeightMin] = useState("");
  const [weightMax, setWeightMax] = useState("");

  const [hairColor, setHairColor] = useState("");
  const [, setHairColors] = useState("");
  const [hairColorOptions, setHairColorOptions] = useState("");

  const [hairType, setHairType] = useState("");
  const [, setHairTypes] = useState("");
  const [hairTypeOptions, setHairTypeOptions] = useState("");

  const [hairStyle, setHairStyle] = useState("");
  const [, setHairStyles] = useState("");
  const [hairStyleOptions, setHairStyleOptions] = useState("");

  const [beardStyle, setBeardStyle] = useState("");
  const [, setBeardStyles] = useState("");
  const [beardStyleOptions, setBeardStyleOptions] = useState("");

  const [eyeColor, setEyeColor] = useState("");
  const [, setEyeColors] = useState("");
  const [eyeColorOptions, setEyeColorOptions] = useState("");

  const [skinColor, setSkinColor] = useState("");
  const [, setSkinColors] = useState("");
  const [skinColorOptions, setSkinColorOptions] = useState("");

  const [, setMotive] = useState("");
  const [, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [motiveList, setMotiveList] = useState([]);
  const [selectedMotive, setSelectedMotive] = useState([]);

  const [goal, setGoal] = useState("");
  const [, setGoals] = useState("");
  const [goalOptions, setGoalOptions] = useState("");
  const [goalList, setGoalList] = useState([]);
  const [selectedGoal, setSelectedGoal] = useState([]);

  const [, setAffiliation] = useState("");
  const [, setAffiliations] = useState("");
  const [affiliationOptions, setAffiliationOptions] = useState("");
  const [affiliationList, setAffiliationList] = useState([]);
  const [selectedAffiliation, setSelectedAffiliation] = useState([]);

  const [, setWeakness] = useState("");
  const [, setWeaknesses] = useState("");
  const [weaknessOptions, setWeaknessOptions] = useState("");
  const [weaknessList, setWeaknessList] = useState([]);
  const [selectedWeakness, setSelectedWeakness] = useState([]);

  const [, setPowerSource] = useState("");
  const [, setPowerSources] = useState("");
  const [powerSourceOptions, setPowerSourceOptions] = useState("");
  const [powerSourceList, setPowerSourceList] = useState([]);
  const [selectedPowerSource, setSelectedPowerSource] = useState([]);

  const [, setMinion] = useState("");
  const [minions, setMinions] = useState("");
  const [minionOptions, setMinionOptions] = useState("");
  const [minionList, setMinionList] = useState([]);
  const [selectedMinion, setSelectedMinion] = useState([]);

  const [stronghold, setStronghold] = useState("");
  const [, setStrongholds] = useState("");
  const [strongholdOptions, setStrongholdOptions] = useState("");

  const [ac, setAc] = useState("");

  const [armorType, setArmorType] = useState("");
  const [, setArmorTypes] = useState();
  const [armorTypeOptions, setArmorTypeOptions] = useState();

  const [hp, setHp] = useState("");

  const [baseSpeed, setBaseSpeed] = useState("");
  const [burrowSpeed, setBurrowSpeed] = useState("");
  const [climbSpeed, setClimbSpeed] = useState("");
  const [flySpeed, setFlySpeed] = useState("");
  const [swimSpeed, setSwimSpeed] = useState("");
  const [hoverSpeed, setHoverSpeed] = useState("");

  const [str, setStr] = useState("");
  const [dex, setDex] = useState("");
  const [con, setCon] = useState("");
  const [int, setInt] = useState("");
  const [wis, setWis] = useState("");
  const [cha, setCha] = useState("");

  const [, setSave] = useState("");
  const [, setSaves] = useState("");
  const [saveOptions, setSaveOptions] = useState();
  const [saveList, setSaveList] = useState([]);
  const [selectedSave, setSelectedSave] = useState([]);
  const [selectedSaveList,] = useState([]);
  const [strSave, setStrSave] = useState("");
  const [dexSave, setDexSave] = useState("");
  const [conSave, setConSave] = useState("");
  const [intSave, setIntSave] = useState("");
  const [wisSave, setWisSave] = useState("");
  const [chaSave, setChaSave] = useState("");
  const [selectedSaveModifiers, setSelectedSaveModifiers] = useState([]);
  const [, setSaveModMap] = useState([]);

  const [, setSkill] = useState("");
  const [, setSkills] = useState("");
  const [skillOptions, setSkillOptions] = useState();
  const [skillList, setSkillList] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [abSkill, setAbSkill] = useState("");
  const [ahSkill, setAhSkill] = useState("");
  const [arSkill, setArSkill] = useState("");
  const [athSkill, setAthSkill] = useState("");
  const [deSkill, setDeSkill] = useState("");
  const [hiSkill, setHiSkill] = useState("");
  const [inSkill, setInSkill] = useState("");
  const [intimiSkill, setIntimiSkill] = useState("");
  const [invsSkill, setInvsSkill] = useState("");
  const [medSkill, setMedSkill] = useState("");
  const [natSkill, setNatSkill] = useState("");
  const [pecSkill, setPecSkill] = useState("");
  const [perSkill, setPerSkill] = useState("");
  const [pfSkill, setPfSkill] = useState("");
  const [relSkill, setRelSkill] = useState("");
  const [slSkill, setSlSkill] = useState("");
  const [stSkill, setStSkill] = useState("");
  const [surSkill, setSurSkill] = useState("");
  const [, setSkillModMap] = useState([]);
  const [selectedSkillModifiers, setSelectedSkillModifiers] = useState([]);

  const [, setSense] = useState("");
  const [, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();
  const [senseList, setSenseList] = useState([]);
  const [selectedSense, setSelectedSense] = useState([]);
  const [blindsightSense, setBlindsightSense] = useState("");
  const [darkvisionSense, setDarkvisionSense] = useState("");
  const [tremorsenseSense, setTremorsenseSense] = useState("");
  const [truesightSense, setTruesightSense] = useState("");
  const [, setSenseModMap] = useState([]);
  const [selectedSenseModifiers, setSelectedSenseModifiers] = useState([]);

  const [, setVuln] = useState("");
  const [, setVulns] = useState("");
  const [vulnOptions, setVulnOptions] = useState();
  const [vulnList, setVulnList] = useState([]);
  const [selectedVuln, setSelectedVuln] = useState([]);

  const [, setImmune] = useState("");
  const [, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();
  const [immuneList, setImmuneList] = useState([]);
  const [selectedImmune, setSelectedImmune] = useState([]);

  const [, setResist] = useState("");
  const [, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();
  const [resistList, setResistList] = useState([]);
  const [selectedResist, setSelectedResist] = useState([]);

  const [, setCondition] = useState("");
  const [, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();
  const [conditionList, setConditionList] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);

  const [, setLang] = useState("");
  const [, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();
  const [langList, setLangList] = useState([]);
  const [selectedLang, setSelectedLang] = useState([]);

  const [, setSpecial] = useState("");
  const [, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();
  const [specialList, setSpecialList] = useState([]);
  const [selectedSpecial, setSelectedSpecial] = useState([]);

  const [action, setAction] = useState("");
  const [, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();
  const [actionList, setActionList] = useState([]);
  const [selectedAction, setSelectedAction] = useState([]);

  const [, setLegend] = useState("");
  const [, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();
  const [legendList, setLegendList] = useState([]);
  const [selectedLegend, setSelectedLegend] = useState([]);

  const [, setLair] = useState("");
  const [, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();
  const [lairList, setLairList] = useState([]);
  const [selectedLair, setSelectedLair] = useState([]);

  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isStatActive, setIsStatActive] = useState(false);
  const [isDTActive, setIsDTActive] = useState(false);
  const [isAAActive, setIsAAActive] = useState(false);
  const [isMovementActive, setIsMovementActive] = useState(false);
  const [isSSDActive, setIsSSDActive] = useState(false);

  const [villain, setVillain] = useState({});

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };
  const showFeatures = (e) => {
    setIsFeatureActive((current) => !current);
  };
  const showStats = (e) => {
    setIsStatActive((current) => !current);
  };
  const showDT = (e) => {
    setIsDTActive((current) => !current);
  };
  const showAA = (e) => {
    setIsAAActive((current) => !current);
  };
  const showMovement = (e) => {
    setIsMovementActive((current) => !current);
  };
  const showSSD = (e) => {
    setIsSSDActive((current) => !current);
  };

  //Set Mods
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
  //Ability score modifiers
  useEffect(() => {
    const saveModMap = {
      Strength: strSave,
      Dexterity: dexSave,
      Constitution: conSave,
      Intelligence: intSave,
      Wisdom: wisSave,
      Charisma: chaSave,
    };
    setSaveModMap(saveModMap);
    setSelectedSaveModifiers(
      selectedSave.map((save) => {
        const modifier = saveModMap[save.name];
        return { name: save.name, modifier };
      })
    );
  }, [selectedSave, strSave, dexSave, conSave, intSave, wisSave, chaSave]);

  //Skill modifiers
  useEffect(() => {
    const skillModMap = {
      Acrobatics: abSkill,
      "Animal Handling": ahSkill,
      Arcana: arSkill,
      Athletics: athSkill,
      Deception: deSkill,
      History: hiSkill,
      Insight: inSkill,
      Intimidation: intimiSkill,
      Investigation: invsSkill,
      Medicine: medSkill,
      Nature: natSkill,
      Perception: pecSkill,
      Performance: pfSkill,
      Persuasion: perSkill,
      Religion: relSkill,
      "Sleight of Hand": slSkill,
      Stealth: stSkill,
      Survival: surSkill,
    };
    setSkillModMap(skillModMap);
    setSelectedSkillModifiers(
      selectedSkill.map((skill) => {
        const modifier = skillModMap[skill.name];
        return { name: skill.name, modifier };
      })
    );
  }, [selectedSkill, abSkill, ahSkill, arSkill, athSkill, deSkill, hiSkill, inSkill, intimiSkill, invsSkill, medSkill, natSkill, pecSkill, pfSkill, perSkill, relSkill, slSkill, stSkill, surSkill]);

  //Sense modifiers
  useEffect(() => {
    const senseModMap = {
      Blindsight: blindsightSense,
      Darkvision: darkvisionSense,
      Tremorsense: tremorsenseSense,
      Truesight: truesightSense,
    };
    setSenseModMap(senseModMap);
    setSelectedSenseModifiers(
      selectedSense.map((sense) => {
        const modifier = senseModMap[sense.name];
        return { name: sense.name, modifier };
      })
    );
  }, [selectedSense, blindsightSense, darkvisionSense, tremorsenseSense, truesightSense]);

  //set Villain
  const divRef = useRef();
  useEffect(() => {
    const saveNames = selectedSaveModifiers.map(
      (item) => `${item.name}  +${item.modifier}`
    );
    const saveString = saveNames.join(", ");
    const senseNames = selectedSenseModifiers.map(
      (item) => `${item.name}  +${item.modifier}`
    );
    const senseString = senseNames.join(", ");
    const skillNames = selectedSkillModifiers.map(
      (item) => `${item.name}  +${item.modifier}`
    );
    const skillString = skillNames.join(", ");
    const languageNames = selectedLang.map((item) => item.name);
    const languageString = languageNames.join(", ");
    const vulnNames = selectedVuln.map((item) => item.name);
    const vulnString = vulnNames.join(", ");
    const resistNames = selectedResist.map((item) => item.name);
    const resistString = resistNames.join(", ");
    const immuneNames = selectedImmune.map((item) => item.name);
    const immuneString = immuneNames.join(", ");
    const conditionNames = selectedCondition.map((item) => item.name);
    const conditionString = conditionNames.join(", ");
    const specialNames = selectedSpecial.map(
      (item) => `${item.name}: ${item.desc}\n\n`
    );
    const specialString = specialNames.join("");

    const actionNames = selectedAction.map(
      (item) => `${item.name}: ${item.desc}\n\n`
    );
    const actionString = actionNames.join("");

    const legendNames = selectedLegend.map(
      (item) => `${item.name}: ${item.desc}\n\n`
    );
    const legendString = legendNames.join("");
    const lairNames = selectedLair.map((item) => item.name);
    const lairString = lairNames.join(", ");
    const motiveString = selectedMotive.map((item) => item.name);
    const motiveNames = motiveString.join(", ");
    const goalString = selectedGoal.map((item) => item.name);
    const goalNames = goalString.join(", ");
    const affiliationString = selectedAffiliation.map((item) => item.name);
    const affiliationNames = affiliationString.join(", ");
    const weaknessString = selectedWeakness.map((item) => item.name);
    const weaknessNames = weaknessString.join(", ");
    const powerSourceString = selectedPowerSource.map((item) => item.name);
    const powerSourceNames = powerSourceString.join(", ");
    const minionString = selectedMinion.map((item) => item.name);
    const minionNames = minionString.join(", ");

    const monster = {
      name: villainName,
      race: race,
      sex: sex,
      age: age,
      height: heightFt + " " + heightIn,
      weight: weight,
      hairColor: hairColor,
      hairType: hairType,
      hairStyle: hairStyle,
      beardStyle: beardStyle,
      eyes: eyeColor,
      skin: skinColor,
      motive: motiveNames,
      goal: goalNames,
      affiliation: affiliationNames,
      weakness: weaknessNames,
      powerSource: powerSourceNames,
      minion: minionNames,
      stronghold: stronghold,
      ac: ac,
      armorType: armorType,
      hp: hp,
      speed: baseSpeed,
      fly: flySpeed,
      swim: swimSpeed,
      climb: climbSpeed,
      burrow: burrowSpeed,
      hover: hoverSpeed,
      str: str + " " + setMod(str),
      dex: dex + " " + setMod(dex),
      con: con + " " + setMod(con),
      int: int + " " + setMod(int),
      wis: wis + " " + setMod(wis),
      cha: cha + " " + setMod(cha),
      save: saveString,
      skill: skillString,
      sense: senseString,
      language: languageString,
      vuln: vulnString,
      resist: resistString,
      immune: immuneString,
      condition: conditionString,
      ability: specialString,
      action: actionString,
      legendary: legendString,
      lair: lairString,
      email: session?.user?.email,
      folder: "Villain"
    };
    setVillain(monster);
  }, [
    villainName,
    ac,
    armorType,
    hp,
    baseSpeed,
    flySpeed,
    swimSpeed,
    climbSpeed,
    burrowSpeed,
    hoverSpeed,
    str,
    dex,
    con,
    int,
    wis,
    cha,
    selectedSaveModifiers,
    selectedSenseModifiers,
    selectedLang,
    selectedVuln,
    selectedResist,
    selectedImmune,
    selectedCondition,
    selectedSpecial,
    selectedAction,
    selectedLegend,
    selectedLair,
    selectedSkillModifiers,
    session,
    age,
    beardStyle,
    eyeColor,
    goal,
    hairColor,
    hairStyle,
    hairType,
    heightFt,
    heightIn,
    minions,
    race,
    sex,
    skinColor,
    stronghold,
    weight,
    selectedWeakness,
    selectedMotive,
    selectedAffiliation,
    selectedPowerSource,
    selectedMinion,
    selectedGoal,
    
  ]);

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Villians for your games.</p>
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
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Villian Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* <GenerateButton /> */}
            <GenerateButton
           
              generateItems={[
                race,
                stronghold,
                armorType,
                sex,
                hairColor,
                hairType,
                hairStyle,
                beardStyle,
                eyeColor,
                skinColor,
                action,
              ]}
              itemOptions={[
                raceOptions,
                strongholdOptions,
                armorTypeOptions,
                sexOptions,
                hairColorOptions,
                hairTypeOptions,
                hairStyleOptions,
                beardStyleOptions,
                eyeColorOptions,
                skinColorOptions,
                actionOptions,
              ]}
              setItem={[
                setRace,
                setStronghold,
                setArmorType,
                setSex,
                setHairColor,
                setHairType,
                setHairStyle,
                setBeardStyle,
                setEyeColor,
                setSkinColor,
                setAction,
              ]}
              selectedItemOptions={[
                motiveOptions,
                goalOptions,
                affiliationOptions,
                weaknessOptions,
                powerSourceOptions,
                minionOptions,
                saveOptions,
                skillOptions,
                senseOptions,
                langOptions,
                vulnOptions,
                immuneOptions,
                resistOptions,
                conditionOptions,
                specialOptions,
                actionOptions,
                legendOptions,
                lairOptions,
              ]}
              selectedItems={[
                selectedMotive,
                selectedGoal,
                selectedAffiliation,
                selectedWeakness,
                selectedPowerSource,
                selectedMinion,
                selectedSave,
                selectedSkill,
                selectedSense,
                selectedLang,
                selectedVuln,
                selectedImmune,
                selectedResist,
                selectedCondition,
                selectedSpecial,
                selectedAction,
                selectedLegend,
                selectedLair,
              ]}
              setSelectedItem={[
                setSelectedMotive,
                setSelectedGoal,
                setSelectedAffiliation,
                setSelectedWeakness,
                setSelectedPowerSource,
                setSelectedMinion,
                setSelectedSave,
                setSelectedSkill,
                setSelectedSense,
                setSelectedLang,
                setSelectedVuln,
                setSelectedImmune,
                setSelectedResist,
                setSelectedCondition,
                setSelectedSpecial,
                setSelectedAction,
                setSelectedLegend,
                setSelectedLair,
              ]}
              numberItem={[
                ac,
                hp,
                str,
                dex,
                con,
                int,
                wis,
                cha,
                strSave,
                dexSave,
                conSave,
                intSave,
                wisSave,
                chaSave,
                abSkill,
                ahSkill,
                arSkill,
                athSkill,
                deSkill,
                hiSkill,
                inSkill,
                intimiSkill,
                invsSkill,
                medSkill,
                natSkill,
                pecSkill,
                pfSkill,
                perSkill,
                relSkill,
                slSkill,
                stSkill,
                surSkill,
              ]}
              setNumberItem={[
                setAc,
                setHp,
                setStr,
                setDex,
                setCon,
                setInt,
                setWis,
                setCha,
                setStrSave,
                setDexSave,
                setConSave,
                setIntSave,
                setWisSave,
                setChaSave,
                setAbSkill,
                setAhSkill,
                setArSkill,
                setAthSkill,
                setDeSkill,
                setHiSkill,
                setInSkill,
                setIntimiSkill,
                setInvsSkill,
                setMedSkill,
                setNatSkill,
                setPecSkill,
                setPfSkill,
                setPerSkill,
                setRelSkill,
                setSlSkill,
                setStSkill,
                setSurSkill,
              ]}
              maxNumber={[
                30, 300, 30, 30, 30, 30, 30, 30, 20, 20, 20, 20, 20, 20, 10, 10,
                10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
              ]}
              minNumber={[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              ]}
              senseItem={[
                blindsightSense,
                darkvisionSense,
                tremorsenseSense,
                truesightSense,
              ]}
              setSenseItem={[
                setBlindsightSense,
                setDarkvisionSense,
                setTremorsenseSense,
                setTruesightSense,
              ]}
              maxSense={[120, 120, 120, 120]}
              minSense={[5, 5, 5, 5]}
              speedItem={[
                baseSpeed,
                flySpeed,
                swimSpeed,
                climbSpeed,
                burrowSpeed,
                hoverSpeed,
              ]}
              setSpeedItem={[
                setBaseSpeed,
                setFlySpeed,
                setSwimSpeed,
                setClimbSpeed,
                setBurrowSpeed,
                setHoverSpeed,
              ]}
              speedMax={[120]}
              speedMin={[0]}
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
              nameItem={[villainName]}
              nameItemOptions={[villainNameOptions]}
              setNameItem={[setVillainName]}
            />
            <ClearButton
              setStringState={[
                setVillainName,
                setStronghold,
                setAge,
                setInt,
                setRace,
                setSex,
                setCha,
                setCon,
                setDex,
                setInt,
                setWis,
                setStr,
                setHeightFt,
                setHeightIn,
                setWeight,
                setAc,
                setHp,
                setHairColor,
                setHairStyle,
                setEyeColor,
                setSkinColor,
                setHairType,
                setBeardStyle,
                setHeightFtMax,
                setHeightFtMin,
                setHeightInMax,
                setHeightInMin,
                setWeightMax,
                setWeightMin,
                setArmorType,
                setBaseSpeed,
                setBurrowSpeed,
                setClimbSpeed,
                setFlySpeed,
                setSwimSpeed,
                setHoverSpeed,
                setSkill,
                setVuln,
                setImmune,
                setResist,
                setCondition,
                setSense,
                setLang,
                setSpecial,
                setAction,
                setLegend,
                setLair,
                setAbSkill,
                setAhSkill,
                setArSkill,
                setAthSkill,
                setDeSkill,
                setHiSkill,
                setInSkill,
                setIntimiSkill,
                setInvsSkill,
                setMedSkill,
                setNatSkill,
                setPecSkill,
                setPfSkill,
                setPerSkill,
                setRelSkill,
                setSlSkill,
                setStSkill,
                setSurSkill,
                setBlindsightSense,
                setDarkvisionSense,
                setTremorsenseSense,
                setTruesightSense,
              ]}
              setArrayState={[
                setSelectedMotive,
                setSelectedGoal,
                setSelectedAffiliation,
                setSelectedWeakness,
                setSelectedPowerSource,
                setSelectedMinion,
                setSaveList,
                setSkillList,
                setVulnList,
                setImmuneList,
                setResistList,
                setConditionList,
                setSenseList,
                setLangList,
                setSpecialList,
                setActionList,
                setLegendList,
                setLairList,
                setSelectedSaveModifiers,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={villain} tableName={"DBvillain"}/>
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
                  header={"Monster Generator Info"}
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
          <h1>Villain Options</h1>
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
              value={[race, sex]}
              valueOptions={[raceOptions, sexOptions]}
              setValue={[setRace, setSex]}
              nameItem={[villainName]}
              nameItemOptions={[villainNameOptions]}
              setNameItem={[setVillainName]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={villainName}
                setName={setVillainName}
                setNames={setVillainNames}
                setNameOptions={setVillainNameOptions}
                nameOptions={villainNameOptions}
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
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showFeatures}>
              Features{" "}
              {isFeatureActive ? (
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
          <div className={isFeatureActive ? style.subsection : style.hidden}>
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
              value={[stronghold]}
              setValue={[setStronghold]}
              valueOptions={[strongholdOptions]}
              selectedValue={[
                selectedMotive,
                selectedGoal,
                selectedAffiliation,
                selectedWeakness,
                selectedPowerSource,
                selectedMinion,
              ]}
              setSelectedValue={[
                setSelectedMotive,
                setSelectedGoal,
                setSelectedAffiliation,
                setSelectedWeakness,
                setSelectedPowerSource,
                setSelectedMinion,
              ]}
              selectedValueOptions={[
                motiveOptions,
                goalOptions,
                affiliationOptions,
                weaknessOptions,
                powerSourceOptions,
                minionOptions,
              ]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"villainMotive"}
                setSingular={setMotive}
                setPlural={setMotives}
                setOptions={setMotiveOptions}
                h1Title={"Motives"}
                dialogHeader={"Motives"}
                placeholder={"Set Motives"}
                valueOptions={motiveOptions}
                list={motiveList}
                setList={setMotiveList}
                selectedItem={selectedMotive}
                setSelectedItem={setSelectedMotive}
                options={motiveOptions}
              />
              <CustomDataTable
                tableName={"villainGoal"}
                setSingular={setGoal}
                setPlural={setGoals}
                setOptions={setGoalOptions}
                h1Title={"Goals"}
                dialogHeader={"Goals"}
                placeholder={"Set Goals"}
                valueOptions={goalOptions}
                list={goalList}
                setList={setGoalList}
                selectedItem={selectedGoal}
                setSelectedItem={setSelectedGoal}
                options={goalOptions}
              />
              <CustomDataTable
                tableName={"DBorganization"}
                setSingular={setAffiliation}
                setPlural={setAffiliations}
                setOptions={setAffiliationOptions}
                h1Title={"Affiliations"}
                dialogHeader={"Affiliations"}
                placeholder={"Set Affiliations"}
                valueOptions={affiliationOptions}
                list={affiliationList}
                setList={setAffiliationList}
                selectedItem={selectedAffiliation}
                setSelectedItem={setSelectedAffiliation}
                options={affiliationOptions}
              />
              <CustomDataTable
                tableName={"villainWeakness"}
                setSingular={setWeakness}
                setPlural={setWeaknesses}
                setOptions={setWeaknessOptions}
                h1Title={"Weaknesses"}
                dialogHeader={"Weaknesses"}
                placeholder={"Set Weaknesses"}
                valueOptions={weaknessOptions}
                list={weaknessList}
                setList={setWeaknessList}
                selectedItem={selectedWeakness}
                setSelectedItem={setSelectedWeakness}
                options={weaknessOptions}
              />
              <CustomDataTable
                tableName={"orgPowerSource"}
                setSingular={setPowerSource}
                setPlural={setPowerSources}
                setOptions={setPowerSourceOptions}
                h1Title={"Power Sources"}
                dialogHeader={"Power Sources"}
                placeholder={"Set Power Sources"}
                valueOptions={powerSourceOptions}
                list={powerSourceList}
                setList={setPowerSourceList}
                selectedItem={selectedPowerSource}
                setSelectedItem={setSelectedPowerSource}
                options={powerSourceOptions}
              />
              <CustomDataTable
                tableName={"monsters"}
                setSingular={setMinion}
                setPlural={setMinions}
                setOptions={setMinionOptions}
                h1Title={"Minions"}
                dialogHeader={"Minions"}
                placeholder={"Set Minions"}
                valueOptions={minionOptions}
                list={minionList}
                setList={setMinionList}
                selectedItem={selectedMinion}
                setSelectedItem={setSelectedMinion}
                options={minionOptions}
              />
              <CustomDropDown
                tableName={"orgStronghold"}
                setSingular={setStronghold}
                setPlural={setStrongholds}
                setOptions={setStrongholdOptions}
                h1Title={"Stronghold"}
                placeholder={"Set Stronghold"}
                value={stronghold}
                valueOptions={strongholdOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showStats}>
              Stats{" "}
              {isStatActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[armorType]}
              setValue={[setArmorType]}
              valueOptions={[armorTypeOptions]}
              numberItem={[ac, hp]}
              setNumberItem={[setAc, setHp]}
              numberMax={[30, 500]}
              numberMin={[1, 1]}
              statValue={[str, dex, con, int, wis, cha]}
              statMax={30}
              statMin={1}
              setStatValue={[setStr, setDex, setCon, setInt, setWis, setCha]}
            />
          </div>
          <div className={isStatActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setAc}
                value={ac}
                h1Title={"AC"}
                placeholder={"Set AC"}
                maxNumber={30}
                minNumber={1}
              />
              <CustomDropDown
                tableName={"itemsArmor"}
                setSingular={setArmorType}
                setPlural={setArmorTypes}
                setOptions={setArmorTypeOptions}
                h1Title={"Armor Type"}
                placeholder={"Set Armor Type"}
                value={armorType}
                valueOptions={armorTypeOptions}
              />
              <CustomInputNumber
                setSingular={setHp}
                value={hp}
                h1Title={"HP"}
                placeholder={"Set HP"}
                maxNumber={1000}
                minNumber={1}
              />
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
            <h1 className={style.subHeader} onClick={showMovement}>
              Movement{" "}
              {isMovementActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              speedItem={[
                baseSpeed,
                flySpeed,
                swimSpeed,
                climbSpeed,
                burrowSpeed,
                hoverSpeed,
              ]}
              setSpeedItem={[
                setBaseSpeed,
                setFlySpeed,
                setSwimSpeed,
                setClimbSpeed,
                setBurrowSpeed,
                setHoverSpeed,
              ]}
              speedMax={[120]}
              speedMin={[0]}
            />
          </div>
          <div className={isMovementActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                setSingular={setBaseSpeed}
                value={baseSpeed}
                h1Title={"Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setFlySpeed}
                value={flySpeed}
                h1Title={"Fly Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setSwimSpeed}
                value={swimSpeed}
                h1Title={"Swim Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setClimbSpeed}
                value={climbSpeed}
                h1Title={"Climb Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setBurrowSpeed}
                value={burrowSpeed}
                h1Title={"Burrow Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
              <CustomInputNumber
                setSingular={setHoverSpeed}
                value={hoverSpeed}
                h1Title={"Hover Speed"}
                placeholder={"Set Speed"}
                maxNumber={1000}
                minNumber={0}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showSSD}>
              Saves & Skills{" "}
              {isSSDActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[
                selectedSave,
                selectedSkill,
                selectedSense,
                selectedLang,
              ]}
              selectedValueOptions={[
                saveOptions,
                skillOptions,
                senseOptions,
                langOptions,
              ]}
              setSelectedValue={[
                setSelectedSave,
                setSelectedSkill,
                setSelectedSense,
                setSelectedLang,
              ]}
              selectedValueList={[saveList, skillList, senseList, langList]}
              setSelectedValueList={[
                setSaveList,
                setSkillList,
                setSenseList,
                setLangList,
              ]}
              senseItem={[
                blindsightSense,
                darkvisionSense,
                tremorsenseSense,
                truesightSense,
              ]}
              setSenseItem={[
                setBlindsightSense,
                setDarkvisionSense,
                setTremorsenseSense,
                setTruesightSense,
              ]}
              senseMax={[120, 120, 120, 120]}
              senseMin={[5, 5, 5, 5]}
              numberItem={[
                strSave,
                dexSave,
                conSave,
                intSave,
                wisSave,
                chaSave,
                abSkill,
                ahSkill,
                arSkill,
                athSkill,
                deSkill,
                hiSkill,
                inSkill,
                intimiSkill,
                invsSkill,
                medSkill,
                natSkill,
                pecSkill,
                pfSkill,
                perSkill,
                relSkill,
                slSkill,
                stSkill,
                surSkill,
              ]}
              setNumberItem={[
                setStrSave,
                setDexSave,
                setConSave,
                setIntSave,
                setWisSave,
                setChaSave,
                setAbSkill,
                setAhSkill,
                setArSkill,
                setAthSkill,
                setDeSkill,
                setHiSkill,
                setInSkill,
                setIntimiSkill,
                setInvsSkill,
                setMedSkill,
                setNatSkill,
                setPecSkill,
                setPfSkill,
                setPerSkill,
                setRelSkill,
                setSlSkill,
                setStSkill,
                setSurSkill,
              ]}
              numberMax={[
                30, 30, 30, 30, 30, 30, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
                10, 10, 10, 10, 10, 10, 10, 10,
              ]}
              numberMin={[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1,
              ]}
            />
          </div>
          <div className={isSSDActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTableMod
                tableName={"abilities"}
                setSingular={setSave}
                setPlural={setSaves}
                setOptions={setSaveOptions}
                h1Title={"Saves"}
                dialogHeader={"Saves"}
                selectedItem={selectedSave}
                setSelectedItem={setSelectedSave}
                list={saveList}
                setList={setSaveList}
                valueOptions={saveOptions}
                setMod={[
                  setStrSave,
                  setDexSave,
                  setConSave,
                  setIntSave,
                  setWisSave,
                  setChaSave,
                ]}
                mod={[strSave, dexSave, conSave, intSave, wisSave, chaSave]}
                maxNumber={30}
              />
              {selectedSaveList}
              {/*Working on adding there modifiers  */}
              <CustomModifier
                value={selectedSaveModifiers}
                setValue={setSelectedSaveModifiers}
                setMod={[
                  setStrSave,
                  setDexSave,
                  setConSave,
                  setIntSave,
                  setWisSave,
                  setChaSave,
                ]}
                mod={[strSave, dexSave, conSave, intSave, wisSave, chaSave]}
                maxNumber={30}
              />
              <CustomDataTableMod
                tableName={"skills"}
                setSingular={setSkill}
                setPlural={setSkills}
                setOptions={setSkillOptions}
                h1Title={"Skills"}
                dialogHeader={"Skills"}
                selectedItem={selectedSkill}
                setSelectedItem={setSelectedSkill}
                list={skillList}
                setList={setSkillList}
                valueOptions={skillOptions}
                setMod={[
                  setAbSkill,
                  setAhSkill,
                  setArSkill,
                  setAthSkill,
                  setDeSkill,
                  setHiSkill,
                  setInSkill,
                  setIntimiSkill,
                  setInvsSkill,
                  setMedSkill,
                  setNatSkill,
                  setPecSkill,
                  setPfSkill,
                  setPerSkill,
                  setRelSkill,
                  setSlSkill,
                  setStSkill,
                  setSurSkill,
                ]}
                mod={[
                  abSkill,
                  ahSkill,
                  arSkill,
                  athSkill,
                  deSkill,
                  hiSkill,
                  inSkill,
                  intimiSkill,
                  invsSkill,
                  medSkill,
                  natSkill,
                  pecSkill,
                  pfSkill,
                  perSkill,
                  relSkill,
                  slSkill,
                  stSkill,
                  surSkill,
                ]}
                maxNumber={10}
              />
              <CustomModifier
                value={selectedSkillModifiers}
                setValue={setSelectedSkillModifiers}
                setMod={[
                  setAbSkill,
                  setAhSkill,
                  setArSkill,
                  setAthSkill,
                  setDeSkill,
                  setHiSkill,
                  setInSkill,
                  setIntimiSkill,
                  setInvsSkill,
                  setMedSkill,
                  setNatSkill,
                  setPecSkill,
                  setPfSkill,
                  setPerSkill,
                  setRelSkill,
                  setSlSkill,
                  setStSkill,
                  setSurSkill,
                ]}
                mod={[
                  abSkill,
                  ahSkill,
                  arSkill,
                  athSkill,
                  deSkill,
                  hiSkill,
                  inSkill,
                  intimiSkill,
                  invsSkill,
                  medSkill,
                  natSkill,
                  pecSkill,
                  pfSkill,
                  perSkill,
                  relSkill,
                  slSkill,
                  stSkill,
                  surSkill,
                ]}
                maxNumber={10}
              />
              <CustomDataTableMod
                tableName={"senses"}
                setSingular={setSense}
                setPlural={setSenses}
                setOptions={setSenseOptions}
                h1Title={"Senses"}
                dialogHeader={"Senses"}
                selectedItem={selectedSense}
                setSelectedItem={setSelectedSense}
                list={senseList}
                setList={setSenseList}
                valueOptions={senseOptions}
                setSenseMod={[
                  setBlindsightSense,
                  setDarkvisionSense,
                  setTremorsenseSense,
                  setTruesightSense,
                ]}
                senseMod={[
                  blindsightSense,
                  darkvisionSense,
                  tremorsenseSense,
                  truesightSense,
                ]}
                maxNumber={120}
              />
              <CustomModifier
                value={selectedSenseModifiers}
                setValue={setSelectedSenseModifiers}
                setSense={[
                  setBlindsightSense,
                  setDarkvisionSense,
                  setTremorsenseSense,
                  setTruesightSense,
                ]}
                sense={[
                  blindsightSense,
                  darkvisionSense,
                  tremorsenseSense,
                  truesightSense,
                ]}
                maxNumber={120}
              />
              <CustomDataTable
                tableName={"languages"}
                setSingular={setLang}
                setPlural={setLangs}
                setOptions={setLangOptions}
                h1Title={"Languages"}
                dialogHeader={"Languages"}
                selectedItem={selectedLang}
                setSelectedItem={setSelectedLang}
                list={langList}
                setList={setLangList}
                valueOptions={langOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showDT}>
              Damage Types{" "}
              {isDTActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[
                selectedVuln,
                selectedImmune,
                selectedResist,
                selectedCondition,
              ]}
              selectedValueOptions={[
                vulnOptions,
                immuneOptions,
                resistOptions,
                conditionOptions,
              ]}
              setSelectedValue={[
                setSelectedVuln,
                setSelectedImmune,
                setSelectedResist,
                setSelectedCondition,
              ]}
              selectedValueList={[
                vulnList,
                immuneList,
                resistList,
                conditionList,
              ]}
              setSelectedValueList={[
                setVulnList,
                setImmuneList,
                setResistList,
                setConditionList,
              ]}
            />
          </div>
          <div className={isDTActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"damageTypes"}
                setSingular={setVuln}
                setPlural={setVulns}
                setOptions={setVulnOptions}
                h1Title={"Vulnerabilities"}
                dialogHeader={"Vulnerabilities"}
                selectedItem={selectedVuln}
                setSelectedItem={setSelectedVuln}
                list={vulnList}
                setList={setVulnList}
                valueOptions={vulnOptions}
              />
              <CustomDataTable
                tableName={"damageTypes"}
                setSingular={setImmune}
                setPlural={setImmunes}
                setOptions={setImmuneOptions}
                h1Title={"Immunities"}
                dialogHeader={"Immunities"}
                selectedItem={selectedImmune}
                setSelectedItem={setSelectedImmune}
                list={immuneList}
                setList={setImmuneList}
                valueOptions={immuneOptions}
              />
              <CustomDataTable
                tableName={"damageTypes"}
                setSingular={setResist}
                setPlural={setResists}
                setOptions={setResistOptions}
                h1Title={"Resistances"}
                dialogHeader={"Resistances"}
                selectedItem={selectedResist}
                setSelectedItem={setSelectedResist}
                list={resistList}
                setList={setResistList}
                valueOptions={resistOptions}
              />
              <CustomDataTable
                tableName={"conditions"}
                setSingular={setCondition}
                setPlural={setConditions}
                setOptions={setConditionOptions}
                h1Title={"Conditions"}
                dialogHeader={"Conditions"}
                selectedItem={selectedCondition}
                setSelectedItem={setSelectedCondition}
                list={conditionList}
                setList={setConditionList}
                valueOptions={conditionOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showAA}>
              Actions & Abilities{" "}
              {isAAActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[
                selectedSpecial,
                selectedAction,
                // selectedReaction,
                selectedLegend,
                selectedLair,
              ]}
              selectedValueOptions={[
                specialOptions,
                actionOptions,
                // reactionOptions,
                legendOptions,
                lairOptions,
              ]}
              setSelectedValue={[
                setSelectedSpecial,
                setSelectedAction,
                // setSelectedReaction,
                setSelectedLegend,
                setSelectedLair,
              ]}
              selectedValueList={[
                specialList,
                actionList,
                // reactionList,
                legendList,
                lairList,
              ]}
              setSelectedValueList={[
                setSpecialList,
                setActionList,
                // setReactionList,
                setLegendList,
                setLairList,
              ]}
            />
          </div>
          <div className={isAAActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"monstersAbilities"}
                setSingular={setSpecial}
                setPlural={setSpecials}
                setOptions={setSpecialOptions}
                h1Title={"Special Abilities"}
                dialogHeader={"Special Abilities"}
                selectedItem={selectedSpecial}
                setSelectedItem={setSelectedSpecial}
                list={specialList}
                setList={setSpecialList}
                valueOptions={specialOptions}
              />
              <CustomDataTable
                tableName={"monstersActions"}
                setSingular={setAction}
                setPlural={setActions}
                setOptions={setActionOptions}
                h1Title={"Actions"}
                dialogHeader={"Actions"}
                selectedItem={selectedAction}
                setSelectedItem={setSelectedAction}
                list={actionList}
                setList={setActionList}
                valueOptions={actionOptions}
              />
              <CustomDataTable
                tableName={"monstersLegendaryActions"}
                setSingular={setLegend}
                setPlural={setLegends}
                setOptions={setLegendOptions}
                h1Title={"Legendary Actions"}
                dialogHeader={"Legendary Actions"}
                selectedItem={selectedLegend}
                setSelectedItem={setSelectedLegend}
                list={legendList}
                setList={setLegendList}
                valueOptions={legendOptions}
              />
              <CustomDataTable
                tableName={"monstersLairActions"}
                setSingular={setLair}
                setPlural={setLairs}
                setOptions={setLairOptions}
                h1Title={"Lair Actions"}
                dialogHeader={"Lair Actions"}
                selectedItem={selectedLair}
                setSelectedItem={setSelectedLair}
                list={lairList}
                setList={setLairList}
                valueOptions={lairOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
          <NameDisplay value={villainName} setNewValue={setVillainName} />
          <h2>
            <SingleDisplayText value={race} setNewValue={setRace} />{" "}
            <SingleDisplayText value={sex} setNewValue={setSex} />
            {race === "" && sex === "" ? (
              ""
            ) : (
              <span className={style.minorText2}>{", "}</span>
            )}
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
            Motives{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMotive}
                setNewValue={setSelectedMotive}
              />
            </span>
          </h2>
          <h2>
            Goals{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedGoal}
                setNewValue={setSelectedGoal}
              />
            </span>
          </h2>
          <h2>
            Affiliations{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedAffiliation}
                setNewValue={setSelectedAffiliation}
              />
            </span>
          </h2>
          <h2>
            Weaknesses{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedWeakness}
                setNewValue={setSelectedWeakness}
              />
            </span>
          </h2>
          <h2>
            Power Sources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPowerSource}
                setNewValue={setSelectedPowerSource}
              />
            </span>
          </h2>
          <h2>
            Minions{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMinion}
                setNewValue={setSelectedMinion}
              />
            </span>
          </h2>
          <h2>
            Stronghold{" "}
            <span className={style.minorText2}>
              <SingleDisplayText
                value={stronghold}
                setNewValue={setStronghold}
              />
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Armor Class <SingleDisplayNumber value={ac} setNewValue={setAc} />{" "}
            <SingleDisplayText value={armorType} setNewValue={setArmorType} />
          </h2>
          <h2>
            Hit Points <SingleDisplayNumber value={hp} setNewValue={setHp} />
          </h2>
          <h2>
            Speed{" "}
            {baseSpeed !== "" ? (
              <>
                <span className={style.minorText2}>Walk </span>
                <SingleDisplayNumber
                  value={baseSpeed}
                  setNewValue={setBaseSpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
            {flySpeed !== "" ? (
              <>
                <span className={style.minorText2}>Fly </span>
                <SingleDisplayNumber
                  value={flySpeed}
                  setNewValue={setFlySpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
            {swimSpeed !== "" ? (
              <>
                <span className={style.minorText2}>Swim </span>
                <SingleDisplayNumber
                  value={swimSpeed}
                  setNewValue={setSwimSpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
            {climbSpeed !== "" ? (
              <>
                <span className={style.minorText2}>Climb </span>
                <SingleDisplayNumber
                  value={climbSpeed}
                  setNewValue={setClimbSpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
            {burrowSpeed !== "" ? (
              <>
                <span className={style.minorText2}>Burrow </span>
                <SingleDisplayNumber
                  value={burrowSpeed}
                  setNewValue={setBurrowSpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
            {hoverSpeed !== "" ? (
              <>
                <span className={style.minorText2}>Hover </span>
                <SingleDisplayNumber
                  value={hoverSpeed}
                  setNewValue={setHoverSpeed}
                />
                <span className={style.minorText2}> ft. </span>
              </>
            ) : null}
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
          {selectedSave.length === 0 ? null : (
            <>
              <h2>
                Saving Throws{" "}
                <span className={style.minorText2}>
                  <MultipleDisplayMod
                    selectedItem={selectedSaveModifiers}
                    setNewValue={setSelectedSaveModifiers}
                  />
                </span>
              </h2>
            </>
          )}

          {selectedSkill.length === 0 ? null : (
            <>
              <h2>
                Skills{" "}
                <span className={style.minorText2}>
                  <MultipleDisplayMod
                    selectedItem={selectedSkillModifiers}
                    setNewValue={setSelectedSkillModifiers}
                  />
                </span>
              </h2>
            </>
          )}

          {selectedVuln.length === 0 ? null : (
            <>
              <h2>
                Damage Vulnerabilities{" "}
                <span className={style.minorText2}>
                  <MultipleDisplay
                    selectedItem={selectedVuln}
                    setNewValue={setSelectedVuln}
                  />
                </span>
              </h2>
            </>
          )}

          {selectedImmune.length === 0 ? null : (
            <>
              <h2>
                Damage Immunities{" "}
                <span className={style.minorText2}>
                  <MultipleDisplay
                    selectedItem={selectedImmune}
                    setNewValue={setSelectedImmune}
                  />
                </span>
              </h2>
            </>
          )}

          {selectedResist.length === 0 ? null : (
            <>
              <h2>
                Damage Resistances{" "}
                <span className={style.minorText2}>
                  <MultipleDisplay
                    selectedItem={selectedResist}
                    setNewValue={setSelectedResist}
                  />
                </span>
              </h2>
            </>
          )}
          {selectedCondition.length === 0 ? null : (
            <>
              <h2>
                Condition Immunities{" "}
                <span className={style.minorText2}>
                  <MultipleDisplay
                    selectedItem={selectedCondition}
                    setNewValue={setSelectedCondition}
                  />
                </span>
              </h2>
            </>
          )}
          {selectedSense.length === 0 ? null : (
            <>
              <h2>
                Senses{" "}
                <span className={style.minorText2}>
                  <MultipleDisplayMod
                    selectedItem={selectedSenseModifiers}
                    setNewValue={setSelectedSenseModifiers}
                  />
                </span>
              </h2>
            </>
          )}
          <h2>
            Languages{" "}
            {selectedLang.length === 0 ? (
              "--"
            ) : (
              <span className={style.minorText2}>
                <MultipleDisplay
                  selectedItem={selectedLang}
                  setNewValue={setSelectedLang}
                />
              </span>
            )}
          </h2>
          <hr className={style.lineBreak} />
          <h1>Abilities</h1>
          <hr className={style.subLineBreak} />
          <h2>
            <span className={style.minorText2}>
              <MultipleDisplayDesc
                selectedItem={selectedSpecial}
                setNewValue={setSelectedSpecial}
              />
            </span>
          </h2>
          <h1>Actions</h1>
          <hr className={style.subLineBreak} />
          <h2>
            <span className={style.minorText2}>
              <MultipleDisplayDesc
                selectedItem={selectedAction}
                setNewValue={setSelectedAction}
              />
            </span>
          </h2>
          {selectedLegend.length === 0 ? null : (
            <>
              <h1>Legendary Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>
                <span className={style.minorText2}>
                  <MultipleDisplayDesc
                    selectedItem={selectedLegend}
                    setNewValue={setSelectedLegend}
                  />
                </span>
              </h2>
            </>
          )}
          {selectedLair.length === 0 ? null : (
            <>
              <h1>Lair Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>
                <span className={style.minorText2}>
                  <MultipleDisplayChunks
                    selectedItem={selectedLair}
                    setNewValue={setSelectedLair}
                  />
                </span>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default VillainGen;
