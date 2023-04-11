import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
import WorldGenComp from "../components/WorldGenComp";

const ModuleGen = () => {
  const [isButtonsActive, setIsButtonsActive] = useState(false);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isHookActive, setIsHookActive] = useState(false);
  const [isStatsActive, setIsStatsActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);
  const [isFeaturesActive, setIsFeaturesActive] = useState(false);
  const [isScoresActive, setIsScoresActive] = useState(false);

  const [fetchError, setFetchError] = useState(false);

  const [catalyst, setCatalyst] = useState("");
  const [catalysts, setCatalysts] = useState("");
  const [catalystOptions, setCatalystOptions] = useState("");

  const [effected, setEffected] = useState("");
  const [effecteds, setEffecteds] = useState("");
  const [effectedOptions, setEffectedOptions] = useState("");

  const [resolved, setResolved] = useState("");
  const [resolveds, setResolveds] = useState("");
  const [resolvedOptions, setResolvedOptions] = useState("");

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState("");
  const [locationOptions, setLocationOptions] = useState("");

  const [cause, setCause] = useState("");
  const [causes, setCauses] = useState("");
  const [causeOptions, setCauseOptions] = useState("");

  const [resolution, setResolution] = useState("");
  const [resolutions, setResolutions] = useState("");
  const [resolutionOptions, setResolutionOptions] = useState("");

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

  //WORLD info
  const [worldName, setWorldName] = useState("");
  const [worldNames, setWorldNames] = useState("");
  const [worldNameOptions, setWorldNameOptions] = useState("");

  const [continent, setContinent] = useState("");
  const [continents, setContinents] = useState("");
  const [continentOptions, setContinentOptions] = useState("");

  const [sea, setSea] = useState("");
  const [seas, setSeas] = useState("");
  const [seaOptions, setSeaOptions] = useState("");

  const [river, setRiver] = useState("");
  const [rivers, setRivers] = useState("");
  const [riverOptions, setRiverOptions] = useState("");

  const [lake, setLake] = useState("");
  const [lakes, setLakes] = useState("");
  const [lakeOptions, setLakeOptions] = useState("");

  const [mountain, setMountain] = useState("");
  const [mountains, setMountains] = useState("");
  const [mountainOptions, setMountainOptions] = useState("");

  const [hill, setHill] = useState("");
  const [hills, setHills] = useState("");
  const [hillOptions, setHillOptions] = useState("");

  const [plain, setPlain] = useState("");
  const [plains, setPlains] = useState("");
  const [plainOptions, setPlainOptions] = useState("");

  const [forest, setForest] = useState("");
  const [forests, setForests] = useState("");
  const [forestOptions, setForestOptions] = useState("");

  const [swamp, setSwamp] = useState("");
  const [swamps, setSwamps] = useState("");
  const [swampOptions, setSwampOptions] = useState("");

  const [desert, setDesert] = useState("");
  const [deserts, setDeserts] = useState("");
  const [desertOptions, setDesertOptions] = useState("");

  const [tundra, setTundra] = useState("");
  const [tundras, setTundras] = useState("");
  const [tundraOptions, setTundraOptions] = useState("");

  const [jungle, setJungle] = useState("");
  const [jungles, setJungles] = useState("");
  const [jungleOptions, setJungleOptions] = useState("");

  const [island, setIsland] = useState("");
  const [islands, setIslands] = useState("");
  const [islandOptions, setIslandOptions] = useState("");

  const [basin, setBasin] = useState("");
  const [basins, setBasins] = useState("");
  const [basinOptions, setBasinOptions] = useState("");

  const [canyon, setCanyon] = useState("");
  const [canyons, setCanyons] = useState("");
  const [canyonOptions, setCanyonOptions] = useState("");

  const [volcano, setVolcano] = useState("");
  const [volcanos, setVolcanos] = useState("");
  const [volcanoOptions, setVolcanoOptions] = useState("");

  const [plateau, setPlateau] = useState("");
  const [plateaus, setPlateaus] = useState("");
  const [plateauOptions, setPlateauOptions] = useState("");

  const [grassland, setGrassland] = useState("");
  const [grasslands, setGrasslands] = useState("");
  const [grasslandOptions, setGrasslandOptions] = useState("");

  const [savanna, setSavanna] = useState("");
  const [savannas, setSavannas] = useState("");
  const [savannaOptions, setSavannaOptions] = useState("");

  const [steppe, setSteppe] = useState("");
  const [steppes, setSteppes] = useState("");
  const [steppeOptions, setSteppeOptions] = useState("");

  const [oasis, setOasis] = useState("");
  const [oasises, setOasises] = useState("");
  const [oasisOptions, setOasisOptions] = useState("");

  const [marsh, setMarsh] = useState("");
  const [marshes, setMarshes] = useState("");
  const [marshOptions, setMarshOptions] = useState("");

  const [glacier, setGlacier] = useState("");
  const [glaciers, setGlaciers] = useState("");
  const [glacierOptions, setGlacierOptions] = useState("");

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
        <h1 className={style.mainHeader}>Module Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* Generate Clear Btns */}
            <GenerateButton
              generateItems={[]}
              itemOptions={[]}
              setItem={[]}
              nameItem={[]}
              nameItemOptions={[]}
              setNameItem={[]}
              statsItem={[]}
              selectedItemOptions={[]}
              selectedItems={[]}
              setSelectedItem={[]}
            />
            <ClearButton setStringState={[]} setArrayState={[]} />
            {/* Export Btns */}
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={npc} />
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
                  header={"Module Generator Info"}
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
          <h1>Module Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showFeatures}>
              World{" "}
              {isFeaturesActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
                numberItem={[marsh]}
                numberItemOptions={[marshOptions]}
                setNumberItem={[setMarsh]}
                numberMax={[5]}
                numberMin={[0]}
            />
          </div>
          <div className={isFeaturesActive ? style.subsection : style.hidden}>
            <div>
                <WorldGenComp
                    setMarsh={setMarsh}
                    marsh={marsh}
                />

            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Story{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[]}
              valueOptions={[]}
              setValue={[]}
              nameItem={[]}
              nameItemOptions={[]}
              setNameItem={[]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
            <CustomDropDown
                tableName={"moduleCatalysts"}
                setSingular={setCatalyst}
                setPlural={setCatalysts}
                setOptions={setCatalystOptions}
                options={catalystOptions}
                h1Title={"Catalyst"}
                placeholder={"Set Catalyst"}
                value={catalyst}
                valueOptions={catalystOptions}
              />
              {catalyst === "Captures" ? "Who is captured?" :
              catalyst === "Corruption" ? "What or who is corrupted?" :
              catalyst === "Death" ? "Who died?" :
              catalyst === "Destruction" ? "What is destroyed?" :
              catalyst === "Discovery" ? "What is discovered?" :
              catalyst === "Disease" ? "What is diseased?" :
              catalyst === "Dispute" ? "What is disputed?" :
              catalyst === "Fued" ? "Who is feuding?" :
              catalyst === "Gain of powers" ? "Who gains power?" :
              catalyst === "Loss of powers" ? "Who loses power?" :
              catalyst === "Miracle" ? "What is the miracle?" :
              catalyst === "Missing" ? "What or Who is missing?" :
              catalyst === "Monster" ? "What is the monster?" :
              catalyst === "Natural Catastrophe" ? "What is the catastrophe?" :
              catalyst === "Political" ? "What is the political issue?" :
              catalyst === "Possesions" ? "Who is possessed?" :
              catalyst === "Raid" ? "Who is raiding?" :
              catalyst === "Rebellion" ? "Who is rebelling?" :
              catalyst === "Religion" ? "What is the religious issue?" :
              catalyst === "Summonings" ? "What is being summoned?" :
              catalyst === "Theft" ? "What is being stolen?" :
              catalyst === "War" ? "Who is at war?" : 
              "None of the above"}
              <CustomDropDown
                tableName={"races"}
                setSingular={setEffected}
                setPlural={setEffecteds}
                setOptions={setEffectedOptions}
                options={effectedOptions}
                h1Title={"Effected"}
                placeholder={"Set Effected"}
                value={effected}
                valueOptions={effectedOptions}
              />
              <CustomDropDown
                tableName={"races"}
                setSingular={setResolved}
                setPlural={setResolveds}
                setOptions={setResolvedOptions}
                options={resolvedOptions}
                h1Title={"Resolved"}
                placeholder={"Set Resolved"}
                value={resolved}
                valueOptions={resolvedOptions}
              />
               <CustomDropDown
                tableName={"races"}
                setSingular={setLocation}
                setPlural={setLocations}
                setOptions={setLocationOptions}
                options={locationOptions}
                h1Title={"Location"}
                placeholder={"Set Location"}
                value={location}
                valueOptions={locationOptions}
              />
              <CustomDropDown
                tableName={"races"}
                setSingular={setCause}
                setPlural={setCauses}
                setOptions={setCauseOptions}
                options={causeOptions}
                h1Title={"Cause"}
                placeholder={"Set Cause"}
                value={cause}
                valueOptions={causeOptions}
              />
               <CustomDropDown
                tableName={"races"}
                setSingular={setResolution}
                setPlural={setResolutions}
                setOptions={setResolutionOptions}
                options={resolutionOptions}
                h1Title={"Resolution"}
                placeholder={"Set Resolution"}
                value={resolution}
                valueOptions={resolutionOptions}
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
        
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              
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
              value={[]}
              valueOptions={[]}
              setValue={[]}
            />
          </div>
          <div className={isHookActive ? style.subsection : style.hidden}>
            <div>
        
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
           
            />
          </div>
          <div className={isStatsActive ? style.subsection : style.hidden}>
            <div>
              
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
              
            />
          </div>
          <div className={isScoresActive ? style.subsection : style.hidden}>
            <div>
           
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
             
            />
          </div>
          <div className={isItemActive ? style.subsection : style.hidden}>
            <div>
              
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

export default ModuleGen;
