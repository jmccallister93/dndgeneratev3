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
  const [selectedBuildingRoom, setSelectedBuildingRoom] = useState(null);
  const [dialogVisibleBuildingRoom, setDialogVisibleBuildingRoom] =
    useState(false);

  const [roomType, setRoomType] = useState("");
  const [roomTypes, setRoomTypes] = useState("");
  const [roomTypeOptions, setRoomTypeOptions] = useState("");
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [dialogVisibleRoomType, setDialogVisibleRoomType] = useState(false);
  const [roomTypeList, setRoomTypeList] = useState([]);

  const [roomCount, setRoomCount] = useState("");

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [dialogVisibleItem, setDialogVisibleItem] = useState(false);
  const [itemList, setItemList] = useState([]);
//   const [itemDisplay, setItemDisplay] = useState();


  const [housingOptions, setHousingOptions] = useState("");
  const [tradeOptions, setTradeOptions] = useState("");
  const [religiousOptions, setReligiousOptions] = useState("");
  const [farmOptions, setFarmOptions] = useState("");
  const [recreationalOptions, setRecreationalOptions] = useState("");
  const [educationOptions, setEducationOptions] = useState("");
  const [militaryOptions, setMilitaryOptions] = useState("");
  const [institutionalOptions, setInstitutionalOptions] = useState("");
  const [mineOptions, setMineOptions] = useState("");
  const [agricultureOptions, setAgricultureOptions] = useState("");

  //Get Data
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select()
        .order("id");

      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(
          dataName.map((r) => ({ name: r.name, value: r.value, type: r.type }))
        );
      }
    };
    fetchData();
  };
  useEffect(() => {
    getData(
      "buildingCategory",
      setBuildingCategory,
      setBuildingCategorys,
      setBuildingCategoryOptions
    );
    getData(
      "buildingAll",
      setBuildingType,
      setBuildingTypes,
      setBuildingTypeOptions
    );
    getData(
      "buildingColors",
      setBuildingColor,
      setBuildingColors,
      setBuildingColorOptions
    );
    getData(
      "buildingSmell",
      setBuildingSmell,
      setBuildingSmells,
      setBuildingSmellOptions
    );
    getData(
      "buildingSound",
      setBuildingSound,
      setBuildingSounds,
      setBuildingSoundOptions
    );
    getData(
      "buildingStyle",
      setBuildingStyle,
      setBuildingStyles,
      setBuildingStyleOptions
    );
    getData("buildingRoomsAll", setRoomType, setRoomTypes, setRoomTypeOptions);
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
  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showLayout = (e) => {
    setIsLayoutActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
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
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //InputNumber
  const customInputNumber = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputNumber
        value={value}
        onChange={change}
        placeholder={placeholder}
        showButtons
        buttonLayout="stacked"
        decrementButtonClassName="p-button-secondary"
        incrementButtonClassName="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        minFractionDigits={0}
        maxFractionDigits={2}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //DropDowns
  const customDrop = (title, value, options, change, placeholder, click) => (
    <div className={style.dropContainer}>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //Building Name
  const onBuildingNameChange = (e) => {
    setBuildingName(e.target.value);
  };
  const onRandomBuildingName = (e) => {};
  const nameText = customInputText(
    "Building Name",
    buildingName,
    onBuildingNameChange,
    "Set Name",
    onRandomBuildingName
  );
  //BuildingCategory
  const onRandomBuildingCategory = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingCategory(buildingCategoryOptions[r].name);
  };
  const onBuildingCategoryChange = (e) => {
    setBuildingCategory(e.value);
  };
  const buildingCategoryDrop = customDrop(
    "Category",
    buildingCategory,
    buildingCategoryOptions,
    onBuildingCategoryChange,
    "Choose Category",
    onRandomBuildingCategory
  );
  //BuildingType
  const openDialogBuildingType = () => {
    setDialogVisibleBuildingType(true);
  };
  const closeDialogBuildingType = () => {
    setDialogVisibleBuildingType(false);
    setBuildingType(selectedBuildingType.name);
  };
  const dialogFooterBuildingType = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogBuildingType} />
    );
  };

  useEffect(() => {
    setBuildingType("");

    // setBuildingList(buildingTypeOptions);
    for (let i = 0; buildingTypeOptions.length > i; i++) {
      if (buildingCategory === "Housing") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Housing")
        );
      } else if (buildingCategory === "Trade") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Trade")
        );
      } else if (buildingCategory === "Religious") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Religious")
        );
      } else if (buildingCategory === "Farm") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Farm")
        );
      } else if (buildingCategory === "Recreation") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Recreation")
        );
      } else if (buildingCategory === "Education") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Education")
        );
      } else if (buildingCategory === "Military") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Military")
        );
      } else if (buildingCategory === "Institutional") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Institutional")
        );
      } else if (buildingCategory === "Mine") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Mine")
        );
      } else if (buildingCategory === "Agriculture") {
        setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Agriculture")
        );
      } else if (buildingCategory === "Any") {
        setBuildingList(buildingTypeOptions);
      }
    }
  }, [buildingCategory]);

  const onRandomBuildingType = () => {
    if (buildingCategory) {
      const max = buildingList.length - 1;
      let r = Math.round(Math.random() * (max - 0));
      setBuildingType(buildingList[r].name);
    }
  };
  const randomBuildingTypeBtn = (
    <Button onClick={onRandomBuildingType} className={style.btnName}>
      Random
    </Button>
  );

  const buildingTypeDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Building Type</h2>
      {buildingCategory === "" ? (
        "Set Category"
      ) : (
        <>
          <Button
            onClick={openDialogBuildingType}
            className={style.btnAddRemove}
          >
            Add / Remove
          </Button>
          {randomBuildingTypeBtn}
        </>
      )}

      <Dialog
        header="Building Type"
        visible={dialogVisibleBuildingType}
        maximizable
        modal
        onHide={closeDialogBuildingType}
        footer={dialogFooterBuildingType}
      >
        <DataTable
          value={buildingList}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={selectedBuildingType}
          onSelectionChange={(e) => {
            setSelectedBuildingType(e.value);
          }}
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
            selectionMode="single"
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
          <Column
            field="type"
            header="Type"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  //BuildingStyle
  const onRandomBuildingStyle = (e) => {
    let max = buildingStyleOptions.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    setBuildingStyle(buildingStyleOptions[r].name);
  };
  const onBuildingStyleChange = (e) => {
    setBuildingStyle(e.value);
  };
  const buildingStyleDrop = customDrop(
    "Style",
    buildingStyle,
    buildingStyleOptions,
    onBuildingStyleChange,
    "Choose Style",
    onRandomBuildingStyle
  );
  //BuildingColor
  const onRandomBuildingColor = (e) => {
    let max = buildingColorOptions.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    setBuildingColor(buildingColorOptions[r].name);
  };
  const onBuildingColorChange = (e) => {
    setBuildingColor(e.value);
  };
  const buildingColorDrop = customDrop(
    "Color",
    buildingColor,
    buildingColorOptions,
    onBuildingColorChange,
    "Choose Color",
    onRandomBuildingColor
  );
  //BuildingSound
  const onRandomBuildingSound = (e) => {
    let max = buildingSoundOptions.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    setBuildingSound(buildingSoundOptions[r].name);
  };
  const onBuildingSoundChange = (e) => {
    setBuildingSound(e.value);
  };
  const buildingSoundDrop = customDrop(
    "Sound",
    buildingSound,
    buildingSoundOptions,
    onBuildingSoundChange,
    "Choose Sound",
    onRandomBuildingSound
  );
  //Building Floors
  const onBuildingFloorChange = (e) => {
    setBuildingFloor(e.value);
  };
  const onRandomBuildingFloor = (e) => {
    let r = Math.round(Math.random() * (5 - 1));
    setBuildingFloor(r);
  };
  const floorNumber = customInputNumber(
    "Building Floors",
    buildingFloor,
    onBuildingFloorChange,
    "Set Floors",
    onRandomBuildingFloor
  );
  //Building Enterances
  const onBuildingEnteranceChange = (e) => {
    setBuildingEnterance(e.value);
  };
  const onRandomBuildingEnterance = (e) => {
    let r = Math.round(Math.random() * (10 - 1));
    setBuildingEnterance(r);
  };
  const enteranceNumber = customInputNumber(
    "Building Enterances",
    buildingEnterance,
    onBuildingEnteranceChange,
    "Set Enterances",
    onRandomBuildingEnterance
  );
  //Building Windows
  const onBuildingWindowChange = (e) => {
    setBuildingWindow(e.value);
  };
  const onRandomBuildingWindow = (e) => {
    let r = Math.round(Math.random() * (20 - 0));
    setBuildingWindow(r);
  };
  const windowNumber = customInputNumber(
    "Building Windows",
    buildingWindow,
    onBuildingWindowChange,
    "Set Windows",
    onRandomBuildingWindow
  );
  //Room Count
  const onBuildingRoomChange = (e) => {
    setBuildingRoom(e.value);
  };
  const onRandomBuildingRoom = (e) => {
    let r = Math.round(Math.random() * (10 - 1));
    setBuildingRoom(r);
  };
  const roomNumber = customInputNumber(
    "Room Count",
    buildingRoom,
    onBuildingRoomChange,
    "Set Count",
    onRandomBuildingRoom
  );
  useEffect(() => {
    for (let i = 0; buildingRoom > i; i++) {
      setRoomCount(i);
    }
  }, [buildingRoom]);

  //Room Type
  useEffect(() => {
    setSelectedRoomType(roomTypeList);
  }, [roomTypeList]);
  const openDialogRoomType = () => {
    setDialogVisibleRoomType(true);
  };
  const closeDialogRoomType = () => {
    setDialogVisibleRoomType(false);
    for (let i = 0; i < selectedRoomType.length; i++) {
      if (roomTypeList.includes(selectedRoomType[i])) {
      } else {
        setRoomTypeList((saveArray) => [...saveArray, selectedRoomType[i]]);
      }
    }
  };
  const dialogFooterRoomType = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogRoomType} />
    );
  };
  const onRandomRoomType = (e) => {
    const max = roomTypeOptions.length - 1;
    let r = Math.round(Math.random() * (max - 0));
    if (roomTypeList.includes(roomTypeOptions[r])) {
    } else {
      setRoomTypeList((saveArray) => [...saveArray, roomTypeOptions[r]]);
    }
  };
  const randomRoomTypeBtn = (
    <Button onClick={onRandomRoomType} className={style.btnName}>
      Random
    </Button>
  );
  const roomTypeDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Specific Rooms</h2>
      <>
        <Button onClick={openDialogRoomType} className={style.btnAddRemove}>
          Add / Remove
        </Button>
        {randomRoomTypeBtn}
      </>
      <Dialog
        header="Specifc Rooms"
        visible={dialogVisibleRoomType}
        maximizable
        modal
        onHide={closeDialogRoomType}
        footer={dialogFooterRoomType}
      >
        <DataTable
          value={roomTypeOptions}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={selectedRoomType}
          onSelectionChange={(e) => {
            setSelectedRoomType(e.value);
          }}
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
  const roomTypeDisplay = roomTypeList.map((i) => {
    return <h4>{`${i.name},`}</h4>;
  });

  //NPCs

  //Items
  const openDialogItem = (e) => {
    setDialogVisibleItem(true);
  };
  const closeDialogItem = () => {
    setDialogVisibleItem(false);
    for (let i = 0; i < selectedItem.length; i++) {
      if (itemList.includes(selectedItem[i])) {
      } else {
        setItemList((saveArray) => [...saveArray, selectedItem[i]]);
      }
    }
  };
  const dialogFooterItem = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialogItem} />;
  };

    useEffect(() => {
    setItemOptions(
        
    );
  }, [<Items/>]);

  const onRandomItem = (e) => {
    // const max = itemOptions.length - 1;
    // let r = Math.round(Math.random() * (max - 0));
    // if (itemList.includes(itemOptions[r])) {
    // } else {
    //   setItemList((saveArray) => [...saveArray, itemOptions[r]]);
    // }
    console.log(itemOptions)
    // setItemList([itemOptions[23].name])
  };
  const randomItemBtn = (
    <Button onClick={onRandomItem} className={style.btnName}>
      Random
    </Button>
  );


const itemDisplay = 
    itemList.map((i) => {
      return <h4>{`${i.name},`}</h4>;
    });

  //Buttons
  const onGenerate = (e) => {
    if (buildingCategory === "") {
      onRandomBuildingCategory();
    }
    if (buildingColor === "") {
      onRandomBuildingColor();
    }
    if (buildingName === "") {
      onRandomBuildingName();
    }
    if (buildingEnterance === "") {
      onRandomBuildingEnterance();
    }
    if (buildingRoom === "") {
      onRandomBuildingRoom();
    }
    if (buildingSound === "") {
      onRandomBuildingSound();
    }
    if (buildingStyle === "") {
      onRandomBuildingStyle();
    }
    if (buildingWindow === "") {
      onRandomBuildingWindow();
    }
    if (roomType === "") {
      let r = Math.round(Math.random() * (2 - 0));
      if (r === 1) {
        onRandomRoomType();
      }
    }
    if (buildingFloor === "") {
      onRandomBuildingFloor();
    }

    if (buildingType === "") {
      setTimeout(() => {
        onRandomBuildingType();
      }, 100);
    }
  };

  const onClear = (e) => {
    setBuildingName("");
    setBuildingCategory("");
    setBuildingType("");
    setBuildingColor("");
    setBuildingEnterance("");
    setBuildingRoom("");
    setBuildingSmell("");
    setBuildingSound("");
    setBuildingStyle("");
    setBuildingWindow("");
    setBuildingRoom("");
    setBuildingFloor("");
    setRoomType("");
    setBuildingList("");
    setRoomTypeList([]);
    setItemList([]);
    setSelectedBuildingColor("");
    setSelectedBuildingRoom("");
    setSelectedBuildingSmell("");
    setSelectedBuildingSound("");
    setSelectedBuildingStyle("");
    setSelectedBuildingType("");
    setSelectedRoomType("");
    setSelectedItem("");
    // setNpcList([])
    // setSelectedNpc("")
  };

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={style.btnWrapper}>
            <button onClick={onGenerate} className={style.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Building Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            {nameText}
            {buildingCategoryDrop}
            {buildingTypeDialog}
          </div>
          <h1 className={style.subHeader} onClick={showLayout}>
            Building Layout
          </h1>
          <div className={isLayoutActive ? style.subsection : style.hidden}>
            {floorNumber}
            {enteranceNumber}
            {windowNumber}
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Building Features
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            {buildingStyleDrop}
            {buildingColorDrop}
            {buildingSoundDrop}
          </div>
          <h1 className={style.subHeader} onClick={showRooms}>
            Rooms
          </h1>
          <div className={isRoomActive ? style.subsection : style.hidden}>
            {roomNumber}
            {roomTypeDialog}
          </div>
          <h1 className={style.subHeader} onClick={showNpcs}>
            NPCs
          </h1>
          <div className={isNpcActive ? style.subsection : style.hidden}>
            <Npcs/>
          </div>
          <h1 className={style.subHeader} onClick={showItems}>
            Items
          </h1>
          <div className={isItemActive ? style.subsection : style.hidden}>
            <Items
              openDialogItem={openDialogItem}
              //   randomItemBtn={randomItemBtn}
              dialogVisibleItem={dialogVisibleItem}
              closeDialogItem={closeDialogItem}
              dialogFooterItem={dialogFooterItem}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              header={header}
              setItemLsit={setItemList}
              randomItemBtn={randomItemBtn}
              itemOptions={itemOptions}
              //   onRandomItem={onRandomItem}
            ></Items>
          </div>
        </div>
        {/* Main Display */}
        <div className={style.display}>
          <h1>{buildingName}</h1>
          <h2>
            Category{" "}
            <span className={style.minorText2}>{buildingCategory}</span>
          </h2>
          <h2>
            Type <span className={style.minorText2}>{buildingType}</span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Floors{" "}
            <span className={style.minorText2}>{buildingFloor}</span>
          </h2>
          <h2>
            Building Enterances{" "}
            <span className={style.minorText2}>{buildingEnterance}</span>
          </h2>
          <h2>
            Building Windows{" "}
            <span className={style.minorText2}>{buildingWindow}</span>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Building Style{" "}
            <span className={style.minorText2}>{buildingStyle}</span>
          </h2>
          <h2>
            Building Color{" "}
            <span className={style.minorText2}>{buildingColor}</span>
          </h2>
          <h2>
            Building Ambiance{" "}
            <span className={style.minorText2}>{buildingSound}</span>
          </h2>

          <hr className={style.lineBreak} />
          <h2>
            Room Count <span className={style.minorText2}>{buildingRoom}</span>
          </h2>
          <h2>
            Specific Rooms{" "}
            <div className={style.detesContainer}>{roomTypeDisplay}</div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            NPCs <div className={style.detesContainer}>{}</div>
          </h2>
          <hr className={style.lineBreak} />
          <h2>
            Items <div className={style.detesContainer}>{itemDisplay}</div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
