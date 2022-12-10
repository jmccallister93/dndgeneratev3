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

const ClassGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);

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
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Class Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton />
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
            <CustomInputText
              title={"Class Name"}
              input={className}
              setInput={setClassName}
              placeholder={"Set Class Name"}
            />
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Class Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            Details to fill out
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
