import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../stylesheets/ItemGen.module.scss";
import styleB from "../stylesheets/BuildingGen.module.scss";
import supabase from "../config/supabaseClient";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";
import GetData from "../components/GetData";
import { Get } from "react-axios";
import useFetch from "../components/useFetch";
import Items from "../components/Items";

const ItemGen = () => {
  // Set state variables
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isRoomActive, setIsRoomActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);

  const [allItems, setAllItems] = useState();

  const [itemName, setItemName] = useState("");

  const [adventuringGear, setAdventuringGear] = useState();
  const [adventuringGearOptions, setAdventuringGearOptions] = useState();

  const [armor, setArmor] = useState();
  const [armorOptions, setArmorOptions] = useState();

  const [art, setArt] = useState();
  const [artOptions, setArtOptions] = useState();

  const [container, setContainer] = useState();
  const [containerOptions, setContainerOptions] = useState();

  const [pack, setPack] = useState();
  const [packOptions, setPackOptions] = useState();

  const [expense, setExpense] = useState();
  const [expenseOptions, setExpenseOptions] = useState();

  const [gemstone, setGemstone] = useState();
  const [gemstoneOptions, setGemstoneOptions] = useState();

  const [magic, setMagic] = useState();
  const [magicOptions, setMagicOptions] = useState();

  const [mountItem, setMountItem] = useState();
  const [mountItemOptions, setMountItemOptions] = useState();

  const [mount, setMount] = useState();
  const [mountOptions, setMountOptions] = useState();

  const [tool, setTool] = useState();
  const [toolOptions, setToolOptions] = useState();

  const [tradeGood, setTradeGood] = useState();
  const [tradeGoodOptions, setTradeGoodOptions] = useState();

  const [trinket, setTrinket] = useState();
  const [trinketOptions, setTrinketOptions] = useState();

  const [vehicle, setVehicle] = useState();
  const [vehicleOptions, setVehicleOptions] = useState();

  const [weapon, setWeapon] = useState("");
  const [weaponOptions, setWeaponOptions] = useState();

  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();
  const [showTypeInput, setShowTypeInput] = useState(false);

  const [rarity, setRarity] = useState("");
  const [rarities, setRarities] = useState();
  const [rarityOptions, setRarityOptions] = useState();
  const [showRarityInput, setShowRarityInput] = useState(false);

  const [currency, setCurrency] = useState("");
  const [currencies, setCurrencies] = useState();
  const [currencyOptions, setCurrencyOptions] = useState();
  const [showCurrencyInput, setShowCurrencyInput] = useState(false);

  const [currencyValue, setCurrencyValue] = useState("");

  const [cost, setCost] = useState("");

  const [weight, setWeight] = useState("");

  const [description, setDescription] = useState("");
  const [descriptionOptions, setDescriptionOptions] = useState();

  const [additional, setAddtional] = useState();
  const [additionals, setAdditionals] = useState();
  const [additionalOptions, setAdditionalOptions] = useState();

  const [weaponDmg, setWeaponDmg] = useState("");
  const [weaponType, setWeaponType] = useState("");
  const [weaponProperty, setWeaponProperty] = useState("");
  const [weaponDmgType, setWeaponDmgType] = useState("");
  const [dmgType, setDmgType] = useState("");
  const [dmgTypes, setDmgTypes] = useState("");
  const [dmgTypeOptions, setDmgTypeOptions] = useState();

  const [vehicleSpeed, setVehicleSpeed] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const [armorAc, setArmorAc] = useState("");
  const [armorMod, setArmorMod] = useState("");
  const [armorStr, setArmorStr] = useState("");
  const [armorStealth, setArmorStealth] = useState("");

  const [abilities, setAbilities] = useState("");
  const [abilitiesOptions, setAbilitiesOptions] = useState("");

  const [abilityModOptions, setAbilityModOptions] = useState("");
  const [abilityMods, setAbilityMods] = useState("");

  const [mountSpeed, setMountSpeed] = useState("");
  const [mountCapacity, setMountCapacity] = useState("");

  const [itemDesc, setItemDesc] = useState("")

  const [genItem, setGenItem] = useState();

  //Pull Data
  //Item Types
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("itemsTypes")
        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setType(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTypes(data);
        setTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
  //Rarities
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("itemsRarities")
        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setRarity(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setRarities(data);
        setRarityOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
  //Currencies
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("itemsCurrencies")
        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setCurrency(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setCurrencies(data);
        setCurrencyOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
  //damageTypes
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("damageTypes")
        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setDmgTypes(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setDmgTypes(data);
        setDmgTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);
  //Ability Modifiers
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("abilitiesModifiers")

        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setAbilityMods(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setAbilityMods(data);
        setAbilityModOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);
  //Abilities
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("abilities")
        .select()
        .order("id");
      if (error) {
        setFetchError("Could not fetch the data");
        setAbilities(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setAbilities(data);
        setAbilitiesOptions(
          data.map((r) => ({ name: r.name, value: r.value }))
        );
      }
    };
    fetchData();
  }, []);
  //Datatable
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    type: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
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

  const weaponTypes = [
    "Random",
    "Simple Melee",
    "Simple Ranged",
    "Martial Melee",
    "Martial Ranged",
  ];
  const weaponProperties = [
    "Random",
    "Finesse",
    "Heavy",
    "Light",
    "Range",
    "Reach",
    "Thrown",
    "Two-handed",
    "Versatile",
  ];
  const speeds = [];
  for (let n = 0; n <= 500; n += 10) {
    speeds.push(n);
  }

  const acOptions = [];
  for (let n = 0; n <= 30; n += 1) {
    acOptions.push(n);
  }

  //On change events
  const onNameChange = (e) => {
    setItemName(e.target.value)
  }

  const onTypeChange = (e) => {
    setType(e.value);
    setShowTypeInput(false);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (22 - 2) + 2);
      setType(typeOptions[r].name);
    }
    if (e.value === "Custom") {
      setShowTypeInput(true);
    }
  };

  useEffect(() => {
    if (type === "Weapon") {
    }
  }, [type]);

  const onTypeCustom = (e) => {
    setType(e.target.value);
  };

  const onRarityChange = (e) => {
    setRarity(e.value);
    setShowRarityInput(false);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (7 - 2) + 2);
      setRarity(rarityOptions[r].name);
    }
    if (e.value === "Custom") {
      setShowRarityInput(true);
    }
  };

  const onRarityCustom = (e) => {
    setRarity(e.target.value);
  };

  const onCurrencyChange = (e) => {
    setCurrency(e.value);
    setShowCurrencyInput(false);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrency(currencyOptions[r].name);
      setCurrencyValue(Math.round(Math.random() * (2000 - 1)));
    }
    if (e.value === "Custom") {
      setShowCurrencyInput(true);
    }
  };

  const onCurrencyCustom = (e) => {
    setCurrency(e.target.value);
  };

  const onCurrencyValueChange = (e) => {
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrencyValue(r);
    }
    setCurrencyValue(e.value);
  };

  const onRandomCurrencyValue = (e) => {
    setCurrencyValue(Math.round(Math.random() * (2000 - 1)));
  };

  useEffect(() => {
    setCost(currencyValue + " " + currency);
  }, [currencyValue][currency]);

  const onWeightChange = (e) => {
    setWeight(e.value);
  };

  const onRandomWeight = (e) => {
    let r = Math.floor(Math.random() * (2000 - 0));
    setWeight(r);
  };
  const onRandomDescription = (e) => {
    setDescription("Random");
  };
  const onRandomWeaponDmg = (e) => {
    const diceOptions = ["d4", "d6", "d8", "d10", "d12", "d20"];
    let dice = Math.floor(Math.random() * (6 - 0));
    let diceChoice = diceOptions[dice];
    let diceAmount = Math.floor(Math.random() * (8 - 0) + 1);
    let add = Math.floor(Math.random() * (20 - 1) + 1);
    setWeaponDmg(`${diceAmount} ${diceChoice} + ${add}`);
  };

  const onWeaponPropertyChange = (e) => {
    setWeaponProperty(e.value);
    if (e.value === "Random") {
      let wp = Math.floor(Math.random() * (9 - 1) + 1);
      let wpChoice = weaponProperties[wp];
      setWeaponProperty(wpChoice);
    } else {
      setWeaponProperty(e.value);
    }
  };
  const onWeaponTypeChange = (e) => {
    setWeaponType(e.value);
    if (e.value === "Random") {
      let wt = Math.floor(Math.random() * (5 - 1) + 1);
      let wtChoice = weaponTypes[wt];
      setWeaponType(wtChoice);
    } else {
      setWeaponType(e.value);
    }
  };

  const onDmgTypeChange = (e) => {
    setDmgType(e.value);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (17 - 1) + 1);
      setDmgType(dmgTypeOptions[r].name);
    }
  };

  const onRandomVehicleSpeed = (e) => {
    let r = Math.floor(Math.random() * 50);
    setVehicleSpeed(speeds[r]);
  };
  const onRandomVehicleCapacity = (e) => {
    let r = Math.floor(Math.random() * (2000 - 1));
    setVehicleCapacity(r);
  };

  const onRandomAc = (e) => {
    let r = Math.floor(Math.random() * 30);
    setArmorAc(acOptions[r]);
  };

  const onChangeArmorMod = (e) => {
    setArmorMod(e.value);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (7 - 1) + 1);
      setArmorMod(abilitiesOptions[r].name);
    }
  };

  const strReq = [
    "Random",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];

  const onChangeArmorStr = (e) => {
    setArmorStr(e.value);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (10 - 1) + 1);
      setArmorStr(strReq[r]);
    }
  };

  const stealthDisadvantage = ["Random", "Yes", "No"];

  const onChangeArmorStealth = (e) => {
    setArmorStealth(e.value);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (2 - 1) + 1);
      setArmorStealth(stealthDisadvantage[r]);
    }
  };

  const onRandomMountSpeed = (e) => {
    let r = Math.floor(Math.random() * 50);
    setMountSpeed(speeds[r]);
  };
  const onRandomMountCapacity = (e) => {
    let r = Math.floor(Math.random() * (2000 - 1));
    setMountCapacity(r);
  };

  const onDescChange = (e) => {
    setItemDesc(e.target.value)
  }
  //Todo Searching
  const onSearchPack = (e) => {};

  //Generate and Clear
  const onGenerate = (e) => {
    if (type === "") {
      let r = Math.floor(Math.random() * (22 - 2) + 2);
      setType(typeOptions[r].name);
    } else {
      setType(type);
    }
    if (rarity === "") {
      let r = Math.floor(Math.random() * (5 - 2) + 2);
      setRarity(rarityOptions[r].name);
    } else {
      setRarity(rarity);
    }
    if (currency === "") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrency(currencyOptions[r].name);
    } else {
      setCurrency(currency);
    }
    if (currencyValue === "") {
      setCurrencyValue(Math.round(Math.random() * (2000 - 1)));
    } else {
      setCurrencyValue(currencyValue);
    }

    setCost(currencyValue + " " + currency);

    if (weight === "") {
      setWeight(Math.round(Math.random() * (2000 - 1)));
    } else {
      setWeight(weight);
    }
    if (description === "") {
      setDescription("Random");
    } else {
      setDescription(description);
    }
    if (type === "Weapon") {
      if (weaponDmg === "") {
        const diceOptions = ["d4", "d6", "d8", "d10", "d12", "d20"];
        let dice = Math.floor(Math.random() * (5 - 0));
        let diceChoice = diceOptions[dice];
        let diceAmount = Math.floor(Math.random() * (8 - 0) + 1);
        let add = Math.floor(Math.random() * (20 - 1) + 1);
        setWeaponDmg(`${diceAmount} ${diceChoice} + ${add}`);
      }
      if (weaponProperty === "") {
        let wp = Math.floor(Math.random() * (9 - 1) + 1);
        let wpChoice = weaponProperties[wp];
        setWeaponProperty(wpChoice);
      }
      if (weaponType === "") {
        let wt = Math.floor(Math.random() * (5 - 1) + 1);
        let wtChoice = weaponTypes[wt];
        setWeaponType(wtChoice);
      }
      if (dmgType === "") {
        let r = Math.floor(Math.random() * (17 - 1) + 1);
        setDmgType(dmgTypeOptions[r].name);
      }
    }
    if (type === "Vehicle") {
      if (vehicleSpeed === "") {
        let r = Math.floor(Math.random() * 50);
        setVehicleSpeed(speeds[r]);
      }
      if (vehicleCapacity === "") {
        let r = Math.floor(Math.random() * (2000 - 1));
        setVehicleCapacity(r);
      }
    }
    if (type === "Armor") {
      if (armorAc === "") {
        let r = Math.floor(Math.random() * 30);
        setArmorAc(acOptions[r]);
      }
      if (armorMod === "") {
        let r = Math.floor(Math.random() * (7 - 1) + 1);
        setArmorMod(abilitiesOptions[r].name);
      }
      if (armorStr === "") {
        let r = Math.floor(Math.random() * 9);
        setArmorStr(strReq[r]);
      }
      if (armorStealth === "") {
        let r = Math.floor(Math.random() * (2 - 1) + 1);
        setArmorStealth(stealthDisadvantage[r]);
      }
    }
    if (type === "Mount") {
      if (mountSpeed === "") {
        let r = Math.floor(Math.random() * 50);
        setMountSpeed(speeds[r]);
      }
      if (mountCapacity === "") {
        let r = Math.floor(Math.random() * (2000 - 1));
        setMountCapacity(r);
      }
    }
  };

  //Clear
  const onClear = (e) => {
    setItemName("");
    setType("");
    setRarity("");
    setCurrency("");
    setCurrencyValue("");
    setWeight("");
    setDescription("");
    setWeaponDmg("");
    setWeaponProperty("");
    setWeaponType("");
    setDmgType("");
    setVehicleSpeed("");
    setVehicleCapacity("");
    setArmorAc("");
    setArmorMod("");
    setArmorStealth("");
    setArmorStr("");
    setMountSpeed("");
    setMountCapacity("");
    setItemDesc("")
  };
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };


  return (
    <div className={styleB.mainWrapper}>
      <Navbar />
      <div className={styleB.topHeader}>
        <h1 className={styleB.mainHeader}>Item Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={styleB.btnWrapper}>
            <button onClick={onGenerate} className={styleB.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={styleB.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      <div className={styleB.body}>
        <div className={styleB.optionsWrapper}>
          <h1>Item Options</h1>
          <h1 className={styleB.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? styleB.subsection : styleB.hidden}>
            <div>
              <h1>Name</h1>
              <InputText placeholder="Name" onChange={onNameChange}/>
              <button className={style.itemgenBtnName}>Randomize</button>
            </div>

            <div>
              <h1>Type</h1>
              {showTypeInput ? (
                <InputText onChange={onTypeCustom} placeholder="Type" />
              ) : null}
              <Dropdown
                optionLabel="name"
                value={type}
                options={typeOptions}
                onChange={onTypeChange}
                placeholder={showTypeInput ? "Custom" : "Choose Type"}
              />
            </div>
            <div>
              <h1>Rarity</h1>
              {showRarityInput ? (
                <InputText onChange={onRarityCustom} placeholder="Rarity" />
              ) : null}
              <Dropdown
                optionLabel="name"
                value={rarity}
                options={rarityOptions}
                onChange={onRarityChange}
                placeholder={showRarityInput ? "Custom" : "Choose Rarity"}
              />
            </div>
            <div>
              <h1>Cost</h1>
              <InputNumber
                value={currencyValue}
                onChange={onCurrencyValueChange}
                placeholder="Value"
                mode="decimal"
                showButtons
                // buttonLayout="currency"
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button
                className={style.itemgenBtnName}
                onClick={onRandomCurrencyValue}
              >
                Randomize
              </button>
              {showCurrencyInput ? (
                <InputText onChange={onCurrencyCustom} placeholder="Currency" />
              ) : null}
              <Dropdown
                optionLabel="name"
                value={currency}
                options={currencyOptions}
                onChange={onCurrencyChange}
                placeholder={showTypeInput ? "Currency" : "Choose Currency"}
              />
            </div>
            <div>
              <h1>Weight</h1>
              <InputNumber
                value={weight}
                onChange={onWeightChange}
                placeholder="Weight"
                mode="decimal"
                showButtons
                buttonLayout="currency"
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
                minFractionDigits={0}
                maxFractionDigits={2}
              />
              <button className={style.itemgenBtnName} onClick={onRandomWeight}>
                Randomize
              </button>
            </div>
            <div>
              <h1>Description</h1>
              <InputTextarea value={itemDesc} onChange={onDescChange} placeholder="Item Description"/>
              <button
                className={style.itemgenBtnName}
                onClick={onRandomDescription}
              >
                Randomize
              </button>
            </div>
            <div className={style.itemgenWeaponAdditionalWrapper}>
              {type === "Weapon" ||
              type === "Vehicle" ||
              type === "Armor" ||
              type === "Equipment Pack" ||
              type === "Mount" ? (
                <h1>Additional</h1>
              ) : null}
              {type === "Weapon" ? (
                <div>
                  <InputText
                    value={weaponDmg}
                    mode="decimal"
                    showButtons
                    buttonLayout="currency"
                    placeholder="Damage Amount"
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomWeaponDmg}
                  >
                    Randomize
                  </button>
                  <Dropdown
                    optionLabel="name"
                    value={dmgType}
                    options={dmgTypeOptions}
                    onChange={onDmgTypeChange}
                    placeholder="Damage Type"
                  />
                  <Dropdown
                    value={weaponType}
                    options={weaponTypes}
                    onChange={onWeaponTypeChange}
                    placeholder="Weapon Type"
                  />
                  <Dropdown
                    value={weaponProperty}
                    options={weaponProperties}
                    onChange={onWeaponPropertyChange}
                    placeholder="Weapon Property"
                  />
                </div>
              ) : null}
              {type === "Vehicle" ? (
                <div>
                  <InputNumber
                    style={{ display: "flex" }}
                    value={vehicleSpeed}
                    placeholder="Speed"
                    mode="decimal"
                    showButtons
                    buttonLayout="currency"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    minFractionDigits={0}
                    maxFractionDigits={3}
                    step={5}
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomVehicleSpeed}
                  >
                    Randomize
                  </button>
                  <InputNumber
                    style={{ display: "flex" }}
                    value={vehicleCapacity}
                    placeholder="Carry Capacity"
                    mode="decimal"
                    showButtons
                    buttonLayout="currency"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    minFractionDigits={0}
                    maxFractionDigits={2}
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomVehicleCapacity}
                  >
                    Randomize
                  </button>
                </div>
              ) : null}
              {type === "Armor" ? (
                <div>
                  <InputNumber
                    style={{ display: "flex" }}
                    value={armorAc}
                    placeholder="Armor Class"
                    mode="decimal"
                    showButtons
                    buttonLayout="currency"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    minFractionDigits={0}
                    maxFractionDigits={2}
                  />
                  <button className={style.itemgenBtnName} onClick={onRandomAc}>
                    Randomize
                  </button>
                  <Dropdown
                    optionLabel="name"
                    value={armorMod}
                    options={abilitiesOptions}
                    onChange={onChangeArmorMod}
                    placeholder="Modifier"
                  />
                  <Dropdown
                    value={armorStr}
                    options={strReq}
                    placeholder="Strength Req."
                    onChange={onChangeArmorStr}
                  />
                  <Dropdown
                    value={armorStealth}
                    options={stealthDisadvantage}
                    placeholder="Stealth Disadvantage"
                    onChange={onChangeArmorStealth}
                  />
                </div>
              ) : null}
              {type === "Equipment Pack" ? (
                <div>
                  <InputText placeholder="Contains" />
                  <button
                    className={style.itemgenBtnSearch}
                    onClick={onSearchPack}
                  >
                    <i className="pi pi-search"></i>
                  </button>
                </div>
              ) : null}
              {type === "Mount" ? (
                <div>
                  <InputNumber
                    value={mountSpeed}
                    placeholder="Speed"
                    mode="decimal"
                    showButtons
                    buttonLayout="currency"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    step={5}
                    minFractionDigits={0}
                    maxFractionDigits={2}
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomMountSpeed}
                  >
                    Randomize
                  </button>
                  <InputNumber
                    value={mountCapacity}
                    placeholder="Carry Capacity"
                    mode="decimal"
                    showButtons
                    // buttonLayout="currency"
                    decrementButtonClassName="p-button-secondary"
                    incrementButtonClassName="p-button-secondary"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    minFractionDigits={0}
                    maxFractionDigits={2}
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomMountCapacity}
                  >
                    Randomize
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={styleB.display}>
          <h1>{itemName}</h1>
          <h2>
            Type <span className={styleB.minorText2}>{type}</span>
          </h2>
          <h2>
            Rarity <span className={styleB.minorText2}>{rarity}</span>
          </h2>
          <h2>
            Cost <span className={styleB.minorText2}>{cost}</span>
          </h2>
          <h2>
            Weight <span className={styleB.minorText2}>{weight}</span>
          </h2>

          {type === "Weapon" ? (
            <>
              <h2>
                Damage
                <span className={styleB.minorText2}>{weaponDmg}</span>
              </h2>
              <h2>
                Damage Type
                <span className={styleB.minorText2}>{dmgType}</span>
              </h2>
              <h2>
                Weapon Type{" "}
                <span className={styleB.minorText2}>{weaponType}</span>{" "}
              </h2>
              <h2>
                Weapon Property{" "}
                <span className={styleB.minorText2}>{weaponProperty}</span>
              </h2>
            </>
          ) : null}

          {type === "Vehicle" ? (
            <>
              <h2>
                Speed
                <span className={styleB.minorText2}>{vehicleSpeed}</span>
              </h2>
              <h2>
                Carry Capacity
                <span className={styleB.minorText2}>{vehicleCapacity}</span>
              </h2>
            </>
          ) : null}

          {type === "Mount" ? (
            <>
              <h2>
                Speed
                <span className={styleB.minorText2}>{mountSpeed}</span>
              </h2>
              <h2>
                Speed
                <span className={styleB.minorText2}>{mountCapacity}</span>
              </h2>
            </>
          ) : null}

          {type === "Equipment Pack" ? (
            <>
              <h2>
                Items
                <span className={styleB.minorText2}>{}</span>
              </h2>
            </>
          ) : null}
          <h2>
            Description 
            <div>
            <span className={styleB.minorText2}>{itemDesc}</span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ItemGen;
