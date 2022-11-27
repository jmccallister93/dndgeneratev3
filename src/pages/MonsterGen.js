import Navbar from "../components/Navbar";
import style from "../stylesheets/MonsterGen.module.scss";
import styled from "../stylesheets/styledComponents.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Tooltip } from "primereact/tooltip";
import { Document, Page } from 'react-pdf';

const MonsterGen = () => {
  const [monster, setMonster] = useState({
    name:"", 
    size: "", 
    type: "",
    align: "",
    ac: "",
    armorType: "",
    hp: "",
    speed: "",
});

  //Set States
  const [fetchError, setFetchError] = useState();

  const [name, setName] = useState("");
  const [names, setNames] = useState();
  const [nameOptions, setNameOptions] = useState();
  const [nameAnimal, setNameAnimal] = useState();
  const [nameAdejctive, setNameAdjective] = useState();
  const [nameNoun, setNameNoun] = useState();

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState();
  const [sizeOptions, setSizeOptions] = useState();

  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();

  const [align, setAlign] = useState("");
  const [aligns, setAligns] = useState();
  const [alignOptions, setAlignOptions] = useState();

  const [ac, setAc] = useState("");
  const [acs, setAcs] = useState("");
  const [acOptions, setAcOptions] = useState();

  const [armorType, setArmorType] = useState("");
  const [armorTypes, setArmorTypes] = useState();
  const [armorTypeOptions, setArmorTypeOptions] = useState();

  const [hp, setHp] = useState("");

  const [speed, setSpeed] = useState("");
  const [speeds, setSpeeds] = useState("");
  const [speedOptions, setSpeedOptions] = useState();

  const [speedType, setSpeedType] = useState("");
  const [speedTypes, setSpeedTypes] = useState("");
  const [speedTypeOptions, setSpeedTypeOptions] = useState();

  const [speedExtra, setSpeedExtra] = useState("");
  const [speedExtraList, setSpeedExtraList] = useState([]);
  const [burrow, setBurrow] = useState("");
  const [climb, setClimb] = useState("");
  const [fly, setFly] = useState("");
  const [hover, setHover] = useState("");
  const [swim, setSwim] = useState("");
  const [dialogVisibleSpeed, setDialogVisibleSpeed] = useState(false);
  const [selectedItemsSpeed, setSelectedItemsSpeed] = useState(null);

  const [ability, setAbility] = useState("");
  const [abilities, setAbilities] = useState("");
  const [abilityOptions, setAbilityOptions] = useState();

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

  const [save, setSave] = useState("");
  const [saves, setSaves] = useState("");
  const [saveOptions, setSaveOptions] = useState();
  const [saveList, setSaveList] = useState([]);
  const [saveStr, setSaveStr] = useState("");
  const [saveDex, setSaveDex] = useState("");
  const [saveCon, setSaveCon] = useState("");
  const [saveInt, setSaveInt] = useState("");
  const [saveWis, setSaveWis] = useState("");
  const [saveCha, setSaveCha] = useState("");
  const [dialogVisibleSave, setDialogVisibleSave] = useState(false);
  const [selectedItemsSave, setSelectedItemsSave] = useState(null);

  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState("");
  const [skillOptions, setSkillOptions] = useState();
  const [skillList, setSkillList] = useState([]);
  const [dialogVisibleSkill, setDialogVisibleSkill] = useState(false);
  const [selectedItemsSkill, setSelectedItemsSkill] = useState(null);
  const [skillAcrobatics, setSkillAcrobatics] = useState("");
  const [skillAnimal, setSkillAnimal] = useState("");
  const [skillArcana, setSkillArcana] = useState("");
  const [skillAthletics, setSkillAthletics] = useState("");
  const [skillDeception, setSkillDeception] = useState("");
  const [skillHistory, setSkillHistory] = useState("");
  const [skillInsight, setSkillInsight] = useState("");
  const [skillIntimidation, setSkillIntimidation] = useState("");
  const [skillInvestigation, setSkillInvestigation] = useState("");
  const [skillMedicine, setSkillMedicine] = useState("");
  const [skillNature, setSkillNature] = useState("");
  const [skillPerception, setSkillPerception] = useState("");
  const [skillPerformance, setSkillPerformance] = useState("");
  const [skillPersuasion, setSkillPersuasion] = useState("");
  const [skillReligion, setSkillReligion] = useState("");
  const [skillSleight, setSkillSleight] = useState("");
  const [skillStealth, setSkillStealth] = useState("");
  const [skillSurvival, setSkillSurvival] = useState("");

  const [vuln, setVuln] = useState("");
  const [vulns, setVulns] = useState("");
  const [vulnOptions, setVulnOptions] = useState();
  const [vulnList, setVulnList] = useState([]);
  const [dialogVisibleVuln, setDialogVisibleVuln] = useState(false);
  const [selectedItemsVuln, setSelectedItemsVuln] = useState(null);
  //   const [vulnAcid, setVulnAcid] = useState("");
  //   const [vulnCold, setVulnCold] = useState("");
  //   const [vulnFire, setVulnFire] = useState("");
  //   const [vulnForce, setVulnForce] = useState("");
  //   const [vulnLightning, setVulnLightning] = useState("");
  //   const [vulnNecrotic, setVulnNecrotic] = useState("");
  //   const [vulnPoison, setVulnPoison] = useState("");
  //   const [vulnPsychic, setVulnPsychic] = useState("");
  //   const [vulnRadiant, setVulnRadiant] = useState("");
  //   const [vulnThunder, setVulnThunder] = useState("");
  //   const [vulnBludgeoning, setVulnBludgeoning] = useState("");
  //   const [vulnSlashing, setVulnSlashing] = useState("");
  //   const [vulnPiercing, setVulnPiercing] = useState("");
  //   const [vulnNMBludgeoning, setVulnNMBludgeoning] = useState("");
  //   const [vulnNMSlashing, setVulnNMSlashing] = useState("");
  //   const [vulnNMPiercing, setVulnNMPiercing] = useState("");

  const [immune, setImmune] = useState("");
  const [immunes, setImmunes] = useState("");
  const [immuneOptions, setImmuneOptions] = useState();
  const [immuneList, setImmuneList] = useState([]);
  const [dialogVisibleImmune, setDialogVisibleImmune] = useState(false);
  const [selectedItemsImmune, setSelectedItemsImmune] = useState(null);
  //   const [immuneAcid, setImmuneAcid] = useState("");
  //   const [immuneCold, setImmuneCold] = useState("");
  //   const [immuneFire, setImmuneFire] = useState("");
  //   const [immuneForce, setImmuneForce] = useState("");
  //   const [immuneLightning, setImmuneLightning] = useState("");
  //   const [immuneNecrotic, setImmuneNecrotic] = useState("");
  //   const [immunePoison, setImmunePoison] = useState("");
  //   const [immunePsychic, setImmunePsychic] = useState("");
  //   const [immuneRadiant, setImmuneRadiant] = useState("");
  //   const [immuneThunder, setImmuneThunder] = useState("");
  //   const [immuneBludgeoning, setImmuneBludgeoning] = useState("");
  //   const [immuneSlashing, setImmuneSlashing] = useState("");
  //   const [immunePiercing, setImmunePiercing] = useState("");
  //   const [immuneNMBludgeoning, setImmuneNMBludgeoning] = useState("");
  //   const [immuneNMSlashing, setImmuneNMSlashing] = useState("");
  //   const [immuneNMPiercing, setImmuneNMPiercing] = useState("");

  const [resist, setResist] = useState("");
  const [resists, setResists] = useState("");
  const [resistOptions, setResistOptions] = useState();
  const [resistList, setResistList] = useState([]);
  const [dialogVisibleResist, setDialogVisibleResist] = useState(false);
  const [selectedItemsResist, setSelectedItemsResist] = useState(null);
  //   const [resistAcid, setResistAcid] = useState("");
  //   const [resistCold, setResistCold] = useState("");
  //   const [resistFire, setResistFire] = useState("");
  //   const [resistForce, setResistForce] = useState("");
  //   const [resistLightning, setResistLightning] = useState("");
  //   const [resistNecrotic, setResistNecrotic] = useState("");
  //   const [resistPoison, setResistPoison] = useState("");
  //   const [resistPsychic, setResistPsychic] = useState("");
  //   const [resistRadiant, setResistRadiant] = useState("");
  //   const [resistThunder, setResistThunder] = useState("");
  //   const [resistBludgeoning, setResistBludgeoning] = useState("");
  //   const [resistSlashing, setResistSlashing] = useState("");
  //   const [resistPiercing, setResistPiercing] = useState("");
  //   const [resistNMBludgeoning, setResistNMBludgeoning] = useState("");
  //   const [resistNMSlashing, setResistNMSlashing] = useState("");
  //   const [resistNMPiercing, setResistNMPiercing] = useState("");

  const [condition, setCondition] = useState("");
  const [conditions, setConditions] = useState("");
  const [conditionOptions, setConditionOptions] = useState();
  const [conditionList, setConditionList] = useState([]);
  const [dialogVisibleCondition, setDialogVisibleCondition] = useState(false);
  const [selectedItemsCondition, setSelectedItemsCondition] = useState(null);
  //   const [conBlinded, setConBlinded] = useState("");
  //   const [conCharmed, setConCharmed] = useState("");
  //   const [conDeafened, setConDeafened] = useState("");
  //   const [conExhaustion, setConExhaustion] = useState("");
  //   const [conFrightened, setConFrightened] = useState("");
  //   const [conGrappled, setConGrappled] = useState("");
  //   const [conIncapacitated, setConIncapacitated] = useState("");
  //   const [conInvisible, setConInvisible] = useState("");
  //   const [conParalyzed, setConParalyzed] = useState("");
  //   const [conPetrified, setConPetrified] = useState("");
  //   const [conPoisoned, setConPoisoned] = useState("");
  //   const [conProne, setConProne] = useState("");
  //   const [conRestrained, setConRestrained] = useState("");
  //   const [conStunned, setConStunned] = useState("");
  //   const [conUnconscious, setConUnconscious] = useState("");

  const [sense, setSense] = useState("");
  const [senses, setSenses] = useState("");
  const [senseOptions, setSenseOptions] = useState();
  const [senseList, setSenseList] = useState([]);
  const [dialogVisibleSense, setDialogVisibleSense] = useState(false);
  const [selectedItemsSense, setSelectedItemsSense] = useState(null);
  const [senseBlindsight, setSenseBlindsight] = useState("");
  const [senseDarkvision, setSenseDarkvision] = useState("");
  const [senseTremorsense, setSenseTremorsense] = useState("");
  const [senseTruesight, setSenseTruesight] = useState("");

  const [lang, setLang] = useState("");
  const [langs, setLangs] = useState("");
  const [langOptions, setLangOptions] = useState();
  const [langList, setLangList] = useState([]);
  const [dialogVisibleLang, setDialogVisibleLang] = useState(false);
  const [selectedItemsLang, setSelectedItemsLang] = useState(null);

  const [special, setSpecial] = useState("");
  const [Specials, setSpecials] = useState("");
  const [specialOptions, setSpecialOptions] = useState();
  const [specialList, setSpecialList] = useState([]);
  const [dialogVisibleSpecial, setDialogVisibleSpecial] = useState(false);
  const [selectedItemsSpecial, setSelectedItemsSpecial] = useState(null);

  const [action, setAction] = useState("");
  const [actions, setActions] = useState("");
  const [actionOptions, setActionOptions] = useState();
  const [actionList, setActionList] = useState([]);
  const [dialogVisibleAction, setDialogVisibleAction] = useState(false);
  const [selectedItemsAction, setSelectedItemsAction] = useState(null);

  const [reaction, setReaction] = useState("");
  const [reactions, setReactions] = useState("");
  const [reactionOptions, setReactionOptions] = useState();
  const [reactionList, setReactionList] = useState([]);
  const [dialogVisibleReaction, setDialogVisibleReaction] = useState(false);
  const [selectedItemsReaction, setSelectedItemsReaction] = useState(null);

  const [legend, setLegend] = useState("");
  const [legends, setLegends] = useState("");
  const [legendOptions, setLegendOptions] = useState();
  const [legendList, setLegendList] = useState([]);
  const [dialogVisibleLegend, setDialogVisibleLegend] = useState(false);
  const [selectedItemsLegend, setSelectedItemsLegend] = useState(null);

  const [lair, setLair] = useState("");
  const [Lairs, setLairs] = useState("");
  const [lairOptions, setLairOptions] = useState();
  const [lairList, setLairList] = useState([]);
  const [dialogVisibleLair, setDialogVisibleLair] = useState(false);
  const [selectedItemsLair, setSelectedItemsLair] = useState(null);

  const [gear, setGear] = useState("");
  const [gears, setGears] = useState("");
  const [gearOptions, setGearOptions] = useState();
  const [gearList, setGearList] = useState([]);
  const [dialogVisibleGear, setDialogVisibleGear] = useState(false);
  const [selectedItemsGear, setSelectedItemsGear] = useState(null);

  const [isAAActive, setIsAAActive] = useState(false);
  const [isAbilityActive, setIsAbilityActive] = useState(false);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isSSDActive, setIsSSDActive] = useState(false);
  const [isDTActive, setIsDTActive] = useState(false);
  const [isGearActive, setIsGearActive] = useState(false);

  //Datatable
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    // "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search mr-2" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );

  //Get Data function
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(dataName.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  };
  //Specials
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("monstersAbilities")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSpecial(null);
      }
      if (dataName) {
        setSpecials(dataName);
        setFetchError(null);
        setSpecialOptions(
          dataName.map((r) => ({
            name: r.name,
            value: r.value,
            desc: r.desc,
            type: r.type,
            source: r.source,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //Actions
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("monstersActions")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setAction(null);
      }
      if (dataName) {
        setActions(dataName);
        setFetchError(null);
        setActionOptions(
          dataName.map((r) => ({
            name: r.name,
            value: r.value,
            desc: r.desc,
            type: r.type,
            source: r.source,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //Legend
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("monstersLegendaryActions")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setLegend(null);
      }
      if (dataName) {
        setLegends(dataName);
        setFetchError(null);
        setLegendOptions(
          dataName.map((r) => ({
            name: r.name,
            value: r.value,
            desc: r.desc,
            type: r.type,
            source: r.source,
          }))
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from("monsterNames")
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setName(null);
      }
      if (dataName) {
        setNames(dataName);
        setFetchError(null);
        setNameOptions(
          dataName.map((r) => ({
            animal: r.animal,
            adjective: r.adjective,
            noun: r.noun,
          }))
        );
      }
    };
    fetchData();
  }, []);

  //Import data via getData
  useEffect(() => {
    getData("sizes", setSize, setSizes, setSizeOptions);
    getData("monstersTypes", setType, setTypes, setTypeOptions);
    getData("aligns", setAlign, setAligns, setAlignOptions);
    getData("acs", setAc, setAcs, setAcOptions);
    getData("itemsArmor", setArmorType, setArmorTypes, setArmorTypeOptions);
    getData("movement", setSpeedType, setSpeedTypes, setSpeedTypeOptions);
    getData("itemsArmor", setArmorType, setArmorTypes, setArmorTypeOptions);
    getData("abilities", setAbility, setAbilities, setAbilityOptions);
    getData("abilities", setSave, setSaves, setSaveOptions);
    getData("skills", setSkill, setSkills, setSkillOptions);
    getData("damageTypes", setVuln, setVulns, setVulnOptions);
    getData("damageTypes", setImmune, setImmunes, setImmuneOptions);
    getData("damageTypes", setResist, setResists, setResistOptions);
    getData("conditions", setCondition, setConditions, setConditionOptions);
    getData("senses", setSense, setSenses, setSenseOptions);
    getData("languages", setLang, setLangs, setLangOptions);
    getData("monstersLairActions", setLair, setLairs, setLairOptions);
  }, []);

  //TODO Monster Object
  useEffect(() => {
    setMonster((monster) => ({ ...monster, size: size, type: type }));
  }, [size, type]);

  //TODO
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data, error } = await supabase.from("itemsAll").select();
  //       if (error) {
  //         setFetchError("Could not fetch the data");
  //         setGear(null);
  //         console.log(error);
  //       }
  //       if (data) {
  //         setGears(data);
  //         setFetchError(null);
  //         setGearOptions(data.map((r) => ({ name: r.name, value: r.value })));
  //       }
  //     };
  //     fetchData();
  //   }, []);
  //Export Logic
//   const [selectedItems, setSelectedItems] = useState(null);
//   const [allSelection, setAllSelection] = useState();
//   const dt = useRef(null);

//   const exportPdf = () => {
//     import("jspdf").then((jsPDF) => {
//       import("jspdf-autotable").then(() => {
//         const doc = new jsPDF.default(0, 0);
//         doc.autoTable(exportColumns, allSelection);
//         doc.save({name} + ".pdf");
//       });
//     });
//   };
//   const cols = [
//     { field: "name", header: "Name" },
//     { field: "size", header: "Size" },
//     { field: "type", header: "Type" },
//     { field: "alignment", header: "Alignment" },
//   ];
//   const exportColumns = cols.map((col) => ({
//     title: col.header,
//     dataKey: col.field,
//   }));

//   const exportCSV = (selectionOnly) => {
//     dt.current.exportCSV({ selectionOnly });
//   };

//   const exportExcel = () => {
//     import("xlsx").then((xlsx) => {
//       const worksheet = xlsx.utils.json_to_sheet(allSelection);
//       const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
//       const excelBuffer = xlsx.write(workbook, {
//         bookType: "xlsx",
//         type: "array",
//       });
//       saveAsExcelFile(excelBuffer, "products");
//     });
//   };

//   const saveAsExcelFile = (buffer, fileName) => {
//     import("file-saver").then((module) => {
//       if (module && module.default) {
//         let EXCEL_TYPE =
//           "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
//         let EXCEL_EXTENSION = ".xlsx";
//         const data = new Blob([buffer], {
//           type: EXCEL_TYPE,
//         });

//         module.default.saveAs(
//           data,
//           fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
//         );
//       }
//     });
//   };

//   //Export Buttons
//   const exportBtns = (
//     <div >
//       <Button
//         type="button"
//         icon="pi pi-file"
//         onClick={() => exportCSV(true)}
//         className="p-button-info mr-2 "
//         data-pr-tooltip="Export CSV"
//         tooltip="CSV"
//       />
//       <Button
//         type="button"
//         icon="pi pi-file-excel"
//         onClick={exportExcel}
//         className="p-button-success mr-2"
//         data-pr-tooltip="Export XLS"
//         tooltip="XLS"
//       />
//       <Button
//         type="button"
//         icon="pi pi-file-pdf"
//         onClick={exportPdf}
//         className="p-button-warning mr-2"
//         data-pr-tooltip="Export PDF"
//         tooltip="PDF"
//       />
//     </div>
//   );



  //OnChanges
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onRandomName = (e) => {
    const a = Math.round(Math.random() * (139 - 0));
    const ad = Math.round(Math.random() * (83 - 0));
    const n = Math.round(Math.random() * (69 - 0));
    const x = Math.round(Math.random() * (4 - 0));
    if (x === 0) {
      setName(
        nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1) +
          " " +
          nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 1) {
      setName(
        nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 2) {
      setName(
        nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1) +
          " " +
          nameOptions[a].animal
      );
    }
    if (x === 3) {
      setName(
        nameOptions[ad].adjective.charAt(0).toUpperCase() +
          nameOptions[ad].adjective.slice(1) +
          " " +
          nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1)
      );
    }
    if (x === 4) {
      setName(
        nameOptions[a].animal +
          " " +
          nameOptions[n].noun.charAt(0).toUpperCase() +
          nameOptions[n].noun.slice(1)
      );
    }
  };

  //On Change function
  const objectChange = (value, setObject, max, min, floor, objectOptions) => {
    setObject(value);
    if (value === "Random") {
      let r = Math.round(Math.random() * (max - min) + floor);
      setObject(objectOptions[r].name);
    }
  };
  //Set onChange Variables
  const onSizeChange = (e) => {
    objectChange(e.value, setSize, 6, 1, 1, sizeOptions);
  };
  const onTypeChange = (e) => {
    objectChange(e.value, setType, 16, 1, 1, typeOptions);
  };
  const onAlignChange = (e) => {
    objectChange(e.value, setAlign, 9, 1, 1, alignOptions);
  };
  const onAcChange = (e) => {
    objectChange(e.value, setAc, 30, 1, 1, acOptions);
  };
  const onArmorTypeChange = (e) => {
    objectChange(e.value, setArmorType, 14, 1, 1, armorTypeOptions);
  };
  const onHpChange = (e) => {
    objectChange(e.value, setHp);
  };
  const onSpeedChange = (e) => {
    objectChange(e.value, setSpeed);
  };
  const onStrChange = (e) => {
    objectChange(e.value, setStr);
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

  //Random Number Button
  const randomButton = (setObject, max, min) => {
    let r = Math.floor(Math.random() * (max - min));
    setObject(r);
  };
  const onRandomHp = (e) => {
    randomButton(setHp, 500, 0);
  };
  const onRandomSpeed = (e) => {
    randomButton(setSpeed, 120, 0);
  };
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

  //DISPLAY ELEMNTS

  //DropDowns
  const customDrop = (title, value, options, change, placeholder) => (
    <div className={style.dropContainer}>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
    </div>
  );

  const sizeDrop = customDrop(
    "Size",
    size,
    sizeOptions,
    onSizeChange,
    "Choose Size"
  );
  const typeDrop = customDrop(
    "Type",
    type,
    typeOptions,
    onTypeChange,
    "Choose Type"
  );
  const alignDrop = customDrop(
    "Alignment",
    align,
    alignOptions,
    onAlignChange,
    "Choose Alignment"
  );
  const acDrop = customDrop("AC", ac, acOptions, onAcChange, "Choose AC");
  const armorTypeDrop = customDrop(
    "Armor Type",
    armorType,
    armorTypeOptions,
    onArmorTypeChange,
    "Choose Armor Type"
  );

  //List setups
  //Open Dialogs
  const openDialogSpeed = () => {
    setDialogVisibleSpeed(true);
  };
  const openDialogSave = () => {
    setDialogVisibleSave(true);
  };
  const openDialogSkill = () => {
    setDialogVisibleSkill(true);
  };
  const openDialogVuln = () => {
    setDialogVisibleVuln(true);
  };
  const openDialogImmune = () => {
    setDialogVisibleImmune(true);
  };
  const openDialogResist = () => {
    setDialogVisibleResist(true);
  };
  const openDialogCondition = () => {
    setDialogVisibleCondition(true);
  };
  const openDialogSense = () => {
    setDialogVisibleSense(true);
  };
  const openDialogLang = () => {
    setDialogVisibleLang(true);
  };
  const openDialogSpecial = () => {
    setDialogVisibleSpecial(true);
  };
  const openDialogAction = () => {
    setDialogVisibleAction(true);
  };
  const openDialogReaction = () => {
    setDialogVisibleReaction(true);
  };
  const openDialogLegend = () => {
    setDialogVisibleLegend(true);
  };
  const openDialogLair = () => {
    setDialogVisibleLair(true);
  };
  const openDialogGear = () => {
    setDialogVisibleGear(true);
  };
  //Close dialogs
  const closeDialogSpeed = () => {
    setDialogVisibleSpeed(false);
    for (let i = 0; i < selectedItemsSpeed.length; i++) {
      if (speedExtraList.includes(selectedItemsSpeed[i])) {
      } else {
        setSpeedExtraList((oldArray) => [...oldArray, selectedItemsSpeed[i]]);
      }
    }
  };
  const closeDialogSave = () => {
    setDialogVisibleSave(false);
    for (let i = 0; i < selectedItemsSave.length; i++) {
      if (saveList.includes(selectedItemsSave[i])) {
      } else {
        setSaveList((saveArray) => [...saveArray, selectedItemsSave[i]]);
      }
    }
  };
  const closeDialogSkill = () => {
    setDialogVisibleSkill(false);
    for (let i = 0; i < selectedItemsSkill.length; i++) {
      if (skillList.includes(selectedItemsSkill[i])) {
      } else {
        setSkillList((oldArray) => [...oldArray, selectedItemsSkill[i]]);
      }
    }
  };
  const closeDialogVuln = () => {
    setDialogVisibleVuln(false);
    for (let i = 0; i < selectedItemsVuln.length; i++) {
      if (vulnList.includes(selectedItemsVuln[i])) {
      } else {
        setVulnList((oldArray) => [...oldArray, selectedItemsVuln[i]]);
      }
    }
  };
  const closeDialogImmune = () => {
    setDialogVisibleImmune(false);
    for (let i = 0; i < selectedItemsImmune.length; i++) {
      if (immuneList.includes(selectedItemsImmune[i])) {
      } else {
        setImmuneList((oldArray) => [...oldArray, selectedItemsImmune[i]]);
      }
    }
  };
  const closeDialogResist = () => {
    setDialogVisibleResist(false);
    for (let i = 0; i < selectedItemsResist.length; i++) {
      if (resistList.includes(selectedItemsResist[i])) {
      } else {
        setResistList((oldArray) => [...oldArray, selectedItemsResist[i]]);
      }
    }
  };
  const closeDialogCondition = () => {
    setDialogVisibleCondition(false);
    for (let i = 0; i < selectedItemsCondition.length; i++) {
      if (conditionList.includes(selectedItemsCondition[i])) {
      } else {
        setConditionList((oldArray) => [
          ...oldArray,
          selectedItemsCondition[i],
        ]);
      }
    }
  };
  const closeDialogSense = () => {
    setDialogVisibleSense(false);
    for (let i = 0; i < selectedItemsSense.length; i++) {
      if (senseList.includes(selectedItemsSense[i])) {
      } else {
        setSenseList((oldArray) => [...oldArray, selectedItemsSense[i]]);
      }
    }
  };
  const closeDialogLang = () => {
    setDialogVisibleLang(false);
    for (let i = 0; i < selectedItemsLang.length; i++) {
      if (langList.includes(selectedItemsLang[i])) {
      } else {
        setLangList((oldArray) => [...oldArray, selectedItemsLang[i]]);
      }
    }
  };
  const closeDialogSpecial = (e) => {
    setDialogVisibleSpecial(false);
    for (let i = 0; i < selectedItemsSpecial.length; i++) {
      if (specialList.includes(selectedItemsSpecial[i])) {
      } else {
        setSpecialList((oldArray) => [...oldArray, selectedItemsSpecial[i]]);
      }
    }
  };
  const closeDialogAction = () => {
    setDialogVisibleAction(false);
    for (let i = 0; i < selectedItemsAction.length; i++) {
      if (actionList.includes(selectedItemsAction[i])) {
      } else {
        setActionList((oldArray) => [...oldArray, selectedItemsAction[i]]);
      }
    }
  };
  const closeDialogReaction = () => {
    setDialogVisibleReaction(false);
    for (let i = 0; i < selectedItemsReaction.length; i++) {
      if (reactionList.includes(selectedItemsReaction[i])) {
      } else {
        setReactionList((oldArray) => [...oldArray, selectedItemsReaction[i]]);
      }
    }
  };
  const closeDialogLegend = () => {
    setDialogVisibleLegend(false);
    for (let i = 0; i < selectedItemsLegend.length; i++) {
      if (legendList.includes(selectedItemsLegend[i])) {
      } else {
        setLegendList((oldArray) => [...oldArray, selectedItemsLegend[i]]);
      }
    }
  };
  const closeDialogLair = () => {
    setDialogVisibleLair(false);
    for (let i = 0; i < selectedItemsLair.length; i++) {
      if (lairList.includes(selectedItemsLair[i])) {
      } else {
        setLairList((oldArray) => [...oldArray, selectedItemsLair[i]]);
      }
    }
  };
  const closeDialogGear = () => {
    setDialogVisibleGear(false);
    for (let i = 0; i < selectedItemsGear.length; i++) {
      if (gearList.includes(selectedItemsGear[i])) {
      } else {
        setGearList((oldArray) => [...oldArray, selectedItemsGear[i]]);
      }
    }
  };
  //Dialog Footer
  const dialogFooterSpeed = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSpeed} />;
  };
  const dialogFooterSave = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSave} />;
  };
  const dialogFooterSkill = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSkill} />;
  };
  const dialogFooterVuln = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogVuln} />;
  };
  const dialogFooterImmune = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogImmune} />;
  };
  const dialogFooterResist = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogResist} />;
  };
  const dialogFooterCondition = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogCondition} />
    );
  };
  const dialogFooterSense = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogSense} />;
  };
  const dialogFooterLang = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLang} />;
  };
  const dialogFooterSpecial = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogSpecial} />
    );
  };
  const dialogFooterAction = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogAction} />;
  };
  const dialogFooterReaction = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogReaction} />
    );
  };
  const dialogFooterLegend = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLegend} />;
  };
  const dialogFooterLair = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogLair} />;
  };
  const dialogFooterGear = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogGear} />;
  };

  //On Change
  const onBurrowChange = (e) => {
    objectChange(e.value, setBurrow);
  };
  const onClimbChange = (e) => {
    objectChange(e.value, setClimb);
  };
  const onFlyChange = (e) => {
    objectChange(e.value, setFly);
  };
  const onHoverChange = (e) => {
    objectChange(e.value, setHover);
  };
  const onSwimChange = (e) => {
    objectChange(e.value, setSwim);
  };
  //UseEffect Real time update
  useEffect(() => {
    setSelectedItemsSpeed(speedExtraList);
  }, [speedExtraList]);
  useEffect(() => {
    setSelectedItemsSave(saveList);
  }, [saveList]);
  useEffect(() => {
    setSelectedItemsSkill(skillList);
  }, [skillList]);
  useEffect(() => {
    setSelectedItemsVuln(vulnList);
  }, [vulnList]);
  useEffect(() => {
    setSelectedItemsImmune(immuneList);
  }, [immuneList]);
  useEffect(() => {
    setSelectedItemsResist(resistList);
  }, [resistList]);
  useEffect(() => {
    setSelectedItemsCondition(conditionList);
  }, [conditionList]);
  useEffect(() => {
    setSelectedItemsSense(senseList);
  }, [senseList]);
  useEffect(() => {
    setSelectedItemsLang(langList);
  }, [langList]);
  useEffect(() => {
    setSelectedItemsSpecial(specialList);
  }, [specialList]);
  useEffect(() => {
    setSelectedItemsAction(actionList);
  }, [actionList]);
  useEffect(() => {
    setSelectedItemsReaction(reactionList);
  }, [reactionList]);
  useEffect(() => {
    setSelectedItemsLegend(legendList);
  }, [legendList]);
  useEffect(() => {
    setSelectedItemsLair(lairList);
  }, [lairList]);
  useEffect(() => {
    setSelectedItemsGear(gearList);
  }, [gearList]);

  //Remove from list
  const onRemoveCustom = (setlist, list, name) => {
    setlist(list.filter((value) => value.name !== name));
  };

  const onRemoveBurrow = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Burrow");
  const onRemoveClimb = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Climb");
  const onRemoveHover = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Hover");
  const onRemoveFly = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Fly");
  const onRemoveSwim = (e) =>
    onRemoveCustom(setSpeedExtraList, speedExtraList, "Swim");

  const customSpeedInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
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
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRandomBurrow = (e) => {
    randomButton(setBurrow, 120, 0);
  };
  const onRandomClimb = (e) => {
    randomButton(setClimb, 120, 0);
  };
  const onRandomFly = (e) => {
    randomButton(setFly, 120, 0);
  };
  const onRandomHover = (e) => {
    randomButton(setHover, 120, 0);
  };
  const onRandomSwim = (e) => {
    randomButton(setSwim, 120, 0);
  };
  const burrowInput = customSpeedInput(
    burrow,
    onBurrowChange,
    "Burrow Speed",
    onRandomBurrow,
    onRemoveBurrow
  );
  const climbInput = customSpeedInput(
    climb,
    onClimbChange,
    "Climb Speed",
    onRandomClimb,
    onRemoveClimb
  );
  const flyInput = customSpeedInput(
    fly,
    onFlyChange,
    "Fly Speed",
    onRandomFly,
    onRemoveFly
  );
  const hoverInput = customSpeedInput(
    hover,
    onHoverChange,
    "Hover Speed",
    onRandomHover,
    onRemoveHover
  );
  const swimInput = customSpeedInput(
    swim,
    onSwimChange,
    "Swim Speed",
    onRandomSwim,
    onRemoveSwim
  );
  //Speed
  const extraSpeedDispaly = speedExtraList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Burrow"
            ? burrowInput
            : i.name === "Climb"
            ? climbInput
            : i.name === "Fly"
            ? flyInput
            : i.name === "Hover"
            ? hoverInput
            : i.name === "Swim"
            ? swimInput
            : null}
        </h3>
      </div>
    );
  });

  const moveDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Addtional Movement</h2>
      <Button onClick={openDialogSpeed} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Additional Movement"
        visible={dialogVisibleSpeed}
        maximizable
        modal
        onHide={closeDialogSpeed}
        footer={dialogFooterSpeed}
      >
        <DataTable
          value={speedTypeOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSpeed}
          onSelectionChange={(e) => setSelectedItemsSpeed(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );

  //Saves
  const onSaveStrChange = (e) => {
    objectChange(e.value, setSaveStr);
  };
  const onSaveDexChange = (e) => {
    objectChange(e.value, setSaveDex);
  };
  const onSaveConChange = (e) => {
    objectChange(e.value, setSaveCon);
  };
  const onSaveIntChange = (e) => {
    objectChange(e.value, setSaveInt);
  };
  const onSaveWisChange = (e) => {
    objectChange(e.value, setSaveWis);
  };
  const onSaveChaChange = (e) => {
    objectChange(e.value, setSaveCha);
  };

  const onRemoveSaveStr = (e) =>
    onRemoveCustom(setSaveList, saveList, "Strength");
  const onRemoveSaveDex = (e) =>
    onRemoveCustom(setSaveList, saveList, "Dexterity");
  const onRemoveSaveCon = (e) =>
    onRemoveCustom(setSaveList, saveList, "Constitution");
  const onRemoveSaveInt = (e) =>
    onRemoveCustom(setSaveList, saveList, "Intelligence");
  const onRemoveSaveWis = (e) =>
    onRemoveCustom(setSaveList, saveList, "Wisdom");
  const onRemoveSaveCha = (e) =>
    onRemoveCustom(setSaveList, saveList, "Charisma");

  const customSaveInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
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
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRandomSaveStr = (e) => {
    randomButton(setSaveStr, 15, 0);
  };
  const onRandomSaveDex = (e) => {
    randomButton(setSaveDex, 15, 0);
  };
  const onRandomSaveCon = (e) => {
    randomButton(setSaveCon, 15, 0);
  };
  const onRandomSaveInt = (e) => {
    randomButton(setSaveInt, 15, 0);
  };
  const onRandomSaveWis = (e) => {
    randomButton(setSaveWis, 15, 0);
  };
  const onRandomSaveCha = (e) => {
    randomButton(setSaveCha, 15, 0);
  };
  const saveStrInput = customSaveInput(
    saveStr,
    onSaveStrChange,
    "STR Modifier",
    onRandomSaveStr,
    onRemoveSaveStr
  );
  const saveDexInput = customSaveInput(
    saveDex,
    onSaveDexChange,
    "DEX Modifier",
    onRandomSaveDex,
    onRemoveSaveDex
  );
  const saveConInput = customSaveInput(
    saveCon,
    onSaveConChange,
    "CON Modifier",
    onRandomSaveCon,
    onRemoveSaveCon
  );
  const saveIntInput = customSaveInput(
    saveInt,
    onSaveIntChange,
    "INT Modifier",
    onRandomSaveInt,
    onRemoveSaveInt
  );
  const saveWisInput = customSaveInput(
    saveWis,
    onSaveWisChange,
    "WIS Modifier",
    onRandomSaveWis,
    onRemoveSaveWis
  );
  const saveChaInput = customSaveInput(
    saveCha,
    onSaveChaChange,
    "CHA Modifier",
    onRandomSaveCha,
    onRemoveSaveCha
  );
  const saveDisplay = saveList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Strength"
            ? saveStrInput
            : i.name === "Dexterity"
            ? saveDexInput
            : i.name === "Constitution"
            ? saveConInput
            : i.name === "Intelligence"
            ? saveIntInput
            : i.name === "Wisdom"
            ? saveWisInput
            : i.name === "Charisma"
            ? saveChaInput
            : null}
        </h3>
      </div>
    );
  });
  const saveDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Saving Throws</h2>
      <Button onClick={openDialogSave} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Saving Throws"
        visible={dialogVisibleSave}
        maximizable
        modal
        onHide={closeDialogSave}
        footer={dialogFooterSave}
      >
        <DataTable
          value={saveOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSave}
          onSelectionChange={(e) => setSelectedItemsSave(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Skills
  const onSkillAcrobaticsChange = (e) => {
    objectChange(e.value, setSkillAcrobatics);
  };
  const onSkillAnimalChange = (e) => {
    objectChange(e.value, setSkillAnimal);
  };
  const onSkillArcanaChange = (e) => {
    objectChange(e.value, setSkillArcana);
  };
  const onSkillAthleticsChange = (e) => {
    objectChange(e.value, setSkillAthletics);
  };
  const onSkillDeceptionChange = (e) => {
    objectChange(e.value, setSkillDeception);
  };
  const onSkillHistoryChange = (e) => {
    objectChange(e.value, setSkillHistory);
  };
  const onSkillInsightChange = (e) => {
    objectChange(e.value, setSkillInsight);
  };
  const onSkillIntimidationChange = (e) => {
    objectChange(e.value, setSkillIntimidation);
  };
  const onSkillInvestigationChange = (e) => {
    objectChange(e.value, setSkillInvestigation);
  };
  const onSkillMedicineChange = (e) => {
    objectChange(e.value, setSkillMedicine);
  };
  const onSkillNatureChange = (e) => {
    objectChange(e.value, setSkillNature);
  };
  const onSkillPerceptionChange = (e) => {
    objectChange(e.value, setSkillPerception);
  };
  const onSkillPerformanceChange = (e) => {
    objectChange(e.value, setSkillPerformance);
  };
  const onSkillPersuasionChange = (e) => {
    objectChange(e.value, setSkillPersuasion);
  };
  const onSkillReligionChange = (e) => {
    objectChange(e.value, setSkillReligion);
  };
  const onSkillSleightChange = (e) => {
    objectChange(e.value, setSkillSleight);
  };
  const onSkillStealthChange = (e) => {
    objectChange(e.value, setSkillStealth);
  };
  const onSkillSurvivalChange = (e) => {
    objectChange(e.value, setSkillSurvival);
  };
  const customSkillInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
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
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRemoveSkillAcrobatics = (e) =>
    onRemoveCustom(setSkillList, skillList, "Acrobatics");
  const onRemoveSkillAnimal = (e) =>
    onRemoveCustom(setSkillList, skillList, "Animal Handling");
  const onRemoveSkillArcana = (e) =>
    onRemoveCustom(setSkillList, skillList, "Arcana");
  const onRemoveSkillAthletics = (e) =>
    onRemoveCustom(setSkillList, skillList, "Athletics");
  const onRemoveSkillDeception = (e) =>
    onRemoveCustom(setSkillList, skillList, "Deception");
  const onRemoveSkillHistory = (e) =>
    onRemoveCustom(setSkillList, skillList, "History");
  const onRemoveSkillInsight = (e) =>
    onRemoveCustom(setSkillList, skillList, "Insight");
  const onRemoveSkillIntimidation = (e) =>
    onRemoveCustom(setSkillList, skillList, "Intimidation");
  const onRemoveSkillInvestigation = (e) =>
    onRemoveCustom(setSkillList, skillList, "Investigation");
  const onRemoveSkillMedicine = (e) =>
    onRemoveCustom(setSkillList, skillList, "Medicine");
  const onRemoveSkillNature = (e) =>
    onRemoveCustom(setSkillList, skillList, "Nature");
  const onRemoveSkillPerception = (e) =>
    onRemoveCustom(setSkillList, skillList, "Perception");
  const onRemoveSkillPerformance = (e) =>
    onRemoveCustom(setSkillList, skillList, "Performance");
  const onRemoveSkillPersuasion = (e) =>
    onRemoveCustom(setSkillList, skillList, "Persuasion");
  const onRemoveSkillReligion = (e) =>
    onRemoveCustom(setSkillList, skillList, "Religion");
  const onRemoveSkillSleight = (e) =>
    onRemoveCustom(setSkillList, skillList, "Sleight of Hand");
  const onRemoveSkillStealth = (e) =>
    onRemoveCustom(setSkillList, skillList, "Stealth");
  const onRemoveSkillSurvival = (e) =>
    onRemoveCustom(setSkillList, skillList, "Survival");

  const onRandomSkillAcrobatics = (e) => {
    randomButton(setSkillAcrobatics, 15, 0);
  };
  const onRandomSkillAnimal = (e) => {
    randomButton(setSkillAnimal, 15, 0);
  };
  const onRandomSkillArcana = (e) => {
    randomButton(setSkillArcana, 15, 0);
  };
  const onRandomSkillAthletics = (e) => {
    randomButton(setSkillAthletics, 15, 0);
  };
  const onRandomSkillDeception = (e) => {
    randomButton(setSkillDeception, 15, 0);
  };
  const onRandomSkillHistory = (e) => {
    randomButton(setSkillHistory, 15, 0);
  };
  const onRandomSkillInsight = (e) => {
    randomButton(setSkillInsight, 15, 0);
  };
  const onRandomSkillIntimidation = (e) => {
    randomButton(setSkillIntimidation, 15, 0);
  };
  const onRandomSkillInvestigation = (e) => {
    randomButton(setSkillInvestigation, 15, 0);
  };
  const onRandomSkillMedicine = (e) => {
    randomButton(setSkillMedicine, 15, 0);
  };
  const onRandomSkillNature = (e) => {
    randomButton(setSkillNature, 15, 0);
  };
  const onRandomSkillPerception = (e) => {
    randomButton(setSkillPerception, 15, 0);
  };
  const onRandomSkillPerformance = (e) => {
    randomButton(setSkillPerformance);
  };
  const onRandomSkillPersuasion = (e) => {
    randomButton(setSkillPersuasion, 15, 0);
  };
  const onRandomSkillReligion = (e) => {
    randomButton(setSkillReligion, 15, 0);
  };
  const onRandomSkillSleight = (e) => {
    randomButton(setSkillSleight, 15, 0);
  };
  const onRandomSkillStealth = (e) => {
    randomButton(setSkillStealth, 15, 0);
  };
  const onRandomSkillSurvival = (e) => {
    randomButton(setSkillSurvival, 15, 0);
  };
  const skillAcrobaticsInput = customSkillInput(
    skillAcrobatics,
    onSkillAcrobaticsChange,
    "Modifier",
    onRandomSkillAcrobatics,
    onRemoveSkillAcrobatics
  );
  const skillAnimalInput = customSkillInput(
    skillAnimal,
    onSkillAnimalChange,
    "Modifier",
    onRandomSkillAnimal,
    onRemoveSkillAnimal
  );
  const skillArcanaInput = customSkillInput(
    skillArcana,
    onSkillArcanaChange,
    "Modifier",
    onRandomSkillArcana,
    onRemoveSkillArcana
  );
  const skillAthleticsInput = customSkillInput(
    skillAthletics,
    onSkillAthleticsChange,
    "Modifier",
    onRandomSkillAthletics,
    onRemoveSkillAthletics
  );
  const skillDeceptionInput = customSkillInput(
    skillDeception,
    onSkillDeceptionChange,
    "Modifier",
    onRandomSkillDeception,
    onRemoveSkillDeception
  );
  const skillHistoryInput = customSkillInput(
    skillHistory,
    onSkillHistoryChange,
    "Modifier",
    onRandomSkillHistory,
    onRemoveSkillHistory
  );
  const skillInsightInput = customSkillInput(
    skillInsight,
    onSkillInsightChange,
    "Modifier",
    onRandomSkillInsight,
    onRemoveSkillInsight
  );
  const skillIntimidationInput = customSkillInput(
    skillIntimidation,
    onSkillIntimidationChange,
    "Modifier",
    onRandomSkillIntimidation,
    onRemoveSkillIntimidation
  );
  const skillInvestigationInput = customSkillInput(
    skillInvestigation,
    onSkillInvestigationChange,
    "Modifier",
    onRandomSkillInvestigation,
    onRemoveSkillInvestigation
  );
  const skillMedicineInput = customSkillInput(
    skillMedicine,
    onSkillMedicineChange,
    "Modifier",
    onRandomSkillMedicine,
    onRemoveSkillMedicine
  );
  const skillNatureInput = customSkillInput(
    skillNature,
    onSkillNatureChange,
    "Modifier",
    onRandomSkillNature,
    onRemoveSkillNature
  );
  const skillPerceptionInput = customSkillInput(
    skillPerception,
    onSkillPerceptionChange,
    "Modifier",
    onRandomSkillPerception,
    onRemoveSkillPerception
  );
  const skillPerformanceInput = customSkillInput(
    skillPerformance,
    onSkillPerformanceChange,
    "Modifier",
    onRandomSkillPerformance,
    onRemoveSkillPerformance
  );
  const skillPersuasionInput = customSkillInput(
    skillPersuasion,
    onSkillPersuasionChange,
    "Modifier",
    onRandomSkillPersuasion,
    onRemoveSkillPersuasion
  );
  const skillReligionInput = customSkillInput(
    skillReligion,
    onSkillReligionChange,
    "Modifier",
    onRandomSkillReligion,
    onRemoveSkillReligion
  );
  const skillSleightInput = customSkillInput(
    skillSleight,
    onSkillSleightChange,
    "Modifier",
    onRandomSkillSleight,
    onRemoveSkillSleight
  );
  const skillStealthInput = customSkillInput(
    skillStealth,
    onSkillStealthChange,
    "Modifier",
    onRandomSkillStealth,
    onRemoveSkillStealth
  );
  const skillSurvivalInput = customSkillInput(
    skillSurvival,
    onSkillSurvivalChange,
    "Modifier",
    onRandomSkillSurvival,
    onRemoveSkillSurvival
  );
  const skillDisplay = skillList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Acrobatics"
            ? skillAcrobaticsInput
            : i.name === "Animal Handling"
            ? skillAnimalInput
            : i.name === "Arcana"
            ? skillArcanaInput
            : i.name === "Athletics"
            ? skillAthleticsInput
            : i.name === "Deception"
            ? skillDeceptionInput
            : i.name === "History"
            ? skillHistoryInput
            : i.name === "Insight"
            ? skillInsightInput
            : i.name === "Intimidation"
            ? skillIntimidationInput
            : i.name === "Investigation"
            ? skillInvestigationInput
            : i.name === "Medicine"
            ? skillMedicineInput
            : i.name === "Nature"
            ? skillNatureInput
            : i.name === "Perception"
            ? skillPerceptionInput
            : i.name === "Performance"
            ? skillPerformanceInput
            : i.name === "Persuasion"
            ? skillPersuasionInput
            : i.name === "Religion"
            ? skillReligionInput
            : i.name === "Sleight of Hand"
            ? skillSleightInput
            : i.name === "Stealth"
            ? skillStealthInput
            : i.name === "Survival"
            ? skillSurvivalInput
            : null}
        </h3>
      </div>
    );
  });
  const skillDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Skills</h2>
      <Button onClick={openDialogSkill} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Skills"
        visible={dialogVisibleSkill}
        maximizable
        modal
        onHide={closeDialogSkill}
        footer={dialogFooterSkill}
      >
        <DataTable
          value={skillOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSkill}
          onSelectionChange={(e) => setSelectedItemsSkill(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Vuln
  const onRemoveVulnAcid = (e) => onRemoveCustom(setVulnList, vulnList, "Acid");
  const onRemoveVulnCold = (e) => onRemoveCustom(setVulnList, vulnList, "Cold");
  const onRemoveVulnFire = (e) => onRemoveCustom(setVulnList, vulnList, "Fire");
  const onRemoveVulnForce = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Force");
  const onRemoveVulnLightning = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Lightning");
  const onRemoveVulnNecrotic = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Necrotic");
  const onRemoveVulnPoison = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Poison");
  const onRemoveVulnPsychic = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Psychic");
  const onRemoveVulnRadiant = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Radiant");
  const onRemoveVulnThunder = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Thunder");
  const onRemoveVulnBludgeoning = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Bludgeoning");
  const onRemoveVulnSlashing = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Slashing");
  const onRemoveVulnPiercing = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Piercing");
  const onRemoveVulnMagic = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Magic");
  const onRemoveVulnMBludgeoning = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Magical Bludgeoning");
  const onRemoveVulnMSlashing = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Magical Slashing");
  const onRemoveVulnMPiercing = (e) =>
    onRemoveCustom(setVulnList, vulnList, "Magical Piercing");

  const customDmgRemove = (onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
      <Button
        tooltip="Remove?"
        onClick={onRemove}
        className={style.monstergenBtnRemove}
        style={{ height: "2rem" }}
      >
        <i className="pi pi-minus"></i>
      </Button>
    </div>
  );
  const vulnRemoveAcid = customDmgRemove(onRemoveVulnAcid);
  const vulnRemoveCold = customDmgRemove(onRemoveVulnCold);
  const vulnRemoveFire = customDmgRemove(onRemoveVulnFire);
  const vulnRemoveForce = customDmgRemove(onRemoveVulnForce);
  const vulnRemoveLightning = customDmgRemove(onRemoveVulnLightning);
  const vulnRemoveNecrotic = customDmgRemove(onRemoveVulnNecrotic);
  const vulnRemovePoison = customDmgRemove(onRemoveVulnPoison);
  const vulnRemovePsychic = customDmgRemove(onRemoveVulnPsychic);
  const vulnRemoveRadiant = customDmgRemove(onRemoveVulnRadiant);
  const vulnRemoveThunder = customDmgRemove(onRemoveVulnThunder);
  const vulnRemoveBludgeoning = customDmgRemove(onRemoveVulnBludgeoning);
  const vulnRemoveSlashing = customDmgRemove(onRemoveVulnSlashing);
  const vulnRemovePiercing = customDmgRemove(onRemoveVulnPiercing);
  const vulnRemoveMagic = customDmgRemove(onRemoveVulnMagic);
  const vulnRemoveMBludgeoning = customDmgRemove(onRemoveVulnMBludgeoning);
  const vulnRemoveMSlashing = customDmgRemove(onRemoveVulnMSlashing);
  const vulnRemoveMPiercing = customDmgRemove(onRemoveVulnMPiercing);

  const vulnDisplay = vulnList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Acid"
            ? vulnRemoveAcid
            : i.name === "Cold"
            ? vulnRemoveCold
            : i.name === "Fire"
            ? vulnRemoveFire
            : i.name === "Force"
            ? vulnRemoveForce
            : i.name === "Lightning"
            ? vulnRemoveLightning
            : i.name === "Necrotic"
            ? vulnRemoveNecrotic
            : i.name === "Poison"
            ? vulnRemovePoison
            : i.name === "Psychic"
            ? vulnRemovePsychic
            : i.name === "Radiant"
            ? vulnRemoveRadiant
            : i.name === "Thunder"
            ? vulnRemoveThunder
            : i.name === "Bludgeoning"
            ? vulnRemoveBludgeoning
            : i.name === "Slashing"
            ? vulnRemoveSlashing
            : i.name === "Piercing"
            ? vulnRemovePiercing
            : i.name === "Magic"
            ? vulnRemoveMagic
            : i.name === "Magical Bludgeoning"
            ? vulnRemoveMBludgeoning
            : i.name === "Magical Slashing"
            ? vulnRemoveMSlashing
            : i.name === "Magical Piercing"
            ? vulnRemoveMPiercing
            : null}
        </h3>
      </div>
    );
  });
  const vulnDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Vulnerabilities</h2>
      <Button onClick={openDialogVuln} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Vulnerabilities"
        visible={dialogVisibleVuln}
        maximizable
        modal
        onHide={closeDialogVuln}
        footer={dialogFooterVuln}
      >
        <DataTable
          value={vulnOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsVuln}
          onSelectionChange={(e) => setSelectedItemsVuln(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Immune

  const onRemoveImmuneAcid = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Acid");
  const onRemoveImmuneCold = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Cold");
  const onRemoveImmuneFire = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Fire");
  const onRemoveImmuneForce = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Force");
  const onRemoveImmuneLightning = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Lightning");
  const onRemoveImmuneNecrotic = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Necrotic");
  const onRemoveImmunePoison = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Poison");
  const onRemoveImmunePsychic = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Psychic");
  const onRemoveImmuneRadiant = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Radiant");
  const onRemoveImmuneThunder = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Thunder");
  const onRemoveImmuneBludgeoning = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Bludgeoning");
  const onRemoveImmuneSlashing = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Slashing");
  const onRemoveImmunePiercing = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Piercing");
  const onRemoveImmuneMagic = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Magic");
  const onRemoveImmuneMBludgeoning = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Magical Bludgeoning");
  const onRemoveImmuneMSlashing = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Magical Slashing");
  const onRemoveImmuneMPiercing = (e) =>
    onRemoveCustom(setImmuneList, immuneList, "Magical Piercing");

  const immuneRemoveAcid = customDmgRemove(onRemoveImmuneAcid);
  const immuneRemoveCold = customDmgRemove(onRemoveImmuneCold);
  const immuneRemoveFire = customDmgRemove(onRemoveImmuneFire);
  const immuneRemoveForce = customDmgRemove(onRemoveImmuneForce);
  const immuneRemoveLightning = customDmgRemove(onRemoveImmuneLightning);
  const immuneRemoveNecrotic = customDmgRemove(onRemoveImmuneNecrotic);
  const immuneRemovePoison = customDmgRemove(onRemoveImmunePoison);
  const immuneRemovePsychic = customDmgRemove(onRemoveImmunePsychic);
  const immuneRemoveRadiant = customDmgRemove(onRemoveImmuneRadiant);
  const immuneRemoveThunder = customDmgRemove(onRemoveImmuneThunder);
  const immuneRemoveBludgeoning = customDmgRemove(onRemoveImmuneBludgeoning);
  const immuneRemoveSlashing = customDmgRemove(onRemoveImmuneSlashing);
  const immuneRemovePiercing = customDmgRemove(onRemoveImmunePiercing);
  const immuneRemoveMagic = customDmgRemove(onRemoveImmuneMagic);
  const immuneRemoveMBludgeoning = customDmgRemove(onRemoveImmuneMBludgeoning);
  const immuneRemoveMSlashing = customDmgRemove(onRemoveImmuneMSlashing);
  const immuneRemoveMPiercing = customDmgRemove(onRemoveImmuneMPiercing);

  const immuneDisplay = immuneList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Acid"
            ? immuneRemoveAcid
            : i.name === "Cold"
            ? immuneRemoveCold
            : i.name === "Fire"
            ? immuneRemoveFire
            : i.name === "Force"
            ? immuneRemoveForce
            : i.name === "Lightning"
            ? immuneRemoveLightning
            : i.name === "Necrotic"
            ? immuneRemoveNecrotic
            : i.name === "Poison"
            ? immuneRemovePoison
            : i.name === "Psychic"
            ? immuneRemovePsychic
            : i.name === "Radiant"
            ? immuneRemoveRadiant
            : i.name === "Thunder"
            ? immuneRemoveThunder
            : i.name === "Bludgeoning"
            ? immuneRemoveBludgeoning
            : i.name === "Slashing"
            ? immuneRemoveSlashing
            : i.name === "Piercing"
            ? immuneRemovePiercing
            : i.name === "Magic"
            ? immuneRemoveMagic
            : i.name === "Magical Bludgeoning"
            ? immuneRemoveMBludgeoning
            : i.name === "Magical Slashing"
            ? immuneRemoveMSlashing
            : i.name === "Magical Piercing"
            ? immuneRemoveMPiercing
            : null}
        </h3>
      </div>
    );
  });
  const immuneDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Immunities</h2>
      <Button onClick={openDialogImmune} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Immunities"
        visible={dialogVisibleImmune}
        maximizable
        modal
        onHide={closeDialogImmune}
        footer={dialogFooterImmune}
      >
        <DataTable
          value={immuneOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsImmune}
          onSelectionChange={(e) => setSelectedItemsImmune(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Resist
  const onRemoveResistAcid = (e) =>
    onRemoveCustom(setResistList, resistList, "Acid");
  const onRemoveResistCold = (e) =>
    onRemoveCustom(setResistList, resistList, "Cold");
  const onRemoveResistFire = (e) =>
    onRemoveCustom(setResistList, resistList, "Fire");
  const onRemoveResistForce = (e) =>
    onRemoveCustom(setResistList, resistList, "Force");
  const onRemoveResistLightning = (e) =>
    onRemoveCustom(setResistList, resistList, "Lightning");
  const onRemoveResistNecrotic = (e) =>
    onRemoveCustom(setResistList, resistList, "Necrotic");
  const onRemoveResistPoison = (e) =>
    onRemoveCustom(setResistList, resistList, "Poison");
  const onRemoveResistPsychic = (e) =>
    onRemoveCustom(setResistList, resistList, "Psychic");
  const onRemoveResistRadiant = (e) =>
    onRemoveCustom(setResistList, resistList, "Radiant");
  const onRemoveResistThunder = (e) =>
    onRemoveCustom(setResistList, resistList, "Thunder");
  const onRemoveResistBludgeoning = (e) =>
    onRemoveCustom(setResistList, resistList, "Bludgeoning");
  const onRemoveResistSlashing = (e) =>
    onRemoveCustom(setResistList, resistList, "Slashing");
  const onRemoveResistPiercing = (e) =>
    onRemoveCustom(setResistList, resistList, "Piercing");
  const onRemoveResistMagic = (e) =>
    onRemoveCustom(setResistList, resistList, "Magic");
  const onRemoveResistMBludgeoning = (e) =>
    onRemoveCustom(setResistList, resistList, "Magical Bludgeoning");
  const onRemoveResistMSlashing = (e) =>
    onRemoveCustom(setResistList, resistList, "Magical Slashing");
  const onRemoveResistMPiercing = (e) =>
    onRemoveCustom(setResistList, resistList, "Magical Piercing");

  const resistRemoveAcid = customDmgRemove(onRemoveResistAcid);
  const resistRemoveCold = customDmgRemove(onRemoveResistCold);
  const resistRemoveFire = customDmgRemove(onRemoveResistFire);
  const resistRemoveForce = customDmgRemove(onRemoveResistForce);
  const resistRemoveLightning = customDmgRemove(onRemoveResistLightning);
  const resistRemoveNecrotic = customDmgRemove(onRemoveResistNecrotic);
  const resistRemovePoison = customDmgRemove(onRemoveResistPoison);
  const resistRemovePsychic = customDmgRemove(onRemoveResistPsychic);
  const resistRemoveRadiant = customDmgRemove(onRemoveResistRadiant);
  const resistRemoveThunder = customDmgRemove(onRemoveResistThunder);
  const resistRemoveBludgeoning = customDmgRemove(onRemoveResistBludgeoning);
  const resistRemoveSlashing = customDmgRemove(onRemoveResistSlashing);
  const resistRemovePiercing = customDmgRemove(onRemoveResistPiercing);
  const resistRemoveMagic = customDmgRemove(onRemoveResistMagic);
  const resistRemoveMBludgeoning = customDmgRemove(onRemoveResistMBludgeoning);
  const resistRemoveMSlashing = customDmgRemove(onRemoveResistMSlashing);
  const resistRemoveMPiercing = customDmgRemove(onRemoveResistMPiercing);

  const resistDisplay = resistList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Acid"
            ? resistRemoveAcid
            : i.name === "Cold"
            ? resistRemoveCold
            : i.name === "Fire"
            ? resistRemoveFire
            : i.name === "Force"
            ? resistRemoveForce
            : i.name === "Lightning"
            ? resistRemoveLightning
            : i.name === "Necrotic"
            ? resistRemoveNecrotic
            : i.name === "Poison"
            ? resistRemovePoison
            : i.name === "Psychic"
            ? resistRemovePsychic
            : i.name === "Radiant"
            ? resistRemoveRadiant
            : i.name === "Thunder"
            ? resistRemoveThunder
            : i.name === "Bludgeoning"
            ? resistRemoveBludgeoning
            : i.name === "Slashing"
            ? resistRemoveSlashing
            : i.name === "Piercing"
            ? resistRemovePiercing
            : i.name === "Magic"
            ? resistRemoveMagic
            : i.name === "Magical Bludgeoning"
            ? resistRemoveMBludgeoning
            : i.name === "Magical Slashing"
            ? resistRemoveMSlashing
            : i.name === "Magical Piercing"
            ? resistRemoveMPiercing
            : null}
        </h3>
      </div>
    );
  });
  const resistDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Resistances</h2>
      <Button onClick={openDialogResist} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Resistances"
        visible={dialogVisibleResist}
        maximizable
        modal
        onHide={closeDialogResist}
        footer={dialogFooterResist}
      >
        <DataTable
          value={resistOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsResist}
          onSelectionChange={(e) => setSelectedItemsResist(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Condition
  const onRemoveConditionBlinded = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Blinded");
  const onRemoveConditionCharmed = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Charmed");
  const onRemoveConditionDeafened = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Deafened");
  const onRemoveConditionExhaustion = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Exhaustion");
  const onRemoveConditionFrightened = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Frightened");
  const onRemoveConditionGrappled = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Grappled");
  const onRemoveConditionIncapacitated = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Incapacitated");
  const onRemoveConditionInvisible = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Invisible");
  const onRemoveConditionParalyzed = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Paralyzed");
  const onRemoveConditionPetrified = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Petrified");
  const onRemoveConditionPoisoned = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Poisoned");
  const onRemoveConditionProne = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Prone");
  const onRemoveConditionRestrained = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Restrained");
  const onRemoveConditionStunned = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Stunned");
  const onRemoveConditionUnconscious = (e) =>
    onRemoveCustom(setConditionList, conditionList, "Unconscious");

  const conditionRemoveBlinded = customDmgRemove(onRemoveConditionBlinded);
  const conditionRemoveCharmed = customDmgRemove(onRemoveConditionCharmed);
  const conditionRemoveDeafened = customDmgRemove(onRemoveConditionDeafened);
  const conditionRemoveExhaustion = customDmgRemove(
    onRemoveConditionExhaustion
  );
  const conditionRemoveFrightened = customDmgRemove(
    onRemoveConditionFrightened
  );
  const conditionRemoveGrappled = customDmgRemove(onRemoveConditionGrappled);
  const conditionRemoveIncapacitated = customDmgRemove(
    onRemoveConditionIncapacitated
  );
  const conditionRemoveInvisible = customDmgRemove(onRemoveConditionInvisible);
  const conditionRemoveParalyzed = customDmgRemove(onRemoveConditionParalyzed);
  const conditionRemovePetrified = customDmgRemove(onRemoveConditionPetrified);
  const conditionRemovePoisoned = customDmgRemove(onRemoveConditionPoisoned);
  const conditionRemoveProne = customDmgRemove(onRemoveConditionProne);
  const conditionRemoveRestrained = customDmgRemove(
    onRemoveConditionRestrained
  );
  const conditionRemoveStunned = customDmgRemove(onRemoveConditionStunned);
  const conditionRemoveUnconscious = customDmgRemove(
    onRemoveConditionUnconscious
  );

  const conditionDisplay = conditionList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Blinded"
            ? conditionRemoveBlinded
            : i.name === "Charmed"
            ? conditionRemoveCharmed
            : i.name === "Deafened"
            ? conditionRemoveDeafened
            : i.name === "Exhaustion"
            ? conditionRemoveExhaustion
            : i.name === "Frightened"
            ? conditionRemoveFrightened
            : i.name === "Grappled"
            ? conditionRemoveGrappled
            : i.name === "Incapacitated"
            ? conditionRemoveIncapacitated
            : i.name === "Invisible"
            ? conditionRemoveInvisible
            : i.name === "Paralyzed"
            ? conditionRemoveParalyzed
            : i.name === "Petrified"
            ? conditionRemovePetrified
            : i.name === "Poisoned"
            ? conditionRemovePoisoned
            : i.name === "Prone"
            ? conditionRemoveProne
            : i.name === "Restrained"
            ? conditionRemoveRestrained
            : i.name === "Stunned"
            ? conditionRemoveStunned
            : i.name === "Unconscious"
            ? conditionRemoveUnconscious
            : null}
        </h3>
      </div>
    );
  });
  const conditionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Condition Resistances</h2>
      <Button onClick={openDialogCondition} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Condition Resistances"
        visible={dialogVisibleCondition}
        maximizable
        modal
        onHide={closeDialogCondition}
        footer={dialogFooterCondition}
      >
        <DataTable
          value={conditionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsCondition}
          onSelectionChange={(e) => setSelectedItemsCondition(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Sense
  const onSenseBlindsightChange = (e) => {
    objectChange(e.value, setSenseBlindsight);
  };
  const onSenseDarkvisionChange = (e) => {
    objectChange(e.value, setSenseDarkvision);
  };
  const onSenseTremorsenseChange = (e) => {
    objectChange(e.value, setSenseTremorsense);
  };
  const onSenseTruesightChange = (e) => {
    objectChange(e.value, setSenseTruesight);
  };

  const customSenseInput = (value, change, placeholder, onRandom, onRemove) => (
    <div className={style.monstergenSpeedsWrapper}>
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
      />
      <div style={{ display: "flex" }}>
        <Button
          onClick={onRandom}
          className={style.monstergenBtnName}
          style={{ height: "2rem" }}
        >
          Random
        </Button>
        <Button
          tooltip="Remove?"
          onClick={onRemove}
          className={style.monstergenBtnRemove}
          style={{ height: "2rem" }}
        >
          <i className="pi pi-minus"></i>
        </Button>
      </div>
    </div>
  );
  const onRemoveSenseBlindsight = (e) =>
    onRemoveCustom(setSenseList, senseList, "Blindsight");
  const onRemoveSenseDarkvision = (e) =>
    onRemoveCustom(setSenseList, senseList, "Darkvision");
  const onRemoveSenseTremorsense = (e) =>
    onRemoveCustom(setSenseList, senseList, "Tremorsense");
  const onRemoveSenseTruesight = (e) =>
    onRemoveCustom(setSenseList, senseList, "Truesight");

  const onRandomSenseBlindsight = (e) => {
    randomButton(setSenseBlindsight, 120, 0);
  };
  const onRandomSenseDarkvision = (e) => {
    randomButton(setSenseDarkvision, 120, 0);
  };
  const onRandomSenseTremorsense = (e) => {
    randomButton(setSenseTremorsense, 120, 0);
  };
  const onRandomSenseTruesight = (e) => {
    randomButton(setSenseTruesight, 120, 0);
  };

  const senseBlindsightInput = customSenseInput(
    senseBlindsight,
    onSenseBlindsightChange,
    "Range",
    onRandomSenseBlindsight,
    onRemoveSenseBlindsight
  );
  const senseDarkvisionInput = customSenseInput(
    senseDarkvision,
    onSenseDarkvisionChange,
    "Range",
    onRandomSenseDarkvision,
    onRemoveSenseDarkvision
  );
  const senseTremorsenseInput = customSenseInput(
    senseTremorsense,
    onSenseTremorsenseChange,
    "Range",
    onRandomSenseTremorsense,
    onRemoveSenseTremorsense
  );
  const senseTruesightInput = customSenseInput(
    senseTruesight,
    onSenseTruesightChange,
    "Range",
    onRandomSenseTruesight,
    onRemoveSenseTruesight
  );
  const senseDisplay = senseList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Blindsight"
            ? senseBlindsightInput
            : i.name === "Darkvision"
            ? senseDarkvisionInput
            : i.name === "Tremorsense"
            ? senseTremorsenseInput
            : i.name === "Truesight"
            ? senseTruesightInput
            : null}
        </h3>
      </div>
    );
  });

  const senseDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Senses</h2>
      <Button onClick={openDialogSense} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Senses"
        visible={dialogVisibleSense}
        maximizable
        modal
        onHide={closeDialogSense}
        footer={dialogFooterSense}
      >
        <DataTable
          value={senseOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSense}
          onSelectionChange={(e) => setSelectedItemsSense(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Languages
  const onRemoveLangAbyssal = (e) =>
    onRemoveCustom(setLangList, langList, "Abyssal");
  const onRemoveLangCelestial = (e) =>
    onRemoveCustom(setLangList, langList, "Celestial");
  const onRemoveLangCommon = (e) =>
    onRemoveCustom(setLangList, langList, "Common");
  const onRemoveLangDeepSpeech = (e) =>
    onRemoveCustom(setLangList, langList, "Deep Speech");
  const onRemoveLangDraconic = (e) =>
    onRemoveCustom(setLangList, langList, "Draconic");
  const onRemoveLangDwarvish = (e) =>
    onRemoveCustom(setLangList, langList, "Dwarvish");
  const onRemoveLangElvish = (e) =>
    onRemoveCustom(setLangList, langList, "Elvish");
  const onRemoveLangGiant = (e) =>
    onRemoveCustom(setLangList, langList, "Giant");
  const onRemoveLangGnomish = (e) =>
    onRemoveCustom(setLangList, langList, "Gnomish");
  const onRemoveLangGoblin = (e) =>
    onRemoveCustom(setLangList, langList, "Goblin");
  const onRemoveLangHalfling = (e) =>
    onRemoveCustom(setLangList, langList, "Halfling");
  const onRemoveLangInfernal = (e) =>
    onRemoveCustom(setLangList, langList, "Infernal");
  const onRemoveLangOrc = (e) => onRemoveCustom(setLangList, langList, "Orc");
  const onRemoveLangPrimordial = (e) =>
    onRemoveCustom(setLangList, langList, "Primordial");
  const onRemoveLangSylvan = (e) =>
    onRemoveCustom(setLangList, langList, "Sylvan");
  const onRemoveLangUndercommon = (e) =>
    onRemoveCustom(setLangList, langList, "Undercommon");

  const langRemoveAbyssal = customDmgRemove(onRemoveLangAbyssal);
  const langRemoveCelestial = customDmgRemove(onRemoveLangCelestial);
  const langRemoveCommon = customDmgRemove(onRemoveLangCommon);
  const langRemoveDeepSpeech = customDmgRemove(onRemoveLangDeepSpeech);
  const langRemoveDraconic = customDmgRemove(onRemoveLangDraconic);
  const langRemoveDwarvish = customDmgRemove(onRemoveLangDwarvish);
  const langRemoveElvish = customDmgRemove(onRemoveLangElvish);
  const langRemoveGiant = customDmgRemove(onRemoveLangGiant);
  const langRemoveGnomish = customDmgRemove(onRemoveLangGnomish);
  const langRemoveGoblin = customDmgRemove(onRemoveLangGoblin);
  const langRemoveHalfling = customDmgRemove(onRemoveLangHalfling);
  const langRemoveInfernal = customDmgRemove(onRemoveLangInfernal);
  const langRemoveOrc = customDmgRemove(onRemoveLangOrc);
  const langRemovePrimordial = customDmgRemove(onRemoveLangPrimordial);
  const langRemoveSylvan = customDmgRemove(onRemoveLangSylvan);
  const langRemoveUndercommon = customDmgRemove(onRemoveLangUndercommon);

  const langDisplay = langList.map((i) => {
    return (
      <div>
        <h3>
          {i.name}
          {i.name === "Abyssal"
            ? langRemoveAbyssal
            : i.name === "Celestial"
            ? langRemoveCelestial
            : i.name === "Common"
            ? langRemoveCommon
            : i.name === "Deep Speech"
            ? langRemoveDeepSpeech
            : i.name === "Draconic"
            ? langRemoveDraconic
            : i.name === "Dwarvish"
            ? langRemoveDwarvish
            : i.name === "Elvish"
            ? langRemoveElvish
            : i.name === "Giant"
            ? langRemoveGiant
            : i.name === "Gnomish"
            ? langRemoveGnomish
            : i.name === "Goblin"
            ? langRemoveGoblin
            : i.name === "Halfling"
            ? langRemoveHalfling
            : i.name === "Infernal"
            ? langRemoveInfernal
            : i.name === "Orc"
            ? langRemoveOrc
            : i.name === "Primordial"
            ? langRemovePrimordial
            : i.name === "Sylvan"
            ? langRemoveSylvan
            : i.name === "Undercommon"
            ? langRemoveUndercommon
            : null}
        </h3>
      </div>
    );
  });
  const langDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Languages</h2>
      <Button onClick={openDialogLang} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Languages"
        visible={dialogVisibleLang}
        maximizable
        modal
        onHide={closeDialogLang}
        footer={dialogFooterLang}
      >
        <DataTable
          value={langOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLang}
          onSelectionChange={(e) => setSelectedItemsLang(e.value)}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Special

  const onSpecialSelect = (e) => {
    setSpecialList(e.value);
  };
  const specialDisplay = (
    <div>
      <DataTable
        value={selectedItemsSpecial}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Special Abilities"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );

  const specialDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Special Abilities</h2>
      <Button onClick={openDialogSpecial} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Special Abilities"
        visible={dialogVisibleSpecial}
        maximizable
        modal
        onHide={closeDialogSpecial}
        footer={dialogFooterSpecial}
      >
        <DataTable
          value={specialOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsSpecial}
          onSelectionChange={onSpecialSelect}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Action
  const actionDisplay = (
    <div>
      <DataTable
        value={selectedItemsAction}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Actions"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );
  const actionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Actions</h2>
      <Button onClick={openDialogAction} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Actions"
        visible={dialogVisibleAction}
        maximizable
        modal
        onHide={closeDialogAction}
        footer={dialogFooterAction}
      >
        <DataTable
          value={actionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsAction}
          onSelectionChange={(e) => {
            setActionList(e.value);
          }}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Reaction
  const reactionDisplay = (
    <div>
      <DataTable
        value={selectedItemsReaction}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Reactions"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );
  const reactionDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Reactions</h2>
      <Button onClick={openDialogReaction} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Reactions"
        visible={dialogVisibleReaction}
        maximizable
        modal
        onHide={closeDialogReaction}
        footer={dialogFooterReaction}
      >
        <DataTable
          value={reactionOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsReaction}
          onSelectionChange={(e) => {
            setReactionList(e.value);
          }}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Legendary
  const legendDisplay = (
    <div>
      <DataTable
        value={selectedItemsLegend}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Legendary Actions"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );
  const legendDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Legendary Actions</h2>
      <Button onClick={openDialogLegend} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Legendary Actions"
        visible={dialogVisibleLegend}
        maximizable
        modal
        onHide={closeDialogLegend}
        footer={dialogFooterLegend}
      >
        <DataTable
          value={legendOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLegend}
          onSelectionChange={(e) => {
            setLegendList(e.value);
          }}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Lair
  const lairDisplay = (
    <div>
      <DataTable
        value={selectedItemsLair}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Lair Actions"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );
  const lairDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Lair Actions</h2>
      <Button onClick={openDialogLair} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Lair Actions"
        visible={dialogVisibleLair}
        maximizable
        modal
        onHide={closeDialogLair}
        footer={dialogFooterLair}
      >
        <DataTable
          value={lairOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLair}
          onSelectionChange={(e) => {
            setLairList(e.value);
          }}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //Gear
  const gearDisplay = (
    <div>
      <DataTable
        value={selectedItemsGear}
        scrollable
        rows={20}
        dataKey="name"
        filters={filters}
        filterDisplay="row"
        responsiveLayout="scroll"
        globalFilterFields={["name"]}
        emptyMessage="No items found."
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        rowHover
        resizableColumns
        reorderableColumns
        reorderableRows
      >
        <Column
          header="Gear"
          field="name"
          sortable
          filter
          filterPlaceholder="Search"
        ></Column>
      </DataTable>
    </div>
  );
  const gearDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Gear</h2>
      <Button onClick={openDialogGear} className={style.monstergenBtnName}>
        Add / Remove
      </Button>
      <Dialog
        header="Gear"
        visible={dialogVisibleGear}
        maximizable
        modal
        onHide={closeDialogGear}
        footer={dialogFooterGear}
      >
        <DataTable
          value={gearOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsGear}
          onSelectionChange={(e) => {
            setGearList(e.value);
          }}
          //   selectionPageOnly
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.monstergenBtnName}>
        Random
      </Button>
    </div>
  );
  const nameText = customInputText(
    "Monster Name",
    name,
    onNameChange,
    "Set Name",
    onRandomName
  );

  //InputNumbers
  const customInputNumber = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.monstergenTitles}>{title}</h2>
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
      <Button onClick={click} className={style.monstergenBtnName}>
        Random
      </Button>
    </div>
  );

  const hpInput = customInputNumber("HP", hp, onHpChange, "Set HP", onRandomHp);
  const speedInput = customInputNumber(
    "Speed",
    speed,
    onSpeedChange,
    "Set Speed",
    onRandomSpeed
  );
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

  //Generate and Clear
  const onGenerate = (e) => {
    if (name === "") {
      onRandomName();
    }

    const ifBlank = (value, setValue, options, max, min) => {
      if (value === "") {
        let r = Math.round(Math.random() * (max - min) + 1);
        setValue(options[r].name);
      } else {
        setValue(value);
      }
    };
    ifBlank(size, setSize, sizeOptions, 6, 1);
    ifBlank(type, setType, typeOptions, 16, 1);
    ifBlank(align, setAlign, alignOptions, 9, 1);
    ifBlank(ac, setAc, acOptions, 30, 1);
    ifBlank(armorType, setArmorType, armorTypeOptions, 14, 1);

    // ifBlank(lair, setLair, lairOptions, 39, 1)
    //TODO
    // ifBlank(save, setSave, saveOptions, 11, 1)

    const ifBlank2 = (value, setValue, max, min) => {
      if (value === "") {
        let r = Math.round(Math.random() * (max - min) + 1);
        setValue(r);
      } else {
        setValue(value);
      }
    };
    ifBlank2(hp, setHp, 500, 0);
    ifBlank2(speed, setSpeed, 120, 0);
    ifBlank2(str, setStr, 30, 0);
    ifBlank2(dex, setDex, 30, 0);
    ifBlank2(con, setCon, 30, 0);
    ifBlank2(int, setInt, 30, 0);
    ifBlank2(wis, setWis, 30, 0);
    ifBlank2(cha, setCha, 30, 0);
    ifBlank2(str, setStr, 30, 0);
    ifBlank2(dex, setDex, 30, 0);
    ifBlank2(con, setCon, 30, 0);
    ifBlank2(int, setInt, 30, 0);
    ifBlank2(wis, setWis, 30, 0);
    ifBlank2(cha, setCha, 30, 0);

    if (speedExtraList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSpeedExtraList((speedArray) => [...speedArray, speedTypeOptions[r]]);
      }
    }
    if (speedExtraList) {
      let y = Math.round(Math.random() * (120 - 5));
      if (!burrow) {
        setBurrow(y);
      }
      if (!climb) {
        setClimb(y);
      }
      if (!hover) {
        setHover(y);
      }
      if (!fly) {
        setFly(y);
      }
      if (!swim) {
        setSwim(y);
      }
    }

    if (saveList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSaveList((saveArray) => [...saveArray, saveOptions[r]]);
      }
    }
    if (saveList) {
      let y = Math.round(Math.random() * (10 - 1));
      if (!saveStr) {
        setSaveStr(y);
      }
      if (!saveDex) {
        setSaveDex(y);
      }
      if (!saveCon) {
        setSaveCon(y);
      }
      if (!saveWis) {
        setSaveWis(y);
      }
      if (!saveCha) {
        setSaveCha(y);
      }
      if (!saveInt) {
        setSaveInt(y);
      }
    }
    if (skillList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSkillList((saveArray) => [...saveArray, skillOptions[r]]);
      }
    }
    if (skillList) {
      let y = Math.round(Math.random() * (10 - 1));
      if (!skillAcrobatics) {
        setSkillAcrobatics(y);
      }
      if (!skillAnimal) {
        setSkillAnimal(y);
      }
      if (!skillArcana) {
        setSkillArcana(y);
      }
      if (!skillAthletics) {
        setSkillAthletics(y);
      }
      if (!skillDeception) {
        setSkillDeception(y);
      }
      if (!skillHistory) {
        setSkillHistory(y);
      }
      if (!skillInsight) {
        setSkillInsight(y);
      }
      if (!skillIntimidation) {
        setSkillIntimidation(y);
      }
      if (!skillInvestigation) {
        setSkillInvestigation(y);
      }
      if (!skillMedicine) {
        setSkillMedicine(y);
      }
      if (!skillNature) {
        setSkillNature(y);
      }
      if (!skillPerception) {
        setSkillPerception(y);
      }
      if (!skillPerformance) {
        setSkillPerformance(y);
      }
      if (!skillPersuasion) {
        setSkillPersuasion(y);
      }
      if (!skillReligion) {
        setSkillReligion(y);
      }
      if (!skillSleight) {
        setSkillSleight(y);
      }
      if (!skillStealth) {
        setSkillStealth(y);
      }
      if (!skillSurvival) {
        setSkillSurvival(y);
      }
    }

    if (senseList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (4 - 0));
        setSenseList((speedArray) => [...speedArray, senseOptions[r]]);
      }
    }
    if (senseList) {
      let y = Math.round(Math.random() * (120 - 5));
      if (!senseBlindsight) {
        setSenseBlindsight(y);
      }
      if (!senseDarkvision) {
        setSenseDarkvision(y);
      }
      if (!senseTremorsense) {
        setSenseTremorsense(y);
      }
      if (!senseTruesight) {
        setSenseTruesight(y);
      }
    }
    if (vulnList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (17 - 0));
        setVulnList((speedArray) => [...speedArray, vulnOptions[r]]);
      }
    }
    if (immuneList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (17 - 0));
        setImmuneList((speedArray) => [...speedArray, immuneOptions[r]]);
      }
    }
    if (resistList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (17 - 0));
        setResistList((speedArray) => [...speedArray, resistOptions[r]]);
      }
    }
    if (conditionList.length === 0) {
      let x = Math.round(Math.random() * (1 - 0));
      if (x === 1) {
        let r = Math.round(Math.random() * (15 - 0));
        setConditionList((speedArray) => [...speedArray, conditionOptions[r]]);
      }
    }

    if (langList.length === 0) {
      let r = Math.round(Math.random() * (16 - 1));
      setLangList((speedArray) => [...speedArray, langOptions[r]]);
    }

    if (actionList.length === 0) {
      let r = Math.round(Math.random() * (292 - 1));
      let z = Math.round(Math.random() * (292 - 1));
      let x = Math.round(Math.random() * (2 - 0));
      setActionList((speedArray) => [...speedArray, actionOptions[r]]);
      if (x === 1) {
        setActionList((speedArray) => [...speedArray, actionOptions[z]]);
      }
    }

    if (specialList.length === 0) {
      let r = Math.round(Math.random() * (208 - 1));
      let z = Math.round(Math.random() * (208 - 1));
      let x = Math.round(Math.random() * (2 - 0));
      setSpecialList((speedArray) => [...speedArray, specialOptions[r]]);
      if (x === 1) {
        setSpecialList((speedArray) => [...speedArray, specialOptions[z]]);
      }
    }

    if (legendList.length === 0) {
      let r = Math.round(Math.random() * (35 - 1));
      let z = Math.round(Math.random() * (35 - 1));
      let x = Math.round(Math.random() * (4 - 0));
      setLegendList((speedArray) => [...speedArray, legendOptions[r]]);
      if (x === 1) {
        setLegendList((speedArray) => [...speedArray, legendOptions[z]]);
      }
    }
  };

  const onClear = (e) => {
    setName("");
    setSize("");
    setType("");
    setAlign("");
    setAc("");
    setArmorType("");
    setHp("");
    setSpeed("");
    setSpeedType("");
    setSpeedExtra("");
    setStr("");
    setDex("");
    setCon("");
    setInt("");
    setWis("");
    setCha("");
    setSave("");
    setSkill("");
    setVuln("");
    setImmune("");
    setResist("");
    setCondition("");
    setSense("");
    setLang("");
    setSpecial("");
    setAction("");
    setReaction("");
    setLegend("");
    setLair("");
    setGear("");
    setSpeedExtraList([]);
    setBurrow("");
    setClimb("");
    setHover("");
    setFly("");
    setSwim("");
    setSaveList([]);
    setSaveStr("");
    setSaveDex("");
    setSaveCon("");
    setSaveInt("");
    setSaveWis("");
    setSaveCha("");
    setSkillList([]);
    setSkillAcrobatics("");
    setSkillAnimal("");
    setSkillArcana("");
    setSkillAthletics("");
    setSkillDeception("");
    setSkillHistory("");
    setSkillInsight("");
    setSkillIntimidation("");
    setSkillInvestigation("");
    setSkillMedicine("");
    setSkillNature("");
    setSkillPerception("");
    setSkillPerformance("");
    setSkillPersuasion("");
    setSkillReligion("");
    setSkillSleight("");
    setSkillStealth("");
    setSkillSurvival("");
    setVulnList([]);
    setImmuneList([]);
    setResistList([]);
    setConditionList([]);
    setSenseList([]);
    setSenseDarkvision("");
    setSenseBlindsight("");
    setSenseTremorsense("");
    setSenseTruesight("");
    setLangList([]);
    setSpecialList([]);
    setActionList([]);
    setReactionList([]);
    setLegendList([]);
    setLairList([]);
    setGearList([]);
  };
  //Showoptions
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showAbility = (e) => {
    setIsAbilityActive((current) => !current);
  };
  const showSSD = (e) => {
    setIsSSDActive((current) => !current);
  };
  const showAA = (e) => {
    setIsAAActive((current) => !current);
  };
  const showDT = (e) => {
    setIsDTActive((current) => !current);
  };
  const showGear = (e) => {
    setIsGearActive((current) => !current);
  };
  //Map items for display
  const mapExtraSpeeds = speedExtraList.map((i) => {
    return ` ${i.name} ${
      i.name === "Burrow"
        ? burrow
        : i.name === "Climb"
        ? climb
        : i.name === "Fly"
        ? fly
        : i.name === "Hover"
        ? hover
        : i.name === "Swim"
        ? swim
        : null
    } ft., `;
  });

  useEffect(() => {
    let modifierList = [
      "-5",
      "-4",
      "-3",
      "-2",
      "-1",
      "+0",
      "+1",
      "+2",
      "+3",
      "+4",
      "+5",
      "+6",
      "+7",
      "+8",
      "+9",
      "+10",
    ];

    const onAbilityModChange = (abilityType, setAbilityMod) => {
      if (abilityType <= 1) {
        setAbilityMod(modifierList[0]);
      } else if (abilityType <= 3) {
        setAbilityMod(modifierList[0]);
      } else if (abilityType <= 5) {
        setAbilityMod(modifierList[1]);
      } else if (abilityType <= 7) {
        setAbilityMod(modifierList[2]);
      } else if (abilityType <= 9) {
        setAbilityMod(modifierList[3]);
      } else if (abilityType <= 11) {
        setAbilityMod(modifierList[4]);
      } else if (abilityType <= 13) {
        setAbilityMod(modifierList[5]);
      } else if (abilityType <= 15) {
        setAbilityMod(modifierList[6]);
      } else if (abilityType <= 17) {
        setAbilityMod(modifierList[7]);
      } else if (abilityType <= 19) {
        setAbilityMod(modifierList[8]);
      } else if (abilityType <= 21) {
        setAbilityMod(modifierList[9]);
      } else if (abilityType <= 23) {
        setAbilityMod(modifierList[10]);
      } else if (abilityType <= 25) {
        setAbilityMod(modifierList[11]);
      } else if (abilityType <= 27) {
        setAbilityMod(modifierList[12]);
      } else if (abilityType <= 29) {
        setAbilityMod(modifierList[13]);
      } else if (abilityType <= 30) {
        setAbilityMod(modifierList[14]);
      }
    };
    onAbilityModChange(str, setStrMod);
    onAbilityModChange(dex, setDexMod);
    onAbilityModChange(con, setConMod);
    onAbilityModChange(int, setIntMod);
    onAbilityModChange(wis, setWisMod);
    onAbilityModChange(cha, setChaMod);
  }, [str, dex, con, int, wis, cha]);

  const mapSaves = saveList.map((i) => {
    return ` ${i.name} +${
      i.name === "Strength"
        ? saveStr
        : i.name === "Dexterity"
        ? saveDex
        : i.name === "Constitution"
        ? saveCon
        : i.name === "Wisdom"
        ? saveWis
        : i.name === "Charisma"
        ? saveCha
        : i.name === "Intelligence"
        ? saveInt
        : null
    }, `;
  });
  const mapSkills = skillList.map((i) => {
    return ` ${i.name} +${
      i.name === "Acrobatics"
        ? skillAcrobatics
        : i.name === "Animal Handling"
        ? skillAnimal
        : i.name === "Arcana"
        ? skillArcana
        : i.name === "Athletics"
        ? skillAthletics
        : i.name === "Deception"
        ? skillDeception
        : i.name === "History"
        ? skillHistory
        : i.name === "Insight"
        ? skillInsight
        : i.name === "Intimidation"
        ? skillIntimidation
        : i.name === "Invetigation"
        ? skillInvestigation
        : i.name === "Medicine"
        ? skillMedicine
        : i.name === "Nature"
        ? skillNature
        : i.name === "Perception"
        ? skillPerception
        : i.name === "Performance"
        ? skillPerformance
        : i.name === "Persuasion"
        ? skillPersuasion
        : i.name === "Religion"
        ? skillReligion
        : i.name === "Sleight of Hand"
        ? skillSleight
        : i.name === "Stealth"
        ? skillStealth
        : i.name === "Survival"
        ? skillSurvival
        : null
    }, `;
  });
  const mapSenses = senseList.map((i) => {
    return `${i.name} ${
      i.name === "Blindsight"
        ? senseBlindsight
        : i.name === "Darkvision"
        ? senseDarkvision
        : i.name === "Tremorsense"
        ? senseTremorsense
        : i.name === "Truesight"
        ? senseTruesight
        : null
    } ft., `;
  });
  const mapLangs = langList.map((i) => {
    return `${i.name}, `;
  });
  const mapVulns = vulnList.map((i) => {
    return `${i.name}, `;
  });
  const mapImmunes = immuneList.map((i) => {
    return `${i.name}, `;
  });
  const mapResists = resistList.map((i) => {
    return `${i.name}, `;
  });
  const mapConditions = conditionList.map((i) => {
    return `${i.name}, `;
  });
  const mapSpecials = specialList.map((i) => {
    return (
      <>
        <div>
          {i.name}. <span className={style.minorText2}>{i.desc}</span>
        </div>
      </>
    );
  });
  const mapActions = actionList.map((i) => {
    return (
      <>
        <div>
          {i.name}. <span className={style.minorText2}>{i.desc}</span>
        </div>
      </>
    );
  });
  const mapLegends = legendList.map((i) => {
    return (
      <>
        <div>
          {i.name}. <span className={style.minorText2}>{i.desc}</span>
        </div>
      </>
    );
  });
  const mapLairs = lairList.map((i) => {
    return `${i.name}, `;
  });
  const mapGear = gearList.map((i) => {
    return `${i.name}`;
  });

  return (
    <div className={style.monstergenWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.monstergenHeader}>Monster Generator</h1>

        {/* Generate Btns */}
        <div>
          <div className={style.monstergenBtnWrapper}>
            <button onClick={onGenerate} className={style.monstergenBtnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.monstergenBtnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className={style.monstergenBody}>
        {/* Options */}

        <div className={style.monstergenOptionsWrapper}>
          <div className={style.exportButtons}>
            <h2>Export Monster</h2>
            <div>placeholder for btns</div>
          </div>
          <h1>Monster Options</h1>
          <h1 className={style.monstergenSubHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div
            className={
              isBasicActive ? style.monstergenSubsection : style.hidden
            }
          >
            {nameText}
            {sizeDrop}
            {typeDrop}
            {alignDrop}
            {acDrop}
            {armorTypeDrop}
            {hpInput}
            {speedInput}
            {moveDialog}
            <div className={style.speedContainer}>{extraSpeedDispaly}</div>
          </div>
          <h1 className={style.monstergenSubHeader} onClick={showAbility}>
            Ability Scores
          </h1>
          <div
            className={
              isAbilityActive ? style.monstergenSubsection : style.hidden
            }
          >
            {strInput}
            {dexInput}
            {conInput}
            {intInput}
            {wisInput}
            {chaInput}
          </div>
          <h1 className={style.monstergenSubHeader} onClick={showSSD}>
            Saves & Skills
          </h1>
          <div
            className={isSSDActive ? style.monstergenSubsection : style.hidden}
          >
            {saveDialog}
            <div className={style.speedContainer}>{saveDisplay}</div>
            {skillDialog}
            <div className={style.speedContainer}>{skillDisplay}</div>
            {senseDialog}
            <div className={style.speedContainer}>{senseDisplay}</div>
            {langDialog}
            <div className={style.speedContainer}>{langDisplay}</div>
          </div>
          <h1 className={style.monstergenSubHeader} onClick={showDT}>
            Damage Types
          </h1>
          <div
            className={isDTActive ? style.monstergenSubsection : style.hidden}
          >
            {vulnDialog}
            <div className={style.speedContainer}>{vulnDisplay}</div>
            {immuneDialog}
            <div className={style.speedContainer}>{immuneDisplay}</div>
            {resistDialog}
            <div className={style.speedContainer}>{resistDisplay}</div>
            {conditionDialog}
            <div className={style.speedContainer}>{conditionDisplay}</div>
          </div>
          <h1 className={style.monstergenSubHeader} onClick={showAA}>
            Actions / Abilities
          </h1>
          <div
            className={isAAActive ? style.monstergenSubsection : style.hidden}
          >
            {specialDialog}
            {specialDisplay}
            {actionDialog}
            <div className={style.speedContainer}>{actionDisplay}</div>
            {/* {reactionDialog}
            <div className={style.speedContainer}>{reactionDisplay}</div> */}
            {legendDialog}
            <div className={style.speedContainer}>{legendDisplay}</div>
            {lairDialog}
            <div className={style.speedContainer}>{lairDisplay}</div>
          </div>
          <h1 className={style.monstergenSubHeader} onClick={showGear}>
            Equipment
          </h1>
          <div
            className={isGearActive ? style.monstergenSubsection : style.hidden}
          >
            <div className={style.speedContainer}>{gearDisplay}</div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.monstergenDisplay}>
          <h1>{name}</h1>
          <h2 className={style.minorText1}>
            {size} {type}, {align}
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Armor Class{" "}
            <span className={style.minorText2}>
              {ac} ({armorType})
            </span>
          </h2>
          <h2>
            Hit Points <span className={style.minorText2}>{hp}</span>
          </h2>
          <h2>
            Speed{" "}
            <span className={style.minorText2}>
              {speed} ft., {mapExtraSpeeds}
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h3 className={style.abilityScores}>
            <div>
              <h3>STR</h3>
              <div>
                <span className={style.minorText2}>
                  {str} ({strMod}){" "}
                </span>
              </div>
            </div>
            <div>
              <h3>DEX</h3>
              <div>
                <span className={style.minorText2}>
                  {dex} ({dexMod}){" "}
                </span>
              </div>
            </div>
            <div>
              <h3>CON</h3>
              <div>
                <span className={style.minorText2}>
                  {con} ({conMod}){" "}
                </span>
              </div>
            </div>
          </h3>
          <h3 className={style.abilityScores}>
            <div>
              <h3>INT</h3>
              <div>
                <span className={style.minorText2}>
                  {int} ({intMod})
                </span>
              </div>
            </div>
            <div>
              <h3>WIS</h3>
              <div>
                <span className={style.minorText2}>
                  {wis} ({wisMod})
                </span>
              </div>
            </div>
            <div>
              <h3>CHA</h3>
              <div>
                <span className={style.minorText2}>
                  {cha} ({chaMod})
                </span>
              </div>
            </div>
          </h3>
          <hr className={style.lineBreak} />
          {saveList.length === 0 ? null : (
            <>
              <h2>
                Saving Throws{" "}
                <span className={style.minorText2}>{mapSaves}</span>
              </h2>
            </>
          )}

          {skillList.length === 0 ? null : (
            <>
              <h2>
                Skills <span className={style.minorText2}>{mapSkills}</span>
              </h2>
            </>
          )}

          {vulnList.length === 0 ? null : (
            <>
              <h2>
                Damage Vulnerabilities{" "}
                <span className={style.minorText2}>{mapVulns}</span>
              </h2>
            </>
          )}

          {immuneList.length === 0 ? null : (
            <>
              <h2>
                Damage Immunities{" "}
                <span className={style.minorText2}>{mapImmunes}</span>
              </h2>
            </>
          )}

          {resistList.length === 0 ? null : (
            <>
              <h2>
                Damage Resistances{" "}
                <span className={style.minorText2}>{mapResists}</span>
              </h2>
            </>
          )}
          {conditionList.length === 0 ? null : (
            <>
              <h2>
                Condition Immunities{" "}
                <span className={style.minorText2}>{mapConditions}</span>
              </h2>
            </>
          )}
          {senseList.length === 0 ? null : (
            <>
              <h2>
                Senses <span className={style.minorText2}>{mapSenses}</span>
              </h2>
            </>
          )}
          <h2>
            Languages{" "}
            {langList.length === 0 ? (
              "--"
            ) : (
              <span className={style.minorText2}>{mapLangs}</span>
            )}
          </h2>
          <hr className={style.lineBreak} />
          {specialList.length === 0 ? null : <h2>{mapSpecials}</h2>}
          <h1>Actions</h1>
          <hr className={style.subLineBreak} />
          <h2>{mapActions}</h2>
          {legendList.length === 0 ? null : (
            <>
              <h1>Legendary Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>{mapLegends}</h2>
            </>
          )}
          {lairList.length === 0 ? null : (
            <>
              <h1>Lair Actions</h1>
              <hr className={style.subLineBreak} />
              <h2>{mapLairs}</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonsterGen;
