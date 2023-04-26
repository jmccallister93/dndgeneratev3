import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { Tooltip } from "primereact/tooltip";
import { InputTextarea } from "primereact/inputtextarea";
import Items from "../components/Items";
import ClearButton from "../components/ClearButton";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDropdown from "../components/CustomDropDown";
import GenerateButton from "../components/GenerateButton";
import CustomName from "../components/CustomName";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import MultipleDisplay from "../components/MultipleDisplay";
import InfoModal from "../components/InfoModal";
import ExportButtons from "../components/ExportButtons";
import SectionRandom from "../components/SectionRandom";
import EditText from "../components/EditText";

const ItemGen = () => {
  sessionStorage.setItem("lastUrl", window.location.href);

  // Set state variables
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isAdditionalActive, setIsAdditionalActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isRoomActive, setIsRoomActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const [allItems, setAllItems] = useState();

  const [itemName, setItemName] = useState("");
  const [itemNames, setItemNames] = useState("");
  const [itemNameOptions, setItemNameOptions] = useState();

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

  const [dice, setDice] = useState("");
  const [dices, setDices] = useState("");
  const [diceOptions, setDiceOptions] = useState();

  const [diceCount, setDiceCount] = useState("");
  const [diceCounts, setDiceCounts] = useState("");
  const [diceCountOptions, setDiceCountOptions] = useState();

  const [diceBonus, setDiceBonus] = useState("");
  const [diceBonuses, setDiceBonuses] = useState("");
  const [diceBonusOptions, setDiceBonusOptions] = useState();

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

  const divRef = useRef(null);
  const [isExported, setIsExported] = useState(false);
  const [doc, setDoc] = useState(null);

  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showAdditional = (e) => {
    setIsAdditionalActive((current) => !current);
  };

  useEffect(() => {
    setCost(currencyValue + " " + currency);
  }, [currencyValue, currency]);

  useEffect(() => {
    setWeaponDmg(diceCount + dice + "+" + diceBonus);
  }, [diceCount, dice, diceBonus]);

  useEffect(() => {
    const genItem = {
      name: itemName,
      type: type,
      rarity: rarity,
      cost: cost,
      weight: weight,
      description: description,
    };
    setGenItem(genItem);
  }, [itemName, type, rarity, cost, weight, description]);
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Items for your games.</p>
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
        <h1 className={style.mainHeader}>Item Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* Generate Clear Btns */}
            <GenerateButton
              generateItems={[
                type,
                rarity,
                currency,
                dmgType,
                dice,
                weaponType,
                weaponProperty,
                armorMod,
                stealth,
              ]}
              itemOptions={[
                typeOptions,
                rarityOptions,
                currencyOptions,
                dmgTypeOptions,
                diceOptions,
                weaponTypeOptions,
                weaponPropertyOptions,
                armorModOptions,
                stealthOptions,
              ]}
              setItem={[
                setType,
                setRarity,
                setCurrency,
                setDmgType,
                setDice,
                setWeaponType,

                setArmorMod,
                setWeaponProperty,
                setStealth,
              ]}
              numberItem={[
                currencyValue,
                weight,
                diceCount,
                diceBonus,
                mountSpeed,
                mountCapacity,
                vehicleSpeed,
                vehicleCapacity,
                armorAc,
                armorStr,
              ]}
              setNumberItem={[
                setCurrencyValue,
                setWeight,
                setDiceCount,
                setDiceBonus,
                setMountSpeed,
                setMountCapacity,
                setVehicleSpeed,
                setVehicleCapacity,
                setArmorAc,
                setArmorStr,
              ]}
              maxNumber={[9999, 2000, 10, 20, 500, 2000, 500, 10000, 25, 20]}
              minNumber={[1, 1, 1, 0, 5, 50, 5, 50, 10, 5]}
            />
            <ClearButton
              setStringState={[
                setItemName,
                setType,
                setRarity,
                setCurrency,
                setCurrencyValue,
                setWeight,
                setDescription,
                setDiceCount,
                setDice,
                setDiceBonus,
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
            {/* Export Btns */}
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons
                  div={divRef}
                  data={genItem}
                  tableName={"DBitem"}
                />
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
                  header={"Item Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>
      {/* Main Options Display */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Item Options</h1>
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
              value={[itemName, type, rarity, currency]}
              valueOptions={[
                itemNameOptions,
                typeOptions,
                rarityOptions,
                currencyOptions,
              ]}
              setValue={[setItemName, setType, setRarity, setCurrency]}
              numberItem={[currencyValue, weight]}
              setNumberItem={[setCurrencyValue, setWeight]}
              numberMax={[9999, 2000]}
              numberMin={[1, 1]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={itemName}
                setName={setItemName}
                setNames={setItemNames}
                setNameOptions={setItemNameOptions}
                nameOptions={itemNameOptions}
                title={"Name"}
                placeholder={"Set Name"}
              />
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
            </div>
            <div>
              <h1>Cost</h1>
              <CustomInputNumber
                setSingular={setCurrencyValue}
                value={currencyValue}
                placeholder={"Set Value"}
                maxNumber={10000}
                minNumber={1}
              />
              <CustomDropdown
                tableName={"itemsCurrencies"}
                setSingular={setCurrency}
                setPlural={setCurrencies}
                setOptions={setCurrencyOptions}
                placeholder={"Set Currency"}
                value={currency}
                valueOptions={currencyOptions}
              />
            </div>
            <div>
              <CustomInputNumber
                setSingular={setWeight}
                h1Title={"Weight"}
                value={weight}
                placeholder={"Set Weight"}
                maxNumber={10000}
                minNumber={1}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showAdditional}>
              Additional Info{" "}
              {isAdditionalActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[dice, weaponProperty, weaponType, dmgType, armorMod]}
              valueOptions={[
                diceOptions,
                weaponPropertyOptions,
                weaponTypeOptions,
                dmgTypeOptions,
                armorModOptions,
              ]}
              setValue={[
                setDice,
                setWeaponProperty,
                setWeaponType,
                setDmgType,
                setArmorMod,
              ]}
              numberItem={[
                diceCount,
                diceBonus,
                vehicleSpeed,
                vehicleCapacity,
                armorAc,
                armorStr,
                mountSpeed,
                mountCapacity,
              ]}
              numberMax={[10, 20, 1000, 10000, 30, 30, 500, 1000]}
              numberMin={[1, 0, 5, 5, 1, 1, 5, 5]}
              setNumberItem={[
                setDiceCount,
                setDiceBonus,
                setVehicleSpeed,
                setVehicleCapacity,
                setArmorAc,
                setArmorStr,
                setMountSpeed,
                setMountCapacity,
              ]}
            />
          </div>
          {/* Populate all fields */}
          <div className={style.hidden}>
            <CustomInputNumber
              setSingular={setDiceCount}
              value={diceCount}
              placeholder={"Dice Count"}
              h1Title={"Damage Dice"}
              maxNumber={10}
              minNumber={1}
            />
            <CustomDropdown
              tableName={"diceOptions"}
              setSingular={setDice}
              setPlural={setDices}
              setOptions={setDiceOptions}
              placeholder={"Dice Type"}
              value={dice}
              valueOptions={diceOptions}
            />
            <CustomInputNumber
              setSingular={setDiceBonus}
              value={diceBonus}
              placeholder={"Dmg Bonus"}
              maxNumber={20}
              minNumber={0}
            />
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
            <CustomInputNumber
              setSingular={setVehicleSpeed}
              h1Title={"Speed"}
              value={vehicleSpeed}
              placeholder={"Speed"}
              maxNumber={2000}
              minNumber={10}
            />
            <CustomInputNumber
              setSingular={setVehicleCapacity}
              h1Title={"Capacity"}
              value={vehicleCapacity}
              placeholder={"Capacity"}
              maxNumber={10000}
              minNumber={10}
            />
            <CustomInputNumber
              tableName={"acs"}
              h1Title={"Armor Class"}
              value={armorAc}
              placeholder={"Armor Class"}
              setSingular={setArmorAc}
              setPlural={setArmorAcs}
              setOptions={setArmorAcOptions}
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
            <CustomInputNumber
              tableName={"armorStrReq"}
              h1Title={"Strength Requirement"}
              value={armorStr}
              placeholder={"Armor Str Req"}
              setSingular={setArmorStr}
              setPlural={setArmorStrs}
              setOptions={setArmorStrOptions}
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
            <Items
              h1Title={"Items"}
              dialogHeader={"Items"}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              itemList={itemList}
              setItemList={setItemList}
              valueOptions={itemOptions}
              setItemOptions={setItemOptions}
              options={itemOptions}
            />
            <CustomInputNumber
              setSingular={setMountSpeed}
              h1Title={"Speed"}
              value={mountSpeed}
              placeholder={"Speed"}
              maxNumber={200}
              minNumber={10}
            />
            <CustomInputNumber
              setSingular={setMountCapacity}
              h1Title={"Capacity"}
              value={mountCapacity}
              placeholder={"Capacity"}
              maxNumber={2000}
              minNumber={10}
            />
          </div>
          <div className={style.itemgenWeaponAdditionalWrapper}>
            {type === "Weapon" ? (
              <div
                className={isAdditionalActive ? style.subsection : style.hidden}
              >
                <div>
                  <CustomInputNumber
                    setSingular={setDiceCount}
                    value={diceCount}
                    placeholder={"Dice Count"}
                    h1Title={"Damage Dice"}
                    maxNumber={10}
                    minNumber={1}
                  />
                  <CustomDropdown
                    tableName={"diceOptions"}
                    setSingular={setDice}
                    setPlural={setDices}
                    setOptions={setDiceOptions}
                    placeholder={"Dice Type"}
                    value={dice}
                    valueOptions={diceOptions}
                  />
                  <CustomInputNumber
                    setSingular={setDiceBonus}
                    value={diceBonus}
                    placeholder={"Dmg Bonus"}
                    maxNumber={20}
                    minNumber={0}
                  />
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
                </div>
              </div>
            ) : null}
            {type === "Vehicle" ? (
              <div
                className={isAdditionalActive ? style.subsection : style.hidden}
              >
                <div className={style.subsection}>
                  <div>
                    <CustomInputNumber
                      setSingular={setVehicleSpeed}
                      h1Title={"Speed"}
                      value={vehicleSpeed}
                      placeholder={"Speed"}
                      maxNumber={2000}
                      minNumber={10}
                    />
                    <CustomInputNumber
                      setSingular={setVehicleCapacity}
                      h1Title={"Capacity"}
                      value={vehicleCapacity}
                      placeholder={"Capacity"}
                      maxNumber={10000}
                      minNumber={10}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            {type === "Armor" ? (
              <div
                className={isAdditionalActive ? style.subsection : style.hidden}
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
                  <CustomInputNumber
                    tableName={"armorStrReq"}
                    h1Title={"Strength Requirement"}
                    value={armorStr}
                    placeholder={"Armor Str Req"}
                    setSingular={setArmorStr}
                    setPlural={setArmorStrs}
                    setOptions={setArmorStrOptions}
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
                </div>
              </div>
            ) : null}
            {type === "Equipment Pack" ? (
              <div
                className={isAdditionalActive ? style.subsection : style.hidden}
              >
                <div className={style.subsection}>
                  <Items
                    h1Title={"Items"}
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
            ) : null}
            {type === "Mount" ? (
              <div
                className={isAdditionalActive ? style.subsection : style.hidden}
              >
                <div className={style.subsection}>
                  <div>
                    <CustomInputNumber
                      setSingular={setMountSpeed}
                      h1Title={"Speed"}
                      value={mountSpeed}
                      placeholder={"Speed"}
                      maxNumber={200}
                      minNumber={10}
                    />
                    <CustomInputNumber
                      setSingular={setMountCapacity}
                      h1Title={"Capacity"}
                      value={mountCapacity}
                      placeholder={"Capacity"}
                      maxNumber={2000}
                      minNumber={10}
                    />
                  </div>
                </div>
              </div>
            ) : null}
            <div
              className={isAdditionalActive ? style.subsection : style.hidden}
            >
              <div>
                <h1>Description</h1>
                <textarea
                  value={itemDesc}
                  placeholder="Item Description"
                  onChange={(e) => setItemDesc(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <NameDisplay value={itemName} setNewValue={setItemName} />
          <h2>
            Type <SingleDisplayText value={type} setNewValue={setType} />
          </h2>
          <h2>
            Rarity <SingleDisplayText value={rarity} setNewValue={setRarity} />
          </h2>
          <h2>
            Cost <SingleDisplayText value={cost} setNewValue={setCost} />
          </h2>
          <h2>
            Weight{" "}
            <SingleDisplayNumber
              value={weight}
              setNewValue={setWeight}
              min={0}
              max={10000}
            />
            {weight !== "" ? (
              <span className={style.minorText2}> lbs</span>
            ) : null}
          </h2>

          {type === "Weapon" ? (
            <>
              <h2>
                Damage{" "}
                <SingleDisplayText
                  value={weaponDmg}
                  setNewValue={setWeaponDmg}
                />
              </h2>
              <h2>
                Damage Type{" "}
                <SingleDisplayText value={dmgType} setNewValue={setDmgType} />
              </h2>
              <h2>
                Weapon Type{" "}
                <SingleDisplayText
                  value={weaponType}
                  setNewValue={setWeaponType}
                />
              </h2>
              <h2>
                Weapon Property{" "}
                <SingleDisplayText
                  value={weaponProperty}
                  setNewValue={setWeaponProperty}
                />
              </h2>
            </>
          ) : null}
          {type === "Armor" ? (
            <>
              <h2>
                AC{" "}
                <SingleDisplayNumber
                  value={armorAc}
                  setNewValue={setArmorAc}
                  min={0}
                  max={30}
                />
              </h2>
              <h2>
                Modifier{" "}
                <SingleDisplayText value={armorMod} setNewValue={setArmorMod} />
              </h2>
              <h2>
                Strength Requirement{" "}
                <SingleDisplayText value={armorStr} setNewValue={setArmorStr} />
              </h2>
              <h2>
                Stealth Disadvantage{" "}
                <SingleDisplayText value={stealth} setNewValue={setStealth} />
              </h2>
            </>
          ) : null}

          {type === "Vehicle" ? (
            <>
              <h2>
                Speed{" "}
                <SingleDisplayNumber
                  value={vehicleSpeed}
                  setNewValue={setVehicleSpeed}
                  min={0}
                  max={2000}
                />
                <span className={style.minorText2}> ft</span>
              </h2>
              <h2>
                Carry Capacity{" "}
                <SingleDisplayNumber
                  value={vehicleCapacity}
                  setNewValue={setVehicleCapacity}
                  min={0}
                  max={10000}
                />
                <span className={style.minorText2}> lbs</span>
              </h2>
            </>
          ) : null}

          {type === "Mount" ? (
            <>
              <h2>
                Speed{" "}
                <SingleDisplayNumber
                  value={mountSpeed}
                  setNewValue={setMountSpeed}
                  min={0}
                  max={500}
                />
                <span className={style.minorText2}> ft</span>
              </h2>
              <h2>
                Carry Capcity{" "}
                <SingleDisplayNumber
                  value={mountCapacity}
                  setNewValue={setMountCapacity}
                  min={0}
                  max={1000}
                />
                <span className={style.minorText2}> lbs</span>
              </h2>
            </>
          ) : null}
          {type === "Equipment Pack" ? (
            <>
              <h2>
                Contents{" "}
                <span className={style.minorText2}>
                  <MultipleDisplay selectedItem={selectedItem} setNewValue={setSelectedItem}/>
                </span>
              </h2>
            </>
          ) : null}
          <h2>
            Description
            <div>
              <span className={style.minorText2}>
                <EditText value={itemDesc} setNewValue={setItemDesc}></EditText>
              </span>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ItemGen;
