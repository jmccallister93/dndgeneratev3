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
import ClearButton from "../components/ClearButton";
import { e } from "mathjs";
import RandomButton from "../components/RandomButton";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDropdown from "../components/CustomDropDown";
import CustomDataTable from "../components/CustomDataTable";

const ItemGen = () => {
  // Set state variables
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isAdditionalActive, setIsAdditionalActive] = useState(true);
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
  const [weaponTypes, setWeaponTypes] = useState("");
  const [weaponTypeOptions, setWeaponTypeOptions] = useState("");
  const [weaponProperty, setWeaponProperty] = useState("");
  const [weaponProperties, setWeaponProperties] = useState("");
  const [weaponPropertyOptions, setWeaponPropertyOptions] = useState("");
  const [weaponDmgType, setWeaponDmgType] = useState("");
  const [dmgType, setDmgType] = useState("");
  const [dmgTypes, setDmgTypes] = useState("");
  const [dmgTypeOptions, setDmgTypeOptions] = useState();

  const [vehicleSpeed, setVehicleSpeed] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const [armorAc, setArmorAc] = useState("");
  const [armorAcs, setArmorAcs] = useState("");
  const [armorAcOptions, setArmorAcOptions] = useState("");

  const [armorMod, setArmorMod] = useState("");
  const [armorMods, setArmorMods] = useState("");
  const [armorModOptions, setArmorModOptions] = useState("");

  const [armorStr, setArmorStr] = useState("");
  const [armorStrs, setArmorStrs] = useState("");
  const [armorStrOptions, setArmorStrOptions] = useState("");

  const [stealth, setStealth] = useState("");
  const [stealths, setStealths] = useState("");
  const [stealthOptions, setStealthOptions] = useState("");

  const [abilities, setAbilities] = useState("");
  const [abilitiesOptions, setAbilitiesOptions] = useState("");

  const [abilityModOptions, setAbilityModOptions] = useState("");
  const [abilityMods, setAbilityMods] = useState("");

  const [mountSpeed, setMountSpeed] = useState("");
  const [mountCapacity, setMountCapacity] = useState("");

  const [itemDesc, setItemDesc] = useState("");

  const [selectedItem, setSelectedItem] = useState([]);
  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");
  const [itemList, setItemList] = useState([]);

  const [genItem, setGenItem] = useState();

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
    setItemName(e.target.value);
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

  const onRandomMountSpeed = (e) => {
    let r = Math.floor(Math.random() * 50);
    setMountSpeed(speeds[r]);
  };
  const onRandomMountCapacity = (e) => {
    let r = Math.floor(Math.random() * (2000 - 1));
    setMountCapacity(r);
  };

  const onDescChange = (e) => {
    setItemDesc(e.target.value);
  };
  //Todo Searching
  const onSearchPack = (e) => {};

  //Generate
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
      if (stealth === "") {
        let r = Math.floor(Math.random() * (2 - 1) + 1);
        setStealth(stealthOptions[r]);
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

  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showAdditional = (e) => {
    setIsAdditionalActive((current) => !current);
  };
  const emptyArray = () => {};

  const itemDisplay = selectedItem.map((i) => {
    return <span>{`${i.name},`}</span>;
  });

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
            <ClearButton
              setStringState={[
                setItemName,
                setType,
                setRarity,
                setCurrency,
                setCurrencyValue,
                setWeight,
                setDescription,
                setWeaponDmg,
                setWeaponProperty,
                setWeaponType,
                setDmgType,
                setVehicleSpeed,
                setVehicleCapacity,
                setArmorAc,
                setArmorMod,
                setStealth,
                setArmorStr,
                setMountSpeed,
                setMountCapacity,
                setItemDesc,
                
              ]}
              setArrayState={[setItemList, setSelectedItem]}
            />
          </div>
        </div>
      </div>
      <div className={styleB.body}>
        <div className={styleB.optionsWrapper}>
          <h1>Item Options</h1>
          <h1 className={styleB.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : styleB.hidden}>
            <div>
              <h1>Name</h1>
              <InputText placeholder="Name" onChange={onNameChange} />
              <button className={style.itemgenBtnName}>Random</button>
            </div>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setType}
                setPlural={setTypes}
                setOptions={setTypeOptions}
                h1Title={"Type"}
                placeholder={"Set Type"}
                value={type}
                valueOptions={typeOptions}
              />
              <RandomButton options={typeOptions} setValue={setType} />
            </div>
            <div>
              <CustomDropdown
                tableName={"itemsRarities"}
                setSingular={setRarity}
                setPlural={setRarities}
                setOptions={setRarityOptions}
                h1Title={"Rarity"}
                placeholder={"Set Rarity"}
                value={rarity}
                valueOptions={rarityOptions}
              />
              <RandomButton options={rarityOptions} setValue={setRarity} />
            </div>
            <div>
              <h1>Cost</h1>
              <InputNumber
                value={currencyValue}
                onChange={onCurrencyValueChange}
                placeholder="Value"
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
                onClick={onRandomCurrencyValue}
              >
                Random
              </button>
              <CustomDropdown
                tableName={"itemsCurrencies"}
                setSingular={setCurrency}
                setPlural={setCurrencies}
                setOptions={setCurrencyOptions}
                placeholder={"Set Currency"}
                value={currency}
                valueOptions={currencyOptions}
              />
              <RandomButton options={currencyOptions} setValue={setCurrency} />
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
                Random
              </button>
            </div>
            <h1 className={styleB.subHeader} onClick={showAdditional}>
              Additional Info
            </h1>
            <div className={style.itemgenWeaponAdditionalWrapper}>
              {type === "Weapon" ||
                type === "Vehicle" ||
                type === "Armor" ||
                type === "Equipment Pack" ||
                type === "Mount"}
              {type === "Weapon" ? (
                <div
                  className={
                    isAdditionalActive ? style.subsection : styleB.hidden
                  }
                >
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
                      Random
                    </button>
                    <CustomDropdown
                      tableName={"damageTypes"}
                      setSingular={setDmgType}
                      setPlural={setDmgTypes}
                      setOptions={setDmgTypeOptions}
                      h1Title={"Damage Type"}
                      placeholder={"Set Damage Type"}
                      value={dmgType}
                      valueOptions={dmgTypeOptions}
                    />
                    <RandomButton
                      options={dmgTypeOptions}
                      setValue={setDmgType}
                    />
                    <CustomDropdown
                      tableName={"itemsWeaponTypes"}
                      setSingular={setWeaponType}
                      setPlural={setWeaponTypes}
                      setOptions={setWeaponTypeOptions}
                      h1Title={"Weapon Type"}
                      placeholder={"Set Weapon Type"}
                      value={weaponType}
                      valueOptions={weaponTypeOptions}
                    />
                    <RandomButton
                      options={weaponTypeOptions}
                      setValue={setWeaponType}
                    />
                    {/*TODO Multiple Weapon Properties  */}
                    <CustomDropdown
                      tableName={"itemsWeaponProperties"}
                      setSingular={setWeaponProperty}
                      setPlural={setWeaponProperties}
                      setOptions={setWeaponPropertyOptions}
                      h1Title={"Weapon Property"}
                      placeholder={"Set Weapon Property"}
                      value={weaponProperty}
                      valueOptions={weaponPropertyOptions}
                    />
                    <RandomButton
                      options={weaponPropertyOptions}
                      setValue={setWeaponProperty}
                    />
                  </div>
                </div>
              ) : null}
              {type === "Vehicle" ? (
                <div
                  className={
                    isAdditionalActive ? style.subsection : styleB.hidden
                  }
                >
                  <div className={style.subsection}>
                    <h1>Vehicle Speed</h1>
                    <div>
                      <InputNumber
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
                        Random
                      </button>
                    </div>
                    <div>
                      <h1>Vehicle Carry Capacity</h1>
                      <InputNumber
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
                        step={5}
                      />
                      <button
                        className={style.itemgenBtnName}
                        onClick={onRandomVehicleCapacity}
                      >
                        Random
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
              {type === "Armor" ? (
                <div
                  className={
                    isAdditionalActive ? style.subsection : styleB.hidden
                  }
                >
                  <div>
                    <CustomInputNumber
                      tableName={"acs"}
                      h1Title={"Armor Class"}
                      value={armorAc}
                      placeholder={"Armor Class"}
                      setSingular={setArmorAc}
                      setPlural={setArmorAcs}
                      setOptions={setArmorAcOptions}
                    />
                    <RandomButton
                      options={armorAcOptions}
                      setValue={setArmorAc}
                    />
                    <CustomDropdown
                      tableName={"abilities"}
                      setSingular={setArmorMod}
                      setPlural={setArmorMods}
                      setOptions={setArmorModOptions}
                      h1Title={"Armor Modifier"}
                      placeholder={"Set Armor Modifier"}
                      value={armorMod}
                      valueOptions={armorModOptions}
                    />
                    <RandomButton
                      options={armorModOptions}
                      setValue={setArmorMod}
                    />
                    <CustomInputNumber
                      tableName={"armorStrReq"}
                      h1Title={"Strength Requirement"}
                      value={armorStr}
                      placeholder={"Armor Str Req"}
                      setSingular={setArmorStr}
                      setPlural={setArmorStrs}
                      setOptions={setArmorStrOptions}
                    />
                    <RandomButton
                      options={armorStrOptions}
                      setValue={setArmorStr}
                    />
                    <CustomDropdown
                      tableName={"yesOrNo"}
                      setSingular={setStealth}
                      setPlural={setStealths}
                      setOptions={setStealthOptions}
                      h1Title={"Stealth Disadvantage"}
                      placeholder={"Set Stealth Disadvantage"}
                      value={stealth}
                      valueOptions={stealthOptions}
                    />
                    <RandomButton
                      options={stealthOptions}
                      setValue={setStealth}
                    />
                  </div>
                </div>
              ) : null}
              {type === "Equipment Pack" ? (
                <div
                  className={
                    isAdditionalActive ? style.subsection : styleB.hidden
                  }
                >
                  <div className={style.subsection}>
                    <Items
                      h1Title={"Items"}
                      dialogHeader={"Items"}
                      selectedItem={selectedItem}
                      setSelectedItem={setSelectedItem}
                      header={header}
                      itemList={itemList}
                      setItemList={setItemList}
                      valueOptions={itemOptions}
                      options={itemOptions}
                    />
                  </div>
                </div>
              ) : null}
              {type === "Mount" ? (
                <div
                  className={
                    isAdditionalActive ? style.subsection : styleB.hidden
                  }
                >
                  <div className={style.subsection}>
                    <h1>Mount Speed</h1>
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
                        Random
                      </button>
                    </div>
                    <h1>Mount Carry Capacity</h1>
                    <div>
                      <InputNumber
                        value={mountCapacity}
                        placeholder="Carry Capacity"
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
                        onClick={onRandomMountCapacity}
                      >
                        Random
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
              <div
                className={
                  isAdditionalActive ? style.subsection : styleB.hidden
                }
              >
                <div>
                  <h1>Description</h1>
                  <InputTextarea
                    value={itemDesc}
                    onChange={onDescChange}
                    placeholder="Item Description"
                  />
                  <button
                    className={style.itemgenBtnName}
                    onClick={onRandomDescription}
                  >
                    Random
                  </button>
                </div>
              </div>
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
                Damage <span className={styleB.minorText2}>{weaponDmg}</span>
              </h2>
              <h2>
                Damage Type <span className={styleB.minorText2}>{dmgType}</span>
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
          {type === "Armor" ? (
            <>
              <h2>
                AC <span className={styleB.minorText2}>{armorAc}</span>
              </h2>
              <h2>
                Modifier <span className={styleB.minorText2}>{armorMod}</span>
              </h2>
              <h2>
                Strength Requirement{" "}
                <span className={styleB.minorText2}>{armorStr}</span>
              </h2>
              <h2>
                Stealth Disadvantage{" "}
                <span className={styleB.minorText2}>{stealth}</span>
              </h2>
            </>
          ) : null}

          {type === "Vehicle" ? (
            <>
              <h2>
                Speed <span className={styleB.minorText2}>{vehicleSpeed}</span>
              </h2>
              <h2>
                Carry Capacity{" "}
                <span className={styleB.minorText2}>{vehicleCapacity}</span>
              </h2>
            </>
          ) : null}

          {type === "Mount" ? (
            <>
              <h2>
                Speed <span className={styleB.minorText2}>{mountSpeed}</span>
              </h2>
              <h2>
                Carry Capcity{" "}
                <span className={styleB.minorText2}>{mountCapacity}</span>
              </h2>
            </>
          ) : null}

          {type === "Equipment Pack" ? (
            <>
              <h2>
                Items <span className={styleB.minorText2}>{itemDisplay}</span>
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
