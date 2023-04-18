import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import ExportButtons from "../components/ExportButtons";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import CustomName from "../components/CustomName";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import SingleDisplayNumber from "../components/SingleDisplayNumber";
import MultipleDisplay from "../components/MultipleDisplay";

const BuildingGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isRoomActive, setIsRoomActive] = useState(false);
  const [isNpcActive, setIsNpcActive] = useState(false);
  const [isItemActive, setIsItemActive] = useState(false);

  const [buildingName, setBuildingName] = useState("");
  const [buildingNames, setBuildingNames] = useState("");
  const [buildingNameOptions, setBuildingNameOptions] = useState("");

  const [buildingCategory, setBuildingCategory] = useState("");
  const [buildingCategorys, setBuildingCategorys] = useState("");
  const [buildingCategoryOptions, setBuildingCategoryOptions] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState("");
  const [buildingTypeOptions, setBuildingTypeOptions] = useState("");
  const [buildingTypeCategory, setBuildingTypeCategory] = useState();
  const [buildingList, setBuildingList] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState(null);
  const [dialogVisibleBuildingType, setDialogVisibleBuildingType] =
    useState(false);

  const [buildingColor, setBuildingColor] = useState("");
  const [buildingColors, setBuildingColors] = useState("");
  const [buildingColorOptions, setBuildingColorOptions] = useState("");
  const [selectedBuildingColor, setSelectedBuildingColor] = useState(null);
  const [dialogVisibleBuildingColor, setDialogVisibleBuildingColor] =
    useState(false);

  const [buildingSound, setBuildingSound] = useState("");
  const [buildingSounds, setBuildingSounds] = useState("");
  const [buildingSoundOptions, setBuildingSoundOptions] = useState("");
  const [selectedBuildingSound, setSelectedBuildingSound] = useState(null);
  const [dialogVisibleBuildingSound, setDialogVisibleBuildingSound] =
    useState(false);

  const [buildingSmell, setBuildingSmell] = useState("");
  const [buildingSmells, setBuildingSmells] = useState("");
  const [buildingSmellOptions, setBuildingSmellOptions] = useState("");
  const [selectedBuildingSmell, setSelectedBuildingSmell] = useState(null);
  const [dialogVisibleBuildingSmell, setDialogVisibleBuildingSmell] =
    useState(false);

  const [buildingStyle, setBuildingStyle] = useState("");
  const [buildingStyles, setBuildingStyles] = useState("");
  const [buildingStyleOptions, setBuildingStyleOptions] = useState("");
  const [selectedBuildingStyle, setSelectedBuildingStyle] = useState(null);
  const [dialogVisibleBuildingStyle, setDialogVisibleBuildingStyle] =
    useState(false);

  const [buildingEnterance, setBuildingEnterance] = useState("");
  const [buildingEnterances, setBuildingEnterances] = useState("");
  const [buildingEnteranceOptions, setBuildingEnteranceOptions] = useState("");

  const [buildingRoomCount, setBuildingRoomCount] = useState("");
  const [buildingRoomCounts, setBuildingRoomCounts] = useState("");
  const [buildingRoomCountOptions, setBuildingCountOptions] = useState("");

  const [buildingWindow, setBuildingWindow] = useState("");
  const [buildingWindows, setBuildingWindows] = useState("");
  const [buildingWindowOptions, setBuildingWindowOptions] = useState("");

  const [buildingFloor, setBuildingFloor] = useState("");
  const [buildingFloors, setBuildingFloors] = useState("");
  const [buildingFloorOptions, setBuildingFloorOptions] = useState("");

  const [buildingRoom, setBuildingRoom] = useState("");
  const [buildingRooms, setBuildingRooms] = useState("");
  const [buildingRoomOptions, setBuildingRoomOptions] = useState("");
  const [selectedBuildingRoom, setSelectedBuildingRoom] = useState([]);
  const [dialogVisibleBuildingRoom, setDialogVisibleBuildingRoom] =
    useState(false);

  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState("");
  const [roomTypeOptions, setRoomTypeOptions] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState([]);
  const [dialogVisibleRoomType, setDialogVisibleRoomType] = useState(false);
  const [roomTypeList, setRoomTypeList] = useState([]);

  const [roomCount, setRoomCount] = useState("");

  const [npc, setNpc] = useState("");
  const [npcs, setNpcs] = useState("");
  const [npcOptions, setNpcOptions] = useState([]);
  const [selectedNpc, setSelectedNpc] = useState([]);
  const [dialogVisibleNpc, setDialogVisibleNpc] = useState(false);
  const [npcList, setNpcList] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [dialogVisibleItem, setDialogVisibleItem] = useState(false);
  const [itemList, setItemList] = useState([]);
  //   const [itemDisplay, setItemDisplay] = useState()


  const [isInfoActive, setIsInfoActive] = useState(false);
  const divRef = useRef(null);

  const [building, setBuilding] = useState({});

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showLayout = (e) => {
    setIsLayoutActive((current) => !current);
  };

  const showRooms = (e) => {
    setIsRoomActive((current) => !current);
  };
  const showNpcs = (e) => {
    setIsNpcActive((current) => !current);
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
      <p>This is a tool to help you generate Buildings for your games.</p>
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

  //Export Buildings
  //Create npc object to be exported
  useEffect(() => {
    const roomNames = selectedRoomType.map((item) => item.name);
    const roomString = roomNames.join(", ");
    const npcNames = selectedNpc.map((item) => item.name);
    const npcString = npcNames.join(", ");
    const itemNames = selectedItem.map((item) => item.name);
    const itemString = itemNames.join(", ");

    const building = {
      name: buildingName,
      category: buildingCategory,
      type: buildingType,
      floors: buildingFloors,
      eneterances: buildingEnterances,
      windows: buildingWindows,
      color: buildingColor,
      style: buildingStyle,
      sound: buildingSound,
      roomType: roomString,
      npcs: npcString,
      items: itemString,
    };
    setBuilding(building);
  }, [
    buildingName,
    buildingCategory,
    buildingType,
    buildingFloors,
    buildingEnterances,
    buildingWindows,
    buildingColor,
    buildingStyle,
    buildingSound,
    selectedRoomType,
    selectedNpc,
    selectedItem,
  ]);

  return (
    <div className={style.mainWrapper}>
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[
                buildingCategory,
                buildingType,
                buildingColor,
                buildingStyle,
                buildingSound,
              ]}
              itemOptions={[
                buildingCategoryOptions,
                buildingTypeOptions,
                buildingColorOptions,
                buildingStyleOptions,
                buildingSoundOptions,
              ]}
              setItem={[
                setBuildingCategory,
                setBuildingType,
                setBuildingColor,
                setBuildingStyle,
                setBuildingSound,
              ]}
              selectedItemOptions={[roomTypeOptions, npcOptions, itemOptions]}
              selectedItems={[selectedRoomType, selectedNpc, selectedItem]}
              setSelectedItem={[
                setSelectedRoomType,
                setSelectedNpc,
                setSelectedItem,
              ]}
              numberItem={[buildingFloor, buildingEnterance, buildingWindow]}
              setNumberItem={[
                setBuildingFloor,
                setBuildingEnterance,
                setBuildingWindow,
              ]}
              maxNumber={[100, 100, 100]}
              minNumber={[1, 0, 0]}
            />
            <ClearButton
              setStringState={[
                setBuildingCategory,
                setBuildingType,
                setBuildingColor,
                setBuildingStyle,
                setBuildingSound,
                setBuildingFloor,
                setBuildingEnterance,
                setBuildingWindow,
              ]}
              setArrayState={[
                setSelectedRoomType,
                setSelectedNpc,
                setSelectedItem,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} />
              </div>
            </h1>
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
          <h1>Building Options</h1>
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
              value={[buildingCategory, buildingType]}
              setValue={[setBuildingCategory, setBuildingType]}
              valueOptions={[buildingCategoryOptions, buildingTypeOptions]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomName
                tableName={"names"}
                name={buildingName}
                setName={setBuildingName}
                setNames={setBuildingNames}
                setNameOptions={setBuildingNameOptions}
                nameOptions={buildingNameOptions}
                title={"Building Name"}
                placeholder={"Set Name"}
              />
              <CustomDropDown
                tableName={"buildingCategory"}
                setSingular={setBuildingCategory}
                setPlural={setBuildingCategorys}
                setOptions={setBuildingCategoryOptions}
                options={buildingCategoryOptions}
                h1Title={"Category"}
                placeholder={"Set Category"}
                value={buildingCategory}
                valueOptions={buildingCategoryOptions}
              />
              <CustomDropDown
                tableName={"buildingAll"}
                setSingular={setBuildingType}
                setPlural={setBuildingTypes}
                setOptions={setBuildingTypeOptions}
                options={buildingTypeOptions}
                h1Title={"Type"}
                placeholder={"Set Type"}
                value={buildingType}
                valueOptions={buildingTypeOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showLayout}>
              Building Layout{" "}
              {isLayoutActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              numberItem={[buildingFloor, buildingEnterance, buildingWindow]}
              setNumberItem={[
                setBuildingFloor,
                setBuildingEnterance,
                setBuildingWindow,
              ]}
              numberMax={[10, 10, 10]}
              numberMin={[1, 1, 0]}
            />
          </div>
          <div className={isLayoutActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputNumber
                h1Title={"Floors"}
                setSingular={setBuildingFloor}
                value={buildingFloor}
                placeholder={"Set Count"}
                maxNumber={100}
                minNumber={0}
              />
              <CustomInputNumber
                h1Title={"Enterances"}
                setSingular={setBuildingEnterance}
                value={buildingEnterance}
                placeholder={"Set Count"}
                maxNumber={100}
                minNumber={0}
              />
              <CustomInputNumber
                h1Title={"Windows"}
                setSingular={setBuildingWindow}
                value={buildingWindow}
                placeholder={"Set Count"}
                maxNumber={100}
                minNumber={0}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showDetails}>
              Building Features{" "}
              {isDetailActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[buildingStyle, buildingColor, buildingSound]}
              setValue={[setBuildingStyle, setBuildingColor, setBuildingSound]}
              valueOptions={[
                buildingStyleOptions,
                buildingColorOptions,
                buildingSoundOptions,
              ]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                h1Title={"Style"}
                tableName={"buildingStyle"}
                setSingular={setBuildingStyle}
                setPlural={setBuildingStyles}
                setOptions={setBuildingStyleOptions}
                placeholder={"Set Style"}
                value={buildingStyle}
                valueOptions={buildingStyleOptions}
              />
              <CustomDropDown
                h1Title={"Color"}
                tableName={"buildingColors"}
                setSingular={setBuildingColor}
                setPlural={setBuildingColors}
                setOptions={setBuildingColorOptions}
                placeholder={"Set Color"}
                value={buildingColor}
                valueOptions={buildingColorOptions}
              />
              <CustomDropDown
                h1Title={"Sound"}
                tableName={"buildingSound"}
                setSingular={setBuildingSound}
                setPlural={setBuildingSounds}
                setOptions={setBuildingSoundOptions}
                placeholder={"Set Sound"}
                value={buildingSound}
                valueOptions={buildingSoundOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showRooms}>
              Rooms{" "}
              {isRoomActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[selectedRoomType]}
              setSelectedValue={[setSelectedRoomType]}
              selectedValueOptions={[roomTypeOptions]}
            />
          </div>
          <div className={isRoomActive ? style.subsection : style.hidden}>
            <div>
              {/* <CustomInputNumber
                setSingular={setBuildingRoomCount}
                value={buildingRoomCount}
                placeholder={"Set Count"}
                maxNumber={100}
                minNumber={0}
              /> */}
              <CustomDataTable
                tableName={"buildingRoomsAll"}
                setSingular={setRoomType}
                setPlural={setRoomTypes}
                setOptions={setRoomTypeOptions}
                h1Title={"Room Type"}
                dialogHeader={"Type"}
                selectedItem={selectedRoomType}
                setSelectedItem={setSelectedRoomType}
                list={roomTypeList}
                setList={setRoomTypeList}
                valueOptions={roomTypeOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showNpcs}>
              NPCs{" "}
              {isNpcActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[selectedNpc]}
              setSelectedValue={[setSelectedNpc]}
              selectedValueOptions={[npcOptions]}
            />
          </div>
          <div className={isNpcActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"DBnpc"}
                setSingular={setNpc}
                setPlural={setNpcs}
                setOptions={setNpcOptions}
                h1Title={"NPCs"}
                dialogHeader={"NPCs"}
                selectedItem={selectedNpc}
                setSelectedItem={setSelectedNpc}
                list={npcList}
                setList={setNpcList}
                valueOptions={npcOptions}
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
              selectedValue={[selectedItem]}
              setSelectedValue={[setSelectedItem]}
              selectedValueOptions={[itemOptions]}
            />
          </div>
          <div className={isItemActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"DBitem"}
                setSingular={setItem}
                setPlural={setItems}
                setOptions={setItemOptions}
                h1Title={"Items"}
                dialogHeader={"Items"}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                list={itemList}
                setList={setItemList}
                valueOptions={itemOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
          <NameDisplay value={buildingName} setNewValue={setBuildingName} />
          <h2>
            Category{" "}
            <SingleDisplayText
              value={buildingCategory}
              setNewValue={setBuildingCategory}
            />
          </h2>
          <h2>
            Type{" "}
            <SingleDisplayText
              value={buildingType}
              setNewValue={setBuildingType}
            />
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Floors{" "}
            <SingleDisplayNumber
              value={buildingFloor}
              setNewValue={setBuildingFloor}
            />
          </h2>
          <h2>
            Building Enterances{" "}
            <SingleDisplayNumber
              value={buildingEnterance}
              setNewValue={setBuildingEnterance}
            />
          </h2>
          <h2>
            Building Windows{" "}
            <SingleDisplayNumber
              value={buildingWindow}
              setNewValue={setBuildingWindow}
            />
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Style{" "}
            <SingleDisplayText
              value={buildingStyle}
              setNewValue={setBuildingStyle}
            />
          </h2>
          <h2>
            Building Color{" "}
            <SingleDisplayText
              value={buildingColor}
              setNewValue={setBuildingColor}
            />
          </h2>
          <h2>
            Building Ambiance{" "}
            <SingleDisplayText
              value={buildingSound}
              setNewValue={setBuildingSound}
            />
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            {/* Room Count{" "}
            <SingleDisplayNumber
              value={buildingRoomCount}
              setNewValue={setBuildingRoomCount}
            /> */}
          </h2>
          <h2>
            Specific Rooms{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedRoomType}
                list={roomTypeList}
                setList={setRoomTypeList}
              />
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            NPCs{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedNpc} />
            </span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Items{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedItem} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
