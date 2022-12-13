import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
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
import MultipleDisplay from "../components/MultipleDisplay";
import CustomDataTable from "../components/CustomDataTable";
import CustomDropdown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";

const WorldGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isGlacierActive, setIsGlacierActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isGrasslandActive, setIsGrasslandActive] = useState(false);
  const [isMemberActive, setIsMemberActive] = useState(false);
  const [isMembershipActive, setIsMembershipActive] = useState(false);

  const [worldName, setWorldName] = useState("");
  const [worldNames, setWorldNames] = useState("");
  const [worldNameOptions, setWorldNameOptions] = useState("");

  const [sea, setSea] = useState("");
  const [seas, setSeas] = useState("");
  const [seaOptions, setSeaOptions] = useState("");
  const [selectedSea, setSelectedSea] = useState([]);
  const [seaList, setSeaList] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [ItemOptions, setItemOptions] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [ItemList, setItemList] = useState([]);

  const [cities, setCities] = useState("");
  const [citiess, setCitiess] = useState("");
  const [citiesOptions, setCitiesOptions] = useState("");
  const [selectedCities, setSelectedCities] = useState([]);
  const [citiesList, setCitiesList] = useState([]);

  const [guild, setGuild] = useState("");
  const [guilds, setGuilds] = useState("");
  const [guildOptions, setGuildOptions] = useState("");
  const [selectedGuild, setSelectedGuild] = useState([]);
  const [guildList, setGuildList] = useState([]);

  const [faction, setFaction] = useState("");
  const [factions, setFactions] = useState("");
  const [factionOptions, setFactionOptions] = useState("");
  const [selectedFaction, setSelectedFaction] = useState([]);
  const [factionList, setFactionList] = useState([]);

  const [cult, setCult] = useState("");
  const [cults, setCults] = useState("");
  const [cultOptions, setCultOptions] = useState("");
  const [selectedCult, setSelectedCult] = useState([]);
  const [cultList, setCultList] = useState([]);

  const [river, setRiver] = useState("");
  const [rivers, setRivers] = useState("");
  const [riverOptions, setRiverOptions] = useState("");
  const [selectedRiver, setSelectedRiver] = useState([]);
  const [riverList, setRiverList] = useState([]);

  const [lake, setLake] = useState("");
  const [lakes, setLakes] = useState("");
  const [lakeOptions, setLakeOptions] = useState("");
  const [selectedLake, setSelectedLake] = useState([]);
  const [lakeList, setLakeList] = useState([]);

  const [area, setArea] = useState("");
  const [areas, setAreas] = useState("");
  const [areaOptions, setAreaOptions] = useState("");
  const [selectedArea, setSelectedArea] = useState([]);
  const [areaList, setAreaList] = useState([]);

  const [mountain, setMountain] = useState("");
  const [mountains, setMountains] = useState("");
  const [mountainOptions, setMountainOptions] = useState("");
  const [selectedMountain, setSelectedMountain] = useState([]);
  const [mountainList, setMountainList] = useState([]);

  const [hill, setHill] = useState("");
  const [hills, setHills] = useState("");
  const [hillOptions, setHillOptions] = useState("");
  const [selectedHill, setSelectedHill] = useState([]);
  const [hillList, setHillList] = useState([]);

  const [basin, setBasin] = useState("");
  const [basins, setBasins] = useState("");
  const [basinOptions, setBasinOptions] = useState("");
  const [selectedBasin, setSelectedBasin] = useState([]);
  const [basinList, setBasinList] = useState([]);

  const [volcano, setVolcano] = useState("");
  const [volcanos, setVolcanos] = useState("");
  const [volcanoOptions, setVolcanoOptions] = useState("");
  const [selectedVolcano, setSelectedVolcano] = useState([]);
  const [volcanoList, setVolcanoList] = useState([]);

  const [valley, setValley] = useState("");
  const [valleys, setValleys] = useState("");
  const [valleyOptions, setValleyOptions] = useState("");
  const [selectedValley, setSelectedValley] = useState([]);
  const [valleyList, setValleyList] = useState([]);

  const [desert, setDesert] = useState("");
  const [deserts, setDeserts] = useState("");
  const [desertOptions, setDesertOptions] = useState("");
  const [selectedDesert, setSelectedDesert] = useState([]);
  const [desertList, setDesertList] = useState([]);

  const [forest, setForest] = useState("");
  const [forests, setForests] = useState("");
  const [forestOptions, setForestOptions] = useState("");
  const [selectedForest, setSelectedForest] = useState([]);
  const [forestList, setForestList] = useState([]);

  const [jungle, setJungle] = useState("");
  const [jungles, setJungles] = useState("");
  const [jungleOptions, setJungleOptions] = useState("");
  const [selectedJungle, setSelectedJungle] = useState([]);
  const [jungleList, setJungleList] = useState([]);

  const [plateau, setPlateau] = useState("");
  const [plateaus, setPlateaus] = useState("");
  const [plateauOptions, setPlateauOptions] = useState("");
  const [selectedPlateau, setSelectedPlateau] = useState([]);
  const [plateauList, setPlateauList] = useState([]);

  const [island, setIsland] = useState("");
  const [islands, setIslands] = useState("");
  const [islandOptions, setIslandOptions] = useState("");
  const [selectedIsland, setSelectedIsland] = useState([]);
  const [islandList, setIslandList] = useState([]);

  const [plain, setPlain] = useState("");
  const [plains, setPlains] = useState("");
  const [plainOptions, setPlainOptions] = useState("");
  const [selectedPlain, setSelectedPlain] = useState([]);
  const [plainList, setPlainList] = useState([]);

  const [swamp, setSwamp] = useState("");
  const [swamps, setSwamps] = useState("");
  const [swampOptions, setSwampOptions] = useState("");
  const [selectedSwamp, setSelectedSwamp] = useState([]);
  const [swampList, setSwampList] = useState([]);

  const [grassland, setGrassland] = useState("");
  const [grasslands, setGrasslands] = useState("");
  const [grasslandOptions, setGrasslandOptions] = useState("");
  const [selectedGrassland, setSelectedGrassland] = useState([]);
  const [grasslandList, setGrasslandList] = useState([]);

  const [marshes, setMarshes] = useState("");
  const [marshess, setMarshess] = useState("");
  const [marshesOptions, setMarshesOptions] = useState("");
  const [selectedMarshes, setSelectedMarshes] = useState([]);
  const [marshesList, setMarshesList] = useState([]);

  const [oasis, setOasis] = useState("");
  const [oasiss, setOasiss] = useState("");
  const [oasisOptions, setOasisOptions] = useState("");
  const [selectedOasis, setSelectedOasis] = useState([]);
  const [oasisList, setOasisList] = useState([]);

  const [glacier, setGlacier] = useState("");
  const [glaciers, setGlaciers] = useState("");
  const [glacierOptions, setGlacierOptions] = useState("");
  const [selectedGlacier, setSelectedGlacier] = useState([]);
  const [glacierList, setGlacierList] = useState([]);

  const [tundra, setTundra] = useState("");
  const [tundras, setTundras] = useState("");
  const [tundraOptions, setTundraOptions] = useState("");
  const [selectedTundra, setSelectedTundra] = useState([]);
  const [tundraList, setTundraList] = useState([]);
  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showGlaciers = (e) => {
    setIsGlacierActive((current) => !current);
  };
  const showMembers = (e) => {
    setIsMemberActive((current) => !current);
  };
  const showMemberships = (e) => {
    setIsMembershipActive((current) => !current);
  };
  const showGrasslands = (e) => {
    setIsGrasslandActive((current) => !current);
  };
  const showFeature = (e) => {
    setIsFeatureActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>World Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[]}
              itemOptions={[
                seaOptions,
                citiesOptions,
                guildOptions,
                factionOptions,
                cultOptions,
                riverOptions,
                lakeOptions,
                areaOptions,
                mountainOptions,
                hillOptions,
                basinOptions,
                volcanoOptions,
                valleyOptions,
                desertOptions,
                forestOptions,
                jungleOptions,
                plateauOptions,
                islandOptions,
                plainOptions,
                swampOptions,
                grasslandOptions,
                marshesOptions,
                oasisOptions,
                glacierOptions,
                tundraOptions,
              ]}
              setItem={[]}
              selectedItems={[
                selectedSea,
                selectedItem,
                selectedCities,
                selectedGuild,
                selectedCult,
                selectedFaction,
                selectedRiver,
                selectedLake,
                selectedArea,
                selectedMountain,
                selectedHill,
                selectedBasin,
                selectedVolcano,
                selectedValley,
                selectedDesert,
                selectedForest,
                selectedJungle,
                selectedPlateau,
                selectedIsland,
                selectedPlain,
                selectedSwamp,
                selectedGrassland,
                selectedMarshes,
                selectedOasis,
                selectedGlacier,
                selectedTundra,
              ]}
              setSelectedItem={[
                setSelectedSea,
                setSelectedItem,
                setSelectedCities,
                setSelectedGuild,
                setSelectedFaction,
                setSelectedCult,
                setSelectedRiver,
                setSelectedLake,
                setSelectedArea,
                setSelectedMountain,
                setSelectedHill,
                setSelectedBasin,
                setSelectedVolcano,
                setSelectedValley,
                setSelectedDesert,
                setSelectedForest,
                setSelectedJungle,
                setSelectedPlateau,
                setSelectedIsland,
                setSelectedPlain,
                setSelectedSwamp,
                setSelectedGrassland,
                setSelectedMarshes,
                setSelectedOasis,
                setSelectedGlacier,
                setSelectedTundra,
              ]}
            />
            <ClearButton
              setStringState={[

              ]}
              setArrayState={[
                setSelectedSea,
                setSelectedItem,
                setSelectedCities,
                setSelectedRiver,
                setSelectedLake,
                setSelectedArea,
                setSelectedMountain,
                setSelectedHill,
                setSelectedBasin,
                setSelectedVolcano,
                setSelectedValley,
                setSelectedDesert,
                setSelectedForest,
                setSelectedJungle,
                setSelectedPlateau,
                setSelectedIsland,
                setSelectedPlain,
                setSelectedSwamp,
                setSelectedGrassland,
                setSelectedMarshes,
                setSelectedOasis,
                setSelectedGlacier,
                setSelectedTundra,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>World Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"World Name"}
                input={worldName}
                setInput={setWorldName}
                placeholder={"Set World Name"}
              />
             
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPlain}
                setPlural={setPlains}
                setOptions={setPlainOptions}
                h1Title={"Organization Type"}
                dialogHeader={"Organization Type"}
                selectedItem={selectedPlain}
                setSelectedItem={setSelectedPlain}
                list={plainList}
                setList={setPlainList}
                valueOptions={plainOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setTundra}
                setPlural={setTundras}
                setOptions={setTundraOptions}
                h1Title={"Tundras"}
                dialogHeader={"Tundras"}
                selectedItem={selectedTundra}
                setSelectedItem={setSelectedTundra}
                list={tundraList}
                setList={setTundraList}
                valueOptions={tundraOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setIsland}
                setPlural={setIslands}
                setOptions={setIslandOptions}
                h1Title={"Islands"}
                dialogHeader={"Islands"}
                selectedItem={selectedIsland}
                setSelectedItem={setSelectedIsland}
                list={islandList}
                setList={setIslandList}
                valueOptions={islandOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showGlaciers}>
            Water Features
          </h1>
          <div className={isGlacierActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSea}
                setPlural={setSeas}
                setOptions={setSeaOptions}
                h1Title={"Sea"}
                dialogHeader={"Sea"}
                selectedItem={selectedSea}
                setSelectedItem={setSelectedSea}
                list={seaList}
                setList={setSeaList}
                valueOptions={seaOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setItem}
                setPlural={setItems}
                setOptions={setItemOptions}
                h1Title={"Items"}
                dialogHeader={"Items"}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                list={ItemList}
                setList={setItemList}
                valueOptions={ItemOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setGlacier}
                setPlural={setGlaciers}
                setOptions={setGlacierOptions}
                h1Title={"Glaciers"}
                dialogHeader={"Glaciers"}
                selectedItem={selectedGlacier}
                setSelectedItem={setSelectedGlacier}
                list={glacierList}
                setList={setGlacierList}
                valueOptions={glacierOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showMembers}>
            Land Features
          </h1>
          <div className={isMemberActive ? style.subsection : style.hidden}>
            <div>
             
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showMemberships}>
            Political Features
          </h1>
          <div className={isMembershipActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setRiver}
                setPlural={setRivers}
                setOptions={setRiverOptions}
                h1Title={"River Members"}
                dialogHeader={"River Members"}
                selectedItem={selectedRiver}
                setSelectedItem={setSelectedRiver}
                list={riverList}
                setList={setRiverList}
                valueOptions={riverOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setLake}
                setPlural={setLakes}
                setOptions={setLakeOptions}
                h1Title={"Lake Members"}
                dialogHeader={"Lake Members"}
                selectedItem={selectedLake}
                setSelectedItem={setSelectedLake}
                list={lakeList}
                setList={setLakeList}
                valueOptions={lakeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setArea}
                setPlural={setAreas}
                setOptions={setAreaOptions}
                h1Title={"Area Members"}
                dialogHeader={"Area Members"}
                selectedItem={selectedArea}
                setSelectedItem={setSelectedArea}
                list={areaList}
                setList={setAreaList}
                valueOptions={areaOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMountain}
                setPlural={setMountains}
                setOptions={setMountainOptions}
                h1Title={"Mountain Members"}
                dialogHeader={"Mountain Members"}
                selectedItem={selectedMountain}
                setSelectedItem={setSelectedMountain}
                list={mountainList}
                setList={setMountainList}
                valueOptions={mountainOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setHill}
                setPlural={setHills}
                setOptions={setHillOptions}
                h1Title={"Hill Members"}
                dialogHeader={"Hill Members"}
                selectedItem={selectedHill}
                setSelectedItem={setSelectedHill}
                list={hillList}
                setList={setHillList}
                valueOptions={hillOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setVolcano}
                setPlural={setVolcanos}
                setOptions={setVolcanoOptions}
                h1Title={"Volcano"}
                dialogHeader={"Volcano"}
                selectedItem={selectedVolcano}
                setSelectedItem={setSelectedVolcano}
                list={volcanoList}
                setList={setVolcanoList}
                valueOptions={volcanoOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setValley}
                setPlural={setValleys}
                setOptions={setValleyOptions}
                h1Title={"Low Rank Roles"}
                dialogHeader={"Low Rank Roles"}
                selectedItem={selectedValley}
                setSelectedItem={setSelectedValley}
                list={valleyList}
                setList={setValleyList}
                valueOptions={valleyOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setDesert}
                setPlural={setDeserts}
                setOptions={setDesertOptions}
                h1Title={"Medium Rank Roles"}
                dialogHeader={"Medium Rank Roles"}
                selectedItem={selectedDesert}
                setSelectedItem={setSelectedDesert}
                list={desertList}
                setList={setDesertList}
                valueOptions={desertOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setForest}
                setPlural={setForests}
                setOptions={setForestOptions}
                h1Title={"High Rank Roles"}
                dialogHeader={"High Rank Roles"}
                selectedItem={selectedForest}
                setSelectedItem={setSelectedForest}
                list={forestList}
                setList={setForestList}
                valueOptions={forestOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPlateau}
                setPlural={setPlateaus}
                setOptions={setPlateauOptions}
                h1Title={"Plateaument"}
                dialogHeader={"Plateaument"}
                selectedItem={selectedPlateau}
                setSelectedItem={setSelectedPlateau}
                list={plateauList}
                setList={setPlateauList}
                valueOptions={plateauOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showFeature}>
            Cultural Features
          </h1>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setCities}
                setPlural={setCitiess}
                setOptions={setCitiesOptions}
                h1Title={"Influence Tactics"}
                dialogHeader={"Influence Tactics"}
                selectedItem={selectedCities}
                setSelectedItem={setSelectedCities}
                list={citiesList}
                setList={setCitiesList}
                valueOptions={citiesOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setBasin}
                setPlural={setBasins}
                setOptions={setBasinOptions}
                h1Title={"Basins"}
                dialogHeader={"Basins"}
                selectedItem={selectedBasin}
                setSelectedItem={setSelectedBasin}
                list={basinList}
                setList={setBasinList}
                valueOptions={basinOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setJungle}
                setPlural={setJungles}
                setOptions={setJungleOptions}
                h1Title={"Jungles"}
                dialogHeader={"Jungles"}
                selectedItem={selectedJungle}
                setSelectedItem={setSelectedJungle}
                list={jungleList}
                setList={setJungleList}
                valueOptions={jungleOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showGrasslands}>
            Grasslands
          </h1>
          <div className={isGrasslandActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSwamp}
                setPlural={setSwamps}
                setOptions={setSwampOptions}
                h1Title={"Swamps"}
                dialogHeader={"Swamps"}
                selectedItem={selectedSwamp}
                setSelectedItem={setSelectedSwamp}
                list={swampList}
                setList={setSwampList}
                valueOptions={swampOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setGrassland}
                setPlural={setGrasslands}
                setOptions={setGrasslandOptions}
                h1Title={"Owned Grasslands"}
                dialogHeader={"Owned Grasslands"}
                selectedItem={selectedGrassland}
                setSelectedItem={setSelectedGrassland}
                list={grasslandList}
                setList={setGrasslandList}
                valueOptions={grasslandOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMarshes}
                setPlural={setMarshess}
                setOptions={setMarshesOptions}
                h1Title={"Marshess"}
                dialogHeader={"Marshess"}
                selectedItem={selectedMarshes}
                setSelectedItem={setSelectedMarshes}
                list={marshesList}
                setList={setMarshesList}
                valueOptions={marshesOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setOasis}
                setPlural={setOasiss}
                setOptions={setOasisOptions}
                h1Title={"Oasiss"}
                dialogHeader={"Oasiss"}
                selectedItem={selectedOasis}
                setSelectedItem={setSelectedOasis}
                list={oasisList}
                setList={setOasisList}
                valueOptions={oasisOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{worldName}</h1>

          <h2>
            Org. Type{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPlain}
                setList={setPlainList}
              />
            </span>
          </h2>
          <h2>
            Tundras{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedTundra}
                setList={setTundraList}
              />
            </span>
          </h2>
          <h2>
            Islands{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedIsland}
                setList={setIslandList}
              />
            </span>
          </h2>
          <h1>Glaciers</h1>
          <hr className={style.lineBreak} />
          
          <h2>
            Sea Source{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedSea}
                setList={setSeaList}
              />
            </span>
          </h2>
          <h2>
            Items{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedItem}
                setList={setItemList}
              />
            </span>
          </h2>
          <h2>
            Glaciers{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedGlacier}
                setList={setGlacierList}
              />
            </span>
          </h2>
          <h1>Members</h1>
          <hr className={style.lineBreak} />

          <h2>
            Important Members <span className={style.minorText2}></span>
          </h2>
          <h1>Membership</h1>
          <hr className={style.lineBreak} />
          <h2>
            River Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedRiver}
                setList={setRiverList}
              />
            </span>
          </h2>
          <h2>
            Lake Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedLake}
                setList={setLakeList}
              />
            </span>
          </h2>
          <h2>
            Area Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedArea}
                setList={setAreaList}
              />
            </span>
          </h2>
          <h2>
            Mountain Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMountain}
                setList={setMountainList}
              />
            </span>
          </h2>
          <h2>
            Hill Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedHill}
                setList={setHillList}
              />
            </span>
          </h2>
          <h2>
            Volcano{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedVolcano}
                setList={setVolcanoList}
              />
            </span>
          </h2>
          <h2>
            Low Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedValley}
                setList={setValleyList}
              />
            </span>
          </h2>
          <h2>
            Medium Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedDesert}
                setList={setDesertList}
              />
            </span>
          </h2>
          <h2>
            High Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedForest}
                setList={setForestList}
              />
            </span>
          </h2>
          <h2>
            Plateaument{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPlateau}
                setList={setPlateauList}
              />
            </span>
          </h2>
          <h1>Features</h1>
          <hr className={style.lineBreak} />

          <h2>
            Influence Tactics{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedCities}
                setList={setCitiesList}
              />
            </span>
          </h2>
          <h2>
            Basins{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBasin}
                setList={setBasinList}
              />
            </span>
          </h2>
          <h2>
            Jungles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedJungle}
                setList={setJungleList}
              />
            </span>
          </h2>

          <h1>Grasslands</h1>
          <hr className={style.lineBreak} />

          <h2>
            Swamps{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedSwamp}
                setList={setSwampList}
              />
            </span>
          </h2>
          <h2>
            Owned Grasslands{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedGrassland}
                setList={setGrasslandList}
              />
            </span>
          </h2>
          <h2>
            Marshess{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMarshes}
                setList={setMarshesList}
              />
            </span>
          </h2>
          <h2>
            Oasiss{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedOasis}
                setList={setOasisList}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorldGen;
