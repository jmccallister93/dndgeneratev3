import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e, i } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import Items from "../components/Items";
import { Toast } from "primereact/toast";
import Npcs from "../components/Npcs";
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropdown from "../components/CustomDropDown";
import CustomDataTable from "../components/CustomDataTable";

const ClassGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isProfActive, setIsProfActive] = useState(false);
  const [isFiveActive, setIsFiveActive] = useState(false);
  const [isTenActive, setIsTenActive] = useState(false);
  const [isFifteenActive, setIsFifteenActive] = useState(false);
  const [isTwentyActive, setIsTwentyActive] = useState(false);

  const [className, setClassName] = useState("");
  const [classNames, setClassNames] = useState("");
  const [classNameOptions, setClassNameOptions] = useState("");

  const [hitDie, setHitDie] = useState("");
  const [hitDies, setHitDices] = useState("");
  const [diceOptions, setDiceOptions] = useState("");

  const [hpStart, setHpStart] = useState("");
  const [hpStarts, setHpStarts] = useState("");
  const [hpStartOptions, setHpStartOptions] = useState("");

  const [primaryAbility, setPrimaryAbility] = useState("");
  const [primaryAbilitys, setPrimaryAbilitys] = useState("");
  const [primaryAbilityOptions, setPrimaryAbilityOptions] = useState("");
  const [primaryAbilityList, setPrimaryAbilityList] = useState("");
  const [selectedPrimaryAbility, setSelectedPrimaryAbility] = useState("");

  const [armorProf, setArmorProf] = useState("");
  const [armorProfs, setArmorProfs] = useState("");
  const [armorProfOptions, setArmorProfOptions] = useState("");
  const [armorProfList, setArmorProfList] = useState("");
  const [selectedArmorProf, setSelectedArmorProf] = useState("");

  const [weaponProf, setWeaponProf] = useState("");
  const [weaponProfs, setWeaponProfs] = useState("");
  const [weaponProfOptions, setWeaponProfOptions] = useState("");
  const [weaponProfList, setWeaponProfList] = useState("");
  const [selectedWeaponProf, setSelectedWeaponProf] = useState("");

  const [toolProf, setToolProf] = useState("");
  const [toolProfs, setToolProfs] = useState("");
  const [toolProfOptions, setToolProfOptions] = useState("");
  const [toolProfList, setToolProfList] = useState("");
  const [selectedToolProf, setSelectedToolProf] = useState("");

  const [saveProf, setSaveProf] = useState("");
  const [saveProfs, setSaveProfs] = useState("");
  const [saveProfOptions, setSaveProfOptions] = useState("");
  const [saveProfList, setSaveProfList] = useState("");
  const [selectedSaveProf, setSelectedSaveProf] = useState("");

  const [skillProf, setSkillProf] = useState("");
  const [skillProfs, setSkillProfs] = useState("");
  const [skillProfOptions, setSkillProfOptions] = useState("");
  const [skillProfList, setSkillProfList] = useState("");
  const [selectedSkillProf, setSelectedSkillProf] = useState("");

  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState("");
  const [languageOptions, setLanguageOptions] = useState("");
  const [languageList, setLanguageList] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const [spell, setSpell] = useState("");
  const [spells, setSpells] = useState("");
  const [spellOptions, setSpellOptions] = useState("");
  const [spellList, setSpellList] = useState("");
  const [selectedSpell, setSelectedSpell] = useState("");

  const [firstLvl, setFirstLvl] = useState("");
  const [firstLvls, setFirstLvls] = useState("");
  const [firstLvlOptions, setFirstLvlOptions] = useState("");
  const [firstLvlList, setFirstLvlList] = useState("");
  const [selectedFirstLvl, setSelectedFirstLvl] = useState("");

  const [secondLvl, setSecondLvl] = useState("");
  const [secondLvls, setSecondLvls] = useState("");
  const [secondLvlOptions, setSecondLvlOptions] = useState("");
  const [secondLvlList, setSecondLvlList] = useState("");
  const [selectedSecondLvl, setSelectedSecondLvl] = useState("");

  const [thirdLvl, setThirdLvl] = useState("");
  const [thirdLvls, setThirdLvls] = useState("");
  const [thirdLvlOptions, setThirdLvlOptions] = useState("");
  const [thirdLvlList, setThirdLvlList] = useState("");
  const [selectedThirdLvl, setSelectedThirdLvl] = useState("");

  const [fourthLvl, setFourthLvl] = useState("");
  const [fourthLvls, setFourthLvls] = useState("");
  const [fourthLvlOptions, setFourthLvlOptions] = useState("");
  const [fourthLvlList, setFourthLvlList] = useState("");
  const [selectedFourthLvl, setSelectedFourthLvl] = useState("");

  const [fifthLvl, setFifthLvl] = useState("");
  const [fifthLvls, setFifthLvls] = useState("");
  const [fifthLvlOptions, setFifthLvlOptions] = useState("");
  const [fifthLvlList, setFifthLvlList] = useState("");
  const [selectedFifthLvl, setSelectedFifthLvl] = useState("");

  const [sixthLvl, setSixthLvl] = useState("");
  const [sixthLvls, setSixthLvls] = useState("");
  const [sixthLvlOptions, setSixthLvlOptions] = useState("");
  const [sixthLvlList, setSixthLvlList] = useState("");
  const [selectedSixthLvl, setSelectedSixthLvl] = useState("");

  const [seventhLvl, setSeventhLvl] = useState("");
  const [seventhLvls, setSeventhLvls] = useState("");
  const [seventhLvlOptions, setSeventhLvlOptions] = useState("");
  const [seventhLvlList, setSeventhLvlList] = useState("");
  const [selectedSeventhLvl, setSelectedSeventhLvl] = useState("");

  const [eighthLvl, setEighthLvl] = useState("");
  const [eighthLvls, setEighthLvls] = useState("");
  const [eighthLvlOptions, setEighthLvlOptions] = useState("");
  const [eighthLvlList, setEighthLvlList] = useState("");
  const [selectedEighthLvl, setSelectedEighthLvl] = useState("");

  const [ninthLvl, setNinthLvl] = useState("");
  const [ninthLvls, setNinthLvls] = useState("");
  const [ninthLvlOptions, setNinthLvlOptions] = useState("");
  const [ninthLvlList, setNinthLvlList] = useState("");
  const [selectedNinthLvl, setSelectedNinthLvl] = useState("");

  const [tenthLvl, setTenthLvl] = useState("");
  const [tenthLvls, setTenthLvls] = useState("");
  const [tenthLvlOptions, setTenthLvlOptions] = useState("");
  const [tenthLvlList, setTenthLvlList] = useState("");
  const [selectedTenthLvl, setSelectedTenthLvl] = useState("");

  const [eleventhLvl, setEleventhLvl] = useState("");
  const [eleventhLvls, setEleventhLvls] = useState("");
  const [eleventhLvlOptions, setEleventhLvlOptions] = useState("");
  const [eleventhLvlList, setEleventhLvlList] = useState("");
  const [selectedEleventhLvl, setSelectedEleventhLvl] = useState("");

  const [twelthLvl, setTwelthLvl] = useState("");
  const [twelthLvls, setTwelthLvls] = useState("");
  const [twelthLvlOptions, setTwelthLvlOptions] = useState("");
  const [twelthLvlList, setTwelthLvlList] = useState("");
  const [selectedTwelthLvl, setSelectedTwelthLvl] = useState("");

  const [thirteenthLvl, setThirteenthLvl] = useState("");
  const [thirteenthLvls, setThirteenthLvls] = useState("");
  const [thirteenthLvlOptions, setThirteenthLvlOptions] = useState("");
  const [thirteenthLvlList, setThirteenthLvlList] = useState("");
  const [selectedThirteenthLvl, setSelectedThirteenthLvl] = useState("");

  const [fourteenthLvl, setFourteenthLvl] = useState("");
  const [fourteenthLvls, setFourteenthLvls] = useState("");
  const [fourteenthLvlOptions, setFourteenthLvlOptions] = useState("");
  const [fourteenthLvlList, setFourteenthLvlList] = useState("");
  const [selectedFourteenthLvl, setSelectedFourteenthLvl] = useState("");

  const [fifteenthLvl, setFifteenthLvl] = useState("");
  const [fifteenthLvls, setFifteenthLvls] = useState("");
  const [fifteenthLvlOptions, setFifteenthLvlOptions] = useState("");
  const [fifteenthLvlList, setFifteenthLvlList] = useState("");
  const [selectedFifteenthLvl, setSelectedFifteenthLvl] = useState("");

  const [sixteenthLvl, setSixteenthLvl] = useState("");
  const [sixteenthLvls, setSixteenthLvls] = useState("");
  const [sixteenthLvlOptions, setSixteenthLvlOptions] = useState("");
  const [sixteenthLvlList, setSixteenthLvlList] = useState("");
  const [selectedSixteenthLvl, setSelectedSixteenthLvl] = useState("");

  const [seventeenthLvl, setSeventeenthLvl] = useState("");
  const [seventeenthLvls, setSeventeenthLvls] = useState("");
  const [seventeenthLvlOptions, setSeventeenthLvlOptions] = useState("");
  const [seventeenthLvlList, setSeventeenthLvlList] = useState("");
  const [selectedSeventeenthLvl, setSelectedSeventeenthLvl] = useState("");

  const [eighteenthLvl, setEighteenthLvl] = useState("");
  const [eighteenthLvls, setEighteenthLvls] = useState("");
  const [eighteenthLvlOptions, setEighteenthLvlOptions] = useState("");
  const [eighteenthLvlList, setEighteenthLvlList] = useState("");
  const [selectedEighteenthLvl, setSelectedEighteenthLvl] = useState("");

  const [nineteenthLvl, setNineteenthLvl] = useState("");
  const [nineteenthLvls, setNineteenthLvls] = useState("");
  const [nineteenthLvlOptions, setNineteenthLvlOptions] = useState("");
  const [nineteenthLvlList, setNineteenthLvlList] = useState("");
  const [selectedNineteenthLvl, setSelectedNineteenthLvl] = useState("");

  const [twentithLvl, setTwentithLvl] = useState("");
  const [twentithLvls, setTwentithLvls] = useState("");
  const [twentithLvlOptions, setTwentithLvlOptions] = useState("");
  const [twentithLvlList, setTwentithLvlList] = useState("");
  const [selectedTwentithLvl, setSelectedTwentithLvl] = useState("");

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showProfs = (e) => {
    setIsProfActive((current) => !current);
  };
  const showFive = (e) => {
    setIsFiveActive((current) => !current);
  };
  const showTen = (e) => {
    setIsTenActive((current) => !current);
  };
  const showFifteen = (e) => {
    setIsFifteenActive((current) => !current);
  };
  const showTwenty = (e) => {
    setIsTwentyActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Class Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[className, hitDie]}
              itemOptions={[
                classNameOptions,
                diceOptions,
                hpStartOptions,
                primaryAbilityOptions,
                armorProfOptions,
                weaponProfOptions,
                toolProfOptions,
                saveProfOptions,
                skillProfOptions,
                languageOptions,
                spellOptions,
                firstLvlOptions,
                secondLvlOptions,
                thirdLvlOptions,
                fourthLvlOptions,
                fifthLvlOptions,
                sixthLvlOptions,
                seventhLvlOptions,
                eighthLvlOptions,
                ninthLvlOptions,
                tenthLvlOptions,
                eleventhLvlOptions,
                twelthLvlOptions,
                thirteenthLvlOptions,
                fourteenthLvlOptions,
                fifteenthLvlOptions,
                sixteenthLvlOptions,
                seventeenthLvlOptions,
                eighteenthLvlOptions,
                nineteenthLvlOptions,
                twentithLvlOptions,
              ]}
              setItem={[
                setClassName,
                setHitDie,
                setHpStart,
                setPrimaryAbility,
                setArmorProf,
                setWeaponProf,
                setToolProf,
                setSaveProf,
                setSkillProf,
                setLanguage,
                setSpell,
                setFirstLvl,
                setSecondLvl,
                setThirdLvl,
                setFourthLvl,
                setFifthLvl,
                setSixthLvl,
                setSeventhLvl,
                setEighthLvl,
                setNinthLvl,
                setTenthLvl,
                setEleventhLvl,
                setTwelthLvl,
                setThirteenthLvl,
                setFourteenthLvl,
                setFifteenthLvl,
                setSixteenthLvl,
                setEighteenthLvl,
                setNineteenthLvl,
                setTwentithLvl,
              ]}
              selectedItems={[
                selectedPrimaryAbility,
                selectedArmorProf,
                selectedWeaponProf,
                selectedToolProf,
                selectedSaveProf,
                selectedSkillProf,
                selectedLanguage,
                selectedSpell,
                selectedFirstLvl,
                selectedSecondLvl,
                selectedThirdLvl,
                selectedFourthLvl,
                selectedFifthLvl,
                selectedSixthLvl,
                selectedSeventhLvl,
                selectedEighthLvl,
                selectedNinthLvl,
                selectedTenthLvl,
                selectedEleventhLvl,
                selectedTwelthLvl,
                selectedThirteenthLvl,
                selectedFourteenthLvl,
                selectedFifteenthLvl,
                selectedSixteenthLvl,
                selectedSeventeenthLvl,
                selectedEighteenthLvl,
                selectedNineteenthLvl,
                selectedTwentithLvl,
              ]}
              setSelctedItems={[
                setSelectedPrimaryAbility,
                setSelectedArmorProf,
                setSelectedWeaponProf,
                setSelectedToolProf,
                setSelectedSaveProf,
                setSelectedSkillProf,
                setSelectedLanguage,
                setSelectedSpell,
                setSelectedFirstLvl,
                setSelectedSecondLvl,
                setSelectedThirdLvl,
                setSelectedFourthLvl,
                setSelectedFifthLvl,
                setSelectedSixthLvl,
                setSelectedSeventhLvl,
                setSelectedEighthLvl,
                setSelectedNinthLvl,
                setSelectedTenthLvl,
                setSelectedEleventhLvl,
                setSelectedTwelthLvl,
                setSelectedThirteenthLvl,
                setSelectedFourteenthLvl,
                setSelectedFifteenthLvl,
                setSelectedSixteenthLvl,
                setSelectedSeventeenthLvl,
                setSelectedEighteenthLvl,
                setSelectedNineteenthLvl,
                setSelectedTwentithLvl,
              ]}
              numberItem={[]}
              setNumberItem={[]}
            />
            <ClearButton
              setStringState={[setClassName, setHitDie]}
              setArrayState={[
                setSelectedPrimaryAbility,
                setSelectedArmorProf,
                setSelectedWeaponProf,
                setSelectedToolProf,
                setSelectedSaveProf,
                setSelectedSkillProf,
                setSelectedLanguage,
                setSelectedSpell,
                setSelectedFirstLvl,
                setSelectedSecondLvl,
                setSelectedThirdLvl,
                setSelectedFourthLvl,
                setSelectedFifthLvl,
                setSelectedSixthLvl,
                setSelectedSeventhLvl,
                setSelectedEighthLvl,
                setSelectedNinthLvl,
                setSelectedTenthLvl,
                setSelectedEleventhLvl,
                setSelectedTwelthLvl,
                setSelectedThirteenthLvl,
                setSelectedFourteenthLvl,
                setSelectedFifteenthLvl,
                setSelectedSixteenthLvl,
                setSelectedSeventeenthLvl,
                setSelectedEighteenthLvl,
                setSelectedNineteenthLvl,
                setSelectedTwentithLvl,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Class Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Class Name"}
                input={className}
                setInput={setClassName}
                placeholder={"Set Class Name"}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setHitDie}
                setPlural={setHitDices}
                setOptions={setDiceOptions}
                options={diceOptions}
                h1Title={"Hit Die"}
                placeholder={"Set Hit Die"}
                value={hitDie}
                valueOptions={diceOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPrimaryAbility}
                setPlural={setPrimaryAbilitys}
                setOptions={setPrimaryAbilityOptions}
                h1Title={"Primary Ability"}
                dialogHeader={"Primary Ability"}
                selectedItem={selectedPrimaryAbility}
                setSelectedItem={setSelectedPrimaryAbility}
                list={primaryAbilityList}
                setList={setPrimaryAbilityList}
                valueOptions={primaryAbilityOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSaveProf}
                setPlural={setSaveProfs}
                setOptions={setSaveProfOptions}
                h1Title={"Saves"}
                dialogHeader={"Saves"}
                selectedItem={selectedSaveProf}
                setSelectedItem={setSelectedSaveProf}
                list={saveProfList}
                setList={setSaveProfList}
                valueOptions={saveProfOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showProfs}>
            Proficiencies
          </h1>
          <div className={isProfActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setArmorProf}
                setPlural={setArmorProfs}
                setOptions={setArmorProfOptions}
                h1Title={"Armor Proficiencies"}
                dialogHeader={"Armor Proficiencies"}
                selectedItem={selectedArmorProf}
                setSelectedItem={setSelectedArmorProf}
                list={armorProfList}
                setList={setArmorProfList}
                valueOptions={armorProfOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setWeaponProf}
                setPlural={setWeaponProfs}
                setOptions={setWeaponProfOptions}
                h1Title={"Weapon Proficiencies"}
                dialogHeader={"Weapon Proficiencies"}
                selectedItem={selectedWeaponProf}
                setSelectedItem={setSelectedWeaponProf}
                list={weaponProfList}
                setList={setWeaponProfList}
                valueOptions={weaponProfOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setToolProf}
                setPlural={setToolProfs}
                setOptions={setToolProfOptions}
                h1Title={"Tool Proficiencies"}
                dialogHeader={"Tool Proficiencies"}
                selectedItem={selectedToolProf}
                setSelectedItem={setSelectedToolProf}
                list={toolProfList}
                setList={setToolProfList}
                valueOptions={toolProfOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSkillProf}
                setPlural={setSkillProfs}
                setOptions={setSkillProfOptions}
                h1Title={"Skill Proficiencies"}
                dialogHeader={"Skill Proficiencies"}
                selectedItem={selectedSkillProf}
                setSelectedItem={setSelectedSkillProf}
                list={skillProfList}
                setList={setSkillProfList}
                valueOptions={skillProfOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showFive}>
            Levels 1-5
          </h1>
          <div className={isFiveActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFirstLvl}
                setPlural={setFirstLvls}
                setOptions={setFirstLvlOptions}
                h1Title={"1st Level"}
                dialogHeader={"1st Level"}
                selectedItem={selectedFirstLvl}
                setSelectedItem={setSelectedFirstLvl}
                list={firstLvlList}
                setList={setFirstLvlList}
                valueOptions={firstLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSecondLvl}
                setPlural={setSecondLvls}
                setOptions={setSecondLvlOptions}
                h1Title={"2nd Level"}
                dialogHeader={"2nd Level"}
                selectedItem={selectedSecondLvl}
                setSelectedItem={setSelectedSecondLvl}
                list={secondLvlList}
                setList={setSecondLvlList}
                valueOptions={secondLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setThirdLvl}
                setPlural={setThirdLvls}
                setOptions={setThirdLvlOptions}
                h1Title={"3rd Level"}
                dialogHeader={"3rd Level"}
                selectedItem={selectedThirdLvl}
                setSelectedItem={setSelectedThirdLvl}
                list={thirdLvlList}
                setList={setThirdLvlList}
                valueOptions={thirdLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFourthLvl}
                setPlural={setFourthLvls}
                setOptions={setFourthLvlOptions}
                h1Title={"4th Level"}
                dialogHeader={"4th Level"}
                selectedItem={selectedFourthLvl}
                setSelectedItem={setSelectedFourthLvl}
                list={fourthLvlList}
                setList={setFourthLvlList}
                valueOptions={fourthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFifthLvl}
                setPlural={setFifthLvls}
                setOptions={setFifthLvlOptions}
                h1Title={"5th Level"}
                dialogHeader={"5th Level"}
                selectedItem={selectedFifthLvl}
                setSelectedItem={setSelectedFifthLvl}
                list={fifthLvlList}
                setList={setFifthLvlList}
                valueOptions={fifthLvlOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showTen}>
            Levels 6-10
          </h1>
          <div className={isTenActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSixthLvl}
                setPlural={setSixthLvls}
                setOptions={setSixthLvlOptions}
                h1Title={"6th Level"}
                dialogHeader={"6th Level"}
                selectedItem={selectedSixthLvl}
                setSelectedItem={setSelectedSixthLvl}
                list={sixthLvlList}
                setList={setSixthLvlList}
                valueOptions={sixthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSeventhLvl}
                setPlural={setSeventhLvls}
                setOptions={setSeventhLvlOptions}
                h1Title={"7th Level"}
                dialogHeader={"7th Level"}
                selectedItem={selectedSeventhLvl}
                setSelectedItem={setSelectedSeventhLvl}
                list={seventhLvlList}
                setList={setSeventhLvlList}
                valueOptions={seventhLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setEighthLvl}
                setPlural={setEighthLvls}
                setOptions={setEighthLvlOptions}
                h1Title={"8th Level"}
                dialogHeader={"8th Level"}
                selectedItem={selectedEighthLvl}
                setSelectedItem={setSelectedEighthLvl}
                list={eighthLvlList}
                setList={setEighthLvlList}
                valueOptions={eighthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setNinthLvl}
                setPlural={setNinthLvls}
                setOptions={setNinthLvlOptions}
                h1Title={"9th Level"}
                dialogHeader={"9th Level"}
                selectedItem={selectedNinthLvl}
                setSelectedItem={setSelectedNinthLvl}
                list={ninthLvlList}
                setList={setNinthLvlList}
                valueOptions={ninthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTenthLvl}
                setPlural={setTenthLvls}
                setOptions={setTenthLvlOptions}
                h1Title={"10th Level"}
                dialogHeader={"10th Level"}
                selectedItem={selectedTenthLvl}
                setSelectedItem={setSelectedTenthLvl}
                list={tenthLvlList}
                setList={setTenthLvlList}
                valueOptions={tenthLvlOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showFifteen}>
            Levels 11-15
          </h1>
          <div className={isFifteenActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setEleventhLvl}
                setPlural={setEleventhLvls}
                setOptions={setEleventhLvlOptions}
                h1Title={"11th Level"}
                dialogHeader={"11th Level"}
                selectedItem={selectedEleventhLvl}
                setSelectedItem={setSelectedEleventhLvl}
                list={eleventhLvlList}
                setList={setEleventhLvlList}
                valueOptions={eleventhLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTwelthLvl}
                setPlural={setTwelthLvls}
                setOptions={setTwelthLvlOptions}
                h1Title={"12th Level"}
                dialogHeader={"12th Level"}
                selectedItem={selectedTwelthLvl}
                setSelectedItem={setSelectedTwelthLvl}
                list={twelthLvlList}
                setList={setTwelthLvlList}
                valueOptions={twelthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setThirteenthLvl}
                setPlural={setThirteenthLvls}
                setOptions={setThirteenthLvlOptions}
                h1Title={"13th Level"}
                dialogHeader={"13th Level"}
                selectedItem={selectedThirteenthLvl}
                setSelectedItem={setSelectedThirteenthLvl}
                list={thirteenthLvlList}
                setList={setThirteenthLvlList}
                valueOptions={thirteenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFourteenthLvl}
                setPlural={setFourteenthLvls}
                setOptions={setFourteenthLvlOptions}
                h1Title={"14th Level"}
                dialogHeader={"14th Level"}
                selectedItem={selectedFourteenthLvl}
                setSelectedItem={setSelectedFourteenthLvl}
                list={fourteenthLvlList}
                setList={setFourteenthLvlList}
                valueOptions={fourteenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFifteenthLvl}
                setPlural={setFifteenthLvls}
                setOptions={setFifteenthLvlOptions}
                h1Title={"15th Level"}
                dialogHeader={"15th Level"}
                selectedItem={selectedFifteenthLvl}
                setSelectedItem={setSelectedFifteenthLvl}
                list={fifteenthLvlList}
                setList={setFifteenthLvlList}
                valueOptions={fifteenthLvlOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showTwenty}>
            Levels 16-20
          </h1>
          <div className={isTwentyActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSixteenthLvl}
                setPlural={setSixteenthLvls}
                setOptions={setSixteenthLvlOptions}
                h1Title={"16th Level"}
                dialogHeader={"16th Level"}
                selectedItem={selectedSixteenthLvl}
                setSelectedItem={setSelectedSixteenthLvl}
                list={sixteenthLvlList}
                setList={setSixteenthLvlList}
                valueOptions={sixteenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSeventeenthLvl}
                setPlural={setSeventeenthLvls}
                setOptions={setSeventeenthLvlOptions}
                h1Title={"17th Level"}
                dialogHeader={"17th Level"}
                selectedItem={selectedSeventeenthLvl}
                setSelectedItem={setSelectedSeventeenthLvl}
                list={seventeenthLvlList}
                setList={setSeventeenthLvlList}
                valueOptions={seventeenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setEighteenthLvl}
                setPlural={setEighteenthLvls}
                setOptions={setEighteenthLvlOptions}
                h1Title={"18th Level"}
                dialogHeader={"18th Level"}
                selectedItem={selectedEighteenthLvl}
                setSelectedItem={setSelectedEighteenthLvl}
                list={eighteenthLvlList}
                setList={setEighteenthLvlList}
                valueOptions={eighteenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setNineteenthLvl}
                setPlural={setNineteenthLvls}
                setOptions={setNineteenthLvlOptions}
                h1Title={"19th Level"}
                dialogHeader={"19th Level"}
                selectedItem={selectedNineteenthLvl}
                setSelectedItem={setSelectedNineteenthLvl}
                list={nineteenthLvlList}
                setList={setNineteenthLvlList}
                valueOptions={nineteenthLvlOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTwentithLvl}
                setPlural={setTwentithLvls}
                setOptions={setTwentithLvlOptions}
                h1Title={"20th Level"}
                dialogHeader={"20th Level"}
                selectedItem={selectedTwentithLvl}
                setSelectedItem={setSelectedTwentithLvl}
                list={twentithLvlList}
                setList={setTwentithLvlList}
                valueOptions={twentithLvlOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{className}</h1>
          <h2>First thing</h2>
          <span className={style.minorText2}>display selected thing</span>
        </div>
      </div>
    </div>
  );
};

export default ClassGen;
